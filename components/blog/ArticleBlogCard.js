import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import Link from 'next/link';

export default function CategoriesPosts(props) {
    // console.log(props)
    let getallposts = props.blogData
    const items = getallposts.data.category.posts.nodes;
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    function Items({ currentItems }) {
        return (
            <div className="items">
                {currentItems && currentItems.map((item) => (
                    <div className="article-blog-card" key={item.slug}>
                        <div className="row">
                            <div className="col-lg-5">
                                {item.featuredImage !== null ?
                                <>
                                    <Link href={`/${item.slug}`}>
                                        <img src={item.featuredImage.node.sourceUrl} alt={item.title} />
                                    </Link>
                                </>
                                :
                                <>
                                    <Link href={`/${item.slug}`}>
                                        <div className="emptyimg">
                                            <i className="fa fa-image"></i>
                                        </div>
                                    </Link>
                                </>
                                }
                            </div>
                            <div className="col-lg-7">
                                <Link href={`/blog/${item.slug}`}>
                                    <h5>
                                        <div dangerouslySetInnerHTML={{ __html: `${item.title}` }}></div>
                                    </h5>
                                </Link>
                                <div dangerouslySetInnerHTML={{ __html: `${item.excerpt.substring(0, 150)}...` }}></div>
                                <p className="mt-3 article-blog-card-date">{ (new Date(item.date)).toLocaleDateString(undefined, options) }</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        );
    }

    function PaginatedItems({ itemsPerPage }) {
        // We start with an empty list of items.
        const [currentItems, setCurrentItems] = useState(null);
        const [pageCount, setPageCount] = useState(0);
        // Here we use item offsets; we could also use page offsets
        // following the API or data you're working with.
        const [itemOffset, setItemOffset] = useState(0);

        useEffect(() => {
            // Fetch items from another resources.
            const endOffset = itemOffset + itemsPerPage;
            // console.log(`Loading items from ${itemOffset} to ${endOffset}`);
            setCurrentItems(items.slice(itemOffset, endOffset));
            setPageCount(Math.ceil(items.length / itemsPerPage));
        }, [itemOffset, itemsPerPage]);

        // Invoke when user click to request another page.
        const handlePageClick = (event) => {
            const newOffset = event.selected * itemsPerPage % items.length;
            // console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
            setItemOffset(newOffset);
        };

        return (
            <>
                <Items currentItems={currentItems} />
                <ReactPaginate
                    nextLabel=" >"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={3}
                    marginPagesDisplayed={2}
                    pageCount={pageCount}
                    previousLabel="< "
                    pageClassName="page-item"
                    pageLinkClassName="page-link"
                    previousClassName="page-item"
                    previousLinkClassName="page-link"
                    nextClassName="page-item"
                    nextLinkClassName="page-link"
                    breakLabel="..."
                    breakClassName="page-item"
                    breakLinkClassName="page-link"
                    containerClassName="pagination"
                    activeClassName="active"
                    renderOnZeroPageCount={null}
                />
            </>
        );
    }

    return (
        <PaginatedItems itemsPerPage={10} />
    )
}
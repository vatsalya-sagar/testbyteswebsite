import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import Image from "next/image";
import Link from 'next/link';
import { BASEPATH } from "../config";

// Main component -------------------------------
export default function AllBlogPostsList(props) {
    const slugname = props.categoryslug;
    // console.log(props.categoryslug);

    const [count, setCount] = useState(0);
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const [headerinfo, setHeaderinfo] = useState([0]);
    let numberofpages = headerinfo['x-wp-totalpages'];

    useEffect(() => {
        setCount(0);
        setPosts([]);
        setPage(1);
        setLoading(true);
        getPost();
    }, [props.categoryslug, page]);
    // props.categoryslug

    const handleClickcustompaginate = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const getPost = (page = 1) => {
        // axios.get(`${BASEPATH}wp-json/wp/v2/posts?page=${page}&orderby=date`)
        axios.get(`${BASEPATH}wp-json/wp/v2/posts?category_slug=${slugname}&page=${page}`)
            .then(response => {
                setPosts(response.data);
                setLoading(false);
                setHeaderinfo(response.headers);
            });
    }

    const handlePageClick = (e) => {
        // console.log(e.selected);
        setLoading(true);
        // setPage(e.selected + 1)
        getPost(e.selected + 1);
    }

    const genPosts = () => {
        const allPost = [];
        posts.map(post => {
            allPost.push(<Post key={post.id} {...post} />);
        });
        return allPost;
    }

    const allPost = genPosts();

    return (
        <div className='mainpostslist'>
            <div className='mainpostslistrow row'>
                {loading ? <Loader /> : allPost}
            </div>

            <div className='custompaginate'>
                <div className='paginate' onClick={handleClickcustompaginate}>
                    <ReactPaginate
                        previousLabel={"<"}
                        nextLabel={">"}
                        breakLabel={"..."}
                        breakClassName={"break-me"}
                        pageCount={numberofpages}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={5}
                        onPageChange={handlePageClick}
                        containerClassName={"pagination"}
                        subContainerClassName={"pages pagination"}
                        activeClassName={"active"}
                    />
                </div>
            </div>
        </div>
    )
}



const Post = props => {

    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return (
        <div className="items">
            <div className="article-blog-card" key={props.id}>
                <div className="row">
                    <div className="col-lg-5">
                        {props.fimg_url !== null ?
                            <>
                                <Link href={`/${props.slug}`}>
                                    <img src={props.yoast_head_json?.og_image[0].url} alt={props.title.rendered} />
                                </Link>
                            </>
                            :
                            <>
                                <Link href={`/${props.slug}`}>
                                    <div className="emptyimg">
                                        <i className="fa fa-image"></i>
                                    </div>
                                </Link>
                            </>
                        }
                    </div>
                    <div className="col-lg-7">
                        <Link href={`/blog/${props.slug}`}>
                            <h5>
                                <div dangerouslySetInnerHTML={{ __html: `${props.title.rendered}` }}></div>
                            </h5>
                        </Link>
                        <div dangerouslySetInnerHTML={{ __html: `${props.excerpt.rendered.substring(0, 150)}...` }}></div>
                        <p className="mt-3 article-blog-card-date">{(new Date(props.date)).toLocaleDateString(undefined, options)}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

// Loader component -------------------------------
const Loader = props => {

    return (
        <div className='postlistloader'>
            Loading...
            <i className="fas fa-sync-alt fa-spin"></i>
        </div>
    )
}
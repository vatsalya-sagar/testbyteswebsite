import React, {useState, useEffect} from "react";
import Head from "next/head";
import Link from "next/link";
import BlogRightSidebar from "../../components/blog/BlogRightSidebar";
import BlogLeftSidebar from "../../components/blog/BlogLeftSidebar";
import BlogRecentPostsContent from "../../components/blog/BlogRecentPostsContent";
import ArticleBlogCard from "../../components/blog/ArticleBlogCard";
import dateFormat from 'dateformat';
import AllBlogPostsList from '../../components/categoriesblogpostlist';
import { BASEPATH } from "../../config";

export default function CategoryPage({categorypagedata, recentblogsdata}) {

    console.log(categorypagedata);  

    return (
        <>
            <Head>
                <title>{categorypagedata?.data?.category?.name}</title>                
                <meta name="robots" content="index, follow" />
                <meta name="description" content={`${categorypagedata?.data?.category.name} `} />
                <link rel="canonical" href={`https://www.testbytes.net/category/${categorypagedata?.data?.category?.slug}`} />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content={categorypagedata?.data?.category?.name} />
                <meta property="og:description" content={`${categorypagedata.data.category.name} Mobile App Development Archives`} />
                <meta property="og:url" content={`https://www.testbytes.net/category/${categorypagedata?.data?.category?.slug}`} />
                <meta property="og:site_name" content="Testbytes" />
                <meta name="twitter:card" content="summary" />
            </Head>

            <main id="cx-blog-main">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-3">
                            <BlogLeftSidebar blogCount={categorypagedata}/>
                        </div>
                        <div className="col-lg-6 mb-5">
                            <div className="d-flex align-items-center">
                                <h1 className="mb-4 fs-2" dangerouslySetInnerHTML={{ __html: `${categorypagedata?.data?.category?.name}` }}></h1>
                                {/* <span className="badgenormal ms-auto fw-normal">{categorypagedata.data.category.count} posts</span> */}
                                <span className="ms-auto fw-normal" style={{border: `solid 1px #ec0203`, padding: `8px 20px`, borderRadius: `50px`}}>{categorypagedata?.data?.category?.count} posts</span>
                            </div>
                            {/* <ArticleBlogCard blogData={categorypagedata} /> */}
                            <AllBlogPostsList categoryslug={categorypagedata.data.category.slug}  /> 
                        </div>
                        <div className="col-lg-3">
                            <BlogRightSidebar sidebarrecentdata={recentblogsdata} />
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export async function getStaticPaths() {
    const postsres = await fetch(`${BASEPATH}graphql`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            query: `
            query MyQuery2 {
              categories(first: 5) {
                nodes {
                  count
                  name
                  slug
                }
              }
            }
            `
        })
    });
    const categoryposts = await postsres.json(); 
    const paths = categoryposts.data.categories.nodes.map((list) => ({
        params: { category: list.slug },
    }));
    return {
        paths,
        // fallback: 'blocking',
        fallback: false
    };
}

export async function getStaticProps({ params }) {
    // category data
    const catres = await fetch(`${BASEPATH}graphql`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            query: `
            query NewQuery {
                category(idType: SLUG, id: "${params.category}") {
                  count
                  name
                  slug
                  posts {
                    nodes {
                      title
                      slug
                      excerpt
                      featuredImage {
                        node {
                          sourceUrl
                        }
                      }
                    }
                  }
                }
              }
          `
        })
    });

    const categorypagedata = await catres.json(); 

    // Recent blogs
    const recentblogsres = await fetch(`${BASEPATH}graphql`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            query: `
            query MyQuery2 {
              posts(first: 5) {
                nodes {
                  date
                  slug
                  title
                  featuredImage {
                    node {
                      sourceUrl
                    }
                  }
                }
              }
            }
          `
        })
    });
    const recentblogsdata = await recentblogsres.json();

    return {
        props: {
            categorypagedata,
            recentblogsdata,
        },
        revalidate: 10,
    }
}

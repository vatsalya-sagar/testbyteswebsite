import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

export default function BlogRecentPostsContent(props) {
    let recentpostsdata = props.recentblogsdata;
    const recentpostsdataposts = recentpostsdata.data.posts.nodes;
    return (
        <>
            <div className="blog-centercontents">
                <h4 className="mb-3 heading-with-gradient">
                    <span>Recent Blogs</span>
                </h4>
                <Splide
                    options={{
                        autoplay: false,
                        interval: 5000,
                        perPage: 1,
                        autoHeight: false,
                        breakpoints: {
                            991: {
                                perPage: 1,
                            },
                            767: {
                                perPage: 1,
                            },
                            640: {
                                perPage: 1,
                            },
                        },
                        rewind: true,
                    }}
                    aria-label="Recent Posts">
                    {recentpostsdataposts.map((post) => (
                        <SplideSlide key={post.slug}>
                            <div className='recentposts-card'>
                                {post.featuredImage !== null ?
                                    <>
                                        <Link href={`/blog/${post.slug}`}>
                                            <img src={post.featuredImage.node.sourceUrl} alt="TestBytes" />
                                        </Link>
                                    </>
                                    :
                                    <>
                                        <Link href={`/blog/${post.slug}`}>
                                            <h3>{post.title}</h3>
                                        </Link>
                                    </>
                                }
                            </div>
                        </SplideSlide>
                    ))}
                </Splide>
            </div>
        </>
    );
};
import React, { useState, useEffect } from "react";
import Head from 'next/head'
import Link from 'next/link'
import { BASEPATH } from '@/config';
import axios from 'axios';

export default function video({ VideoApiList }) {
    // console.log("VideoApiList", VideoApiList)
    return (
        <>
            <div className='resource-section-design'>
                <div className='container'>
                    <div className='resource-nav-link'>
                        <ul>
                            <li><Link href="/resources/infographics/">Infographics</Link></li>
                            <li><Link href="/resources/video/">Video</Link></li>
                            <li> <Link href="/resources/pdf/">PDF</Link></li>
                            <li><Link href="/resources/downloadable/">Downloadables</Link></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="resource-section-video">
                <div className="container">
                    <div className="row">
                        {
                            VideoApiList.data.resourceCat?.resources.nodes?.map((videolist, index) => (
                                <>
                                {console.log("Video URL" , videolist)}
                                {/* {videolist.resources_Extra_Field.resourceDownloadUrl} */}
                                    {/* {console.log("test", index)} */}
                                    <div className="col-sm-4" key={videolist.uri}>
                                        <div className="video-list">
                                            <img src={videolist.featuredImage.node.guid} alt="" />
                                            {/* {console.log("videolist.title", videolist.title)} */}
                                            <div className="querytest-circle-pt_a2">
                                                <Link className='btn btn-default btn-rounded-video px-4' type="button" data-bs-toggle="modal" data-bs-target={`#${index}`} href="#">Play </Link>
                                                <Link type="button" className='btn btn-default btn-rounded-vodeo px-4' href={videolist.uri}>View </Link>
                                            </div>
                                        </div>
                                    </div>
                                                  {/* {console.log("videolist" , videolist)} */}
                                    {/* pop model */}
                                    <div className="modal fade" id={index} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div className="modal-dialog">
                                            <div className="modal-content">
                                                {/* <div className="modal-header">
                                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div> */}
                                                <div className="modal-body-hight">
                                                   
                    
                                                        <div className="embed-responsive embed-responsive-16by9-video">
                                                            {/* <iframe  className="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowFullScreen></iframe> */}
                                                            <iframe width="570" height="315" src={videolist?.resources_Extra_Field?.resourceDownloadUrl} title="Security Testing : A Must For Your Software" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                                        </div>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            ))

                        }
                    </div>
                </div>
            </div>



        </>
    )
}


export async function getStaticProps() {
    const VideoApi = await fetch(`${BASEPATH}graphql`,
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                query: `
                query VideoAPI {
                    resourceCat(id: "video", idType: SLUG) {
                      count
                      resources {
                        nodes {
                          title
                          uri
                          featuredImage {
                            node {
                              guid
                              title
                            }
                          }
                          resources_Extra_Field {
                            resourceDownloadUrl
                          }
                        }
                      }
                    }
                  }
                `
            })
        });
    const VideoApiList = await VideoApi.json();

    return {
        props: {
            VideoApiList,

        },
        revalidate: 10,
    }
}
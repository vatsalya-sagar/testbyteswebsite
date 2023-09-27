import React, { useState, useEffect } from "react";
import Head from 'next/head'
import Link from 'next/link'
import { BASEPATH } from '@/config';
import axios from 'axios';

export default function PdfCategory({ listOne }) {

    // console.log("resourceAPIList", listOne)



    return (
        <>    <Head>
            <title>Testbytes: Software Testing and QA Consulting Company</title>
            <meta name="description" content="Generated by create next app" />
            <meta name="image" property="og:image" content="/images/TestBytes_OG.jpg" />
            <meta property="og:url" content="https://www.testbytes.net/" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="Testbytes: Software Testing and QA Consulting Company" />
            <meta property="og:description" content="Looking for independent software testing services? Testbytes can offer game testing, mobile app testing, security testing, performance testing, and more." />
        </Head>

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
                         
                         {/* {console.log("List" , AllPdf)} */}
           
                    <div className='row'>
                        <div className="py-3"></div>
                        {listOne.data.resourceCat.resources.nodes.map((itemlist, index) => (
                             
                            <>
                                <div className='col-4 mb-3' key={index}>
                                    <Link href={`/resource/${itemlist.slug}`}>
                                        <div className='card-resource'>
                                            <img src={itemlist.featuredImage.node.guid} alt="" />
                                            <div className=''>
                                                <h4> {itemlist.title}</h4>
                                            </div>
                                        </div>
                                    </Link>
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
    const PdfApi = await fetch(`${BASEPATH}graphql`,
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                query: `
                query PDFAPI {
                    resourceCat(id: "pdf", idType: SLUG) {
                      count
                      resources {
                        nodes {
                          title
                          slug
                          featuredImage {
                            node {
                              guid
                            }
                          }
                        }
                      }
                    }
                  }
                `
            })
        });

        const PdfApiTwo = await fetch(`${BASEPATH}graphql`,
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                query: `
                query PDFAPI {
                    resourceCat(id: "research-paper", idType: SLUG) {
                      count
                      resources {
                        nodes {
                          title
                          slug
                          featuredImage {
                            node {
                              guid
                            }
                          }
                        }
                      }
                    }
                  }
                `
            })
        });
    const listOne = await PdfApi.json();
    const listTwo = await PdfApiTwo.json();

    // const AllPdf = {...listOne, ...listTwo}
    return {
        props: {
            
            listOne,
            // AllPdf,
        },
        revalidate: 10,
    }
}





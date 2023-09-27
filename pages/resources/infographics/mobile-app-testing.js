import React, { useState, useEffect } from "react";
import Head from 'next/head'
import Link from 'next/link'
import { BASEPATH } from '@/config';
import axios from 'axios';
import InnerNavBar from "@/components/InnerNavBar";


export default function MobileApptesting({MobileAppList}) {
  return (
    <>
           {/* Menu Link and Category */}
           <div className='resource-section-design'>
                <div className='container'>
                    <div className='resource-nav-link'>
                        <div className="row">
                          {/* //nav Component  */}
                            <InnerNavBar/>

                            <div className="col-sm-2 text-center">
                                <div className="count-and-list">
                                    <div className="count">217</div>
                                    <h4>Infographics </h4>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

             {/* Mobile App Testing */}
             <div className="cardlist">
                <div className='container'>
                    <div className="row">

                        {MobileAppList.data.resourceCat.resources.nodes.map((item) => (

                            // {item.featuredImage.node.guid}
                            // {item.featuredImage.node.altText}
                            <div className="col-sm-4 mb-4" key={item.slug}>
                                <div className='card-resource'>
                                    <Link href={`/resource/${item.slug}`} >
                                        <div className='card-inner-box'>
                                            {<img src={item.featuredImage.node.guid} alt={item.featuredImage.node.altText} />}
                                            <h4>{item.title}</h4>
                                        </div>

                                    </Link>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>

            </div>


    </>
  )
}


export async function getStaticProps() {
  const MobileAppTest = await fetch(`${BASEPATH}graphql`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: `
        query MobileAppTesting {
          resourceCat(id: "mobile-app-testing", idType: SLUG) {
            count
            resources {
              nodes {
                title
                slug
                featuredImage {
                  node {
                    altText
                    slug
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

  const MobileAppList = await MobileAppTest.json();



  return {
    props: {
      MobileAppList,

    },
    revalidate: 10,
  }
}


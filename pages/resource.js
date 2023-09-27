import React, { useEffect, useState } from "react";
import { BASEPATH } from "../config";
import Link from 'next/link'
import ReactPaginate from "react-paginate";
import AllSpeakersList from "@/components/AllSpeakersList";

import AllResource from "@/components/AllResource";
// import Loader from "@/components/Loader";

    // console.log("resourceAPIList", resourceAPIList)
export default function ResourceDesign({ speakers }) {
  

  return (
    <div className="speakers">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="speaker_title">
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
        </div>
      </div>
      <div className="container w-75 mt-5 mb-5">
        <div className="row mt-5"> 
            <AllResource />
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps({}) {
  try {
    const pagesres = await fetch(`${BASEPATH}graphql`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: `
        query ResourcesDesign {
            resources(first: 5) {
              nodes {
                slug
                title
                uri
                featuredImage {
                  node {
                    altText
                    guid
                  }
                }
              }
            }
          }
              `,
      }),
    });

    const speakers = await pagesres.json();

    return {
      props: {
        speakers,
      },
      revalidate: 10,
    };
  } catch (error) {
    console.error("Error fetching data in getStaticProps:", error);
    return {
      props: {
        speakers: { data: { speakers: { nodes: [] } } }, // Provide empty data in case of an error
      },
      revalidate: 10,
    };
  }
}

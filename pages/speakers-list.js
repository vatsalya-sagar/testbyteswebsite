import React, { useEffect, useState } from "react";
import { BASEPATH } from "../config";
import ReactPaginate from "react-paginate";
import AllSpeakersList from "@/components/AllSpeakersList";
// import Loader from "@/components/Loader";

export default function SpeakersList({ speakers }) {
  

  return (
    <div className="speakers">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="speaker_title">
              <h2 className="text-center">
                Our extraordinary <span>speakers</span> in the past
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="container w-75 mt-5 mb-5">
        <div className="row mt-5"> 
            <AllSpeakersList />
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
          query NewQuery {
              speakers(first: 10) {
                nodes {
                  slug
                  title
                  speakerDetails {
                    profilePhoto {
                      link
                    }
                    linkedinLink
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

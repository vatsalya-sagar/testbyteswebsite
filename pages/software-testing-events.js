import React, { useEffect, useState } from "react";
import { BASEPATH } from "../config";
import ReactPaginate from "react-paginate";
import EventsList from "@/components/EventsList";
import Link from "next/link";
import moment from "moment";
// import Loader from "@/components/Loader";

export default function TestingEvents({ events }) {
  // console.log(events);
  return (
    <>
      <div className="events_list_wrapper">
        <div className="container">
          <div className="filter_wrapper">
            <div className="row">
              <div className="col-md-4">
                <select
                  id="event_country"
                  className="form-select"
                  name="Country"
                >
                  <option value="">Select Country</option>
                  <option value="UK">UK</option>
                  <option value="Austria">Austria</option>
                  <option value="Netherlands">Netherlands</option>
                  <option value="USA">USA</option>
                  <option value="Finland">Finland</option>
                  <option value="France">France</option>
                  <option value="Italy">Italy</option>
                  <option value="Spain">Spain</option>
                  <option value="Sweden">Sweden</option>
                  <option value="India">India</option>
                  <option value="Belarus">Belarus</option>
                  <option value="Portugal">Portugal</option>
                  <option value="Ukraine">Ukraine</option>
                  <option value="Online">Online</option>
                  <option value="Uruguay">Uruguay</option>
                  <option value="Russia">Russia</option>
                  <option value="Montreal">Montreal</option>
                  <option value="South Africa">South Africa</option>
                  <option value="Romania">Romania</option>
                  <option value="Australia">Australia</option>
                  <option value="Alberta">Alberta</option>
                  <option value="Estonia">Estonia</option>
                  <option value="Nevada">Nevada</option>
                  <option value="Hungary">Hungary</option>
                  <option value="Denmark">Denmark</option>
                  <option value="China">China</option>
                  <option value="California">California</option>
                  <option value="Turkey">Turkey</option>
                  <option value="Massachusetts">Massachusetts</option>
                  <option value="Germany">Germany</option>
                  <option value="Ireland">Ireland</option>
                  <option value="Greece">Greece</option>
                  <option value="Poland">Poland</option>
                  <option value="Singapore">Singapore</option>
                  <option value="Malaysia">Malaysia</option>
                  <option value="Netherland">Netherland</option>
                  <option value="Canada">Canada</option>
                  <option value="Malta">Malta</option>
                  <option value="Wales">Wales</option>
                  <option value="Bulgaria">Bulgaria</option>
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="Europe">Europe</option>
                </select>
              </div>
              <div className="col-md-4">
                <select
                  id="event_month"
                  className="form-select"
                  name="event_month"
                >
                  <option value="">Select Month</option>
                  <option value="01">January</option>
                  <option value="02">February</option>
                  <option value="03">March</option>
                  <option value="04">April</option>
                  <option value="05">May</option>
                  <option value="06">June</option>
                  <option value="07">July</option>
                  <option value="08">August</option>
                  <option value="09">September</option>
                  <option value="10">October</option>
                  <option value="11">November</option>
                  <option value="12">December</option>
                </select>
              </div>
              <div className="col-md-4">
                <button
                  type="button"
                  name="filter_btn"
                  className=""
                  id="event_filter_btn"
                  value="Search Events"
                >
                  Search Events
                </button>
              </div>
            </div>
            <div className="row">
              <div className="event_items-wrapper">
                <div className="row">
                  <EventsList />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
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
          events (first: 6){
            nodes {
              slug
              title
              featuredImage {
                node {
                  link
                }
              }
              dateGmt
              status
              link
            }
          }
        }        
              `,
      }),
    });

    const events = await pagesres.json();

    // console.log(events);
    return {
      props: {
        events,
      },
      revalidate: 10,
    };
  } catch (error) {
    console.error("Error fetching data in getStaticProps:", error);
    return {
      props: {
        events: { data: { events: { nodes: [] } } }, // Provide empty data in case of an error
      },
      revalidate: 10,
    };
  }
}

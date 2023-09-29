import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";
import moment from "moment";
import Link from "next/link";

export default function EventsList() {
  const [events, setEvents] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const itemsPerPage = 9;
  const totalPages = Math.ceil(events.length / itemsPerPage);

  useEffect(() => {
    setLoading(true);
    getEvents();
  }, [page]);

  const handleClickCustomPaginate = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const query = `
    query NewQuery {
      events(first: 100) {
        nodes {
          slug
          title
          dateGmt
          newsAndEvent_Extra_Field {
            venue
          }
          featuredImage {
            node {
              link
            }
          } 
          status
          link
        }
      }
    }
  `;

  const apiUrl = "https://testbytesnxtjsbackend.technoallianceindia.com/graphql";

  const getEvents = () => {
    axios
      .post(apiUrl, { query })
      .then((response) => {
        const data = response.data.data.events.nodes;
        // console.log(data)
        setEvents(data);
        setLoading(false);
      })
      .catch((error) => {
        // console.error("GraphQL Error:", error);
        setLoading(false);
      });
  };

  const handlePageClick = (selectedPage) => {
    setPage(selectedPage.selected + 1);
    setLoading(true);
  };

  const renderEvents = () => {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const eventsToDisplay = events.slice(startIndex, endIndex);

    return eventsToDisplay.map((event, index) => (
      <Event key={index} {...event} />
    ));
  };

  const allEvents = renderEvents();

  return (
    <div className="events-list">
      <div className="events-list-row row">
        {loading ? <Loader /> : allEvents}
      </div>
      {events.length > 0 && (
        <div className="custompaginate">
          <div className="paginate" onClick={handleClickCustomPaginate}>
            <ReactPaginate
              previousLabel={"<"}
              nextLabel={">"}
              breakLabel={"..."}
              breakClassName={"break-me"}
              pageCount={totalPages}
              marginPagesDisplayed={2}
              pageRangeDisplayed={4}
              onPageChange={handlePageClick}
              containerClassName={"pagination"}
              subContainerClassName={"pages pagination"}
              activeClassName={"active"}
            />
          </div>
        </div>
      )}
    </div>
  );
}

const Event = (props) => {
  return (
    
    <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12" key={props.slug}>
      <div className="event_item">
        <Link href={`/testing-events/${props.slug}`}>
          <img src={props.featuredImage.node.link} alt={props.title} />
          <div className="ei_text_wrapper">
            <p>{props.title}</p>
            <ul>
              <li>
                {moment(props.dateGmt).format("MMMM DD, YYYY")} |  {props.newsAndEvent_Extra_Field.venue}
                <span>Completed</span>
              </li>
            </ul>
          </div>
        </Link>
      </div>
    </div>
  );
};

const Loader = (props) => {
  return (
    <div className="loader">
      Loading...
      <i className="fas fa-sync-alt fa-spin"></i>
    </div>
  );
};

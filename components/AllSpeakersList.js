import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";
import { BASEPATH } from "../config";

export default function AllSpeakersList() {
  const [speakers, setSpeakers] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const itemsPerPage = 12;
  const totalSpeakers = speakers.length;
  const totalPages = Math.ceil(totalSpeakers / itemsPerPage);

  useEffect(() => {
    setLoading(true);
    getSpeakers();
  }, [page]);

  const handleClickCustomPaginate = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const query = `
    query NewQuery {
      speakers(first: 5) {
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
  `;

  const apiUrl =
    "https://testbytesnxtjsbackend.technoallianceindia.com/graphql"; // Update to your GraphQL endpoint URL

  const getSpeakers = () => {
    axios
      .post(apiUrl, { query })
      .then((response) => {
        const data = response.data.data.speakers.nodes;
        setSpeakers(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("GraphQL Error:", error);
        setLoading(false);
      });
  };

  const handlePageClick = (selectedPage) => {
    setPage(selectedPage.selected + 1);
    setLoading(true);
  };

  const renderSpeakers = () => {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const speakersToDisplay = speakers.slice(startIndex, endIndex);

    return speakersToDisplay.map((speaker, index) => (
      <Speaker key={index} {...speaker} />
    ));
  };

  const allSpeakers = renderSpeakers();

  return (
    <div className="speakers-list">
      <div className="speakers-list-row row">
        {loading ? <Loader /> : allSpeakers}
      </div>
{speakers.length > 0 &&

      <div className="custompaginate">
        <div className="paginate" onClick={handleClickCustomPaginate}>
          <ReactPaginate
            previousLabel={"<"}
            nextLabel={">"}
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={totalPages}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={handlePageClick}
            containerClassName={"pagination"}
            subContainerClassName={"pages pagination"}
            activeClassName={"active"}
            />
        </div>
      </div>
          }
    </div>
  );
}

const Speaker = (props) => {
  return (
    <div className="col-md-3 mb-5">
      <div className="card_inner">
        <div className="card-body pb-4 bg-pink justify-content-center align-items-center">
          <img
            className="card-img-top profile-pic mb-1 mx-auto d-flex position-relative"
            src={props.speakerDetails.profilePhoto.link}
            alt="Card image"
          />
          <h4 className="lh-1 pb-3 card-title text-center">{props.title}</h4>
          <img
            className="linkedin-icon card-img-top mx-auto d-flex"
            src="https://testbytesnxtjsbackend.technoallianceindia.com/wp-content/uploads/2015/08/linkedin-1.jpg"
            alt="Card image"
          />
          <a href={`/speakers/${props.slug}`} className="stretched-link"></a>
        </div>
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

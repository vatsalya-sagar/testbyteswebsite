import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";
import { BASEPATH } from "../config";
import Link from 'next/link'

export default function AllResource() {
  const [speakers, setSpeakers] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const itemsPerPage = 9;
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
  query ResourcesDesign {
    resources(first: 100) {
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
  `;

  const apiUrl =
    "https://testbytesnxtjsbackend.technoallianceindia.com/graphql"; 

  const getSpeakers = () => {
    axios
      .post(apiUrl, { query })
      .then((response) => {
        console.log("response---->" , response)
        const data = response.data.data.resources.nodes;
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

const Speaker = (props) => 
{
  return (
    // <div className="col-md-3 mb-5">
    //   <div className="card_inner">
    //     <div className="card-body pb-4 bg-pink justify-content-center align-items-center">
    //       <img
    //         className="card-img-top profile-pic mb-1 mx-auto d-flex position-relative"
    //         src="https://testbytesnxtjsbackend.technoallianceindia.com/wp-content/uploads/2023/08/app_mobile_img.png"
    //         alt="Card image"
    //       />
    //       <h4 className="lh-1 pb-3 card-title text-center">{props.title}</h4>
          
    //       <a href={`/speakers/${props.slug}`} className="stretched-link"></a>
    //     </div>
    //   </div>
    // </div>




    <div className='col-sm-4 mb-3' >
        {/* {console.log("props" , props)} */}
        {/* {props.featuredImage.node.altText} */}
        {/* {props.uri} */}
    <Link href={props.uri}>
        <div className='card-resource'>
            <img src={props.featuredImage.node.guid} alt= {props.featuredImage.node.altText} />
            <div className=''>
                <h4> {props.title}</h4>
            </div>
        </div>
    </Link>
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

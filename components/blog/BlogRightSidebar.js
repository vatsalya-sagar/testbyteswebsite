import React, { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import dateFormat from "dateformat";
import { BASEPATH } from "../../config";
import ContactForm from "../ContactForm";

export default function BlogRightSidebar(props) {
  const [searchValue, setSearchValue] = useState("");

  // search feature
  const [searchpost, setSearchpost] = useState([]);
  const [searchloading, setSearchLoading] = useState(true);

  // searchHandleSubmit
  const searchHandleSubmit = async (e) => {
    e.preventDefault();
    axios
      .get(
        `${BASEPATH}wp-json/wp/v2/search/?post_type=page&post_type=post&search=${searchValue}&_embed`
      )
      .then((response) => {
        setSearchpost(response.data);
        setSearchLoading(false);
      });
    document
      .querySelector(".searchmodal-popup")
      .classList.add("searchmodal-popup-active");
  };

  // searchmodalClose
  function searchmodalClose() {
    document
      .querySelector(".searchmodal-popup")
      .classList.remove("searchmodal-popup-active");
  }

  // timeline posts
  let recentpostssidebar = props.sidebarrecentdata;

  // console.log(props)
  const recentpostslist = recentpostssidebar.data.posts.nodes;
  let options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return (
    <>
      <div className="blogright-sidebar">
        <Link
          href="https://www.linkedin.com/company/softwaretestingcompany/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://testbytesnxtjsbackend.technoallianceindia.com/wp-content/uploads/2023/09/Linkedin-banner-75k.jpg"
            alt="Testbytes IN website"
            style={{ width: `100%`, height: `auto` }}
          />
        </Link>
        <div className="mt-5 searchcard-sidebar">
          <form onSubmit={searchHandleSubmit}>
            <div className="formsInp">
              <input
                type="text"
                className="form-control"
                placeholder="Start searching here..."
                onChange={(e) => {
                  setSearchValue(e.target.value);
                }}
                required
              />
            </div>
            <div className="searchBtnmain">
              <button type="submit" className="searchBtn">
                <i className="fa fa-search"></i>
              </button>
            </div>
          </form>
        </div>
        <h5 className="mb-3">
          <strong>Recent Posts</strong>
        </h5>
        <div className="timelinecards">
          <ul>
            {recentpostslist.map((post) => (
              <li key={post.slug}>
                <Link href={`/${post.slug}`}>
                  <strong
                    dangerouslySetInnerHTML={{ __html: `${post.title}` }}
                  ></strong>
                </Link>
                <span>{dateFormat(post.date, "mmmm dS, yyyy")}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="contactformsidebar mt-5">
          <h5 className="mb-3">
            <strong>Contact Us</strong>
          </h5>
          <ContactForm />
        </div>
        <div className="fixed_image pt-3 mb-5">
          <Link
            href="/test-cost-calculator/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://testbytesnxtjsbackend.technoallianceindia.com/wp-content/uploads/2023/09/cost-calculator-banner.jpg"
              alt="Testbytes IN website"
              style={{ width: `100%`, height: `auto` }}
            />
          </Link>
        </div>
      </div>

      {/* searchmodal-popup */}
      <div className="searchmodal-popup">
        <div
          onClick={searchmodalClose}
          className="searchmodal-popup-close"
        ></div>
        <div className="searchmodal-popup-inner">
          <div className="containerwrapper">
            <h4>
              Search Results for: <strong>{searchValue}</strong>
            </h4>
            <div className="row">
              {searchloading ? (
                <>
                  <h4>Loading...</h4>
                </>
              ) : (
                <>
                  {searchpost?.map((searchdataful) => (
                    <div className="col-lg-6" key={searchdataful.id}>
                      <div className="searchcard-data">
                        <h3
                          dangerouslySetInnerHTML={{
                            __html: searchdataful.title,
                          }}
                        ></h3>
                        <div
                          dangerouslySetInnerHTML={{
                            __html:
                              searchdataful._embedded.self[0].excerpt.rendered,
                          }}
                        ></div>
                        <Link
                          href={`/${searchdataful._embedded.self[0].slug}`}
                          className="btn btn-primary btn-rounded"
                        >
                          Continue reading
                        </Link>
                      </div>
                    </div>
                  ))}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

import Link from "next/link";
import React from "react";
import { BASEPATH } from "../../config";
import ContactForm from "@/components/ContactForm";

const SingleEvent = ({ eventData, categoriesData }) => {
  // console.log(event.eventData.data.eventBy, "event data");
  // let recieveData = event && event.event.data.speakerBy.speakerDetails;
  // let profilePhoto = event && event.event.data.speakerBy.speakerDetails.profilePhoto;
  //   console.log(profilePhoto);
  // console.log(categories.categoriesData.data.nodes)
  // const [speakerData, setSpeakerData] = useState(second)
  // const categories = categoriesData.data.categories.nodes;
  // console.log(categoriesData.data.categories.nodes);
  const categories = categoriesData?.data.categories.nodes; 
  let eventMain_data = eventData?.data.eventBy;

  const customCategories = [
    "Mobile App Testing",
    "Web App Testing",
    "Game Testing",
    "Automation Testing",
    "Security Testing",
    "Performance Testing",
    "Selenium",
    "Test Management",
    "Usability Testing",
    "Guides and Tutorials",
    "Best Practices",
  ];

  // console.log(customCategories);
  const addedCategories = new Set();

  return (
    <>
      <div className="software_testing_event_inner_page_wrapper">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="category_list">
                <p><strong>Blog Category</strong></p>
                <ul>
                  {categories?.map((category, index) => {
                    // {console.log(category.count)}
                    // Check if the category name is in customCategories
                    if (customCategories.includes(category.name)) {
                      // Check if the category name has already been added
                      if (!addedCategories.has(category.name)) {
                        addedCategories.add(category.name); // Add the category name to the Set
                        return (
                          <li key={index + "category"}>
                            <Link href={category.link || "#"}>
                              {category.name}
                            </Link>
                            {/* <span>{category.count}</span> */}
                          </li>
                        );
                      }
                    }
                    return null; // Exclude categories not in customCategories or duplicates
                  })}
                </ul>
                <p><strong>Services We Offer</strong></p>
                <ul className="category_list">
                  <li>
                    <a href="https://www.testbytes.net/mobile-app-testing/">
                      App Testing
                    </a>
                  </li>
                  <li>
                    <a href="https://www.testbytes.net/web-application-testing/">
                      Web App Testing
                    </a>
                  </li>
                  <li>
                    <a href="https://www.testbytes.net/software-testing-services/game-testing/">
                      Game Testing
                    </a>
                  </li>
                  <li>
                    <a href="https://www.testbytes.net/automation-testing/">
                      Automation Testing
                    </a>
                  </li>
                  <li>
                    <a href="https://www.testbytes.net/load-testing/">
                      Load Testing
                    </a>
                  </li>
                  <li>
                    <a href="https://www.testbytes.net/software-testing-services/security-testing/">
                      Security Testing
                    </a>
                  </li>
                  <li>
                    <a href="https://www.testbytes.net/software-testing-services/software-performance-testing/">
                      Performance Testing
                    </a>
                  </li>
                  <li>
                    <a href="https://www.testbytes.net/hire-a-tester/">
                      Hire a Tester
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-9">
              <div className="event_main_content">
                <h1>{eventMain_data?.title}</h1>
                <div
                  dangerouslySetInnerHTML={{ __html: eventMain_data?.content }}
                ></div>
                <div className="share_icons">
                  <div className="share_icon_item">
                    <a className="facebook_btn" href="#" target="_blank">
                      <span className="">
                        <svg
                          focusable="false"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 32 32"
                        >
                          <path
                            fill="#FFF"
                            d="M17.78 27.5V17.008h3.522l.527-4.09h-4.05v-2.61c0-1.182.33-1.99 2.023-1.99h2.166V4.66c-.375-.05-1.66-.16-3.155-.16-3.123 0-5.26 1.905-5.26 5.405v3.016h-3.53v4.09h3.53V27.5h4.223z"
                          ></path>
                        </svg>
                      </span>
                    </a>
                    <a className="twitter_btn" href="#" target="_blank">
                      <span className="">
                        <svg
                          focusable="false"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 32 32"
                        >
                          <path
                            fill="#FFF"
                            d="M28 8.557a9.913 9.913 0 0 1-2.828.775 4.93 4.93 0 0 0 2.166-2.725 9.738 9.738 0 0 1-3.13 1.194 4.92 4.92 0 0 0-3.593-1.55 4.924 4.924 0 0 0-4.794 6.049c-4.09-.21-7.72-2.17-10.15-5.15a4.942 4.942 0 0 0-.665 2.477c0 1.71.87 3.214 2.19 4.1a4.968 4.968 0 0 1-2.23-.616v.06c0 2.39 1.7 4.38 3.952 4.83-.414.115-.85.174-1.297.174-.318 0-.626-.03-.928-.086a4.935 4.935 0 0 0 4.6 3.42 9.893 9.893 0 0 1-6.114 2.107c-.398 0-.79-.023-1.175-.068a13.953 13.953 0 0 0 7.55 2.213c9.056 0 14.01-7.507 14.01-14.013 0-.213-.005-.426-.015-.637.96-.695 1.795-1.56 2.455-2.55z"
                          ></path>
                        </svg>
                      </span>
                    </a>
                    <a className="email_btn" href="#" target="_blank">
                      <span className="">
                        <svg
                          focusable="false"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 32 32"
                        >
                          <path
                            fill="#FFF"
                            d="M26 21.25v-9s-9.1 6.35-9.984 6.68C15.144 18.616 6 12.25 6 12.25v9c0 1.25.266 1.5 1.5 1.5h17c1.266 0 1.5-.22 1.5-1.5zm-.015-10.765c0-.91-.265-1.235-1.485-1.235h-17c-1.255 0-1.5.39-1.5 1.3l.015.14s9.035 6.22 10 6.56c1.02-.395 9.985-6.7 9.985-6.7l-.015-.065z"
                          ></path>
                        </svg>
                      </span>
                    </a>
                    <a className="share_btn" href="#" target="_blank">
                      <span className="">
                        <svg
                          focusable="false"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 32 32"
                        >
                          <g fill="#FFF">
                            <path d="M14 7h4v18h-4z"></path>
                            <path d="M7 14h18v4H7z"></path>
                          </g>
                        </svg>
                      </span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="event_contact_wrapper">
                <div className="row">
                  <div className="col-md-6">
                    <div className="ec_left">
                      <h3>Talk to Us !</h3>
                      <p>
                        Wish to list an event on the list? We would love to!
                        Tell us about the event and we shall contact you for
                        further details.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="ec_right">
                   <ContactForm/>
                      {/* <form id="form_subt">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            id="Inputname"
                            name="user_name"
                            placeholder="Enter Name"
                            required
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="email"
                            className="form-control"
                            id="InputEmail1"
                            name="user_email"
                            placeholder="Enter Email"
                            required
                          />
                        </div>
                        <div className="form-group">
                          <textarea
                            name="user_message"
                            className="form-control"
                            rows="4"
                            placeholder="Message"
                            required
                          ></textarea>
                        </div>
                        <span id="form_error"></span>
                        <span id="form_success"></span>
                        <div className="form-group _0bmb">
                          <input
                            type="hidden"
                            id="current_page"
                            value="TestCon Moscow 2021 Software Testing Event"
                          />
                          <input type="submit" value="Send" />
                        </div>
                      </form> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleEvent;

export async function getStaticPaths() {
  const eventsRes = await fetch(`${BASEPATH}graphql`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
      query NewQuery {
        events(first: 3) {
          nodes {
            slug
          }
        }
      }
      `,
    }),
  });

  const eventsData = await eventsRes.json();
  const eventPaths = eventsData.data.events.nodes.map((slugLink) => ({
    params: { slug: slugLink.slug },
  }));

  // Use categoriesData for the AnotherQuery response if needed

  return {
    paths: [...eventPaths],
    // fallback: "blocking",
    fallback: false,
    
  };
}

export async function getStaticProps({ params }) {
  // Get page data
  const pagesres = await fetch(`${BASEPATH}graphql`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
          query NewQuery {
            eventBy(slug: "${params.slug}")  {
              content
              title
            }
          }
            `,
    }),
  });
  const categoriesRes = await fetch(`${BASEPATH}graphql`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
      query NewQuery {
        categories(first: 5) {
          nodes {
            categoryId
            link
            name
            slug
          }
        }
      }
      `,
    }),
  });
  const eventData = await pagesres.json();
  const categoriesData = await categoriesRes.json();
  // console.log(categoriesData, "pagedatasdsfsdfsdfsdfsdfsddssd2222222");
  return {
    props: {
      eventData,
      categoriesData,
    },
    revalidate: 10,
  };
}

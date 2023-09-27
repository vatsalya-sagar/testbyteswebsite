import React, { useEffect, useState } from "react";
import Link from "next/link";
import { BASEPATH } from "@/config";
import axios from "axios";

export default function BlogLeftSidebar({}) {
  const [result, setResult] = useState([]);

  useEffect(() => {
    axios({
      url: `${BASEPATH}graphql`,
      method: "post",
      data: {
        query: `
            query NewQuery {
                categories (first:100) {
                  nodes {
                    slug
                    name
                    count
                  }
                }
              }
            `,
      },
    }).then((response) => {
      setResult(response.data.data.categories.nodes);
    });
  }, []);

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
    "Expert Insights",
    "Software Testing Events",
  ];

  // Map each category to its corresponding image source
  const categoryImageMap = {
    "Mobile App Testing":
      "https://testbytesnxtjsbackend.technoallianceindia.com/wp-content/uploads/2023/09/apptesting-img.png",
    "Web App Testing":
      "https://testbytesnxtjsbackend.technoallianceindia.com/wp-content/uploads/2023/09/webapptesting.png",
    "Game Testing":
      "https://testbytesnxtjsbackend.technoallianceindia.com/wp-content/uploads/2023/09/gametesting-img.png",
    "Automation Testing":
      "https://testbytesnxtjsbackend.technoallianceindia.com/wp-content/uploads/2023/09/automation-img.png",
    "Security Testing":
      "https://testbytesnxtjsbackend.technoallianceindia.com/wp-content/uploads/2023/09/securitytesting.png",
    "Performance Testing":
      "https://testbytesnxtjsbackend.technoallianceindia.com/wp-content/uploads/2023/09/performance-testing.png",
    Selenium:
      "https://testbytesnxtjsbackend.technoallianceindia.com/wp-content/uploads/2023/09/miscellaneous.png",
    "Test Management":
      "https://testbytesnxtjsbackend.technoallianceindia.com/wp-content/uploads/2023/09/test-management.png",
    "Usability Testing":
      "https://testbytesnxtjsbackend.technoallianceindia.com/wp-content/uploads/2023/09/usability.png",
    "Guides and Tutorials":
      "https://testbytesnxtjsbackend.technoallianceindia.com/wp-content/uploads/2023/09/Guides-and-tutorials.png",
    "Best Practices":
      "https://testbytesnxtjsbackend.technoallianceindia.com/wp-content/uploads/2023/09/Best-practices-Icon.png",
    "Expert Insights":
      "https://testbytesnxtjsbackend.technoallianceindia.com/wp-content/uploads/2023/09/expert-insights.png",
    "Software Testing Events Apps":
      "https://testbytesnxtjsbackend.technoallianceindia.com/wp-content/uploads/2023/09/news-and-events.png",
  };

  const getCategoryWithHighestCount = (categories) => {
    let highestCount = 0;
    let highestCountCategory = null;

    categories.forEach((category) => {
      if (category.count > highestCount) {
        highestCount = category.count;
        highestCountCategory = category;
      }
    });

    return highestCountCategory;
  };

  return (
    <>
      <div className="blogleft-sidebar">
        <h5 className="mb-3">
          <span>
            <strong>Blog Category</strong>
          </span>
        </h5>
        <ul>
          {customCategories.map((category, index) => {
            const filteredCategories = result.filter(
              (item) => item.name === category
            );
            const highestCountCategory =
              getCategoryWithHighestCount(filteredCategories);

            if (highestCountCategory) {
              return (
                <>
                  <li key={index + highestCountCategory.slug}>
                    <Link href={`/category/${highestCountCategory.slug}`}>
                      <img src={categoryImageMap[category]} alt="" />
                      {category}
                      <span className="blog_count">
                        ({highestCountCategory.count})
                      </span>
                    </Link>
                  </li>
                  {/* <li>
                    <Link href="/software-testing-events">
                      <img
                        src="https://testbytesnxtjsbackend.technoallianceindia.com/wp-content/uploads/2023/09/news-and-events.png"
                        alt=""
                      />
                      Software Testing Events Apps
                       
                    </Link>
                  </li> */}
                </>
              );
            } else if (category === "Performance Testing") {
              // Handle "Performance Testing" separately
              const performanceTestingCategory = result.find(
                (item) => item.name === "Performance Testing"
              );
              if (performanceTestingCategory) {
                return (
                  <li key={"performance-testing"}>
                    <Link href={`/category/${performanceTestingCategory.slug}`}>
                      <img
                        src={categoryImageMap["Performance Testing"]}
                        alt=""
                      />
                      Performance Testing
                      <span className="blog_count">
                        ({performanceTestingCategory.count})
                      </span>
                    </Link>
                  </li>
                );
              }
            }
            return null;
          })}
          <li>
            <Link href="/software-testing-events">
              <img
                src="https://testbytesnxtjsbackend.technoallianceindia.com/wp-content/uploads/2023/09/news-and-events.png"
                alt=""
              />
              Software Testing Events
              {/*   */}
            </Link>
          </li>
        </ul>

        <h5 className="mb-3">
          <strong>Our Services</strong>
        </h5>
        <ul className="mb-5">
          <li>
            <Link href="/mobile-app-testing/">
              <img
                src="https://testbytesnxtjsbackend.technoallianceindia.com/wp-content/uploads/2023/09/apptesting-img.png"
                alt=""
              />
              App Testing
            </Link>
          </li>
          <li>
            <Link href="/web-application-testing/">
              <img
                src="https://testbytesnxtjsbackend.technoallianceindia.com/wp-content/uploads/2023/09/webapptesting.png"
                alt=""
              />
              Web App Testing
            </Link>
          </li>
          <li>
            <Link href="/game-testing/">
              <img
                src="https://testbytesnxtjsbackend.technoallianceindia.com/wp-content/uploads/2023/09/gametesting-img.png"
                alt=""
              />
              Game Testing
            </Link>
          </li>
          <li>
            <Link href="/automation-testing/">
              <img
                src="https://testbytesnxtjsbackend.technoallianceindia.com/wp-content/uploads/2023/09/automation-img.png"
                alt=""
              />
              Automation Testing
            </Link>
          </li>
          <li>
            <Link href="/load-testing/">
              <img
                src="https://testbytesnxtjsbackend.technoallianceindia.com/wp-content/uploads/2023/09/loadtesting.png"
                alt=""
              />
              Load Testing
            </Link>
          </li>
          <li>
            <Link href="/security-scanning-services/">
              <img
                src="https://testbytesnxtjsbackend.technoallianceindia.com/wp-content/uploads/2023/09/securitytesting.png"
                alt=""
              />
              Security Testing
            </Link>
          </li>
          <li>
            <Link href="/software-performance-testing/">
              <img
                src="https://testbytesnxtjsbackend.technoallianceindia.com/wp-content/uploads/2023/09/performancetesting.png"
                alt=""
              />
              Performance Testing
            </Link>
          </li>
          <li>
            <Link href="/hire-a-tester/">
              <img
                src="https://testbytesnxtjsbackend.technoallianceindia.com/wp-content/uploads/2023/09/hireatester.png"
                alt=""
              />
              Hire a Tester
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

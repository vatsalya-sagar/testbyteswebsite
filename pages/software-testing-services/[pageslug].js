import React, { useEffect } from "react";
import Head from "next/head";
import Script from "next/script";
import { BASEPATH } from "@/config";
import BlogLeftSidebar from "@/components/blog/BlogLeftSidebar";
import BlogRightSidebar from "@/components/blog/BlogRightSidebar";
import dateFormat from 'dateformat';
import Link from "next/link";

export default function PageSingle({
  AllsinglePageList,
  postsinglepage,
  recentblogsdata,
}) {
  // console.log("URL", AllsinglePageList);
  // console.log("AllsinglePageList", AllsinglePageList?.data?.page?.slug);

  
  if (AllsinglePageList.data.page !== null) {
    return (
      <>
        <Head>
          <title>{AllsinglePageList.data.page.seo.title}</title>
          <meta name="deScription" content={AllsinglePageList.data.page.seo.metaDesc} />
          <link rel="canonical" href={`https://www.testbytes.net/${AllsinglePageList.data.page.slug}`} />
          <meta name="image" property="og:image" content="/images/TestBytes_OG.jpg" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Testbytes: Software Testing and QA Consulting Company" />
          <meta property="og:deScription" content="Looking for independent software testing services? Testbytes can offer game testing, mobile app testing, security testing, performance testing, and more." />
          <meta property="og:title" content={AllsinglePageList.data.page.seo.title} className="yoast-seo-meta-tag" />
          <meta property="og:deScription" content={AllsinglePageList.data.page.seo.metaDesc} className="yoast-seo-meta-tag" />
          <meta property="og:url" content={`https://www.testbytes.net/${AllsinglePageList.data.page.slug}`} className="yoast-seo-meta-tag" />
          <meta property="og:site_name" content="Testbytes" className="yoast-seo-meta-tag" />
          
          <link rel="stylesheet" href={`https://testbytesnxtjsbackend.technoallianceindia.com/wp-content/uploads/elementor/css/post-${AllsinglePageList.data.page.pageId}.css`} media="all" />
      
        </Head>
        

        <div className="innerpages-contentsdata">
          {AllsinglePageList?.data?.page?.content !== null && (
            <div
              dangerouslySetInnerHTML={{
                __html: `${AllsinglePageList?.data?.page?.content}`,
              }}
            ></div>
          )}
        </div>
      </>
    );
  } else if (postsinglepage.data.post !== null) {
    return (
      <>
        <Head>
          <title>{postsinglepage.data.post.title}</title>
          <meta name="robots" content="index, follow" />
          <meta
            name="description"
            content={postsinglepage.data.post.seo.metaDesc}
          />
          <link
            rel="canonical"
            href={`https://www.testbytes.net/${postsinglepage.data.post.slug}`}
          />
          <meta property="og:locale" content="en_US" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content={postsinglepage.data.post.title} />
          <meta
            property="og:description"
            content={postsinglepage.data.post.seo.metaDesc}
          />
          <meta
            property="og:url"
            content={`https://www.testbytes.net/${postsinglepage.data.post.slug}`}
          />
          <meta property="og:site_name" content="Testbytes Softwares" />
          <meta name="twitter:card" content="summary" />
        </Head>

        <main id="cx-blog-main">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-3">
                <BlogLeftSidebar />
              </div>
              <div className="col-lg-6 mb-5 mainblogcontentpage">
                <a
                  href="https://www.testbytes.net/career/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://testbytesnxtjsbackend.technoallianceindia.com/wp-content/uploads/2021/04/Hiring-performance-banner-newww-1-1.jpg"
                    alt="Testbytes IN website"
                    style={{ width: `100%`, height: `auto` }}
                  />
                </a>
                <div className="blog-breadcrumbs mt-3 mb-3">
                  <ul>
                    <li>
                      <Link href="/">Home</Link>
                    </li>
                    <li>
                      <Link href="/software-testing-blog">Blog</Link>
                    </li>
                    <li>
                      <Link
                        href={`/category/${postsinglepage.data.post.categories.nodes[0].slug}`}
                      >
                        {postsinglepage.data.post.categories.nodes[0].name}
                      </Link>
                    </li>
                  </ul>
                </div>
                <h1
                  className="mb-4 fw-bold"
                  dangerouslySetInnerHTML={{
                    __html: `${postsinglepage.data.post.title}`,
                  }}
                ></h1>
                <h5 className="mb-4">{dateFormat(postsinglepage.data.post.date, "mmmm dS, yyyy")}</h5>
                <div className="mainblogcenteredcontent">
                  <div className="bloginner-imgfeat mb-4">
                    {postsinglepage.data.post.featuredImage !== null && (
                      <>
                        <img
                          src={
                            postsinglepage.data.post.featuredImage.node
                              .sourceUrl
                          }
                          alt={postsinglepage.data.post.title}
                        />
                      </>
                    )}
                  </div>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: `${postsinglepage.data.post.content}`,
                    }}
                  ></div>
                </div>
              </div>
              <div className="col-lg-3">
                <BlogRightSidebar sidebarrecentdata={recentblogsdata} />
              </div>
            </div>
          </div>
        </main>
      </>
    );
  }
}

export async function getStaticPaths() {
  const resourceAPI = await fetch(`${BASEPATH}graphql`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
      query NewQuery {
        pages(first: 5) {
          nodes {
            pageId
            slug
            title
          }
        }
      }
             `,
    }),
  });
  const resourceAPIList = await resourceAPI.json();
  const paths = resourceAPIList.data.pages.nodes.map((list) => ({
    params: { pageslug: list.slug },
  }));
  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }) {
  const currentApi = await fetch(`${BASEPATH}graphql`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
          query NewQuery {
              page(
                  id: "${params.pageslug}" ,idType: URI) 
               {
                pageId
                slug
                title
                content
                seo {
                  title
                  metaDesc
                }
               
              }
            }
          `,
    }),
  });

  const AllsinglePageList = await currentApi.json();

  // Get Single post data
  const postres = await fetch(`${BASEPATH}graphql`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
          query MyQuery2 {
            post(id: "${params.pageslug}", idType: SLUG) {
              id
              date
              content
              title
              seo {
                metaDesc
              }
              slug
              author {
                node {
                  name
                }
              }
              categories {
                nodes {
                  slug
                  name
                }
              }
              featuredImage {
                node {
                  sourceUrl
                }
              }
            }
          }
      `,
    }),
  });
  const postsinglepage = await postres.json();

  // Recent blogs
  const recentblogsres = await fetch(`${BASEPATH}graphql`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
          query MyQuery2 {
            posts(first: 5) {
              nodes {
                date
                slug
                title
                featuredImage {
                  node {
                    sourceUrl
                  }
                }
              }
            }
          }
        `,
    }),
  });
  const recentblogsdata = await recentblogsres.json();

  return {
    props: {
      AllsinglePageList,
      postsinglepage,
      recentblogsdata,
    },
    revalidate: 10,
  };
}

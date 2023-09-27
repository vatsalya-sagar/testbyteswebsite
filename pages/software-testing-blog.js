import Head from "next/head";
import Image from "next/image";
import BlogRightSidebar from "../components/blog/BlogRightSidebar";
import BlogLeftSidebar from "../components/blog/BlogLeftSidebar";
import BlogRecentPostsContent from "../components/blog/BlogRecentPostsContent";
import Link from "next/link";
import ArticleBlogCard from "../components/blog/ArticleBlogCard";
import { BASEPATH } from "../config";

export default function Blog({recentblogsdata, webblogData, mobileblogData, automationblogData}) {
  // console.log(mobileblogData.data.category)
    return (
        <>
            <Head>
                <title>Blog - Testbytes: Custom Mobile Application Development Company</title>
                <meta name="robots" content="index, follow" />
                <meta name="description" content="Testbytes&#039;s blog features news and articles on latest trends of mobile app development technology, gaming apps development, app design and more" />
                <link rel="canonical" href="https://www.testbytes.net/blogs/" />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Blog - Testbytes: Custom Mobile Application Development Company" />
                <meta property="og:description" content="Testbytes&#039;s blog features news and articles on latest trends of mobile app development technology, gaming apps development, app design and more" />
                <meta property="og:url" content="https://www.testbytes.net/blogs/" />
                <meta property="og:site_name" content="Testbytes" />
                <meta name="twitter:card" content="summary" />
            </Head>

            <main id="cx-blog-main">
                <div className="container-fluid" id="blogmaincontainer">
                    <div className="row">
                        <div className="col-lg-3">
                            <BlogLeftSidebar />
                        </div>
                        <div className="col-lg-6">
                            <BlogRecentPostsContent recentblogsdata={recentblogsdata} />
                            <div className="py-4"></div>
                            <h4 className="mb-4 heading-with-gradient d-flex">
                                <span className="me-auto">Web App Testing</span>
                                <div className="ms-auto">
                                    <Link href={`/category/${webblogData.data.category.slug}`} className="btn btn-default btn-rounded px-3">
                                        View <strong>{webblogData.data.category.count}</strong> more blogs
                                    </Link>
                                </div>
                            </h4>
                            <ArticleBlogCard blogData={webblogData} />

                            <div className="py-4"></div>
                            <h4 className="mb-4 heading-with-gradient d-flex">
                                <span className="me-auto">Mobile App Testing</span>
                                <div className="ms-auto">
                                    <Link href={`/category/${mobileblogData.data.category.slug}`} className="btn btn-default btn-rounded px-3">
                                        View <strong>{mobileblogData.data.category.count}</strong> more blogs
                                    </Link>
                                </div>
                            </h4>
                            <ArticleBlogCard blogData={automationblogData} />
                            <div className="py-4"></div>
                            <h4 className="mb-4 heading-with-gradient d-flex">
                                <span className="me-auto">Automation Testing</span>
                                <div className="ms-auto">
                                    <Link href={`/category/${automationblogData.data.category.slug}`} className="btn btn-default btn-rounded px-3">
                                        View <strong>{automationblogData.data.category.count}</strong> more blogs
                                    </Link>
                                </div>
                            </h4>
                            <ArticleBlogCard blogData={automationblogData} />
                            <div className="mb-5"></div>
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

export async function getStaticProps() {

    // mobile-app-development
    const catres = await fetch(`${BASEPATH}graphql`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            query: `
            query NewQuery {
                category(idType: SLUG, id: "web-app-testing") {
                  count
                  slug
                  posts(first: 3) {
                    nodes {
                      title
                      featuredImage {
                        node {
                          sourceUrl
                        }
                      }
                      slug
                      excerpt
                      date
                    }
                  }
                  name
                }
              }
          `
        })
    });
    const webblogData = await catres.json();

    // educational-apps
    const catrescat2 = await fetch(`${BASEPATH}graphql`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
          query: `
          query MyQuery2 {
            category(id: "mobile-app-testing-blog", idType: SLUG) {
              slug
              count
              name
              posts(first: 3) {
                nodes {
                  date
                  slug
                  excerpt
                  title
                  featuredImage {
                    node {
                      sourceUrl
                    }
                  }
                }
              }
            }
          }
        `
      })
  });
  const mobileblogData = await catrescat2.json();


  const catrescat3 = await fetch(`${BASEPATH}graphql`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
        query: `
        query MyQuery2 {
          category(id: "automation-testing-blogs", idType: SLUG) {
            slug
            count
            name
            posts(first: 3) {
              nodes {
                date
                slug
                excerpt
                title
                featuredImage {
                  node {
                    sourceUrl
                  }
                }
              }
            }
          }
        }
      `
    })
});
const automationblogData = await catrescat3.json();

    // Recent blogs
    const recentblogsres = await fetch(`${BASEPATH}graphql`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            query: `
            query MyQuery2 {
                posts(first: 3) {
                  nodes {
                    slug
                    title
                    date
                    featuredImage {
                      node {
                        sourceUrl
                      }
                    }
                  }
                }
              }
          `
        })
    });
    const recentblogsdata = await recentblogsres.json();
    
    const pagesres = await fetch(`${BASEPATH}graphql`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            query: `
            query MyQuery2 {
              categories(first: 10) {
                nodes {
                  name
                  slug
                  count
                }
              }
            }
          `
        })
    });
    
  
  
    const blogCountNew = await pagesres.json();
    

    return {
        props: {
            recentblogsdata,
            webblogData,
            mobileblogData,
            automationblogData,
            blogCountNew,
            isBlogMainPage: true
        },
        revalidate: 10, // In seconds
    };
}
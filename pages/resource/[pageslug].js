import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { BASEPATH } from '@/config';
import RelatedPost from '@/components/RelatedPost';


export default function SingleResource({ singlePageList }) {


  console.log("singlePageList", singlePageList)

  return (
    <>

      <Head>

        <title>{singlePageList?.data?.resource?.seo?.title}</title>
        <meta name="deScription" content={singlePageList?.data?.resource?.seo?.metaDesc} />
        <link rel="canonical" href={`https://www.testbytes.net/${singlePageList?.data?.resource?.slug}`} />
        <meta name="image" property="og:image" content="/images/TestBytes_OG.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Testbytes: Software Testing and QA Consulting Company" />
        <meta property="og:deScription" content="Looking for independent software testing services? Testbytes can offer game testing, mobile app testing, security testing, performance testing, and more." />
        <meta property="og:title" content={singlePageList?.data?.resource?.seo?.title} className="yoast-seo-meta-tag" />
        <meta property="og:deScription" content={singlePageList?.data?.resource?.seo?.metaDesc} className="yoast-seo-meta-tag" />
        <meta property="og:url" content={`https://www.testbytes.net/${singlePageList?.data?.resource?.slug}`} className="yoast-seo-meta-tag" />
        <meta property="og:site_name" content="Testbytes" className="yoast-seo-meta-tag" />
      </Head>
      {/* {singlePageList.data.resource.resources_Extra_Field.resourceDownloadUrl} */}

      <div className='single-reurse-page ' key={singlePageList.data.resource.title}>
        <div className='container'>
          <div className='row center-list'>
            <div className='py-4'></div>
            <div className='col-md-10 col-md-offset-1'>
              <div className='bg-color'>
                <div className='col-md-6'>
                  <div className='inner-img'>
                    {/* {singlePageList.data.resource.featuredImage.node.guid} */}
                    <img src={singlePageList.data.resource.featuredImage.node.guid} alt={singlePageList.data.resource.featuredImage.node.altText} />
                  </div>
                </div>
                <div className='col-md-5'>
                  <div className='inner-list-data'>
                    <h4>{singlePageList.data.resource.title}</h4>
                    <ul>
                      <li><Link href="/resources/infographics/">Infographics</Link></li>
                      <li><Link href="/resources/infographics/performance-testing-DUPLICATE/">Performance Testing</Link></li>
                      <li><Link href="/resources/infographics/mobile-app-testing/">Mobile App Testing</Link></li>
                      <li><Link href="/resources/infographics/web-app-testing/">Web APP</Link></li>
                    </ul>
                    {/* <div className='contain'>{singlePageList?.data?.resource?.content}</div> */}
                    {singlePageList.data.resource.content == !null &&
                      <div dangerouslySetInnerHTML={{ __html: `${singlePageList?.data?.resource.content}` }}></div>
                    }
                    <div className='share-download'>
                      <div className='list-flax-dir text-center'>

                        <div className="share_icons">
                          <div className="share_icon_item">
                            <a className="facebook_btn" href="https://www.addtoany.com/add_to/facebook?linkurl=https%3A%2F%2Fwww.testbytes.net%2Fresource%2Fwhat-makes-an-effective-good-unit-test%2F&linkname=What%20makes%20an%20effective%20good%20unit%20test&linknote=" target="_blank">
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
                            <a className="twitter_btn" href="https://www.addtoany.com/add_to/twitter?linkurl=https%3A%2F%2Fwww.testbytes.net%2Fresource%2Fwhat-makes-an-effective-good-unit-test%2F&linkname=What%20makes%20an%20effective%20good%20unit%20test&linknote=" target="_blank">
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
                            <a className="email_btn" href="https://www.addtoany.com/add_to/email?linkurl=https%3A%2F%2Fwww.testbytes.net%2Fresource%2Fwhat-makes-an-effective-good-unit-test%2F&linkname=What%20makes%20an%20effective%20good%20unit%20test&linknote=Looking%20for%20independent%20software%20testing%20services%3F%20Testbytes%20can%20offer%20game%20testing%2C%20mobile%20app%20testing%2C%20security%20testing%2C%20performance%20testing%2C%20and%20more." target="_blank">
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
                            <a className="share_btn" href="https://www.addtoany.com/share#url=https%3A%2F%2Fwww.testbytes.net%2Fresource%2Fwhat-makes-an-effective-good-unit-test%2F&title=What%20makes%20an%20effective%20good%20unit%20test" target="_blank">
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

                        {singlePageList?.data?.resource?.resources_Extra_Field?.resourceDownloadUrl !== null &&
                          <div className="big-family-button">
                            <Link className='btn btn-default btn-rounded px-4' href={singlePageList?.data?.resource?.resources_Extra_Field?.resourceDownloadUrl} target="_blank">Download</Link>
                          </div>
                        }

                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>


        <div className='related-post'>
          <div className='container'>
            <h4>Related Infographics</h4>
            <div className='py-2'></div>
            <RelatedPost />

          </div>
        </div>
      </div>



    </>
  )
}


export async function getStaticPaths() {
  const resourceAPI = await fetch(`${BASEPATH}graphql`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: `
        query NewQuery {
          resources(first: 5) {
            nodes {
              slug
            }
          }
        }
               `
      })
    });
  const resourceAPIList = await resourceAPI.json();
  const paths = resourceAPIList.data.resources.nodes.map((list) => ({
    params: { pageslug: list.slug },
  }));
  return {
    paths,
    fallback: 'blocking',
    // fallback: false
  };

}




export async function getStaticProps({ params }) {
  const currentApi = await fetch(`${BASEPATH}graphql`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `
            query NewQuery {
                resource(
                    id: "${params.pageslug}",
                 idType: SLUG) {
                  slug
                  title
                  content  
                   seo {
                    title
                    metaDesc
                  }
                  featuredImage {
                    node {
                      altText
                      link
                      guid
                    }
                  }
                  resources_Extra_Field {
                    resourceDownloadUrl
                  }
                }
              }
            `
    })
  });

  const singlePageList = await currentApi.json();

  return {
    props: {
      singlePageList,
    },
    revalidate: 10,
  }
}





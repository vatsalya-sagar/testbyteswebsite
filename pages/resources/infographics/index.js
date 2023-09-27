import React, { useState, useEffect } from "react";
import Head from 'next/head'
import Link from 'next/link'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { BASEPATH } from '@/config';
import axios from 'axios';
import InnerNavBar from "@/components/InnerNavBar";

export default function infographicsCat({ MobileApiList, PermaceList,
    SecurityList, TestManagmentList,
    WebAppList,
    AutoMationList,
    GameTestinList
}) {

    // console.log("PermaceList", PermaceList)
    return (
        <>
                  {/* Menu Link and Category */}
            <div className='resource-section-design'>
                <div className='container'>
                    <div className='resource-nav-link'>
                        <div className="row">

                        <InnerNavBar/>

                            <div className="col-sm-2 text-center">
                                <div className="count-and-list">
                                    <div className="count">217</div>
                                    <h4>Infographics </h4>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="all-infographi-mobile-list">
                <div className="container">
                    <div className="py-4"></div>
                    <h4 className="mb-4 heading-with-gradient d-flex">
                        <Link href={`/resources/infographics/${MobileApiList.data.resourceCat.slug}`}>
                            <span className="me-auto">{MobileApiList.data.resourceCat.name}</span>
                        </Link>
                        <span className="ms-auto">
                            <Link href={`/resources/infographics/${MobileApiList.data.resourceCat.slug}`} className='btn btn-default btn-rounded btn-lg px-4 fs-5 fw-600'>View {MobileApiList.data.resourceCat.count} More</Link>
                        </span>
                    </h4>

                    <div className='row'>
                        <div className="py-2"></div>
                        <>
                            <Splide
                                options={{
                                    perPage: 4,
                                    breakpoints: {
                                        991: {
                                            perPage: 3,
                                        },
                                        767: {
                                            perPage: 2,
                                        },
                                        640: {
                                            perPage: 1,
                                        },
                                    },
                                    rewind: true,
                                    autoplay: true,
                                    interval: 6000,
                                    pagination: false,
                                    arrows: false,


                                    // type: 'fade',
                                    // speed: 2200
                                }}
                                aria-label="customList">

                                {
                                    MobileApiList.data.resources.nodes.map((mobilist) =>
                                        <SplideSlide key={mobilist.uri}>
                                            {/* {mobilist.data.resources.nodes.url} */}
                                            <div className='inner-card-design'>
                                                <Link href={`${mobilist.uri}`}>
                                                    <div className='inner-card-resource'>
                                                        {/* {mobilist.featuredImage.node.guid} */}
                                                        <img src={mobilist.featuredImage.node.guid} alt={mobilist.featuredImage.node.alt} />
                                                        <div className='card-titles'>
                                                            <h4>{mobilist.title}</h4>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                          
                                        </SplideSlide>
                                    )}
                            </Splide>
                        </>


                    </div>

                </div>
            </div>


            {/* Performance testing */}


            <div className="all-infographi-Performance-list">
                <div className="container">
                    <div className="py-4"></div>
                    <h4 className="mb-4 heading-with-gradient d-flex">
                        <Link href={`/resources/infographics/${PermaceList.data.resourceCat.slug}`}>
                            <span className="me-auto">{PermaceList.data.resourceCat.name}</span>
                        </Link>
                        <span className="ms-auto">
                            <Link href={`/resources/infographics/${PermaceList.data.resourceCat.slug}`} className='btn btn-default btn-rounded btn-lg px-4 fs-5 fw-600'>
                                View {PermaceList.data.resourceCat.count} More</Link>
                        </span>
                    </h4>

                    <div className='row'>
                        <div className="py-2"></div>
                        <>
                            <Splide
                                options={{
                                    perPage: 4,
                                    breakpoints: {
                                        991: {
                                            perPage: 3,
                                        },
                                        767: {
                                            perPage: 2,
                                        },
                                        640: {
                                            perPage: 1,
                                        },
                                    },
                                    rewind: true,
                                    autoplay: true,
                                    interval: 6000,
                                    pagination: false,
                                    arrows: false,

                                }}
                                aria-label="customList">

                                {
                                    PermaceList.data.resourceCat.resources.nodes.map((perlist) => (
                                        <SplideSlide key={perlist.slug}>
                                            <div className='inner-card-design' >
                                                <Link href={`${perlist.uri}`}>
                                                    <div className='inner-card-resource'>
                                                        <img src={perlist.featuredImage.node.guid} alt={perlist.featuredImage.node.alt} />
                                                        <div className='card-titles'>
                                                            <h4>{perlist.title}</h4>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </SplideSlide>
                                    ))}
                            </Splide>
                        </>


                    </div>

                </div>
            </div>


            {/* Security testing */}


            <div className="all-infographi-Performance-list">
                <div className="container">
                    <div className="py-4"></div>
                    <h4 className="mb-4 heading-with-gradient d-flex">
                        <Link href={`/resources/infographics/${SecurityList.data.resourceCat.slug}`}>
                            <span className="me-auto">{SecurityList.data.resourceCat.name}</span>
                        </Link>
                        <span className="ms-auto">
                            <Link href={`/resources/infographics/${SecurityList.data.resourceCat.slug}`} className='btn btn-default btn-rounded btn-lg px-4 fs-5 fw-600'>
                                View {SecurityList.data.resourceCat.count} More</Link>
                        </span>
                    </h4>

                    <div className='row'>
                        <div className="py-2"></div>
                        <>
                            <Splide
                                options={{
                                    perPage: 4,
                                    breakpoints: {
                                        991: {
                                            perPage: 3,
                                        },
                                        767: {
                                            perPage: 2,
                                        },
                                        640: {
                                            perPage: 1,
                                        },
                                    },
                                    rewind: true,
                                    autoplay: true,
                                    interval: 6000,
                                    pagination: false,
                                    arrows: false,

                                }}
                                aria-label="customList">

                                {
                                    SecurityList.data.resourceCat.resources.nodes.map((security) => (
                                        <SplideSlide key={security.url}>


                                            <div className='inner-card-design'>
                                                <Link href={`${security.uri}`}>
                                                    <div className='inner-card-resource'>

                                                        <img src={security.featuredImage.node.guid} alt={security.featuredImage.node.alt} />
                                                        <div className='card-titles'>
                                                            <h4>{security.title}</h4>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </SplideSlide>
                                    ))}
                            </Splide>
                        </>


                    </div>

                </div>
            </div>

            {/* Test Management */}

            <div className="all-infographi-test-managment">
                <div className="container">
                    <div className="py-4"></div>
                    <h4 className="mb-4 heading-with-gradient d-flex">
                        <Link href={`/resources/infographics/${TestManagmentList.data.resourceCat.slug}`}>
                            <span className="me-auto">{TestManagmentList.data.resourceCat.name}</span>
                        </Link>
                        <span className="ms-auto">
                            <Link href={`/resources/infographics/${TestManagmentList.data.resourceCat.slug}`} className='btn btn-default btn-rounded btn-lg px-4 fs-5 fw-600'>
                                View {TestManagmentList.data.resourceCat.count} More</Link>
                        </span>
                    </h4>

                    <div className='row'>
                        <div className="py-2"></div>
                        <>
                            <Splide
                                options={{
                                    perPage: 4,
                                    breakpoints: {
                                        991: {
                                            perPage: 3,
                                        },
                                        767: {
                                            perPage: 2,
                                        },
                                        640: {
                                            perPage: 1,
                                        },
                                    },
                                    rewind: true,
                                    autoplay: true,
                                    interval: 6000,
                                    pagination: false,
                                    arrows: false,

                                }}
                                aria-label="customList">

                                {
                                    TestManagmentList.data.resourceCat.resources.nodes.map((testmgt) => 
                    
                                    ( 
                                        <SplideSlide key={testmgt.uri}>

                                             
                                            <div className='inner-card-design' >
                                                <Link href={`${testmgt.uri}`}>
                                                    <div className='inner-card-resource'>

                                                        <img src={testmgt.featuredImage.node.guid} alt={testmgt.featuredImage.node.alt} />
                                                        <div className='card-titles'>
                                                            <h4>{testmgt.title}</h4>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </SplideSlide>
                                    ))}
                            </Splide>
                        </>


                    </div>

                </div>
            </div>


            {/* Web App Testing */}

            <div className="all-infographi-test-managment">
                <div className="container">
                    <div className="py-4"></div>
                    <h4 className="mb-4 heading-with-gradient d-flex">
                        <Link href={`/resources/infographics/${WebAppList.data.resourceCat.slug}`}>
                            <span className="me-auto">{WebAppList.data.resourceCat.name}</span>
                        </Link>
                        <span className="ms-auto">
                            <Link href={`/resources/infographics/${WebAppList.data.resourceCat.slug}`} className='btn btn-default btn-rounded btn-lg px-4 fs-5 fw-600'>
                                View {WebAppList.data.resourceCat.count} More</Link>
                        </span>
                    </h4>

                    <div className='row'>
                        <div className="py-2"></div>
                        <>
                            <Splide
                                options={{
                                    perPage: 4,
                                    breakpoints: {
                                        991: {
                                            perPage: 3,
                                        },
                                        767: {
                                            perPage: 2,
                                        },
                                        640: {
                                            perPage: 1,
                                        },
                                    },
                                    rewind: true,
                                    autoplay: true,
                                    interval: 6000,
                                    pagination: false,
                                    arrows: false,

                                }}
                                aria-label="customList">

                                {
                                    WebAppList.data.resourceCat.resources.nodes.map((webapp) => (
                                        <SplideSlide key={webapp.uri}>


                                            <div className='inner-card-design' >
                                                <Link href={`${webapp.uri}`}>
                                                    <div className='inner-card-resource'>

                                                        <img src={webapp.featuredImage.node.guid} alt={webapp.featuredImage.node.alt} />
                                                        <div className='card-titles'>
                                                            <h4>{webapp.title}</h4>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </SplideSlide>
                                    ))}
                            </Splide>
                        </>


                    </div>

                </div>
            </div>


            {/* Auto Mation Testing */}

            <div className="all-infographi-test-managment">
                <div className="container">
                    <div className="py-4"></div>
                    <h4 className="mb-4 heading-with-gradient d-flex">
                        <Link href={`/resources/infographics/${AutoMationList.data.resourceCat.slug}`}>
                            <span className="me-auto">{AutoMationList.data.resourceCat.name}</span>
                        </Link>
                        <span className="ms-auto">
                            <Link href={`/resources/infographics/${AutoMationList.data.resourceCat.slug}`} className='btn btn-default btn-rounded btn-lg px-4 fs-5 fw-600'>
                                View {AutoMationList.data.resourceCat.count} More</Link>
                        </span>
                    </h4>

                    <div className='row'>
                        <div className="py-2"></div>
                        <>
                            <Splide
                                options={{
                                    perPage: 4,
                                    breakpoints: {
                                        991: {
                                            perPage: 3,
                                        },
                                        767: {
                                            perPage: 2,
                                        },
                                        640: {
                                            perPage: 1,
                                        },
                                    },
                                    rewind: true,
                                    autoplay: true,
                                    interval: 6000,
                                    pagination: false,
                                    arrows: false,

                                }}
                                aria-label="customList">

                                {
                                    AutoMationList.data.resourceCat.resources.nodes.map((autolist) => (
                                        <SplideSlide key={autolist.url}>


                                            <div className='inner-card-design' >
                                                <Link href={`${autolist.uri}`}>
                                                    <div className='inner-card-resource'>

                                                        <img src={autolist.featuredImage.node.guid} alt={autolist.featuredImage.node.alt} />
                                                        <div className='card-titles'>
                                                            <h4>{autolist.title}</h4>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </SplideSlide>
                                    ))}
                            </Splide>
                        </>


                    </div>

                </div>
            </div>

            {/* Game Testing */}

            <div className="all-infographi-test-managment">
                <div className="container">
                    <div className="py-4"></div>
                    <h4 className="mb-4 heading-with-gradient d-flex">
                        <Link href={`/resources/infographics/${GameTestinList.data.resourceCat.slug}`}>
                            <span className="me-auto">{GameTestinList.data.resourceCat.name}</span>
                        </Link>
                        <span className="ms-auto">
                            <Link href={`/resources/infographics/${GameTestinList.data.resourceCat.slug}`} className='btn btn-default btn-rounded btn-lg px-4 fs-5 fw-600'>
                                View {GameTestinList.data.resourceCat.count} More</Link>
                        </span>
                    </h4>

                    <div className='row'>
                        <div className="py-2"></div>
                        <>
                            <Splide
                                options={{
                                    perPage: 4,
                                    breakpoints: {
                                        991: {
                                            perPage: 3,
                                        },
                                        767: {
                                            perPage: 2,
                                        },
                                        640: {
                                            perPage: 1,
                                        },
                                    },
                                    rewind: true,
                                    autoplay: true,
                                    interval: 6000,
                                    pagination: false,
                                    arrows: false,

                                }}
                                aria-label="customList">

                                {
                                    GameTestinList.data.resourceCat.resources.nodes.map((gamelist) => (
                                        <SplideSlide key={gamelist.uri}>


                                            <div className='inner-card-design'  >
                                                <Link href={`${gamelist.uri}`}>
                                                    <div className='inner-card-resource'>

                                                        <img src={gamelist.featuredImage.node.guid} alt={gamelist.featuredImage.node.alt} />
                                                        <div className='card-titles'>
                                                            <h4>{gamelist.title}</h4>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </SplideSlide>
                                    ))}
                            </Splide>
                        </>


                    </div>

                </div>
            </div>

        </>
    )
}


export async function getStaticProps() {
    const MobileApiTesting = await fetch(`${BASEPATH}graphql`,
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                query: `
                query MobileAppTesting {
                    resourceCat(id: "mobile-app-testing", idType: SLUG) {
                      count
                      name
                      slug
                    }
                    resources(first: 5) {
                      nodes {
                        title
                        slug
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
                `
            })
        });



    const Performacetest = await fetch(`${BASEPATH}graphql`,
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                query: `
                query PerformanceTesting {
                    resourceCat(id: "performance-testing-DUPLICATE", idType: SLUG) {
                      count
                      name
                      slug
                      resources(first: 5) {
                        nodes {
                          title
                          slug
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
                  }
               
               
                `
            })
        });


    const SecurityTest = await fetch(`${BASEPATH}graphql`,
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                query: `
                query SecurityTesting {
                    resourceCat(id: "security-testing", idType: SLUG) {
                      count
                      name
                      slug
                      resources(first: 5) {
                        nodes {
                          title
                          slug
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
                  }
               
               
                `
            })
        });


    const TestManagment = await fetch(`${BASEPATH}graphql`,
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                query: `
                query TestManagemnt {
                    resourceCat(id: "test-management", idType: SLUG) {
                      count
                      name
                      slug
                      resources(first: 5) {
                        nodes {
                          title
                          slug
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
                  }
               
               
                `
            })
        });


    const WebAppTesting = await fetch(`${BASEPATH}graphql`,
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                query: `
                query WebApp {
                    resourceCat(id: "web-app-testing/", idType: SLUG) {
                      count
                      name
                      slug
                      resources(first: 5) {
                        nodes {
                          title
                          slug
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
                  }
               
               
                `
            })
        });


    const AutoMation = await fetch(`${BASEPATH}graphql`,
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                query: `
                query GameTesting {
                    resourceCat(id: "game-testing", idType: SLUG) {
                      count
                      name
                      slug
                      resources(first: 5) {
                        nodes {
                          title
                          slug
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
                  }
               
                `
            })
        });



    const GameTesting = await fetch(`${BASEPATH}graphql`,
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                query: `
                query AutoMation {
                    resourceCat(id: "automation-testing", idType: SLUG) {
                      count
                      name
                      slug
                      resources(first: 4) {
                        nodes {
                          title
                          slug
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
                  }
               
               
                `
            })
        });


    const MobileApiList = await MobileApiTesting.json();
    const PermaceList = await Performacetest.json();
    const SecurityList = await SecurityTest.json();
    const TestManagmentList = await TestManagment.json();
    const WebAppList = await WebAppTesting.json();
    const AutoMationList = await AutoMation.json();
    const GameTestinList = await GameTesting.json();


    return {
        props: {
            MobileApiList,
            PermaceList,
            SecurityList,
            TestManagmentList,
            WebAppList,
            AutoMationList,
            GameTestinList
        },
        revalidate: 10,
    }
}

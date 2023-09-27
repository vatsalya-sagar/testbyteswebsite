import React from 'react';
import Head from 'next/head'
import Link from 'next/link'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import YoutubeEmbed from '../components/YoutubeEmbed'
import ContactForm from '@/components/ContactForm';

export default function Home() {
    return (
        <>
            <Head>
                <title>Testbytes: Software Testing and QA Consulting Company</title>
                <meta name="viewport" content="width=device-width" />
                <meta content='#ff4d00' name='theme-color' />
                <meta content='#ff4d00' name='msapplication-navbutton-color' />
                <meta content='#ff4d00' name='apple-mobile-web-app-status-bar-style' />
                {/* <meta name="google-site-verification" content="1DJl9PAPUHmhDtwZ3BwZRsgLVnO_BeA_S0HY1CxWXMs" /> */}
                <meta property="og:url" content="https://www.testbytes.net/" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Testbytes: Software Testing and QA Consulting Company" />
                <meta name="description" content="Looking for independent software testing services? Testbytes can offer game testing, mobile app testing, security testing, performance testing, and more." />
                <meta property="og:description" content="Looking for independent software testing services? Testbytes can offer game testing, mobile app testing, security testing, performance testing, and more." />
                <meta name="image" property="og:image" content="https://testbytesnxtjsbackend.technoallianceindia.com/wp-content/uploads/2023/09/LOGO-.jpg" />
                <meta name="image" property="og:image" content="https://testbytesnxtjsbackend.technoallianceindia.com/wp-content/uploads/2023/09/TestBytes_OG.jpg" />

            </Head>

            {/* homepage-banner-section */}
            <div className='homepage-banner-section'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <h1 className='mb-3'>Discover. <span className='primarycolor'>Dismantle. Delete!</span></h1>
                            <h2 className='fs-4 mb-4'>Let us find all the issues of your software, so that you don&apos;t have to face it later</h2>
                            <Link href='/hire-a-tester' className='btn btn-default btn-rounded btn-lg px-4 fs-5 fw-600'>Hire a Tester Now! <i className='fa fa-arrow-right ms-2'></i></Link>
                        </div>
                        <div className='col-lg-6'>

                        </div>
                    </div>
                </div>
                <div className='rocket'>
                    <div className='rocket-img'>
                        <img src='/images/rocket_img-modified.png' alt='Testbytes' />
                    </div>
                    <div className='rocket-bg'>
                        <img src='/images/rocket_bg.png' alt='Testbytes' />
                    </div>
                    <div className='rocket--contrail'>
                        <div className="rocket--cloud">
                            <div className="rocket--smoke _s-01"></div>
                            <div className="rocket--smoke _s-02"></div>
                            <div className="rocket--smoke _s-03"></div>
                            <div className="rocket--smoke _s-04"></div>
                            <div className="rocket--smoke _s-05"></div>
                            <div className="rocket--smoke _s-06"></div>
                            <div className="rocket--smoke _s-07"></div>
                            <div className="rocket--smoke _s-08"></div>
                            <div className="rocket--smoke _s-09"></div>
                            <div className="rocket--smoke _s-10"></div>
                            <div className="rocket--smoke _s-11"></div>
                            <div className="rocket--smoke _s-12"></div>
                            <div className="rocket--smoke _s-13"></div>
                            <div className="rocket--smoke _s-14"></div>
                            <div className="rocket--smoke _s-15"></div>
                            <div className="rocket--smoke _s-16"></div>
                            <div className="rocket--smoke _s-17"></div>
                            <div className="rocket--smoke _s-18"></div>
                            <div className="rocket--smoke _s-19"></div>
                            <div className="rocket--smoke _s-20"></div>
                            <div className="rocket--smoke _s-21"></div>
                            <div className="rocket--smoke _s-22"></div>
                            <div className="rocket--smoke _s-23"></div>
                            <div className="rocket--smoke _s-24"></div>
                            <div className="rocket--smoke _s-25"></div>
                            <div className="rocket--smoke _s-26"></div>
                            <div className="rocket--smoke _s-27"></div>
                            <div className="rocket--smoke _s-28"></div>
                            <div className="rocket--smoke _s-29"></div>
                            <div className="rocket--smoke _s-30"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* customlist-section */}
            <div className='section customlist-section'>
                <div className='container'>
                    <h4 className='mb-1 fs-4'>Join the list of our</h4>
                    <h2 className='primarycolor fs-1 mb-4'>Satisfied Customers</h2>
                    <Splide
                        options={{
                            perPage: 5,
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
                            // type: 'fade',
                            // speed: 2200
                        }}
                        aria-label="customList">
                        <SplideSlide>
                            <div className="clientlogo-item">
                                <img src="https://testbytesnxtjsbackend.technoallianceindia.com/wp-content/themes/testbyteswp-backend/images/p-2.png" alt="partners_logo"
                                    className="img-responsive" />
                            </div>
                        </SplideSlide>
                        <SplideSlide>
                            <div className="clientlogo-item">
                                <img src="https://testbytesnxtjsbackend.technoallianceindia.com/wp-content/themes/testbyteswp-backend/images/p-1.png" alt="partners_logo"
                                    className="img-responsive" />
                            </div>
                        </SplideSlide>
                        <SplideSlide>
                            <div className="clientlogo-item">
                                <img src="https://testbytesnxtjsbackend.technoallianceindia.com/wp-content/themes/testbyteswp-backend/images/p-6.png" alt="partners_logo"
                                    className="img-responsive" />
                            </div>
                        </SplideSlide>
                        <SplideSlide>
                            <div className="clientlogo-item">
                                <img src="https://testbytesnxtjsbackend.technoallianceindia.com/wp-content/themes/testbyteswp-backend/images/p-7.png" alt="partners_logo"
                                    className="img-responsive" />
                            </div>
                        </SplideSlide>
                        <SplideSlide>
                            <div className="clientlogo-item">
                                <img src="https://testbytesnxtjsbackend.technoallianceindia.com/wp-content/themes/testbyteswp-backend/images/p-9.png" alt="partners_logo"
                                    className="img-responsive" />
                            </div>
                        </SplideSlide>
                        <SplideSlide>
                            <div className="clientlogo-item">
                                <img src="https://testbytesnxtjsbackend.technoallianceindia.com/wp-content/themes/testbyteswp-backend/images/p-10.png" alt="partners_logo"
                                    className="img-responsive" />
                            </div>
                        </SplideSlide>
                        <SplideSlide>
                            <div className="clientlogo-item">
                                <img src="https://testbytesnxtjsbackend.technoallianceindia.com/wp-content/themes/testbyteswp-backend/images/p-11.png" alt="partners_logo"
                                    className="img-responsive" />
                            </div>
                        </SplideSlide>
                        <SplideSlide>
                            <div className="clientlogo-item">
                                <img src="https://testbytesnxtjsbackend.technoallianceindia.com/wp-content/themes/testbyteswp-backend/images/p4.png" alt="partners_logo"
                                    className="img-responsive" />
                            </div>
                        </SplideSlide>
                        <SplideSlide>
                            <div className="clientlogo-item">
                                <img src="https://testbytesnxtjsbackend.technoallianceindia.com/wp-content/themes/testbyteswp-backend/images/p-5.png" alt="partners_logo"
                                    className="img-responsive" />
                            </div>
                        </SplideSlide>
                        <SplideSlide>
                            <div className="clientlogo-item">
                                <img src="https://testbytesnxtjsbackend.technoallianceindia.com/wp-content/themes/testbyteswp-backend/images/p-12.png" alt="partners_logo"
                                    className="img-responsive" />
                            </div>
                        </SplideSlide>
                    </Splide>
                </div>
            </div>

            {/* testimonial-section */}
            <div className='section testimonial-section'>
                <div className='container'>
                    <h2 className='txt-white fs-1 mb-4'>Testimonials</h2>
                    <div className='row'>
                        <Splide
                            options={{
                                perPage: 2,
                                breakpoints: {
                                    991: {
                                        perPage: 2,
                                    },
                                    767: {
                                        perPage: 1,
                                    },
                                    640: {
                                        perPage: 1,
                                    },
                                },
                                rewind: true,
                                autoplay: true,
                                interval: 8000,
                                // type: 'fade',
                                // speed: 2200
                            }}
                            aria-label="testimonialList">
                            <SplideSlide>
                                <div className="testimonial-item">
                                    <div className="testimonial-h_item-c">
                                        <h4>Samuel Hung</h4>
                                        <h6>(Greennomarket)</h6>
                                        <p>Excellent work for us, willing to understand what Client&apos;s need. Great
                                            Conscientious, not only finished the job, will give you some suggestion many than
                                            the job requested . 5 stars recommend to hire them as your QA Partners.</p>
                                    </div>
                                    <div className="testimonial-h_profile-pic">
                                        <img src="/images/t-1.png" alt="profile_pic"
                                            className="img-responsive" />
                                    </div>
                                </div>
                            </SplideSlide>
                            <SplideSlide>
                                <div className="testimonial-item">
                                    <div className="testimonial-h_item-c">
                                        <h4>Jarno Piironen</h4>
                                        <h6>(Aurorax)</h6>
                                        <p>Very good work. Excellent communications, very clear reports and great attitude to
                                            learn what is needed to deliver to the customer needs. Highly recommended.</p>
                                    </div>
                                    <div className="testimonial-h_profile-pic">
                                        <img src="/images/t-2.png" alt="profile_pic"
                                            className="img-responsive" />
                                    </div>
                                </div>
                            </SplideSlide>
                            <SplideSlide>
                                <div className="testimonial-item">
                                    <div className="testimonial-h_item-c">
                                        <h4>Yohay Etsion</h4>
                                        <h6>(Queskr Inc)</h6>
                                        <p>We have been working with Testbytes in the past year to test our Android and IOS
                                            applications, and couldn&apos;t have been more satisfied. The testbytes team did a
                                            fantastic job understading our requirements, providing high quality deliverables
                                            (test plans, test results, etc ...) and were always on time (either to take on new
                                            assignments and on delivery). They have really grown to become an organic part of
                                            our team.</p>
                                    </div>
                                    <div className="testimonial-h_profile-pic">
                                        <img src="/images/Queskr.png"
                                            alt="profile_pic" className="img-responsive" />
                                    </div>
                                </div>
                            </SplideSlide>
                            <SplideSlide>
                                <div className="testimonial-item">
                                    <div className="testimonial-h_item-c">
                                        <h4>Marwen de Jong</h4>
                                        <h6>(Weevil)</h6>
                                        <p>It was a pleasure to work with Hitesh and his Testbytes team. They are skilled,
                                            have great communication and are willing to think and work with you, instead of only
                                            working for you. We will definitely hire Hitesh and his team again.</p>
                                    </div>
                                    <div className="testimonial-h_profile-pic">
                                        <img src="/images/t-4.png" alt="profile_pic"
                                            className="img-responsive" />
                                    </div>
                                </div>
                            </SplideSlide>
                        </Splide>
                    </div>
                </div>
            </div>

            {/* expertise-section */}
            <div className='section expertise-section'>
                <h2 className='fs-1 mb-5 text-center'>Our area of <span className='primarycolor'>Expertise</span></h2>
                <div className='row mx-0'>
                    <div className='col-lg-4 px-0'>
                        <img src='/images/expert_image.png' alt='expert_image' />
                    </div>
                    <div className='col-lg-8 px-0'>
                        <div className='row mx-0'>
                            <div className='offset-lg-1 col-lg-10 expertisecolmain'>
                                <div className='row'>
                                    <div className="col-lg-4">
                                        <Link href="/mobile-app-testing">
                                            <div className="h_expert-c1">
                                                <img src="/images/app_testing.png"
                                                    alt="app_testing_icon" className="img-fluid" />
                                                <h4>Mobile App Testing</h4>
                                                <p>Be it an android app or an iOS app, we can test and find out the problems in it so that
                                                    your app would not face the situation most of the apps faces nowadays.</p>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="col-lg-4">
                                        <Link href="/web-application-testing-services/">
                                            <div className="h_expert-c1">
                                                <img src="/images/web.png" alt="app_testing_icon"
                                                    className="img-fluid" />
                                                <h4>Web Testing</h4>
                                                <p>Web apps are the face of any business. So before and after deployment constant testing is
                                                    needed to ensure maximum stability.</p>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="col-lg-4">
                                        <Link href="/automation-testing">
                                            <div className="h_expert-c1">
                                                <img src="/images/002-alarm.png"
                                                    alt="app_testing_icon" className="img-fluid" />
                                                <h4>Automation Testing</h4>
                                                <p>Automation saves money and time, then why not in software testing? Our automation set-up
                                                    will make your software deployment faster.</p>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="col-lg-4">
                                        <Link href="/software-testing-services/performance-testing/"
                                        >
                                            <div className="h_expert-c1">
                                                <img src="/images/app.png" alt="app_testing_icon"
                                                    className="img-fluid" />
                                                <h4>Performance Testing</h4>
                                                <p>Crash owing to various performance related factors can be devastating for companies. So
                                                    before deployment, perform performance testing to ensure maximum capability of the
                                                    software</p>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="col-lg-4">
                                        <Link href="/software-testing-services/game-testing">
                                            <div className="h_expert-c1">
                                                <img src="/images/003-gamepad-console.png"
                                                    alt="app_testing_icon" className="img-fluid" />
                                                <h4>Game Testing</h4>
                                                <p>Maximum user experience is the key factor for the success of any game. Make sure that
                                                    your game is capable to deliver that through testing.</p>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="col-lg-4">
                                        <Link href="/software-testing-services/security-testing-services/">
                                            <div className="h_expert-c1">
                                                <img src="/images/001-locked-padlock.png"
                                                    alt="app_testing_icon" className="img-fluid" />
                                                <h4>Security Testing</h4>
                                                <p>Security threats are rising exponentially. Do not fall prey, as the consequences can be
                                                    devastating. Test your software and fish out the vulnerabilities.</p>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='text-center blockanim'>
                    <Link href='/contact-us/'>Get a Quote <i className='fa fa-arrow-right'></i></Link>
                </div>
            </div>

            {/* achievements-section */}
            <div className='section achievements-section'>
                <div className='container'>
                    <h4 className='mb-1 fs-4'>Our amazing</h4>
                    <h2 className='primarycolor fs-1 mb-4'>Achievements</h2>
                    <div className="row">
                        <div className='offset-lg-1 col-lg-10'>
                            <div className="row">
                                <div className="col">
                                    <div className="achievements-h_achieve-co">
                                        <div className="achievements-h_achieve-o">
                                            <div className="achievements-h_achieve-c">
                                                <img src="/images/web.png" alt="icon_circle" className="img-responsive achievements-icon_hi" />
                                            </div>
                                            <div className='numscroller' data-min='1' data-max='500' data-delay='5' data-increment='10'>500+
                                            </div>
                                            <h4>Sites Tested</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="achievements-h_achieve-co">
                                        <div className="achievements-h_achieve-o">
                                            <div className="achievements-h_achieve-c">
                                                <img src="/images/005-search-for-staff.png" alt="icon_circle" className="img-responsive achievements-icon_hi" />
                                            </div>
                                            <div className='numscroller' data-min='1' data-max='30' data-delay='5' data-increment='10'>30+</div>
                                            <h4>Amazing Testers</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="achievements-h_achieve-co">
                                        <div className="achievements-h_achieve-o">
                                            <div className="achievements-h_achieve-c">
                                                <img src="/images/003-specialist-user.png" alt="icon_circle" className="img-responsive achievements-icon_hi" />
                                            </div>
                                            <div className='numscroller' data-min='1' data-max='160' data-delay='5' data-increment='10'>160+
                                            </div>
                                            <h4>Clients Worldwide</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="achievements-h_achieve-co">
                                        <div className="achievements-h_achieve-o">
                                            <div className="achievements-h_achieve-c">
                                                <img src="/images/004-coding.png" alt="icon_circle" className="img-responsive achievements-icon_hi" />
                                            </div>
                                            <div className='numscroller' data-min='1' data-max='300' data-delay='5' data-increment='10'>300+
                                            </div>
                                            <h4>Mobile App Tested</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="achievements-h_achieve-co">
                                        <div className="achievements-h_achieve-o">
                                            <a href="https://in.linkedin.com/company/softwaretestingcompany" target="_blank" rel="noreferrer">
                                                <div className="achievements-h_achieve-c">
                                                    <i className="fab fa-linkedin"></i>
                                                </div>
                                                <div className='numscroller' id="lkd_scr">80K+</div>
                                                <h4>& growing</h4>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* querytest-costetc-section */}
            <div className='section querytest-costetc-section'>
                <div className='container'>
                    <div className='row'>
                        <div className='offset-lg-1 col-lg-10'>
                            <div className='row'>
                                <div className="col-lg-6 text-center">
                                    <div className="querytest-sec_tr">
                                        <div className="querytest-circle-pt my-4">
                                            <img src="/images/Manual-Testing-cost.png" alt="Manual-Testing-cost" />
                                        </div>
                                        <h5 className='fs-4'>Wish to know Manual Testing cost?</h5>
                                        <p>Try Our cost calculator that can give you an estimate</p>
                                        <div className="querytest-circle-pt_a">
                                            <Link className='btn btn-default btn-rounded px-4' href="/test-cost-calculator/">Try Now! <i className='fa fa-arrow-right ms-1'></i></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 text-center">
                                    <div className="querytest-sec_tr">
                                        <div className="querytest-circle-pt my-4">
                                            <img src="/images/Mobile-app-testing.png" alt="Mobile-app-testing" />
                                        </div>
                                        <h5 className='fs-4'>Are you in dark about the cost of your Mobile App QA?</h5>
                                        <p>Try our mobile app testing calculator!</p>
                                        <div className="querytest-circle-pt_a">
                                            <Link className='btn btn-default btn-rounded px-4' href="/mobile-app-testing/">Try Now! <i className='fa fa-arrow-right ms-1'></i></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* workcycle-section */}
            <div className='workcycle-section'>
                <div className='container'>
                    <h2 className='fs-1 mb-4 text-center'>Our Work <span className='primarycolor'>Cycle</span></h2>
                    <div className='row'>
                        <div className='offset-lg-1 col-lg-10'>
                            <div className='row'>
                                <div className='workcycle-rowconnector workcycle-rowconnector1'></div>
                                <div className="col-lg-4">
                                    <div className="workcycle-h_work-c">
                                        <div className="workcycle-h_work-cli">
                                            <img src="/images/discuss.png"
                                                alt="discuss_icon" className="img-responsive" />
                                            <h4>Discuss</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="workcycle-h_work-c">
                                        <div className="workcycle-h_work-cli">
                                            <img src="/images/003-sketch.png"
                                                alt="discuss_icon" className="img-responsive" />
                                            <h4>Plan</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="workcycle-h_work-c">
                                        <div className="workcycle-h_work-cli">
                                            <img src="/images/001-pen.png"
                                                alt="discuss_icon" className="img-responsive" />
                                            <h4>Test Design</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='workcycle-rowconnector workcycle-rowconnector2'></div>
                                <div className="col-lg-4">
                                    <div className="workcycle-h_work-c">
                                        <div className="workcycle-h_work-cli">
                                            <div className="workcycle-h_work-cli">
                                                <img src="/images/002-code.png"
                                                    alt="discuss_icon" className="img-responsive" />
                                                <h4>Execution</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="workcycle-h_work-c">
                                        <div className="workcycle-h_work-cli">
                                            <img src="/images/exit_icon.png"
                                                alt="discuss_icon" className="img-responsive" />
                                            <h4>Exit Criteria</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="workcycle-h_work-c">
                                        <div className="workcycle-h_work-cli">
                                            <img src="/images/reporting_icon.png"
                                                alt="discuss_icon" className="img-responsive" />
                                            <h4>Reporting</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* querytest-costetc-section */}
            <div className='section querytest-costetc-section'>
                <div className='container'>
                    <div className='row'>
                        <div className='offset-lg-1 col-lg-10'>
                            <div className='row'>
                                <div className="col-lg-6 text-center">
                                    <div className="querytest-sec_tr">
                                        <div className="querytest-circle-pt my-4">
                                            <img src="/images/Automation-testing.png" alt="Manual-Testing-cost" />
                                        </div>
                                        <h5 className='fs-4'>Automation testing cost can be a bit tricky!</h5>
                                        <p>How about we give you a clear idea?</p>
                                        <div className="querytest-circle-pt_a">
                                            <Link className='btn btn-default btn-rounded px-4' href="/automation-testing/">Try Now! <i className='fa fa-arrow-right ms-1'></i></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 text-center">
                                    <div className="querytest-sec_tr">
                                        <div className="querytest-circle-pt my-4">
                                            <img src="/images/roi-calculator.png" alt="Mobile-app-testing" />
                                        </div>
                                        <h5 className='fs-4'>Confused about your QA ROI gain?</h5>
                                        <p>Try our QA ROI gain Calculator</p>
                                        <div className="querytest-circle-pt_a">
                                            <Link className='btn btn-default btn-rounded px-4' href="/test-management-services/">Try Now! <i className='fa fa-arrow-right ms-1'></i></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* quick-connect-section */}
            <div className='section quick-connect-section'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <h3 className='text-center mb-2 fs-3'>Know us in detail <span className='primarycolor'>through these Videos!</span></h3>
                            <YoutubeEmbed embedId="TQEdWTGHb2w" />
                        </div>
                        <div className='col-lg-6 quickcontactform-col'>
                            <h3 className='text-center mb-2 fs-3'>Quick <span className='primarycolor'>Contact</span></h3>
                            <div className='row'>
                                <div className='offset-lg-2 col-lg-8'>
                                    <ContactForm />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Design-By-Sagar */}
            {/* media-coverage-section */}
            <div className='media-coverage-section'>
                <div className='container'>
                    <div className='media-coverage'>
                        <h3>Media Coverage</h3>
                        <Link href="/media/">
                            <img src='images/top-news-herald-logo-sml.jpg' className="top-news" alt='top-news' />
                        </Link>
                        <Link href="/media/">
                            <img src='images/online-news-guru-logo-sml.jpg' className="online-news-guru" alt='online-news-guru' />
                        </Link>
                        <Link href="/media/">
                            <img src='images/space-market-now-logo-sml.jpg' className="space-market-now" alt='space-market-now' />
                        </Link>   <Link href="/media/">
                            <img src='images/Market-Feed.jpg' className="space-market-now" alt='space-market-now' />
                        </Link>
                    </div>
                </div>
            </div>
            { /* Our Big Family*/}
            <div className='section our-big-family-section'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6'>
                            <h4 className='mb-1 fs-4'>Our Big</h4>
                            <h2 className='primarycolor fs-1 mb-4'>Family</h2>
                            <p>We are a bunch of techies led by a man who shares the equal
                                enthusiasm and love for the quality analysis process. Started in the
                                year 2011 Testbytes were playing with the big sharks of the testing
                                industry within a short span of time. Our unity and team spirit and
                                the managements ability in choosing the right kind of people accelerated
                                our success by acting as a catalyst.
                            </p>
                            <div className="big-family-button">
                                <Link className='btn btn-default btn-rounded px-4' href="https://careers.testreveal.com/">See More <i className='fa fa-arrow-right ms-1'></i></Link>
                            </div>
                            <div className='social-links'>
                                <ul>
                                    <li><a href='https://www.facebook.com/TestbytesSoftwareTestingCompany' target="_blank" rel="noreferrer" ><i className="fab fa-facebook"></i></a></li>
                                    <li><a href='https://twitter.com/testbytes' target="_blank" rel="noreferrer" ><i className="fab fa-twitter"></i></a></li>
                                    <li><a href='https://www.youtube.com/channel/UCS0vvkVPQgsj7ql9UKpSmGA' target="_blank" rel="noreferrer" ><i className="fab fa-youtube"></i></a></li>
                                    <li><a href='https://in.pinterest.com/testbytes/' target="_blank" rel="noreferrer" ><i className="fab fa-pinterest-p"></i></a></li>
                                    <li><a href='https://www.linkedin.com/company/softwaretestingcompany' target="_blank" rel="noreferrer" ><i className="fab fa-linkedin"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className='family-image'>
                                <img src='images/family_image.png' alt='family_image' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* industries-we-have-section */}

            <div className='section industries-we-have-section'>
                <div className='container'>
                    <div className='row'>
                        <h4 className='mb-1 fs-4'>Industries we have</h4>
                        <h2 className='primarycolor fs-1 mb-4'>Served So far</h2>
                        <div className='col-md-3'>
                            <div className='served'>
                                <div className='served-img'>
                                    <img src='images/001-credit-cards-payment.png' alt='credit-cards-payment' />
                                </div>
                                <p>Banking and Finance</p>
                            </div>
                        </div>
                        <div className='col-md-3'>
                            <div className='served'>
                                <div className='served-img'>
                                    <img src='images/002-cart-of-ecommerce.png' alt='credit-cards-ecommerce' />
                                </div>
                                <p>Ecommerce and Rental</p>
                            </div>
                        </div>
                        <div className='col-md-3'>
                            <div className='served'>
                                <div className='served-img'>
                                    <img src='images/003-open-book.png' alt='credit-cards-open-book' />
                                </div>
                                <p>Education and Elearning</p>
                            </div>
                        </div>
                        <div className='col-md-3'>
                            <div className='served'>
                                <div className='served-img'>
                                    <img src='images/004-capitol-building.png' alt='credit-open-book' />
                                </div>
                                <p>Healthcare</p>
                            </div>
                        </div>
                        <div className='col-md-3'>
                            <div className='served'>
                                <div className='served-img'>
                                    <img src='images/005-heartbeat.png' alt='credit-open-book' />
                                </div>
                                <p>Insurance</p>
                            </div>
                        </div>
                        <div className='col-md-3'>
                            <div className='served'>
                                <div className='served-img'>
                                    <img src='images/006-house.png' alt='credit-house' />
                                </div>
                                <p>Insurance</p>
                            </div>
                        </div>
                        <div className='col-md-3'>
                            <div className='served'>
                                <div className='served-img'>
                                    <img src='images/007-laptop.png' alt='credit-cards-payment' />
                                </div>
                                <p>IT and Consulting</p>
                            </div>
                        </div>
                        <div className='col-md-3'>
                            <div className='served'>
                                <div className='served-img'>
                                    <img src='images/008-factory.png' alt='credit-cards-payment' />
                                </div>
                                <p>Manufacturing</p>
                            </div>
                        </div>
                        <div className='col-md-3'>
                            <div className='served'>
                                <div className='served-img'>
                                    <img src='images/009-video-camera.png' alt='credit-cards-payment' />
                                </div>
                                <p>Media and Enterainment</p>
                            </div>
                        </div>
                        <div className='col-md-3'>
                            <div className='served'>
                                <div className='served-img'>
                                    <img src='images/010-folded-newspaper.png' alt='credit-cards-payment' />
                                </div>
                                <p>News and Publication</p>
                            </div>
                        </div>
                        <div className='col-md-3'>
                            <div className='served'>
                                <div className='served-img'>
                                    <img src='images/011-startup.png' className="img-responsive" alt='credit-cards-payment' />
                                </div>
                                <p>Startups</p>
                            </div>
                        </div>
                        <div className='col-md-3'>
                            <div className='served'>
                                <div className='served-img'>
                                    <img src='images/012-signal-tower.png' className="img-responsive" alt='credit-cards-payment' />
                                </div>
                                <p>Telecome</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
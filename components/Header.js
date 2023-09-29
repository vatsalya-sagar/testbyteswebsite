import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function Header() {

    function sidebarmenuClickChangeClass() {
        document.querySelector('.main-sidebarmenu').classList.toggle('main-sidebarmenu-active')
    }

    return (
        <>
            <div className="customnavbar" id="customnavbar">
                <div className="desktop-topnav">
                    <div className="container">
                        <div className="d-flex">
                            <ul className="d-flex align-items-center">
                                <li className="me-4"><a href="mailto:info@testbytes.net"><i className="fa fa-envelope"></i> info@testbytes.net</a></li>
                                <li className="me-4"><a href="tel:+1 (929) 552-0053"><i className="fa fa-phone-alt"></i> Sales: +1 (929) 552-0053</a></li>
                                <li className="me-4"><a href="tel:+91 8113 862 000"><i className="fa fa-phone-alt"></i> HR +91 8113 862 000</a></li>
                            </ul>
                            <ul className="d-flex ms-auto align-items-center">
                                <li className="me-2"><a href="https://www.facebook.com/TestbytesSoftwareTestingCompany/" target="_blank" className="fs-6 lh-1" rel="noreferrer"><i className="fab fa-facebook"></i></a></li>
                                <li className="me-2"><a href="https://twitter.com/testbytes" target="_blank" rel="noreferrer" className="fs-6 lh-1"><i className="fab fa-twitter"></i></a></li>
                                <li className="me-2"><a href="https://www.linkedin.com/company/3115043/" target="_blank" rel="noreferrer" className="fs-6 lh-1"><i className="fab fa-linkedin"></i></a></li>
                                <li className="me-2"><a href="https://www.instagram.com/testbytes321/" target="_blank" rel="noreferrer" className="fs-6 lh-1"><i className="fab fa-instagram"></i></a></li>
                                <li className="me-2"><a href="https://www.youtube.com/channel/UCS0vvkVPQgsj7ql9UKpSmGA" target="_blank" rel="noreferrer" className="fs-6 lh-1"><i className="fab fa-youtube"></i></a></li>
                                <li className="me-2"><a href="https://mobileappdevelopmentcost.com/Calculator/Domain/?utm_source=MADC_LP&utm_medium=CX_Top_CTA_Btn&utm_campaign=Lead_gen" target="_blank" rel="noreferrer" className="btn btn-primary py-1 px-3 btn-rounded" style={{ color: `#fff` }}>Test Cost Calculator</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <nav className="navbar navbar-expand-lg">
                    <div className="container">
                        <Link className="navbar-brand" href="/">
                            <img
                                src='/images/tb--logo.png'
                                alt="Testbytes"
                            />
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link" href="/">Home</Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle" href="/about-us/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        About Us
                                    </Link>
                                    <ul className="dropdown-menu">
                                        <li><Link className="dropdown-item" href="/about-us/">Who We Are?</Link></li>
                                        <li>
                                            <Link className="dropdown-item" href="/faq">FAQ</Link>
                                        </li>
                                        <li>
                                            <Link className="dropdown-item" href="/software-testing-clients/">Clients</Link>
                                        </li>

                                        <li>
                                            <Link className="dropdown-item" href="/why-testbytes/">Why Testbytes</Link>
                                        </li>
                                        <li>
                                            <Link className="dropdown-item" href="/portfolio/">Portfolio</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown servicesdropdownmenudesktop">
                                    <Link className="nav-link dropdown-toggle" href="/services" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Services
                                    </Link>
                                    <ul className="dropdown-menu">
                                        <div className="dropdown-menuservices">
                                            <div className="dropdown-menuservices-cols">
                                                <ul className="mb-4">
                                                    <li>
                                                        <Link href="/mobile-app-testing/" className="fw-bold">Mobile App Testing</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/android-app-testing/">Android</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/ipad-app-testing/">iPad</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/windows-app-testing/">Windows</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/iphone-app-testing/">iPhone</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/software-testing-services/game-testing/" className="fw-bold">Game Testing</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/test-management-services/" className="fw-bold">Test Management Services</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/qa-staffing-and-hiring/" className="fw-bold">QA Staffing and Hiring</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/automation-testing/" className="fw-bold">Automation Testing</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/webfunctional-automation-testing/">Web Functional Automation</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/webperformance-automation-testing/">Web Performance Automation</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/mobile-automation-testing/">Mobile Automation</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/continuous-integration-testing/">Continuous Integration Testing</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="dropdown-menuservices-cols">
                                                <ul>
                                                    <li>
                                                        <Link href="/web-application-testing-services/" className="fw-bold">Web Application Testing</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/security-testing-services/" className="fw-bold">Security Testing</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/penetration-testing-services/">Penetration Testing</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/vulnerability-scanning-services/">Vulnerability Scanning</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/security-scanning-services/">Security Scanning</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/risk-assessment-services/">Risk Assessment</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/security-auditing-services/">Security Auditing</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/source-code-audit/">Source Code Audit</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="dropdown-menuservices-cols">
                                                <ul>
                                                    <li>
                                                        <Link href="/performance-testing/" className="fw-bold">Software Performance Testing</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/load-testing/">Load Testing</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/stress-testing/">Stress Testing</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/endurance-testing/">Endurance Testing</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/scalability-testing/">Scalability Testing</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/volume-testing/">Volume Testing</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="dropdown-menuservices-cols">
                                                <ul>
                                                    <li>
                                                        <Link href="/functionality-testing/" className="fw-bold">Functionality Testing</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/unit-testing/">Unit Testing</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/integration-testing-services/">Integration Testing</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/regression-testing/">Regression Testing</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/smoke-testing/">Smoke Testing</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/sanity-testing/">Sanity Testing</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/interface-testing/">Interface Testing</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/user-acceptance-testing/">User Acceptance</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/beta-testing/">Beta Testing</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="dropdown-menuservices-cols">
                                                <ul>
                                                    <li>
                                                        <Link href="/browser-compatibility-testing/" className="fw-bold">Browser Compatibility</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/usability-testing/">Usability</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/desktop-game-testing/">Desktop Game Testing</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/localization-testing/">Localization Testing</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Industries
                                    </Link>
                                    <ul className="dropdown-menu">
                                        <li>
                                            <Link className="dropdown-item" href="/ecommerce-testing-services/">Ecommerce Testing Services</Link>
                                        </li>
                                        <li>
                                            <Link className="dropdown-item" href="/banking-application-testing/">Banking Application Testing</Link>
                                        </li>
                                        <li>
                                            <Link className="dropdown-item" href="/elearning-application-testing/">E-learning Application Testing</Link>
                                        </li>
                                        <li>
                                            <Link className="dropdown-item" href="/healthcare-app-testing/">Healthcare Application Testing</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Resources
                                    </Link>
                                    <ul className="dropdown-menu">
                                        <li>
                                            <Link className="dropdown-item" href="/resource/">View All Resources</Link>
                                        </li>
                                        <li>
                                            <Link className="dropdown-item" href="/resources/infographics/">Infographics</Link>
                                        </li>
                                        <li>
                                            <Link className="dropdown-item" href="/resources/video/">Video</Link>
                                        </li>
                                        <li>
                                            <Link className="dropdown-item" href="/resources/pdf/">PDF</Link>
                                        </li>
                                        <li>
                                            <Link className="dropdown-item" href="/resources/downloadable/">Downloadables</Link>
                                        </li>
                                        <li>
                                            <Link className="dropdown-item" href="/software-testing-blog/">Blogs</Link>
                                        </li>
                                        <li>
                                            <Link className="dropdown-item" href="/software-testing-events/">Software Testing Events</Link>
                                        </li>
                                        <li>
                                            <Link className="dropdown-item" href="/speakers-list/">Testing event speakers list</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Career
                                    </Link>
                                    <ul className="dropdown-menu">
                                        <li>
                                            <Link className="dropdown-item" href="/career/">Join Us</Link>
                                        </li>
                                        <li>
                                            <Link className="dropdown-item" href="/software-testing-help/">Software Testing Help</Link>
                                        </li>
                                        <li>
                                            <Link className="dropdown-item" href="/expert-insights/">Expert Insights</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link hireTesterModalBtn" href="/hire-a-tester">Hire Testers</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" href="/testing-cost-calculator-app/">Our App</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" href="/contact-us/">Contact Us</Link>
                                </li>
                                <li className="nav-item">
                                    <div onClick={sidebarmenuClickChangeClass} className="nav-link main-sidebarmenu-btn"><i className="fa fa-bars"></i></div>
                                </li>
                            </ul>
                        </div>
                    </div >
                </nav >
                <div className="responsivemenuicon-btn">
                    <div onClick={sidebarmenuClickChangeClass}><i className="fa fa-bars"></i></div>
                </div>
            </div >

            {/* main-sidebarmenu */}
            <div className="main-sidebarmenu" >
                <div className="main-sidebarmenu-close" onClick={sidebarmenuClickChangeClass}></div>
                <div className="main-sidebarmenu-wrapper">
                    {/* rightnav */}
                    <div className="main-sidebarmenu-rightnav">
                        <nav className="navbar navbar-expand-lg">
                            <div id="navbarSupportedContentSidebar">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            About Us
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li><Link className="dropdown-item" href="/about-us/" onClick={sidebarmenuClickChangeClass}>Who We Are?</Link></li>
                                            <li><Link className="dropdown-item" href="/faq" onClick={sidebarmenuClickChangeClass}>FAQ</Link></li>
                                            <li><Link className="dropdown-item" href="/software-testing-clients/" onClick={sidebarmenuClickChangeClass}>Clients</Link></li>
                                            <li><Link className="dropdown-item" href="/why-testbytes/" onClick={sidebarmenuClickChangeClass}>Why Testbytes</Link></li>
                                            <li><Link className="dropdown-item" href="/portfolio/" onClick={sidebarmenuClickChangeClass}>Portfolio</Link></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Services
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li>
                                                <div className="entlabel-div">
                                                    <label htmlFor="entlabel1">Mobile App Testing <i className="fa fa-angle-down ms-2"></i></label>
                                                    <input type="checkbox" className="entlabel" id="entlabel1" />
                                                    <ul>
                                                        <li>
                                                            <Link href="/android-app-testing/" onClick={sidebarmenuClickChangeClass}>Android</Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/ipad-app-testing/" onClick={sidebarmenuClickChangeClass}>iPad</Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/windows-app-testing/" onClick={sidebarmenuClickChangeClass}>Windows</Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/iphone-app-testing/" onClick={sidebarmenuClickChangeClass}>iPhone</Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li><Link className="dropdown-item" href='/software-testing-services/game-testing/' onClick={sidebarmenuClickChangeClass}>Game Testing</Link></li>
                                            <li><Link className="dropdown-item" href="/test-management-services/" onClick={sidebarmenuClickChangeClass}>Test Management Services</Link></li>
                                            <li><Link className="dropdown-item" href="/qa-staffing-and-hiring/" onClick={sidebarmenuClickChangeClass}>QA Staffing and Hiring</Link></li>
                                            <li><Link className="dropdown-item" href="/automation-testing/" onClick={sidebarmenuClickChangeClass}>Automation Testing</Link></li>
                                            <li>
                                                <div className="entlabel-div">
                                                    <label htmlFor="entlabel2">Automation Testing <i className="fa fa-angle-down ms-2"></i></label>
                                                    <input type="checkbox" className="entlabel" id="entlabel2" />
                                                    <ul>
                                                        <li>
                                                            <Link href="/webfunctional-automation-testing/" onClick={sidebarmenuClickChangeClass}>Web Functional Automation</Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/webperformance-automation-testing/" onClick={sidebarmenuClickChangeClass}>Web Performance Automation</Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/mobile-automation-testing/" onClick={sidebarmenuClickChangeClass}>Mobile Automation</Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/continuous-integration-testing/" onClick={sidebarmenuClickChangeClass}>Continuous Integration Testing</Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li>
                                                <Link className="dropdown-item" href="/web-application-testing-services/" onClick={sidebarmenuClickChangeClass}>Web Application Testing</Link>
                                            </li>
                                            <li>
                                                <div className="entlabel-div">
                                                    <label htmlFor="entlabel3">Security Testing <i className="fa fa-angle-down ms-2"></i></label>
                                                    <input type="checkbox" className="entlabel" id="entlabel3" />
                                                    <ul>
                                                        <li>
                                                            <Link href="/software-testing-services/security-testing-services/" onClick={sidebarmenuClickChangeClass}>Security Testing</Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/software-testing-services/penetration-testing-services/" onClick={sidebarmenuClickChangeClass}>Penetration Testing</Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/vulnerability-scanning-services/" onClick={sidebarmenuClickChangeClass}>Vulnerability Scanning</Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/security-scanning-services/" onClick={sidebarmenuClickChangeClass}>Security Scanning</Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/risk-assessment-services/" onClick={sidebarmenuClickChangeClass}>Risk Assessment</Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/security-auditing-services/" onClick={sidebarmenuClickChangeClass}>Security Auditing</Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/source-code-audit/" onClick={sidebarmenuClickChangeClass}>Source Code Audit</Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="entlabel-div">
                                                    <label htmlFor="entlabel3">Software Performance Testing <i className="fa fa-angle-down ms-2"></i></label>
                                                    <input type="checkbox" className="entlabel" id="entlabel3" />
                                                    <ul>
                                                        <li>
                                                            <Link href="/software-testing-services/performance-testing/" onClick={sidebarmenuClickChangeClass}>Software Performance Testing</Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/load-testing/" onClick={sidebarmenuClickChangeClass}>Load Testing</Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/stress-testing/" onClick={sidebarmenuClickChangeClass}>Stress Testing</Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/endurance-testing/" onClick={sidebarmenuClickChangeClass}>Endurance Testing</Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/scalability-testing/" onClick={sidebarmenuClickChangeClass}>Scalability Testing</Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/volume-testing/" onClick={sidebarmenuClickChangeClass}>Volume Testing</Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="entlabel-div">
                                                    <label htmlFor="entlabel3">Functionality Testing <i className="fa fa-angle-down ms-2"></i></label>
                                                    <input type="checkbox" className="entlabel" id="entlabel3" />
                                                    <ul>
                                                        <li>
                                                            <Link href="/software-testing-services/functionality-testing/" onClick={sidebarmenuClickChangeClass}>Functionality Testing</Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/unit-testing/" onClick={sidebarmenuClickChangeClass}>Unit Testing</Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/software-testing-services/integration-testing-services/" onClick={sidebarmenuClickChangeClass}>Integration Testing</Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/regression-testing/" onClick={sidebarmenuClickChangeClass}>Regression Testing</Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/smoke-testing/" onClick={sidebarmenuClickChangeClass}>Smoke Testing</Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/sanity-testing/" onClick={sidebarmenuClickChangeClass}>Sanity Testing</Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/interface-testing/" onClick={sidebarmenuClickChangeClass}>Interface Testing</Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/user-acceptance-testing/" onClick={sidebarmenuClickChangeClass}>User Acceptance</Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/beta-testing/" onClick={sidebarmenuClickChangeClass}>Beta Testing</Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="entlabel-div">
                                                    <label htmlFor="entlabel3">Browser Compatibility <i className="fa fa-angle-down ms-2"></i></label>
                                                    <input type="checkbox" className="entlabel" id="entlabel3" />
                                                    <ul>
                                                        <li>
                                                            <Link href="/browser-compatibility-testing/" onClick={sidebarmenuClickChangeClass}>Browser Compatibility</Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/software-testing-services/usability-testing/" onClick={sidebarmenuClickChangeClass}>Usability</Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/desktop-game-testing/" onClick={sidebarmenuClickChangeClass}>Desktop Game Testing</Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/software-testing-services/localization-testing/" onClick={sidebarmenuClickChangeClass}>Localization Testing</Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Industries
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li>
                                                <Link className="dropdown-item" href="/ecommerce-testing-services/" onClick={sidebarmenuClickChangeClass}>Ecommerce Testing Services</Link>
                                            </li>
                                            <li>
                                                <Link className="dropdown-item" href="/banking-application-testing/" onClick={sidebarmenuClickChangeClass}>Banking Application Testing</Link>
                                            </li>
                                            <li>
                                                <Link className="dropdown-item" href="/elearning-application-testing/" onClick={sidebarmenuClickChangeClass}>E-learning Application Testing</Link>
                                            </li>
                                            <li>
                                                <Link className="dropdown-item" href="/healthcare-app-testing/" onClick={sidebarmenuClickChangeClass}>Healthcare Application Testing</Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Resources
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li>
                                                <Link className="dropdown-item" href="/resource/" onClick={sidebarmenuClickChangeClass}>View All Resources</Link>
                                            </li>
                                            <li>
                                                <Link className="dropdown-item" href="/resources/infographics/" onClick={sidebarmenuClickChangeClass}>Infographics</Link>
                                            </li>
                                            <li>
                                                <Link className="dropdown-item" href="/resources/video/" onClick={sidebarmenuClickChangeClass}>Video</Link>
                                            </li>
                                            <li>
                                                <Link className="dropdown-item" href="/resources/pdf/" onClick={sidebarmenuClickChangeClass}>PDF</Link>
                                            </li>
                                            <li>
                                                <Link className="dropdown-item" href="/resources/downloadable/" onClick={sidebarmenuClickChangeClass}>Downloadables</Link>
                                            </li>
                                            <li>
                                                <Link className="dropdown-item" href="/software-testing-blog/" onClick={sidebarmenuClickChangeClass}>Blogs</Link>
                                            </li>
                                            <li>
                                                <Link className="dropdown-item" href="/software-testing-events/" onClick={sidebarmenuClickChangeClass}>Software Testing Events</Link>
                                            </li>
                                            <li>
                                                <Link className="dropdown-item" href="/speakers-list/" onClick={sidebarmenuClickChangeClass}>Testing event speakers list</Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Career
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li>
                                                <Link className="dropdown-item" href="/career/" onClick={sidebarmenuClickChangeClass}>Join Us</Link>
                                            </li>
                                            <li>
                                                <Link className="dropdown-item" href="/software-testing-help/" onClick={sidebarmenuClickChangeClass}>Software Testing Help</Link>
                                            </li>
                                            <li>
                                                <Link className="dropdown-item" href="/expert-insights/" onClick={sidebarmenuClickChangeClass}>Expert Insights</Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" href="/testing-cost-calculator-app/" onClick={sidebarmenuClickChangeClass}>Our App</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" href="/contact-us/" onClick={sidebarmenuClickChangeClass}>Contact Us</Link>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}
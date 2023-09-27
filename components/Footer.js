import Link from "next/link";
import React from "react";

export default function Header() {

    // get full year
    const yeardd = new Date();
    let year = yeardd.getFullYear();

    return (
        <>
            <div className="section footer-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <h3 className="fs-4 txt-white"><strong>Overview</strong></h3>
                            <div className="overview-menu">
                                <ul>
                                    <li><Link href='/'>Home</Link></li>
                                    <li><Link href='/about-us/'>About Us </Link></li>
                                    <li><Link href='/software-testing-services/'>Software Testing Services</Link></li>
                                    <li><Link href='/career/'>Career</Link></li>
                                    <li><Link href='/software-testing-blog/'>Blog</Link></li>
                                    <li><Link href='/software-testing-help/'>Software Testing Help </Link></li>
                                    <li><Link href='/software-testing-events/'>Software Testing Events</Link></li>
                                    <li><Link href='/terms-and-condition/'>Terms and condition</Link></li>
                                    <li><Link href='/privacy-policy-2/'>Privacy Policy</Link></li>
                                </ul>
                                <div className="Footer-btn">
                                    <Link className='btn btn-transparent btn-rounded px-4' href="/hire-a-tester/">Hire Tester</Link>
                                    <Link className='mb-4 btn btn-transparent btn-rounded btn-cal px-4' href="/test-cost-calculator/">Test Cost Calculator</Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <h3 className="fs-4 txt-white"><strong>Services</strong></h3>
                            <div className="overview-menu">
                                <ul>
                                    <li><Link href='/mobile-app-testing/'>Mobile App Testing</Link></li>
                                    <li><Link href='/web-application-testing-services/'>Web App Testing</Link></li>
                                    <li><Link href='/software-testing-services/game-testing/'></Link>Game Testing</li>
                                    <li><Link href='/automation-testing/'>Automation Testing</Link></li>
                                    <li><Link href='/load-testing/'>Load Testing</Link></li>
                                    <li><Link href='/software-testing-services/security-testing-services/'>Security Testing </Link></li>
                                    <li><Link href='/Performance Testing/'>Performance Testing</Link></li>
                                </ul>
                            </div>
                            <h3 className="fs-4 txt-white mt-4"><strong>Industries</strong></h3>
                            <div className="overview-menu">
                                <ul>
                                    <li><Link href='/ecommerce-testing-services'>Ecommerce Testing Services</Link></li>
                                    <li><Link href='/banking-application-testing'>Banking Application Testing</Link></li>
                                    <li><Link href='/elearning-application-testing'>E-learning Application Testing</Link></li>
                                    <li><Link href='/healthcare-app-testing/'>Healthcare Application Testing</Link></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="footer-blog-section align-items-center">
                                <h3 className="fs-4 txt-white mb-0"><strong>Our Blogs</strong></h3>
                                <Link className='btn btn-transparent btn-rounded' href="/software-testing-blog/">459+ More Blogs</Link>
                            </div>
                            <div className="footerblogrow">
                                <div className="footerblogrow-column">
                                    <Link href="/blog/white-box-testing/">
                                        <img src='/images/WhiteBoxTesting-Banner.jpg' className="footer-blog-img" alt='blog' />
                                    </Link>
                                </div>

                                <div className="footerblogrow-column">
                                    <Link href="/blog/selenium-ide/">
                                        <img src='/images/Selenium-IDE-Tutorial-For-beginners-1.jpg' className="footer-blog-img" alt='blog' />
                                    </Link>
                                </div>

                                <div className="footerblogrow-column">
                                    <Link href="/blog/website-testing/">
                                        <img src='/images/website-testing-2.jpg' className="footer-blog-img" alt='blog' />
                                    </Link>
                                </div>

                                <div className="footerblogrow-column">
                                    <Link href="/blog/what-is-play-testing/">
                                        <img src='/images/play-1.jpg' className="footer-blog-img" alt='blog' />
                                    </Link>
                                </div>
                            </div>
                            <ul className="footersocial-links">
                                <li>
                                    <a href="https://www.facebook.com/TestbytesSoftwareTestingCompany/" target="_blank" rel="noreferrer"><i className="fab fa-facebook"></i></a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/testbytes_testing_company/" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a>
                                </li>
                                <li>
                                    <a href="https://twitter.com/testbytes" target="_blank" rel="noreferrer"><i className="fab fa-twitter"></i></a>
                                </li>
                                <li>
                                    <a href="https://in.pinterest.com/testbytes/" target="_blank" rel="noreferrer"><i className="fab fa-pinterest"></i></a>
                                </li>
                                <li>
                                    <a href="https://www.quora.com/profile/Testbytes" target="_blank" rel="noreferrer"><i className="fab fa-quora"></i></a>
                                </li>
                            </ul>
                        </div>

                        <div className="col-md-3">
                            <h3 className="fs-4 txt-white mb-4"><strong>Contact Us</strong></h3>
                            <ul className="address-details-footer">
                                <li><i className="fa fa-home"></i>Kalas road, Vishrantwadi,<br /> Pune, Maharashtra-411015</li>
                                <li><i className="fa fa-home"></i>65 Broadway Suite 1101, <br />New York NY 10006</li>
                                <li><i className="fa fa-envelope"></i><a href="mailto:info@testbytes.net">info@testbytes.net</a></li>
                                <li><i className="fa fa-phone"></i><a href="tel:+1 (929) 552-0053">+1 (929) 552-0053</a></li>
                                <li><i className="fa fa-fax"></i><a href="tel:(201) 589-1320">(201) 589-1320</a></li>
                            </ul>
                            <h3 className="fs-5 txt-white mt-5">Follow us on</h3>
                            <ul className="footersocial-links">
                                <li>
                                    <a href="https://in.linkedin.com/company/softwaretestingcompany" target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i></a>
                                </li>
                                <li>
                                    <a href="https://www.youtube.com/channel/UCS0vvkVPQgsj7ql9UKpSmGA" target="_blank" rel="noreferrer"><i className="fab fa-youtube"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* footer-copyright */}
            <div className="footer-copyright">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <img src="/images/footer_logo.png" alt="Testbytes" />
                        </div>
                        <div className="col-lg-6">
                            <p className="mb-0">Copyright &copy; {year} | Digital Marketing by Jointviews</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="fixedfooternavbar">
                <ul>
                    <li><Link href='/contact-us' className="text-center"><i className="fa fa-envelope"></i><span className="d-block">Mail</span></Link></li>
                    <li><a href='https://api.whatsapp.com/send?phone=19295521900' className="text-center"><i className="fab fa-whatsapp"></i><span className="d-block">WhatsApp</span></a></li>
                    <li><Link href='/hire-mobile-app-developers/' className="text-center"><i className="fa fa-user"></i><span className="d-block">Hire</span></Link></li>
                    <li><a href='#' className="text-center"><i className="fa fa-dollar-sign"></i><span className="d-block">Cost Calc.</span></a></li>
                    <li><a href='tel:+1 (929) 552-0053' className="text-center"><i className="fa fa-phone"></i><span className="d-block">Call Us</span></a></li>
                </ul>
            </div>

            {/* fixedcontact-btn */}
            <div className="fixedcontact-btn">
                <Link className="btn btn-primary" href='/contact-us'><i className="fa fa-envelope"></i> Contact Us</Link>
            </div>

            {/* Scroll to top */}
            <a href="#" className="back-top-btn"></a>
        </>
    )
}
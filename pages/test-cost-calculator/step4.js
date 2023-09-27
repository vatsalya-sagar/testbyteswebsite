import { useState, useEffect } from "react";
import { useRouter } from 'next/router'
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";


export default function Step4() {
    const router = useRouter();

    // Perform localStorage action
    if (typeof window !== 'undefined') {
        var getStorage1 = localStorage.getItem("Domain Selected");
    }
    const [domainSelected, setDomainSelected] = useState('');

    // get localstorage value in useeffect
    useEffect(() => {
        setDomainSelected(getStorage1);

        // FORM VALIDATION
        'use strict'
        var forms = document.querySelectorAll('.needs-validation')
        Array.prototype.slice.call(forms)
            .forEach(function (form) {
                form.addEventListener('submit', function (event) {
                    if (!form.checkValidity()) {
                        event.preventDefault()
                        event.stopPropagation()
                    }
                    else {}
                    form.classList.add('was-validated')
                }, false)
            });
    });

    // set values
    const [value, setValue] = useState(5);

    // handChange event
    const handleChange = (e) => {
        setValue(e.target.value);
    };

    // handleSubmitForm
    const handleSubmitForm = (e) => {
        e.preventDefault();
        console.log(value);
        localStorage.setItem("Platform", value);
        router.push('/test-cost-calculator/step5')
    };

    return (
        <>
        <Head>
            <title>Step 4 | Test Cost Calculator | Testrveal</title>
            <meta name="description" content="We will incorporate QA (Quality Assurance) into your development pipeline so that you get a robust product at the end." />
        </Head>

        

        <div className="testcost-containerfluid">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6 testcost-img-column">
                        <img src="/images/test-calc/ACC_04.svg" />
                    </div>
                    <div className="col-lg-5">
                        <form onSubmit={handleSubmitForm} className="needs-validation testcost-contentwrapper" autoComplete="off" noValidate>
                            <div className="row text-center mb-4">
                                <div className="col-lg-12">
                                    <h1 className="color-primary mb-5">Test Effort Calculation</h1>
                                    <h3 className="mb-0">Platform</h3>
                                    <p className="mb-5">(Select atleast one option)</p>
                                </div>

                                <div className="validation-wrapper">
                                    <div className="invalid-feedback">
                                        Please select any field
                                    </div>
                                </div>

                                <div className="col-lg-4">
                                    <div className="cal_step3Caintain cal_step3Caintain-circle">
                                        <label htmlFor="platform1">
                                            <input type="radio" name="platform" id="platform1" value="Web" onChange={handleChange} required />
                                            <div>
                                                <i className="fa fa-desktop mb-3"></i>
                                                <p className="mb-0">Web</p>
                                            </div>
                                        </label>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="cal_step3Caintain cal_step3Caintain-circle">
                                        <label htmlFor="platform2">
                                            <input type="radio" name="platform" id="platform2" value="Mobile" onChange={handleChange} required />
                                            <div>
                                                <i className="fa fa-mobile-alt mb-3"></i>
                                                <p className="mb-0">Mobile</p>
                                            </div>
                                        </label>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="cal_step3Caintain cal_step3Caintain-circle">
                                        <label htmlFor="platform3">
                                            <input type="radio" name="platform" id="platform3" value="Both" onChange={handleChange} required />
                                            <div>
                                                <i className="fa fa-laptop-code mb-3"></i>
                                                <p className="mb-0">Both</p>
                                            </div>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="my-5 col-lg-12 d-flex justify-content-center">
                                    <Link href="/test-cost-calculator/step3">
                                        <div className="btn btn-bordered btn-transparent btn-lg btn-rounded me-3"><i className="fa fa-arrow-left"></i> Prev</div>
                                    </Link>
                                    <button type="submit" className="btn btn-bordered btn-transparent btn-lg btn-rounded">Next <i className="fa fa-arrow-right"></i></button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

   
    </>
  );
}

export async function getStaticProps() {
    return {
        props: {
            isCalcPage: true
        },
        revalidate: 10,
    }
}
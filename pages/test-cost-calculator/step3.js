import { useState, useEffect } from "react";
import { useRouter } from 'next/router'
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";


export default function Step3() {
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
        localStorage.setItem("Number of External Interface", value);
        router.push('/test-cost-calculator/step4')
    };

    return (
        <>
        <Head>
            <title>Step 3 | Test Cost Calculator | Testrveal</title>
            <meta name="description" content="We will incorporate QA (Quality Assurance) into your development pipeline so that you get a robust product at the end." />
        </Head>

      

        <div className="testcost-containerfluid">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6 testcost-img-column">
                        <img src="https://testreveal.com/images/test-calc/ACC_03.svg" />
                    </div>
                    <div className="col-lg-5">
                        <form onSubmit={handleSubmitForm} className="needs-validation testcost-contentwrapper" autoComplete="off" noValidate>
                            <div className="row text-center mb-4">
                                <div className="col-lg-12">
                                    <h1 className="color-primary mb-5">Test Effort Calculation</h1>
                                    <h3 className="mb-0">Number of External Interface</h3>
                                    <p className="mb-5">(*How many third party integrations one there?)</p>
                                </div>

                                <div className="validation-wrapper">
                                    <div className="invalid-feedback">
                                        Please select any field
                                    </div>
                                </div>

                                <div className="col-lg-3">
                                    <div className="cal_step3Caintain cal_step3Caintain-numbofextui">
                                        <label htmlFor="externalinterface1">
                                            <input type="radio" name="externalinterface" id="externalinterface1" value="0-3" onChange={handleChange} required />
                                            <div>
                                                <p>Simple</p>
                                                <p>0-3</p>
                                                <i className="fa fa-check-circle"></i>
                                            </div>
                                        </label>
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <div className="cal_step3Caintain cal_step3Caintain-numbofextui">
                                        <label htmlFor="externalinterface2">
                                            <input type="radio" name="externalinterface" id="externalinterface2" value="4" onChange={handleChange} required />
                                            <div>
                                                <p>Medium</p>
                                                <p>4</p>
                                                <i className="fa fa-check-circle"></i>
                                            </div>
                                        </label>
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <div className="cal_step3Caintain cal_step3Caintain-numbofextui">
                                        <label htmlFor="externalinterface3">
                                            <input type="radio" name="externalinterface" id="externalinterface3" value="5" onChange={handleChange} required />
                                            <div>
                                                <p>Complex</p>
                                                <p>5</p>
                                                <i className="fa fa-check-circle"></i>
                                            </div>
                                        </label>
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <div className="cal_step3Caintain cal_step3Caintain-numbofextui">
                                        <label htmlFor="externalinterface4">
                                            <input type="radio" name="externalinterface" id="externalinterface4" value="5+" onChange={handleChange} required />
                                            <div>
                                                <p>Very Complex</p>
                                                <p>5+</p>
                                                <i className="fa fa-check-circle"></i>
                                            </div>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="my-5 col-lg-12 d-flex justify-content-center">
                                    <Link href="/test-cost-calculator/step2">
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
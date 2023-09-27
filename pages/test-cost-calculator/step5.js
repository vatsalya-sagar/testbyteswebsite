import { useState, useEffect } from "react";
import { useRouter } from 'next/router'
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";


export default function Step5() {
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
        localStorage.setItem("How many cycles of testing is required?", value);
        router.push('/test-cost-calculator/step6')
    };

    return (
        <>
        <Head>
            <title>Step 5 | Test Cost Calculator | Testrveal</title>
            <meta name="description" content="We will incorporate QA (Quality Assurance) into your development pipeline so that you get a robust product at the end." />
        </Head>


        <div className="testcost-containerfluid">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6 testcost-img-column">
                        <img src="/images/test-calc/ACC_05.svg" />
                    </div>
                    <div className="col-lg-5">
                        <form onSubmit={handleSubmitForm} className="needs-validation testcost-contentwrapper" autoComplete="off" noValidate>
                            <div className="row text-center mb-4">
                                <div className="col-lg-12">
                                    <h1 className="color-primary mb-5">Test Effort Calculation</h1>
                                    <h3 className="mb-0">How many cycles of testing is required?</h3>
                                </div>

                                <img src="/images/test-calc/oneCycleStep5.svg" style={{width: `70%`, margin: `30px auto`}} />

                                <div className="validation-wrapper">
                                    <div className="invalid-feedback">
                                        Please select any field
                                    </div>
                                </div>

                                <div className="offset-lg-2 col-lg-8">
                                    <div className="row test-cost-testcyclesformrow">
                                        <div className="col">
                                            <div className="form-check d-flex justify-content-center align-items-center">
                                                <input className="form-check-input" type="radio" name="testCycleField" id="testCycleField1" value="2" onChange={handleChange} required />
                                                <label className="form-check-label mt-2 ms-2" htmlFor="testCycleField1">
                                                    2
                                                </label>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="form-check d-flex justify-content-center align-items-center">
                                                <input className="form-check-input" type="radio" name="testCycleField" id="testCycleField2" value="3" onChange={handleChange} required />
                                                <label className="form-check-label mt-2 ms-2" htmlFor="testCycleField2">
                                                    3
                                                </label>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="form-check d-flex justify-content-center align-items-center">
                                                <input className="form-check-input" type="radio" name="testCycleField" id="testCycleField3" value="4" onChange={handleChange} required />
                                                <label className="form-check-label mt-2 ms-2" htmlFor="testCycleField3">
                                                    4
                                                </label>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="form-check d-flex justify-content-center align-items-center">
                                                <input className="form-check-input" type="radio" name="testCycleField" id="testCycleField4" value="5" onChange={handleChange} required />
                                                <label className="form-check-label mt-2 ms-2" htmlFor="testCycleField4">
                                                    5
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                            <div className="row">
                                <div className="my-5 col-lg-12 d-flex justify-content-center">
                                    <Link href="/test-cost-calculator/step4">
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
// import { useState, useEffect } from "react";
// import { useRouter } from 'next/router'
// import Head from "next/head";
// import Image from "next/image";


// export default function Step1({costcaldata}) {
//     const router = useRouter();

//     // let domaindata = costcaldata[0].acf.domain_list;


//     // set values
//     const [value, setValue] = useState(false);

//     // handChange event
//     const handleChange = (e) => {
//         setValue(e.target.value);
//     };

//     // get localstorage value in useeffect
//     useEffect(() => {
//         // FORM VALIDATION
//         'use strict'
//         var forms = document.querySelectorAll('.needs-validation')
//         Array.prototype.slice.call(forms)
//             .forEach(function (form) {
//                 form.addEventListener('submit', function (event) {
//                     if (!form.checkValidity()) {
//                         event.preventDefault()
//                         event.stopPropagation()
//                     }
//                     else {}
//                     form.classList.add('was-validated')
//                 }, false)
//             });
//     });

//     // handleSubmitForm
//     const handleSubmitForm = (e) => {
//         e.preventDefault();
//         console.log("Selected Domein Name",value);
//         localStorage.setItem("Domain Selected", value);
//         router.push('/test-cost-calculator/step2')
//     };

//     return (
//         <>
//         <Head>
//             <title>Step 1 | Test Cost Calculator | Testrveal</title>
//             <meta name="description" content="We will incorporate QA (Quality Assurance) into your development pipeline so that you get a robust product at the end." />
//         </Head>

        

//         <div className="testcost-containerfluid">
//             <div className="container-fluid">
//                 <div className="row">
//                     <div className="col-lg-6 testcost-img-column">
//                         <img src="https://testreveal.com/images/test-calc/ACC_01.svg" />
//                     </div>
//                     <div className="col-lg-6">
//                         <form onSubmit={handleSubmitForm} className="needs-validation testcost-contentwrapper" autoComplete="off" noValidate>
//                             <div className="row">

//                                 <div className="col-lg-12">
//                                     <h1 className="color-primary">Test Cost Calculation</h1>
//                                     <h5 className="mb-5">Please mention the domain your software is based on?</h5>
//                                 </div>

//                                 <div className="validation-wrapper">
//                                     <div className="invalid-feedback">
//                                         Please select the domain
//                                     </div>
//                                 </div>

//                                 {costcaldata.map(domainsdata => (
//                                     <div key={domainsdata} className="col-lg-6">
//                                         <div className="stepfield-options-block has-validation" key={domainsdata.d_slug}>
//                                             <label>
//                                                 <input type="radio" name="domainfield" id={domainsdata.d_slug} value={domainsdata.d_name} onChange={handleChange} required />
//                                                 <div>
//                                                     {/* <i className="fa fa-money-bill-wave"></i> */}
//                                                     <img src={domainsdata.d_url} alt="Domain-Name" height="25" />
//                                                 </div>
//                                                 <span>{domainsdata.d_name}</span>
//                                             </label>
//                                             {

//                                             domainsdata.d_name == "Others" && domainsdata.d_name == value ?  
//                                                 <input type="text" onChange={(e) => localStorage.setItem("text01", e.target.value)} id="text01" name="domainfield"  placeholder="Type your specific Domain"/> : null
//                                             }
//                                         </div>
//                                     </div>
//                                 ))}

//                             </div>
//                             <div className="row">
//                                 <div className="my-4 col-lg-12 d-flex justify-content-end">
//                                     <button type="submit" className="btn btn-bordered btn-transparent btn-lg btn-rounded">Next <i className="fa fa-arrow-right"></i></button>
//                                 </div>
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </div>

       
//     </>
//   );
// }

// export async function getStaticProps() {
//     const costcalcres = await fetch('https://api.testreveal.com:3013/api/test-cost-calculator/getDomainList')
//     const costcaldata = await costcalcres.json();
//     return {
//         props: {
//             costcaldata,
//             isCalcPage: true
//         },
//         revalidate: 10,
//     }
// }













import React from 'react'
import Head from 'next/head'

export default function index()
 {
  
  return (
    <>
   <Head>
   <title>Test Cost Calculator - Testbytes</title>
   <meta property="og:url" content="https://www.testbytes.net/" />
   <meta name="description" content="Test Cost Calculator Testbytes" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="Testbytes: Software Testing and QA Consulting Company" />
    <meta property="og:description" content="Looking for independent software testing services? Testbytes can offer game testing, mobile app testing, security testing, performance testing, and more." />
    

   </Head>
      <iframe src="https://old.testbytes.net/test-cost-calculator" title="description" height="2000" width="100%"></iframe>
    </>
  )
}

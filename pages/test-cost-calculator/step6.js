import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import { PropagateLoader, PulseLoader, RingLoader } from "react-spinners";
import { notifyError, notify } from "../../toaster/notify";

export default function Step6() {
  const router = useRouter();

  const [testCostCal, setTestCostCal] = useState({
    category: [],
    text01: "",
    fpc_no_of_screens: 0,
    ext_int_radio: [],
    fpc_platforms: [],
    cycles_radio: [],
    fpc_user_name: "",
    fpc_user_email: "",
    fpc_user_mobile: null,
    fpc_user_message: "",
    sms_check: "",
    action: "fpc_cal",
    city: "",
    country_code: "",
    country_name: "",
    currency: {
      code: "",
      name: "",
      plural: "",
      symbol: "",
      symbol_native: "",
    },
    region_name : ""
  });
  console.log("Cost Form", testCostCal);

  const [htmlDoc, setHtmlDoc] = useState("");
  const [loading, setLoading] = useState(false);
  let noOfScreen = 0; // Initialize with a default value
  let customDomain;
  let clientObj;

  // Perform localStorage action
  if (typeof window !== "undefined") {
    var getStorage1 = localStorage.getItem("Domain Selected");

    // Getting Domain from local Storage and converting it to array
    let selectedDomain = localStorage.getItem("Domain Selected");
    var arrayOfStr = [];
    arrayOfStr.push(selectedDomain);
    // console.log("selectedDomain", arrayOfStr);

    // fpc_complexity: 0,
    // Getting No. of External Interface from local Storage and Converting it to array
    let extRatio = localStorage.getItem("Number of External Interface");
    var extRatioArr = [];
    extRatioArr.push(extRatio);

    // Getting Platform from local Storage and Converting it to array
    let platform = localStorage.getItem("Platform");
    var platformArr = [];
    platformArr.push(platform);

    // Getting Cycles Ratio from local Storage and Converting it to array
    let cyclesRatio = localStorage.getItem(
      "How many cycles of testing is required?"
    );
    var cyclesRatioArr = [];
    cyclesRatioArr.push(cyclesRatio);

    //Getting No. of Screens from local storage
   noOfScreen = localStorage.getItem(
      "How many screens do you want to test?"
    );
    // console.log("Number of Screen",noOfScreen)

    // Get Client Details from Local Storage
    clientObj = JSON.parse(localStorage.getItem("Client Location"));
     customDomain = localStorage.getItem("text01");
  }

  
  const [domainSelected, setDomainSelected] = useState("");

  useEffect(() => {
    setTestCostCal({
      ...testCostCal,
      category: [...arrayOfStr],
      ext_int_radio: [...extRatioArr],
      fpc_platforms: [...platformArr],
      cycles_radio: [Number(...cyclesRatioArr)],
      fpc_no_of_screens: Number(noOfScreen),
      text01 : customDomain || "",
      city: clientObj?.city || "",
      country_code : clientObj?.country_code || "",
      country_name : clientObj?.country_name || "",
      currency: {
        code: clientObj?.currency.code || "",
        name: clientObj?.currency.name || "",
        plural: clientObj?.currency.plural || "",
        symbol: clientObj?.currency.symbol || "",
        symbol_native: clientObj?.currency.symbol_native || "",
      },
      region_name : clientObj?.region_name || "",
    });
  }, []);
  // get localstorage value in useeffect
  useEffect(() => {
    setDomainSelected(getStorage1);

    // FORM VALIDATION
    ("use strict");
    var forms = document.querySelectorAll(".needs-validation");
    Array.prototype.slice.call(forms).forEach(function (form) {
      form.addEventListener(
        "submit",
        function (event) {
          if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
          } else {
            // console.log("Thanks for submission");
            document.querySelector(".formconfirm-msg").style.display = "block";
          }
          form.classList.add("was-validated");
        },
        false
      );
    });
  });

  // Submit Test Cost Calculator Data
  // handleSubmitForm
  const handleSubmitForm = async (e) => {
    e.preventDefault();
    setLoading(true);


    try {
      const response = await fetch('https://api.testreveal.com:3013/api/test-cost-calculator', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(testCostCal),
      });
      const jsonData = await response.json();
      console.log("Response of Form", jsonData);
      if(jsonData.error == true){
        console.log("If Part");
        notifyError(jsonData.message);
      }else{
        console.log("Else Part")
        setLoading(false);
        localStorage.setItem("Test Cost Calculator Result", JSON.stringify(jsonData.data))
        router.push("/test-cost-calculator/result");
      }
    
      console.log('Success Response:', jsonData);
    } catch (error) {
      console.error('Error:', error);
    }

  };

  return (
    <>
      <Head>
        <title>Step 6 | Test Cost Calculator | Testrveal</title>
        <meta
          name="description"
          content="We will incorporate QA (Quality Assurance) into your development pipeline so that you get a robust product at the end."
        />
      </Head>
      

      <div className="testcost-containerfluid">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 testcost-img-column">
              <img src="/images/test-calc/ACC_06.svg" />
            </div>
            <div className="col-lg-5">
              <form
                onSubmit={handleSubmitForm}
                className="needs-validation testcost-contentwrapper"
                autoComplete="off"
                noValidate
              >
                <div className="row text-center mb-4">
                  <div className="col-lg-12">
                    <h1 className="color-primary mb-5">
                      Test Effort Calculation
                    </h1>
                  </div>
                  <div className="offset-lg-2 col-lg-8">
                    <div className="py-5 px-5 testcost-laststep-formcol">
                      <h4>
                        <strong>Almost Done</strong>
                      </h4>
                      <p className="mb-4">
                        Let us know where we should send your final estimation.
                      </p>
                      <div className="form-field has-validation">
                        <input
                          type="text"
                          name="username"
                          placeholder="Your Name"
                          value={testCostCal.fpc_user_name}
                          onChange={(e) => {
                            // setUsername(e.target.value);
                            setTestCostCal({
                              ...testCostCal,
                              fpc_user_name: e.target.value,
                            });
                          }}
                          required
                        />
                        <div className="invalid-feedback">
                          Please type your Name
                        </div>
                      </div>
                      <div className="form-field has-validation">
                        <input
                          type="email"
                          name="useremail"
                          placeholder="Email"
                          value={testCostCal.fpc_user_email}
                          onChange={(e) => {
                            // setUseremail(e.target.value);
                            setTestCostCal({
                              ...testCostCal,
                              fpc_user_email: e.target.value,
                            });
                          }}
                          required
                        />
                        <div className="invalid-feedback">
                          Please enter valid email address
                        </div>
                      </div>
                      <div className="form-field has-validation">
                        <input
                          type="tel"
                          name="userphone"
                          placeholder="Phone Number"
                          maxLength="10"
                          className="inputDesign"
                          // value={testCostCal.fpc_user_mobile}
                          onChange={(e) => {
                            // setUserphone(e.target.value);
                            setTestCostCal({
                              ...testCostCal,
                              fpc_user_mobile: Number(e.target.value),
                            });
                          }}
                          required
                        />
                        <div className="invalid-feedback">
                          Please enter phone number
                        </div>
                      </div>
                      <div className="form-field has-validation">
                        <textarea
                          name="usercomments"
                          placeholder="Comments"
                          value={testCostCal.fpc_user_message}
                          onChange={(e) => {
                            // setUsercomments(e.target.value);
                            setTestCostCal({
                              ...testCostCal,
                              fpc_user_message: e.target.value,
                            });
                          }}
                          required
                        ></textarea>
                        <div className="invalid-feedback">
                          Please enter message field
                        </div>
                      </div>

                      <div className="form-check d-flex">
                        <input
                          className="form-check-input me-3"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                          onChange={(e) => {
                            if(e.target.checked){
                              setTestCostCal({
                                ...testCostCal,
                                sms_check : "yes"
                              })
                            }else{
                              setTestCostCal({
                                ...testCostCal,
                                sms_check : "no"
                              })
                            }
                          
                          }}  
                        />
                        <label className="form-check-label" HtmlFor="flexCheckDefault" >
                          {
                            (clientObj && clientObj?.country_name == "India") ? 
                            "Share Cost Via SMS" : "Share Cost Via WhatsApp"
                          }
                          Share Cost Via SMS
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="my-3 col-lg-12 d-flex justify-content-center">
                    <Link href="/test-cost-calculator/step5">
                      <div className="btn btn-bordered btn-transparent btn-lg btn-rounded me-3">
                        <i className="fa fa-arrow-left"></i> Prev
                      </div>
                    </Link>
                    <button
                      type="submit"
                      className="btn btn-primary btn-lg btn-rounded"
                    >
                      Submit <i className="fa fa-arrow-right"></i>
                    </button>
                  </div>
                </div>
                <div
                  className="mt-4 mx-1 formconfirm-msg text-center"
                  style={{ display: `none` }}
                >
                  {" "}
                  <div
                    style={{
                      display: `inline-block`,
                      border: `solid 1px #ccc`,
                      padding: `10px`,
                      margin: `10px 0`,
                      fontWeight: `bold`,
                      boxShadow: `0 5px 20px rgba(0,0,0,0.1)`,
                    }}
                  >
                    Thanks for submission. Please check your email for the Test
                    Cost Calculation.
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        {loading ? (
          <div className="d-flex justify-content-center align-items-center m-2">
            <PropagateLoader color="#191678" />
          </div>
        ) : ( ""
          // <div dangerouslySetInnerHTML={{ __html: htmlDoc }} />
        )}
      </div>

    
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      isCalcPage: true,
    },
    revalidate: 10,
  };
}

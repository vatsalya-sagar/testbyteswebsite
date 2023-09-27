import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import axios from "axios";

import { notify, notifyError } from "../../toaster/notify";
import "react-toastify/dist/ReactToastify.css";


export default function Step2() {
  const router = useRouter();

  // increment decrement function
  const [count, setCount] = useState(1);
  const [ClientResponse, setClientResponse] = useState({});
  function increment() {
    //setCount(prevCount => prevCount+=1);
    setCount(function (prevCount) {
      return (prevCount += 1);
    });
  }

  function decrement() {
    setCount(function (prevCount) {
      if (prevCount > 1) {
        return (prevCount -= 1);
      } else {
        return (prevCount = 1);
      }
    });
  }

  // Perform localStorage action
  if (typeof window !== "undefined") {
    var getStorage1 = localStorage.getItem("Domain Selected");
  }
  const [domainSelected, setDomainSelected] = useState("");

  // get localstorage value in useeffect
  useEffect(() => {
    setDomainSelected(getStorage1);
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
    // console.log(value);
    localStorage.setItem(
      "How many screens do you want to test?",
      count
    );
    router.push("/test-cost-calculator/step3");
  };

  const getClientLocation = async () => {
    try {
      const response = await axios.get(
        "https://api.testreveal.com:3013/api/test-cost-calculator/getClientLocation"
      );
      console.log("AAYA kya :", response);
      setClientResponse(response.data);
      localStorage.setItem("Client Location", JSON.stringify(response.data));
    } catch (error) {
      console.error(error);
      localStorage.removeItem("Client Location");
      notifyError("Please Fill the form from start");
    }
  };
  useEffect(() => {
    getClientLocation();
  }, []);
  // console.log("first" , ClientResponse?.location.country_flag_emoji)
  return (
    <>
      <Head>
        <title>Step 2 | Test Cost Calculator | Testrveal</title>
        <meta
          name="description"
          content="We will incorporate QA (Quality Assurance) into your development pipeline so that you get a robust product at the end."
        />
      </Head>
     

      <div className="testcost-containerfluid">
        <div className="row">
          <div className="d-flex justify-content-end pe-4">
            <div className="d-flex align-items-center  my-3">
              <div className="m-2">
                <label className="">Country : &nbsp;</label>
                {/* <img
                  src={ClientResponse?.location?.country_flag ? ClientResponse?.location?.country_flag : USA_Flag.src}
                  // width="70"
                  // height="45"
                  alt="Flag Image"
                  className="img-thumbnail rounded-circle"
                /> */}
              </div>
              <div className="m-2">
                <label className="">Currency : &nbsp;</label>
                <label>
                  <b>{ClientResponse?.currency?.code ? ClientResponse?.currency?.code : "USD"}</b>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 testcost-img-column">
              <img src="https://testreveal.com/images/test-calc/ACC_02.svg" />
            </div>
            <div className="col-lg-5">
              <form
                onSubmit={handleSubmitForm}
                className="testcost-contentwrapper"
              >
                <div className="row text-center">
                  <div className="col-lg-12">
                    <h1 className="color-primary mb-5">
                      Test Effort Calculation
                    </h1>
                    <h3 className="mb-4">
                      How many screens do you want to test?
                    </h3>
                  </div>

                  <div className="testeffort-calc-counter">
                    <div onClick={decrement}>-</div>
                    <input
                      type="number"
                      name="screensfield"
                      id="screensfield1"
                      value={count}
                      onChange={(e) => {
                        setValue(e.target.value);
                      }}
                    />
                    <div onClick={increment}>+</div>
                  </div>
                </div>
                <div className="row">
                  <div className="my-5 col-lg-12 d-flex justify-content-center">
                    <Link href="/test-cost-calculator/">
                      <div className="btn btn-bordered btn-transparent btn-lg btn-rounded me-3">
                        <i className="fa fa-arrow-left"></i> Prev
                      </div>
                    </Link>
                    <button
                      type="submit"
                      className="btn btn-bordered btn-transparent btn-lg btn-rounded"
                    >
                      Next <i className="fa fa-arrow-right"></i>
                    </button>
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
      isCalcPage: true,
    },
    revalidate: 10,
  };
}

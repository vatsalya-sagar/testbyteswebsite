import React, { useEffect, useState } from "react";
import Head from "next/head";

import { PropagateLoader } from "react-spinners";

const Result = () => {
  const [htmlDoc, setHtmlDoc] = useState("");

  // Perform localStorage action
  if (typeof window !== "undefined") {
    var getStorage1 = localStorage.getItem("Domain Selected");

    // Get Client Details from Local Storage
    // var testCostResult = localStorage.getItem("Test Cost Calculator Result");
    var testCostResult = JSON.parse(localStorage.getItem("Test Cost Calculator Result"));
  }

  useEffect(() => {
    setHtmlDoc(testCostResult);
  }, []);
  return (
    <div>
      <Head>
        <title>Step 6 | Test Cost Calculator | Testrveal</title>
        <meta
          name="description"
          content="We will incorporate QA (Quality Assurance) into your development pipeline so that you get a robust product at the end."
        />
      </Head>


      <div id="resultpage" className='container my-5'>
        {!htmlDoc ? (
          <div className="d-flex justify-content-center align-items-center m-2">
            <PropagateLoader color="#191678" />
          </div>
        ) : (
          <div dangerouslySetInnerHTML={{__html: htmlDoc}} />
        )}
      </div>
    
    </div>
  );
};

export default Result;

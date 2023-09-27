import React, { useEffect, useState } from 'react';

import Head from 'next/head'
import Link from 'next/link'
import { BASEPATH } from '@/config';
import axios from 'axios';

function RelatedPost({ resourceAPIList }) {

  const [apidata, setData] = useState([]);
 
  // console.log("apidata" , apidata)

  useEffect(() => {
    
    const apiUrl = `${BASEPATH}wp-json/wp/v2/resource?_embed&per_page=9&page=1`;


    axios.get(apiUrl)
        .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);



  return (
    <>
      <div className='container'>
        <div className='container-box'>

          {apidata.map((item, index) => (
            <>
              <div className='box'>
                <Link href={`/resource/${item.slug}`} >
                  <div className='img-lastpost'>
                    {<img src={item._embedded["wp:featuredmedia"][0].source_url} className="img-responsive" />}
                    <h4>{item.title.rendered}</h4>
                  </div>
                </Link>
              </div>
            </>
          ))}

        </div>
      </div>

    </>

  );
}

export default RelatedPost;



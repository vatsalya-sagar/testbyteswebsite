import Link from "next/link";
import React from "react";
import { BASEPATH } from "../../config";


const SpeakerSinglePage = (singlepage) => {
  let recieveData = singlepage && singlepage.singlepage.data.speakerBy.speakerDetails;
  let profilePhoto = singlepage && singlepage.singlepage.data.speakerBy.speakerDetails.profilePhoto;
//   console.log(profilePhoto);

  // const [speakerData, setSpeakerData] = useState(second)

  return (
    <>
      <section className="top_hero_img">
        <img
          src="https://old.testbytes.net/wp-content/uploads/2022/08/coverimg.png"
          className="hero_img"
        />
      </section>

      <div className="container-fluid text-dark">
        <div className="row">
          <div className="inner_desc">
            <div className="side-i-card col-md-3 top-sm--65">
              <img
                src={profilePhoto?.link}
                className="profile_photo"
              />
              <br />
              <span className="speaker_title">{recieveData?.name}</span>
              <br />
              <span className="speaker_subtitle">
                {recieveData?.designation}
              </span>
              <br />
              <a href={recieveData?.linkedinLink} target="_blank">
                <img src="https://old.testbytes.net/wp-content/uploads/2022/08/linkedin.svg" />
              </a>{" "}
              <br />
              <Link href="/speakers-list" className="back_btn">
                <span className="back_btn_inner">
                  <span>←</span>&nbsp; Back
                </span>
              </Link>
            </div>
            <div className="desc-content col-md-9">
              <h5>Description</h5>

              <div dangerouslySetInnerHTML={{ __html: recieveData?.description }}></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SpeakerSinglePage;

export async function getStaticPaths() {
  const pagesres = await fetch(
    `${BASEPATH}graphql`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: `
            query NewQuery {
                speakers {
                  nodes {
                    slug
                  }
                }
              }
            `,
      }),
    }
  );
  const pagesdata = await pagesres.json();
  const paths = pagesdata.data.speakers.nodes.map((slugLink) => ({
    params: { slug: slugLink.slug },
  }));
  //   console.log("Filtered Pathssss: ", paths);
  return {
    paths: [...paths],
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }) {
  // Get page data
  const pagesres = await fetch(
    `${BASEPATH}graphql`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: `
        query NewQuery {
            speakerBy(slug: "${params.slug}") {
              speakerDetails {
                description
                designation
                fieldGroupName
                linkedinLink
                name
                profilePhoto {
                  link
                }
              }
            }
          }
            `,
      }),
    }
  );
  const singlepage = await pagesres.json();
//   console.log(singlepage, "pagedatasdsfsdfsdfsdfsdfsddssd2222222");
  return {
    props: {
      singlepage,
    },
    revalidate: 10,
  };
}

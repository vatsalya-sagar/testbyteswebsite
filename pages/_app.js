import React, { useEffect } from "react";
import Head from "next/head";
import NProgress from "nprogress";
import Router from "next/router";
import Layout from "@/components/Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import '@/styles/custom.css'
import '@/styles/menustyling.css'
import '@/styles/homepagebanneranimation.css'
import '@/styles/footerstyle.css'
import '@/styles/resource.css'
import '@/styles/costcalculator.css'
import '@/styles/elementorstyles.css'
import '@/styles/speaker.css'
import '@/styles/blogstyling.css'

export default function App({ Component, pageProps }) 
{
    Router.onRouteChangeStart = url => {
        NProgress.start()
    }
    Router.onRouteChangeComplete = () => NProgress.done()
    Router.onRouteChangeError = () => NProgress.done()

    useEffect(() => {
        require("bootstrap/dist/js/bootstrap.bundle.min.js");
        //Fixed header scroll code
        window.onscroll = function (e) {
            let topScrollY = this.scrollY;
            if (topScrollY > 50) {
                document.querySelector("#customnavbar").classList.add("customnavbar-fixed");
                document.querySelector(".back-top-btn").classList.add("back-top-btn-fixed");
            } else {
                document.querySelector("#customnavbar").classList.remove("customnavbar-fixed");
                document.querySelector(".back-top-btn").classList.remove("back-top-btn-fixed");
            }
        };
    });

    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta httpEquiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
                <meta httpEquiv="Pragma" content="no-cache" />
                <meta httpEquiv="Expires" content="0" />
            </Head>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    )
}

import '../public/assets/css/style.css';
import '../public/assets/css/modal.css';
import '../public/assets/css/swiper-custom.css';
import React, { useEffect, useState } from "react";
import Preloader from '../components/elements/Preloader';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    if (typeof window !== "undefined") {
      import("wowjs").then((wowjs) => {
        // Detect WOW constructor in various export patterns
        let WOWConstructor = null;
        if (typeof wowjs === "function") {
          WOWConstructor = wowjs;
        } else if (wowjs.default && typeof wowjs.default === "function") {
          WOWConstructor = wowjs.default;
        } else if (wowjs.WOW && typeof wowjs.WOW === "function") {
          WOWConstructor = wowjs.WOW;
        } else if (wowjs.default && wowjs.default.WOW && typeof wowjs.default.WOW === "function") {
          WOWConstructor = wowjs.default.WOW;
        }

        if (WOWConstructor) {
          new WOWConstructor().init();
        } else {
          console.warn("WOW constructor not found in wowjs module.");
        }
      }).catch(err => {
        console.error("Failed to load wowjs:", err);
      });
    }

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {!loading ? (
        <div>
          <Head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>Siman Infotech - Top Website Designing & Custom Software Development Company In Canada. </title>
            <meta name="description" content="Siman Infotech offers custom software development services in Manitoba, Canada, including Winnipeg. Our expertise spans web designing, web development, SEO, SMO, social media marketing, digital marketing, graphic designing, and crypto software development." />
            <meta name="keywords" content="Mobile and Web Applications, On Demand Technology Solutions, CRM, Customer Relationship Management, Sale and Purchase Software, Order Management Software, Billing Management Software, GST Invoicing, ERP, Software Development, Mobile App Development Company, Siman Infotech - Custom Software Development in Canada, Custom Software Development in Manitoba, Custom Software Development in Winnipeg, Web Designing and Web Development, SEO, SMO, Social Media Marketing, Digital Marketing, Graphic Designing, Crypto Software Development etc." />
            <meta name="author" content="Siman Infotech" />
            <link rel="canonical" href="https://siman.ca/" />
            <link rel="icon" href="favicon.ico" type="image/x-icon" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="Siman Infotech - Custom Software Development in Canada, Custom Software Development in Manitoba, Custom Software Development in Winnipeg, Web Designing and Web Development, SEO, SMO, Social Media Marketing, Digital Marketing, Graphic Designing, Crypto Software Development etc." />
            <meta property="og:description" content="Siman Infotech offers custom software development services in Manitoba, Canada, including Winnipeg. Our expertise spans web designing, web development, SEO, SMO, social media marketing, digital marketing, graphic designing, and crypto software development." />
            <meta property="og:image" content="/assets/imgs/page/services/1/about.svg" />
            <meta property="og:url" content="https://siman.ca/" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Siman Infotech - Custom Software Development" />
            <meta name="twitter:description" content="Siman Infotech offers custom software development services in Manitoba, Canada, including Winnipeg. Our expertise spans web designing, web development, SEO, SMO, social media marketing, digital marketing, graphic designing, and crypto software development." />
            <meta name="twitter:image" content="/assets/imgs/page/services/1/about.svg" />
          </Head>
          <Component {...pageProps} />
        </div>
      ) : (
        <Preloader />
      )}
    </>
  );
}

export default MyApp;


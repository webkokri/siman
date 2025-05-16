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


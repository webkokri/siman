import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Meta tags for SEO and social sharing */}
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="description" content="Siman Infotech offers custom software development services in Manitoba, Canada, including Winnipeg. Our expertise spans web designing, web development, SEO, SMO, social media marketing, digital marketing, graphic designing, and crypto software development." />
          <meta name="keywords" content="Mobile and Web Applications, On Demand Technology Solutions, CRM, Customer Relationship Management, Sale and Purchase Software, Order Management Software, Billing Management Software, GST Invoicing, ERP, Software Development, Mobile App Development Company, Siman Infotech - Custom Software Development in Canada, Custom Software Development in Manitoba, Custom Software Development in Winnipeg, Web Designing and Web Development, SEO, SMO, Social Media Marketing, Digital Marketing, Graphic Designing, Crypto Software Development etc." />
          <meta name="author" content="Siman Infotech" />
          <link rel="canonical" href="https://www.simaninfotech.com/" />
          <link rel="icon" href="/favicon.ico" type="image/x-icon" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Siman Infotech - Custom Software Development in Canada, Custom Software Development in Manitoba, Custom Software Development in Winnipeg, Web Designing and Web Development, SEO, SMO, Social Media Marketing, Digital Marketing, Graphic Designing, Crypto Software Development etc." />
          <meta property="og:description" content="Siman Infotech offers custom software development services in Manitoba, Canada, including Winnipeg. Our expertise spans web designing, web development, SEO, SMO, social media marketing, digital marketing, graphic designing, and crypto software development." />
          <meta property="og:image" content="/promo.jpg" />
          <meta property="og:url" content="https://www.simaninfotech.com/" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Siman Infotech - Custom Software Development" />
          <meta name="twitter:description" content="Siman Infotech offers custom software development services in Manitoba, Canada, including Winnipeg. Our expertise spans web designing, web development, SEO, SMO, social media marketing, digital marketing, graphic designing, and crypto software development." />
          <meta name="twitter:image" content="/promo.jpg" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

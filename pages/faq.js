/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Layout from "../components/layout/Layout";


function Faq2() {
    return (
        <>
            <Layout>
                <div>
                    <div className="section-box" />
                    <div className="banner-hero banner-breadcrums">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 text-center">
                                    <h1 className="text-heading-4 color-gray-900 mb-20">Feel free to inquire about anything you would like!</h1>
                                    <p className="text-body-text color-gray-400">Our professional support team will solve your problem as soon as possible.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="section-box mt-100" />
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-sm-12 col-12">
                                <ul className="list-icons-2">
                                    <li>
                                        <h3 className="text-heading-5 mb-10">Can I see the demo before purchasing?</h3>
                                        <p className="text-body-text color-gray-500">Yes. Our free trials provide you with a full version of the software for 14 days. You get the full experience of the software, so you know exactly what you're getting when you become an Siman's customer.</p>
                                    </li>
                                    <li>
                                        <h3 className="text-heading-5 mb-10">How can I switch my subscription between essential, and premium plan?</h3>
                                        <p className="text-body-text color-gray-500">You need to write to us at support@siman.ca to switch to any plan of your choice. Typically, after a request is made, the new plan will be activated in a matter of hours.</p>
                                    </li>
                                    <li>
                                        <h3 className="text-heading-5 mb-10">Can I cancel my subscription at any time?</h3>
                                        <p className="text-body-text color-gray-500">Yes. The subscription can be cancelled anytime with in the trial period. After the 14 days trial your account will be put on hold. If you choose to keep your Business plan, you will need to enter and confirm your payment details. After the confirmation you continue with your account and data as you left it during the free trial.</p>
                                    </li>
                                    <li>
                                        <h3 className="text-heading-5 mb-10">Is there an additional discount when paid annually?</h3>
                                        <p className="text-body-text color-gray-500">Yes, those who pay us annually are eligible for a flat 20% reduction off the cost of their subscription.</p>
                                    </li>
                                    <li>
                                        <h3 className="text-heading-5 mb-10">I have an issue with my account.</h3>
                                        <p className="text-body-text color-gray-500">
                                        1. Please share a snaphot of the error encountered during the usage of the software and email us to support@siman.ca<br/>
                                        2. If the issue is still not resolved within 72 hours, you may call us anytime within the working hours, Monday through Friday.
                                        </p>
                                    </li>
                                    <li>
                                        <h3 className="text-heading-5 mb-10">What kind of payment methods do you accept?</h3>
                                        <p className="text-body-text color-gray-500">
                                        We accept all major credit/debit cards including Rupay, Visa and Mastercard. If you'd like to pay though any other form of offline payment, please write our support desk: support@siman.ca
                                        </p>
                                    </li>
                                    <li>
                                        <h3 className="text-heading-5 mb-10">Can I use your system on different devices?</h3>
                                        <p className="text-body-text color-gray-500">
                                        Yes. Our technology is set up to make sure the website is efficient and simple to use on any device.
                                        </p>
                                    </li>
                                    
                                </ul>
                            </div>
                        </div>
                    </div>
                    <section className="section-box mt-100 mb-100">
                        <div className="container text-center">
                            <h3 className="text-heading-1 mb-10">Still have a questions?</h3>
                            <p className="text-body-lead-large color-gray-600 mt-30">If you cannot find answer to your question in our FAQ, you can always<br className="d-lg-block d-none" />contact us. We wil answer to you shortly! Meet our Support team</p>
                        </div>
                    </section>
                </div>

            </Layout>

        </>
    )
}

export default Faq2;
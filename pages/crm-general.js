/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Accordion from "../components/elements/Accordion";
import Layout from "../components/layout/Layout";

function CG() {

    return (
        <>

            <Layout headerStyle={"header-style-5"}>
                <div>
                    <section className="section-box">
                        <div className="banner-hero banner-faqs-1">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12 text-center">
                                        <img src="/assets/imgs/page/services/2/crm-general.png" alt="Billing Software" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section-box mt-100">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-2 col-sm-1 col-12" />
                                <div className="col-lg-8 col-sm-10 col-12 text-center">
                                    <h2 className="text-heading-1 color-gray-900">Empowering Enterprises</h2>
                                    <p className="text-body-lead-large color-gray-600 mt-20">An affordable, scalable customer management platform with extensive features available on demand.</p>
                                </div>
                                <div className="col-lg-2 col-sm-1 col-12" />
                            </div>
                        </div>
                        <div className="container mt-70">
                            <div className="row">
                                <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                                    <div className="card-grid-style-6 hover-up wow animate__animated animate__fadeIn" data-wow-delay=".1s">
                                        <div className="grid-6-img"><img src="/assets/imgs/page/services/2/invoice.png" alt="Best in class" /></div>
                                        <h3 className="text-heading-5 mt-20">Best in class</h3>
                                        <p className="text-body-text color-gray-600 mt-20">Integrated customer relationship management tool - from leads to sales.</p>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                                    <div className="card-grid-style-6 hover-up wow animate__animated animate__fadeIn" data-wow-delay=".3s">
                                        <div className="grid-6-img"><img src="/assets/imgs/page/services/2/inventory.png" alt="Digitally advanced" /></div>
                                        <h3 className="text-heading-5 mt-20">Digitally advanced</h3>
                                        <p className="text-body-text color-gray-600 mt-20">Enable paperless office operations along with enhanced ease of use.</p>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                                    <div className="card-grid-style-6 hover-up wow animate__animated animate__fadeIn" data-wow-delay=".5s">
                                        <div className="grid-6-img"><img src="/assets/imgs/page/services/2/payment.png" alt="Scalable, On-Demand" /></div>
                                        <h3 className="text-heading-5 mt-20">Scalable, On-Demand</h3>
                                        <p className="text-body-text color-gray-600 mt-20">Pay as you go with zero upfront capital expenditure.</p>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                                    <div className="card-grid-style-6 hover-up wow animate__animated animate__fadeIn" data-wow-delay=".5s">
                                        <div className="grid-6-img"><img src="/assets/imgs/page/services/2/report.png" alt="Feature packed" /></div>
                                        <h3 className="text-heading-5 mt-20">Feature packed</h3>
                                        <p className="text-body-text color-gray-600 mt-20">30+ features - From core to advanced power packed features.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="section-box">
                    <div className="container mt-100 mb-100">
                        <div className="row">
                            <div className="col-lg-6 col-sm-12 block-img-we-do">
                                <img className="bdrd-16 img-responsive" src="assets/imgs/page/services/2/benefits-360.png" alt="Built Exclusively For You" />
                            </div>
                            <div className="col-lg-6 col-sm-12 block-we-do">
                                <span className="tag-1">Built Exclusively For You</span>
                                <h3 className="text-heading-3 mt-30">
                                From overarching strategy to meticulous execution, we have everything you need covered.
                                </h3>
                                <p className="text-body-lead-large color-gray-600 mt-30">
                                Siman CRM streamlines your customer management, seamlessly handling leads, sales, and payments. With its robust, flexible, and on-demand features, it empowers efficient sales administration.
                                </p>
                                <div className="line-bd-green mt-50" />
                                <div className="row">
                                    <div className="col-lg-6 col-sm-6 col-12 mt-50">
                                        <h4 className="text-heading-6 icon-leaf">
                                        Customer centric
                                        </h4>
                                        <p className="text-body-excerpt color-gray-600 mt-15">
                                        Know your customers preferences and the context in which they engage with your organization.
                                        </p>
                                    </div>
                                    <div className="col-lg-6 col-sm-6 col-12 mt-50">
                                        <h4 className="text-heading-6 icon-leaf">
                                        Stay connected
                                        </h4>
                                        <p className="text-body-excerpt color-gray-600 mt-15">
                                        The benefits of CRM have expanded to unite various departments and empower more interconnected teams.
                                        </p>
                                    </div>
                                    <div className="col-lg-6 col-sm-6 col-12 mt-50">
                                        <h4 className="text-heading-6 icon-leaf">
                                        Realtime analytics
                                        </h4>
                                        <p className="text-body-excerpt color-gray-600 mt-15">
                                        A single view of the customer for cross-functional insight and reporting plus dashboards that visually showcase data in action.
                                        </p>
                                    </div>
                                    <div className="col-lg-6 col-sm-6 col-12 mt-50">
                                        <h4 className="text-heading-6 icon-leaf">
                                        Optimized processes
                                        </h4>
                                        <p className="text-body-excerpt color-gray-600 mt-15">
                                        Consistent, customer-centric interactions across marketing, sales, commerce, and service through personalized automations.
                                        </p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                
                </div>

            </Layout>

        </>
    )
}

export default CG;
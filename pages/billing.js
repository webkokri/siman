/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Accordion from "../components/elements/Accordion";
import Layout from "../components/layout/Layout";

function Faq1() {

    return (
        <>

            <Layout headerStyle={"header-style-5"}>
                <div>
                    <section className="section-box">
                        <div className="banner-hero banner-faqs-1">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12 text-center">
                                        <img src="/assets/imgs/page/services/2/bills.png" alt="Billing Software" />
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
                                    <h2 className="text-heading-1 color-gray-900">Streamlined Invoicing</h2>
                                    <p className="text-body-lead-large color-gray-600 mt-20">Are you tired of struggling with maintaining invoices & quotations on spreadsheets? Well, we have the solution for you!</p>
                                    <p className="text-body-lead-large color-gray-600 mt-20">Our brand new SAAS product is designed to make your life easier and more efficient than ever before. With our innovative technology and user-friendly interface, you can easily manage stock, customers, sales, purchase invoices and payments.</p>
                                </div>
                                <div className="col-lg-2 col-sm-1 col-12" />
                            </div>
                        </div>
                        <div className="container mt-70">
                            <div className="row">
                                <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                                    <div className="card-grid-style-6 hover-up wow animate__animated animate__fadeIn" data-wow-delay=".1s">
                                        <div className="grid-6-img"><img src="/assets/imgs/page/services/2/invoice.png" alt="invoice" /></div>
                                        <h3 className="text-heading-5 mt-20">Invoicing</h3>
                                        <p className="text-body-text color-gray-600 mt-20">The bill generation software enables you to create any invoice you need effortlessly. Simply enter the customer and item details, and the software will automatically prepare your invoice by applying rates, prices, taxes, discounts, and more.</p>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                                    <div className="card-grid-style-6 hover-up wow animate__animated animate__fadeIn" data-wow-delay=".3s">
                                        <div className="grid-6-img"><img src="/assets/imgs/page/services/2/inventory.png" alt="Inventory" /></div>
                                        <h3 className="text-heading-5 mt-20">Inventory</h3>
                                        <p className="text-body-text color-gray-600 mt-20">A well-managed inventory enhances cash flow, optimizes operations, boosts organizational efficiency. Manage stock, low inventory alerts, location-specific stock levels, track purchase requirements, and more with our inventory management system.</p>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                                    <div className="card-grid-style-6 hover-up wow animate__animated animate__fadeIn" data-wow-delay=".5s">
                                        <div className="grid-6-img"><img src="/assets/imgs/page/services/2/payment.png" alt="Payments" /></div>
                                        <h3 className="text-heading-5 mt-20">Payments</h3>
                                        <p className="text-body-text color-gray-600 mt-20">Smart businesses manage payments efficiently with Siman. It streamlines the creation and recording of quotes, estimates, invoices, and orders. Powered by a central database, Siman is accessible anytime, anywhere, ensuring seamless and effective payment management.</p>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                                    <div className="card-grid-style-6 hover-up wow animate__animated animate__fadeIn" data-wow-delay=".5s">
                                        <div className="grid-6-img"><img src="/assets/imgs/page/services/2/report.png" alt="Reports" /></div>
                                        <h3 className="text-heading-5 mt-20">Reports</h3>
                                        <p className="text-body-text color-gray-600 mt-20">Access over 10 analytical reports, ranging from basic to advanced, to gain deep insights. Up-to-date and accurate data to inform precise operational and strategic decisions, ensuring your choices are well-informed and strategic.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section-box pt-140 pb-50">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-5 mb-40">
                                    <h3 className="text-heading-1">Frequently asked questions</h3>
                                    <p className="text-body-text color-gray-600 mt-30">Looking to learn more? View some of our frequently asked questions or get in touch with our supporters for assistance.</p>
                                    <div className="row">
                                        <div className="col-lg-12 mt-50">
                                            <h4 className="text-heading-6 icon-leaf">Higly customisable</h4>
                                            <p className="text-body-excerpt color-gray-600 mt-15">Different invoice types and formats can be added to Siman Bills to support various operations and performance measures.</p>
                                        </div>
                                        <div className="col-lg-12 mt-50">
                                            <h4 className="text-heading-6 icon-leaf">Designed for enterprises</h4>
                                            <p className="text-body-excerpt color-gray-600 mt-15">Do you own any small to medium-sized businesses? We can assist.</p>
                                        </div>
                                    </div>
                                    <div className="mt-60">
                                        <Link href="/contact-us" legacyBehavior><a className="btn btn-black icon-arrow-right-white">Contact Us</a></Link>

                                        
                                    </div>
                                </div>
                                <div className="col-lg-7">
                                   <Accordion/>
                                </div>
                            </div>
                        </div>
                    </section>
                    
                    <section className="section-box mt-100">
                        <div className="container text-center">
                            <h3 className="text-heading-1 mb-10">360° view of your business</h3>
                            <p className="text-body-lead-large color-gray-600 mt-30">No more hassles of maintaining data on spreadsheets. Our cloud based software gives you seamless access of data and reports - anytime, anywhere.</p>
                        </div>
                        <div className="container mt-70">
                            <div className="row">
                                <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                                    <div className="card-grid-style-3 hover-up wow animate__animated animate__fadeIn" data-wow-delay=".1s">
                                        <div className="grid-3-img"><img src="/assets/imgs/page/services/2/cloud.png" alt="cloud server" /></div>
                                        <h3 className="text-heading-6 mb-5 mt-20">Cloud Based</h3>
                                        <p className="text-body-text text-desc color-gray-500 mt-20">For easy access from anywhere, anytime.</p>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                                    <div className="card-grid-style-3 bd-bg-6 hover-up wow animate__animated animate__fadeIn" data-wow-delay=".3s">
                                        <div className="grid-3-img"><img src="/assets/imgs/page/services/2/custom.png" alt="Customizable" /></div>
                                        <h3 className="text-heading-5 mt-20">Customizable</h3>
                                        <p className="text-body-text text-desc color-gray-500 mt-20">To meet the unique needs of your business.</p>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                                    <div className="card-grid-style-3 bd-bg-10 hover-up wow animate__animated animate__fadeIn" data-wow-delay=".5s">
                                        <div className="grid-3-img"><img src="/assets/imgs/page/services/2/Insights.png" alt="Insigts" /></div>
                                        <h3 className="text-heading-6 mb-5 mt-20">Insights</h3>
                                        <p className="text-body-text text-desc color-gray-500 mt-20">Data analytics for valuable insights</p>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                                    <div className="card-grid-style-3 bd-bg-9 hover-up wow animate__animated animate__fadeIn" data-wow-delay=".7s">
                                        <div className="grid-3-img"><img src="/assets/imgs/page/services/2/Scalable.png" alt="Scalable" /></div>
                                        <h3 className="text-heading-5 mt-20">Scalable</h3>
                                        <p className="text-body-text text-desc color-gray-500 mt-20">Solution that can grow with your business needs</p>
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

export default Faq1;
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
                                        <img src="/assets/imgs/page/services/2/radiosoftware.png" alt="Radio Broadcasting" />
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
                                    <h2 className="text-heading-1 color-gray-900">Radio Broadcasting</h2>
                                    <p className="text-body-lead-large color-gray-600 mt-20">Streamline your operations with complete automation: Easily schedule events, live DJs, auto playlists, talk shows, and news bulletins—all accessible with a single click from your browser.</p>
                                </div>
                                <div className="col-lg-2 col-sm-1 col-12" />
                            </div>
                        </div>
                        <div className="container mt-70">
                            <div className="row">
                                <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                                    <div className="card-grid-style-6 hover-up wow animate__animated animate__fadeIn" data-wow-delay=".1s">
                                        <div className="grid-6-img"><img src="/assets/imgs/page/services/2/radio.gif" alt="Listen Live" style={{borderRadius: '50%'}}/></div>
                                        <h3 className="text-heading-5 mt-20">Listen Anywhere</h3>
                                        <p className="text-body-text color-gray-600 mt-20">Enjoy listening across web browsers, mobile devices, and home systems.</p>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                                    <div className="card-grid-style-6 hover-up wow animate__animated animate__fadeIn" data-wow-delay=".3s">
                                        <div className="grid-6-img"><img src="/assets/imgs/page/services/2/on-air.gif" alt="On Air" style={{borderRadius: '50%'}}/></div>
                                        <h3 className="text-heading-5 mt-20">Go On-Air</h3>
                                        <p className="text-body-text color-gray-600 mt-20">Broadcast live. Anywhere, anytime by just a single click.</p>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                                    <div className="card-grid-style-6 hover-up wow animate__animated animate__fadeIn" data-wow-delay=".5s">
                                        <div className="grid-6-img"><img src="/assets/imgs/page/services/2/dj-mixer.gif" alt="No Hardware needed" style={{borderRadius: '50%'}}/></div>
                                        <h3 className="text-heading-5 mt-20">No Equipment Required</h3>
                                        <p className="text-body-text color-gray-600 mt-20">No need for any studio equipment whatsoever; it is all built-in.</p>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                                    <div className="card-grid-style-6 hover-up wow animate__animated animate__fadeIn" data-wow-delay=".5s">
                                        <div className="grid-6-img"><img src="/assets/imgs/page/services/2/customer-support.gif" alt="Customer Support" style={{borderRadius: '50%'}}/></div>
                                        <h3 className="text-heading-5 mt-20">24/7 Support</h3>
                                        <p className="text-body-text color-gray-600 mt-20">Access round-the-clock live support for assistance anytime you need.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="section-box">
                    <div className="container mt-100 mb-100">
                        <div className="row">
                            <div className="col-lg-6 col-sm-12 block-img-we-do">
                                <img className="bdrd-16 img-responsive" src="assets/imgs/page/services/2/radio.png" alt="Built Exclusively For You" />
                            </div>
                            <div className="col-lg-6 col-sm-12 block-we-do">
                                <span className="tag-1">Go On Air Quickly</span>
                                <h3 className="text-heading-3 mt-30">
                                Studio or Special Equipment Not Required
                                </h3>
                                <p className="text-body-lead-large color-gray-600 mt-30">
                                Studio or Special Equipment Not Required for a Radio Station: Modern technology allows for remote broadcasting using laptops, microphones, and internet connections, enabling broadcasters to operate from anywhere with minimal setup with our cloud software solution.
                                </p>
                                <div className="line-bd-green mt-50" />
                                <div className="row">
                                    <div className="col-lg-6 col-sm-6 col-12 mt-50">
                                        <h4 className="text-heading-6 icon-leaf">
                                        Broadcast
                                        </h4>
                                        <p className="text-body-excerpt color-gray-600 mt-15">
                                        Stream radio live from any location, at any moment, bringing music and news to global listeners.
                                        </p>
                                    </div>
                                    <div className="col-lg-6 col-sm-6 col-12 mt-50">
                                        <h4 className="text-heading-6 icon-leaf">
                                        No Coding Required
                                        </h4>
                                        <p className="text-body-excerpt color-gray-600 mt-15">
                                        Easily set up a radio station without needing any coding skills, simplifying broadcasting accessibility.
                                        </p>
                                    </div>
                                    <div className="col-lg-6 col-sm-6 col-12 mt-50">
                                        <h4 className="text-heading-6 icon-leaf">
                                        Station Management
                                        </h4>
                                        <p className="text-body-excerpt color-gray-600 mt-15">
                                        Access valuable insights instantly, right at your fingertips, empowering informed decisions and strategic actions.
                                        </p>
                                    </div>
                                    <div className="col-lg-6 col-sm-6 col-12 mt-50">
                                        <h4 className="text-heading-6 icon-leaf">
                                        Listeners Engagements
                                        </h4>
                                        <p className="text-body-excerpt color-gray-600 mt-15">
                                        Enhance listener engagement with interactive content, fostering community and enriching the broadcasting experience dynamically.
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
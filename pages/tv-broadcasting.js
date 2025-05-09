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
                                        <img src="/assets/imgs/page/services/2/livetv.png" alt="Radio Broadcasting" />
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
                                    <h2 className="text-heading-1 color-gray-900">TV Broadcasting Software</h2>
                                    <p className="text-body-lead-large color-gray-600 mt-20">Streamline your operations with complete automation: Easily schedule events, live DJs, auto playlists, talk shows, and news bulletins—all accessible with a single click from your browser.</p>
                                </div>
                                <div className="col-lg-2 col-sm-1 col-12" />
                            </div>
                        </div>
                        <div className="container mt-70">
                            <div className="row">
                                <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                                    <div className="card-grid-style-6 hover-up wow animate__animated animate__fadeIn" data-wow-delay=".1s">
                                        <div className="grid-6-img"><img src="/assets/imgs/page/services/2/play.gif" alt="Listen Live" style={{borderRadius: '50%'}}/></div>
                                        <h3 className="text-heading-5 mt-20">Simple Production</h3>
                                        <p className="text-body-text color-gray-600 mt-20">Make live streams look and feel professional, no matter your expertise.</p>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                                    <div className="card-grid-style-6 hover-up wow animate__animated animate__fadeIn" data-wow-delay=".3s">
                                        <div className="grid-6-img"><img src="/assets/imgs/page/services/2/starrate.gif" alt="On Air" style={{borderRadius: '50%'}}/></div>
                                        <h3 className="text-heading-5 mt-20">Best streaming</h3>
                                        <p className="text-body-text color-gray-600 mt-20">Impress audiences with reliable, high-definition streaming at any scale.</p>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                                    <div className="card-grid-style-6 hover-up wow animate__animated animate__fadeIn" data-wow-delay=".5s">
                                        <div className="grid-6-img"><img src="/assets/imgs/page/services/2/views.gif" alt="No Hardware needed" style={{borderRadius: '50%'}}/></div>
                                        <h3 className="text-heading-5 mt-20">Boost Audience</h3>
                                        <p className="text-body-text color-gray-600 mt-20">Create memorable, interactive, live experiences with Venues.</p>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                                    <div className="card-grid-style-6 hover-up wow animate__animated animate__fadeIn" data-wow-delay=".5s">
                                        <div className="grid-6-img"><img src="/assets/imgs/page/services/2/internet.gif" alt="Customer Support" style={{borderRadius: '50%'}}/></div>
                                        <h3 className="text-heading-5 mt-20">Expand Reach</h3>
                                        <p className="text-body-text color-gray-600 mt-20">Broadcast to viewers across global streaming destinations.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="section-box">
                    <div className="container mt-100 mb-100">
                        <div className="row">
                            <div className="col-lg-6 col-sm-12 block-img-we-do">
                                <img className="bdrd-16 img-responsive" src="assets/imgs/page/services/2/tv.png" alt="Built Exclusively For You" />
                            </div>
                            <div className="col-lg-6 col-sm-12 block-we-do">
                                
                                <h3 className="text-heading-3 mt-30">
                                Browser-based production studio
                                </h3>
                                <p className="text-body-lead-large color-gray-600 mt-30">
                                Broadcast directly from your web browser, equipped with all the tools necessary to prepare and personalize your branded event. Whether you bring your own RTMP encoder or utilize our sophisticated features for audio mixing, multi-camera inputs, color correction, and beyond, you will have everything at your fingertips.
                                </p>
                                
                                
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
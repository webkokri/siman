/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Layout from "../components/layout/Layout";
import BlogSlider from "../components/slider/Blog";


function Portfolio() {
    return (
        <>
            <Layout>
                   
                    <section className="section-box">
                        <div className="container mt-30">
                            <div className="row">
                                <div className="col-lg-1 col-sm-1 col-12" />
                                <div className="col-lg-10 col-sm-10 col-12 text-center">
                                    <h2 className="text-heading-1 color-gray-900 mb-10">Our Team</h2>
                                    <p className="text-body-lead-large color-gray-600 mt-20">&nbsp;</p>
                                </div>
                                <div className="col-lg-1 col-sm-1 col-12" />
                            </div>
                        </div>
                        <div className="container mt-90">
                            <div className="row">
                                {/* Team Card Start */}
                                <div className="col-lg-4 col-sm-12 pr-30 mb-50">

                                <div className="card-grid-style-4">
                                   <div className="grid-4-img">
                                       <img src="/assets/imgs/page/team/raisaab.jpg" alt="Simranjit Singh Rai" />
                                          <div className="hover-content">
                                          <h4 className="text-heading-4 teamname mb-10">Simranjit Singh Rai</h4>
                                          <p>FOUNDER</p>
                                   </div>
                                 </div>
                               </div>

                                </div>
                                {/* Team Card Finish */}


                                {/* Team Card Start */}
                                <div className="col-lg-4 col-sm-12 pr-30 mb-50">

                                <div className="card-grid-style-4">
                                   <div className="grid-4-img">
                                       <img src="/assets/imgs/page/team/rk.jpg" alt="Ranjeev Kumar Wassan" />
                                          <div className="hover-content">
                                          <h4 className="text-heading-4 teamname mb-10">Ranjeev Kumar Wassan</h4>
                                          <p>FULL STACK DEVELOPER</p>
                                   </div>
                                 </div>
                               </div>

                                </div>
                                {/* Team Card Finish */}

                                {/* Team Card Start */}
                                <div className="col-lg-4 col-sm-12 pr-30 mb-50">

                                <div className="card-grid-style-4">
                                   <div className="grid-4-img">
                                       <img src="/assets/imgs/page/team/pk.png" alt="Prabhjot Kaur" />
                                          <div className="hover-content">
                                          <h4 className="text-heading-4 teamname mb-10">Prabhjot Kaur</h4>
                                          <p>MANAGER</p>
                                   </div>
                                 </div>
                               </div>

                                </div>
                                {/* Team Card Finish */}

                                {/* Team Card Start */}
                                <div className="col-lg-4 col-sm-12 pr-30 mb-50">

                                <div className="card-grid-style-4">
                                   <div className="grid-4-img">
                                       <img src="/assets/imgs/page/team/mc.jpg" alt="Munish Chauhan" />
                                          <div className="hover-content">
                                          <h4 className="text-heading-4 teamname mb-10">Munish Chauhan</h4>
                                          <p>MANAGER</p>
                                   </div>
                                 </div>
                               </div>

                                </div>
                                {/* Team Card Finish */}

                                {/* Team Card Start */}
                                <div className="col-lg-4 col-sm-12 pr-30 mb-50">

                                <div className="card-grid-style-4">
                                   <div className="grid-4-img">
                                       <img src="/assets/imgs/page/team/sr.jpg" alt="Shivani Rana" />
                                          <div className="hover-content">
                                          <h4 className="text-heading-4 teamname mb-10">Shivani Rana</h4>
                                          <p>FULL STACK DEVELOPER</p>
                                   </div>
                                 </div>
                               </div>

                                </div>
                                {/* Team Card Finish */}

                                {/* Team Card Start */}
                                <div className="col-lg-4 col-sm-12 pr-30 mb-50">

                                <div className="card-grid-style-4">
                                   <div className="grid-4-img">
                                       <img src="/assets/imgs/page/team/ns.jpg" alt="Narinder Singh" />
                                          <div className="hover-content">
                                          <h4 className="text-heading-4 teamname mb-10">Narinder Singh</h4>
                                          <p>PHP DEVELOPER</p>
                                   </div>
                                 </div>
                               </div>

                                </div>
                                {/* Team Card Finish */}

                                {/* Team Card Start */}
                                <div className="col-lg-4 col-sm-12 pr-30 mb-50">

                                <div className="card-grid-style-4">
                                   <div className="grid-4-img">
                                       <img src="/assets/imgs/page/team/my.jpg" alt="Mitrapal Yadav" />
                                          <div className="hover-content">
                                          <h4 className="text-heading-4 teamname mb-10">Mitrapal Yadav</h4>
                                          <p>SHOPIFY DEVELOPER</p>
                                   </div>
                                 </div>
                               </div>

                                </div>
                                {/* Team Card Finish */}

                                {/* Team Card Start */}
                                <div className="col-lg-4 col-sm-12 pr-30 mb-50">

                                <div className="card-grid-style-4">
                                   <div className="grid-4-img">
                                       <img src="/assets/imgs/page/team/gs.jpg" alt="Gurpreet Singh" />
                                          <div className="hover-content">
                                          <h4 className="text-heading-4 teamname mb-10">Gurpreet Singh</h4>
                                          <p>FULL STACK DEVELOPER</p>
                                   </div>
                                 </div>
                               </div>

                                </div>
                                {/* Team Card Finish */}

                                {/* Team Card Start */}
                                <div className="col-lg-4 col-sm-12 pr-30 mb-50">

                                <div className="card-grid-style-4">
                                   <div className="grid-4-img">
                                       <img src="/assets/imgs/page/team/ss.jpg" alt="Surinder Singh" />
                                          <div className="hover-content">
                                          <h4 className="text-heading-4 teamname mb-10">Surinder Singh</h4>
                                          <p>Digital Expert</p>
                                   </div>
                                 </div>
                               </div>

                                </div>
                                {/* Team Card Finish */}

                            </div>
                            
                        </div>
                    </section>
                    

            </Layout>

        </>
    )
}

export default Portfolio;
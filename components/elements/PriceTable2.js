import React, { useState } from 'react';
import Link from "next/link";
const PriceTable2 = () => {
    const [isToggled, setToggled] = useState(false);

    const toggleTrueFalse = () => { setToggled(!isToggled) };
    return (
        <>
            <div className="container mt-70">
                <div className="text-center mt-10">
                    <span className="text-lg text-billed">Billed Monthly</span><label className="switch ml-20 mr-20"><input id="cb_billed_type" type="checkbox" name="billed_type" onClick={toggleTrueFalse} /><span className="slider round" /></label><span className="text-lg text-billed">Bill Annually</span>
                </div>
                <div className="block-pricing mt-70">
                    <div className="row">
                        <div className="col-xl-10 col-lg-12 offset-xl-1">
                            <div className="row">
                                <div className="col-lg-4 col-md-6 wow animate__animated animate__fadeIn" data-wow-delay=".1s">
                                    <div className="box-pricing-item">
                                        <div className="box-info-price">
                                            <span className="text-heading-3 for-month display-month">${isToggled ? " 35" : " 50"}</span>
                                            <span className="text-month for-month text-body-small color-gray-400 display-month">/{isToggled ? "Year" : " Month"}</span>
                                        </div>
                                        <div className="line-bd-bottom">
                                            <h4 className="text-heading-5 mb-15">
                                                Standard
                                            </h4>
                                            <p className="text-body-small color-gray-400">
                                                All the basics for
                                                businesses that are just
                                                getting started.
                                            </p>
                                        </div>
                                        <ul className="list-package-feature">
                                            <li>Unlimited updates</li>
                                            <li>Custom permissions</li>
                                            <li className="uncheck">
                                                Custom designs and
                                                features
                                            </li>
                                            <li className="uncheck">
                                                Custom hashtags
                                            </li>
                                        </ul>
                                        <div>
                                            <Link href="/#" legacyBehavior><a className="btn btn-black-border text-body-lead icon-arrow-right">Get Started</a></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 wow animate__animated animate__fadeIn" data-wow-delay=".2s">
                                    <div className="box-pricing-item">
                                        <div className="box-info-price">
                                            <span className="text-heading-3 for-month display-month">${isToggled ? " 35" : " 50"}</span>
                                            <span className="text-month for-month text-body-small color-gray-400 display-month">/{isToggled ? "Year" : " Month"}</span>
                                        </div>
                                        <div className="line-bd-bottom">
                                            <h4 className="text-heading-5 mb-15">
                                                Essentials
                                            </h4>
                                            <p className="text-body-small color-gray-400">
                                                All the basics for
                                                businesses that are just
                                                getting started.
                                            </p>
                                        </div>
                                        <ul className="list-package-feature">
                                            <li>Unlimited updates</li>
                                            <li>Custom permissions</li>
                                            <li>Custom instructors</li>
                                            <li className="uncheck">
                                                Optimize hashtags
                                            </li>
                                        </ul>
                                        <div>
                                            <Link href="/#" legacyBehavior><a className="btn btn-black-border text-body-lead icon-arrow-right">Get Started</a></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-12 wow animate__animated animate__fadeIn" data-wow-delay=".4s">
                                    <div className="box-pricing-item">
                                        <div className="box-info-price">
                                            <span className="text-heading-3 for-month display-month">${isToggled ? " 35" : " 50"}</span>
                                            <span className="text-month for-month text-body-small color-gray-400 display-month">/{isToggled ? "Year" : " Month"}</span>
                                        </div>
                                        <div className="line-bd-bottom">
                                            <h4 className="text-heading-5 mb-15">
                                                Premium
                                            </h4>
                                            <p className="text-body-small color-gray-400">
                                                Avvanced features for pros
                                                who need more customization.
                                            </p>
                                        </div>
                                        <ul className="list-package-feature">
                                            <li>Unlimited updates</li>
                                            <li>
                                                Custom designs and
                                                features
                                            </li>
                                            <li>Custom permissions</li>
                                            <li>Optimize hashtags</li>
                                            <li>Custom instructors</li>
                                        </ul>
                                        <div>
                                            <Link href="/#" legacyBehavior><a className="btn btn-black-border text-body-lead icon-arrow-right">Get Started</a></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PriceTable2;
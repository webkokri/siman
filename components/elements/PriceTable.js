import React, { useState } from 'react';
import Link from "next/link";
const PriceTable = () => {
    const [isToggled, setToggled] = useState(false);

    const toggleTrueFalse = () => { setToggled(!isToggled) };
    return (
        <>
            <div className="container mt-20">
                <div className="text-center block-bill-2 mt-10">
                    <span className="text-lg text-billed">Billed Monthly</span>
                    <label className="switch ml-20 mr-20">
                        <input id="cb_billed_type" type="checkbox" name="billed_type" onClick={toggleTrueFalse} />
                        <span className="slider round" /></label>
                    <span className="text-lg text-billed">Bill Annually</span>
                </div>
                <div className="block-pricing block-pricing-2 mt-70">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12">
                            <div className="row">
                                <div className="col-xl-3 col-lg-6 col-md-6 wow animate__animated animate__fadeIn" data-wow-delay=".1s">
                                    <div className="box-pricing-item hover-up">
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
                                            <li>
                                                Custom designs and
                                                features
                                            </li>
                                        </ul>
                                        <div>

                                            <Link href="/#" legacyBehavior><a className="btn btn-black text-body-lead icon-arrow-right-white">Get Started
                                            </a></Link>

                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-6 col-md-6 wow animate__animated animate__fadeIn" data-wow-delay=".2s">
                                    <div className="box-pricing-item active hover-up">
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
                                        </ul>
                                        <div>

                                            <Link href="/#" legacyBehavior><a className="btn btn-black text-body-lead icon-arrow-right-white">Get Started
                                            </a></Link>

                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-6 col-md-6 wow animate__animated animate__fadeIn" data-wow-delay=".3s">
                                    <div className="box-pricing-item hover-up">
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
                                            <li>Custom instructors</li>
                                        </ul>
                                        <div>

                                            <Link href="/#" legacyBehavior><a className="btn btn-black text-body-lead icon-arrow-right-white">Get Started
                                            </a></Link>

                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-6 col-md-6 wow animate__animated animate__fadeIn" data-wow-delay=".4s">
                                    <div className="box-pricing-item hover-up">
                                        <div className="box-info-price">
                                            <span className="text-heading-3 for-month display-month">${isToggled ? " 35" : " 50"}</span>
                                            <span className="text-month for-month text-body-small color-gray-400 display-month">/{isToggled ? "Year" : " Month"}</span>
                                        </div>
                                        <div className="line-bd-bottom">
                                            <h4 className="text-heading-5 mb-15">
                                                Unlimited
                                            </h4>
                                            <p className="text-body-small color-gray-400">
                                                Avvanced features for pros
                                                who need more customization.
                                            </p>
                                        </div>
                                        <ul className="list-package-feature">
                                            <li>
                                                Unlimited updates and
                                                Support
                                            </li>
                                            <li>
                                                Custom designs and
                                                features
                                            </li>
                                            <li>Custom permissions</li>
                                            <li>Custom instructors</li>
                                        </ul>
                                        <div>

                                            <Link href="/#" legacyBehavior><a className="btn btn-black text-body-lead icon-arrow-right-white">Get Started
                                            </a></Link>

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

export default PriceTable;
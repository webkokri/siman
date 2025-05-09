/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import Link from "next/link";
import React from "react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import data from "../../util/shopData";
SwiperCore.use([Autoplay, Navigation]);
const Intro2 = () => {
    return (
        <>
            <div className="box-swiper">
                <div className="swiper-container swiper-group-1">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        loop={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false
                        }}
                        navigation={{
                            prevEl: ".swiper-button-prev-5",
                            nextEl: ".swiper-button-next-5"
                        }}
                        className="swiper-wrapper pt-5"
                    >
                        <SwiperSlide>
                            <div className="row">
                                <div className="col-12 swiper-slide-1">
                                    <div className="grid-category grid-category-style-2">
                                        <div className="grid-image-left-category">
                                            <Link href="#" legacyBehavior>
                                                <a>
                                                    <div className="category-image">
                                                        <span className="for-design"></span>
                                                    </div>
                                                    <div className="category-info">
                                                        <h3 className="text-heading-6">Computer for Designer, Art</h3>
                                                    </div>
                                                </a>
                                            </Link>
                                        </div>
                                        <div className="grid-image-bottom">
                                            <Link href="#" legacyBehavior>
                                                <a>
                                                    <img src="/assets/imgs/page/homepage6/img-2.png" />
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 swiper-slide-1">
                                    <div className="grid-category grid-category-style-2">
                                        <div className="grid-image-left-category">
                                            <Link href="#" legacyBehavior>
                                                <a>
                                                    <div className="category-image">
                                                        <span className="for-software"></span>
                                                    </div>
                                                    <div className="category-info">
                                                        <h3 className="text-heading-6">Computer for Designer, Art</h3>
                                                    </div>
                                                </a>
                                            </Link>
                                        </div>
                                        <div className="grid-image-bottom">
                                            <Link href="#" legacyBehavior>
                                                <a>
                                                    <img src="/assets/imgs/page/homepage6/img-3.png" />
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 swiper-slide-2">
                                    <div className="grid-category grid-category-style-2">
                                        <div className="grid-image-left-category">
                                            <Link href="#" legacyBehavior>
                                                <a>
                                                    <div className="category-image">
                                                        <span className="for-office"></span>
                                                    </div>
                                                    <div className="category-info">
                                                        <h3 className="text-heading-6 mt-15">Computer for Designer, Art</h3>
                                                        <p className="text-body-lead-large color-gray-500 mt-10">Real-time display of data</p>
                                                        <span className="icon-arrow-right-thin"></span>
                                                    </div>
                                                </a>
                                            </Link>
                                        </div>
                                        <div className="grid-image-bottom">
                                            <Link href="#" legacyBehavior>
                                                <a>
                                                    <img src="/assets/imgs/page/homepage6/img-4.png" />
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className="swiper-button-next swiper-button-next-5" />
                <div className="swiper-button-prev swiper-button-prev-5" />
            </div>
        </>
    );
};

export default Intro2;

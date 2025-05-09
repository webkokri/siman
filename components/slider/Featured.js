/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import Link from 'next/link';
import React from 'react';
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import data from "../../util/shopData";
SwiperCore.use([Autoplay, Navigation]);
const FeaturedSlider = () => {




    return (
        <>
            <div className="box-swiper">
                <div className="swiper-container swiper-group-4">
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
                        className="swiper-wrapper pb-70 pt-5"
                    >

                        <SwiperSlide>
                            <div className="row">
                                {data.map((item, i) => (
                                    <>
                                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                            <div className="product-item-2 hover-up">
                                                <Link href={`/shop/${item.id}`} legacyBehavior>
                                                    <a>
                                                        <div className="product-image">
                                                            <img className="img-fluid" src={`/assets/imgs/page/homepage5/${item.img}`} alt="" />
                                                        </div>
                                                    </a>
                                                </Link>

                                                <div className="box-quick-view">
                                                    <div className="quick-view">
                                                        <Link href="#" legacyBehavior><a className="like-product"></a></Link>
                                                        <Link href="#" legacyBehavior><a className="shuffle-product"></a></Link>
                                                        <Link href="#" legacyBehavior><a className="view-product"></a></Link>
                                                    </div>
                                                </div>
                                                <div className="product-info"><span className="text-body-small color-gray-500 font-bold">{item.brand}</span>
                                                    <Link href={`/shop/${item.id}`} legacyBehavior>
                                                        <a>
                                                            <h3 className="text-body-lead color-gray-900">{item.title}</h3>
                                                        </a>
                                                    </Link>

                                                    <div className="rating mt-10">
                                                        <div className="box-rating"><span></span><img src="/assets/imgs/page/homepage5/star-active.svg" alt="agon" /><span></span><img src="/assets/imgs/page/homepage5/star-active.svg" alt="agon" /><span></span><img src="/assets/imgs/page/homepage5/star-active.svg" alt="agon" /><span></span><img src="/assets/imgs/page/homepage5/star-active.svg" alt="agon" /><span></span><img src="/assets/imgs/page/homepage5/star.svg" alt="agon" /></div><span className="text-semibold"><span>(</span><span>{item.rating}</span><span>&nbsp;rates )</span></span>
                                                    </div>
                                                    <div className="d-flex mt-20">
                                                        <div className="box-prices"><span className="price-regular mr-5">${item.oldPrice}</span><span className="price-regular price-line">${item.newPrice}</span></div>
                                                        <div className="button-add text-end">
                                                            <Link href="#" legacyBehavior><a className="btn btn-cart">Add</a></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                ))}
                            </div>

                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="row">
                                {data.map((item, i) => (
                                    <>
                                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                            <div className="product-item-2 hover-up">
                                                <Link href={`/shop/${item.id}`} legacyBehavior>
                                                    <a>
                                                        <div className="product-image">
                                                            <img className="img-fluid" src={`/assets/imgs/page/homepage5/${item.img}`} alt="" />
                                                        </div>
                                                    </a>
                                                </Link>

                                                <div className="box-quick-view">
                                                    <div className="quick-view">
                                                        <Link href="#" legacyBehavior><a className="like-product"></a></Link>

                                                        <Link href="#" legacyBehavior><a className="shuffle-product"></a></Link>

                                                        <Link href="#" legacyBehavior><a className="view-product"></a></Link>
                                                    </div>
                                                </div>
                                                <div className="product-info"><span className="text-body-small color-gray-500 font-bold">{item.brand}</span>
                                                    <Link href={`/shop/${item.id}`} legacyBehavior>
                                                        <a>
                                                            <h3 className="text-body-lead color-gray-900">{item.title}</h3>
                                                        </a>
                                                    </Link>

                                                    <div className="rating mt-10">
                                                        <div className="box-rating"><span></span><img src="/assets/imgs/page/homepage5/star-active.svg" alt="agon" /><span></span><img src="/assets/imgs/page/homepage5/star-active.svg" alt="agon" /><span></span><img src="/assets/imgs/page/homepage5/star-active.svg" alt="agon" /><span></span><img src="/assets/imgs/page/homepage5/star-active.svg" alt="agon" /><span></span><img src="/assets/imgs/page/homepage5/star.svg" alt="agon" /></div><span className="text-semibold"><span>(</span><span>{item.rating}</span><span>&nbsp;rates )</span></span>
                                                    </div>
                                                    <div className="d-flex mt-20">
                                                        <div className="box-prices"><span className="price-regular mr-5">${item.oldPrice}</span><span className="price-regular price-line">${item.newPrice}</span></div>
                                                        <div className="button-add text-end">
                                                            <Link href="#" legacyBehavior><a className="btn btn-cart">Add</a></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                ))}
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

export default FeaturedSlider;


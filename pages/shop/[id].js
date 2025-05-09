/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ThumbSlider from "../../components/slider/Thumb";
import data from "../../util/shopData";
import Layout from "./../../components/layout/Layout";
const SingleVendor = () => {

    let Router = useRouter()

    const [singleStore, setSingleStore] = useState(null);


    const { id } = Router.query;


    useEffect(() => {
        setSingleStore(data.find((data) => data.id == id));
    }, [id]);

    const [activeIndex, setActiveIndex] = useState(1);

    const handleOnClick = (index) => {
        setActiveIndex(index); // remove the curly braces
    };


    return (
        <>


            <Layout
                headTitle="Blog"
                pageTitle="Our online News"
                pageTitleSub="The fancy moon going in little artist painting"
                parent="Blog"
                child="Blog Details"
                pageClass="front"
            >
                <section className="section-box">
                    <div className="banner-hero nav-breadcrums bg-gray-100">
                        <div className="container">
                            <div className="breadcrumb">
                                <ul>
                                    <li className="home">
                                        <Link href="index.html" legacyBehavior><a>Home</a></Link></li>
                                    <li>
                                        <Link href="page-shop-grid-1.html" legacyBehavior><a>Shop</a></Link></li>
                                    <li>
                                        <Link href="page-shop-grid-2.html" legacyBehavior><a>Headphone</a></Link></li>
                                    <li>
                                        <Link href="#" legacyBehavior><a>Sony Digital Surround Wireless Headphones</a></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="section-box mt-70" />


                {singleStore && (
                    <>

                        <section className="section-box">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-7">
                                        <ThumbSlider/>
                                    </div>
                                    <div className="col-lg-5">
                                        <div className="product-info">
                                            <div className="d-flex">
                                                <div className="box-category-product"><span className="tag-category">{singleStore.brand}</span></div>
                                                <div className="box-rate-product">
                                                    <div className="box-rating"><span><img src="/assets/imgs/page/homepage5/star-active.svg" alt="agon" /></span><span><img src="/assets/imgs/page/homepage5/star-active.svg" alt="agon" /></span><span><img src="/assets/imgs/page/homepage5/star-active.svg" alt="agon" /></span><span><img src="/assets/imgs/page/homepage5/star-active.svg" alt="agon" /></span><span><img src="/assets/imgs/page/homepage5/star.svg" alt="agon" /></span></div><span className="text-semibold"><span>(</span><span>{singleStore.rating}</span><span>&nbsp;rates )</span></span>
                                                </div>
                                            </div>
                                            <h1 className="text-heading-4 mt-30">{singleStore.title}</h1>
                                            <div className="box-price"><span className="price">${singleStore.newPrice}</span><span className="price-old">${singleStore.oldPrice}</span><span className="text-stock">(In stock)</span></div>
                                            <p className="text-body-text color-gray-500">The WH-L600 delivers cinematic surround sound to immerse you in whatever you are watching or listening to. Sound modes enhance movies, dialogue, games, and sport, while a 98.43-ft wireless listening range gives you the freedom to move around.</p>
                                            <div className="box-countdown mt-40">
                                                <div className="box-processbar">
                                                    <div className="text-hurry">Hurry up!<br />Sales ends soon!</div>
                                                    <div className="process-bar-line">
                                                        <div className="process-bar-inner" />
                                                    </div><span className="text-number-sold">63/158 sold</span>
                                                </div>
                                                <div className="box-count">
                                                    <div className="deals-countdown pl-5" data-countdown="2022/05/25 00:00:00" />
                                                </div>
                                            </div>
                                            <div className="detail-extralink mb-30">
                                                <div className="detail-qty border radius">
                                                    <Link href="#" legacyBehavior><a className="qty-down"><i className="fi-rs-angle-small-down" /></a></Link><input className="qty-val" name="quantity" defaultValue={1} min={1} />
                                                    <Link href="#" legacyBehavior><a className="qty-up"><i className="fi-rs-angle-small-up" /></a></Link></div>
                                                <div className="product-extra-link2"><button className="button button-add-to-cart" type="submit"><img src="/assets/imgs/page/single-product/cart.svg" /> Add to cart</button>
                                                    <Link href="#" legacyBehavior><a className="action-btn hover-up" aria-label="Add To Wishlist"><img src="/assets/imgs/page/single-product/heart.svg" /></a></Link>
                                                    <Link href="#" legacyBehavior><a className="action-btn hover-up" aria-label="Compare" ></a></Link></div>
                                            </div>
                                            <div className="box-categories-link">
                                                <div className="item-cat"><span className="text-body-text color-gray-900">Vendor:</span>
                                                    <Link href="#" legacyBehavior><a className="text-body-text color-gray-500">AgonMart</a></Link></div>
                                                <div className="item-cat"><span className="text-body-text color-gray-900">SKU:</span>
                                                    <Link href="#" legacyBehavior><a className="text-body-text color-gray-500">ABJK767C878</a></Link></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="product-description">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <ul className="nav mt-50" role="tablist">
                                                    <li onClick={() => handleOnClick(1)}>
                                                        <a className={activeIndex === 1 ? "btn btn-default btn-tab active" : "btn btn-default btn-tab"}>Description</a>
                                                    </li>
                                                    <li onClick={() => handleOnClick(2)}>
                                                        <a className={activeIndex === 2 ? "btn btn-default btn-tab active" : "btn btn-default btn-tab"}>Additional info</a>
                                                    </li>
                                                    <li onClick={() => handleOnClick(3)}>
                                                        <a className={activeIndex === 3 ? "btn btn-default btn-tab active" : "btn btn-default btn-tab"}>Vendor</a>
                                                    </li>
                                                    <li onClick={() => handleOnClick(4)}>
                                                        <a className={activeIndex === 4 ? "btn btn-default btn-tab active" : "btn btn-default btn-tab"}>Reviews (3)</a>
                                                    </li>
                                                </ul>
                                                <div className="tab-content mt-50">
                                                    <div className={activeIndex === 1 ? "tab-pane fade active show" : "tab-pane fade"}>
                                                        <p className="text-body-text color-gray-500">Uninhibited carnally hired played in whimpered dear gorilla koala depending and much yikes off far quetzal goodness and from for grimaced goodness unaccountably and meadowlark near unblushingly crucial scallop tightly neurotic hungrily some and dear furiously this apart.<br /><br />Spluttered narrowly yikes left moth in yikes bowed this that grizzly much hello on spoon-fed that alas rethought much decently richly and wow against the frequent fluidly at formidable acceptably flapped besides and much circa far over the bucolically hey precarious goldfinch mastodon goodness gnashed a jellyfish and one however because.</p>
                                                        <h3 className="text-body-text font-bold color-gray-500 mt-30">E9SNWHL600B</h3>
                                                        <ul>
                                                            <li>WH-L600 Digital Surround Wireless Headphones (Black)</li>
                                                            <li>Charging Stand</li>
                                                            <li>AC Adapter</li>
                                                            <li>Optical Digital Audio Cable</li>
                                                            <li>USA Warranty</li>
                                                        </ul>
                                                        <h3 className="text-body-text font-bold color-gray-500 mt-30">Bundle Includes:</h3>
                                                        <ul>
                                                            <li>Sony Digital Surround Wireless Headphones Black</li>
                                                            <li>Deco Gear 6FT Universal 4K HDMI 2.0 Cable with 28AWG Pure Copper Conductors</li>
                                                            <li>1 Year Extended Warranty for Products Valued up to $500</li>
                                                        </ul>
                                                    </div>
                                                    <div className={activeIndex === 2 ? "tab-pane fade active show" : "tab-pane fade"}>
                                                        <table className="table">
                                                            <tbody>
                                                                <tr className="stand-up">
                                                                    <th>Stand Up</th>
                                                                    <td>
                                                                        <p>35″L x 24″W x 37-45″H(front to back wheel)</p>
                                                                    </td>
                                                                </tr>
                                                                <tr className="folded-wo-wheels">
                                                                    <th>Folded (w/o wheels)</th>
                                                                    <td>
                                                                        <p>32.5″L x 18.5″W x 16.5″H</p>
                                                                    </td>
                                                                </tr>
                                                                <tr className="folded-w-wheels">
                                                                    <th>Folded (w/ wheels)</th>
                                                                    <td>
                                                                        <p>32.5″L x 24″W x 18.5″H</p>
                                                                    </td>
                                                                </tr>
                                                                <tr className="door-pass-through">
                                                                    <th>Door Pass Through</th>
                                                                    <td>
                                                                        <p>24</p>
                                                                    </td>
                                                                </tr>
                                                                <tr className="frame">
                                                                    <th>Frame</th>
                                                                    <td>
                                                                        <p>Aluminum</p>
                                                                    </td>
                                                                </tr>
                                                                <tr className="weight-wo-wheels">
                                                                    <th>Weight (w/o wheels)</th>
                                                                    <td>
                                                                        <p>20 LBS</p>
                                                                    </td>
                                                                </tr>
                                                                <tr className="weight-capacity">
                                                                    <th>Weight Capacity</th>
                                                                    <td>
                                                                        <p>60 LBS</p>
                                                                    </td>
                                                                </tr>
                                                                <tr className="width">
                                                                    <th>Width</th>
                                                                    <td>
                                                                        <p>24″</p>
                                                                    </td>
                                                                </tr>
                                                                <tr className="handle-height-ground-to-handle">
                                                                    <th>Handle height (ground to handle)</th>
                                                                    <td>
                                                                        <p>37-45″</p>
                                                                    </td>
                                                                </tr>
                                                                <tr className="wheels">
                                                                    <th>Wheels</th>
                                                                    <td>
                                                                        <p>12″ air / wide track slick tread</p>
                                                                    </td>
                                                                </tr>
                                                                <tr className="seat-back-height">
                                                                    <th>Seat back height</th>
                                                                    <td>
                                                                        <p>21.5″</p>
                                                                    </td>
                                                                </tr>
                                                                <tr className="head-room-inside-canopy">
                                                                    <th>Head room (inside canopy)</th>
                                                                    <td>
                                                                        <p>25″</p>
                                                                    </td>
                                                                </tr>
                                                                <tr className="pa_color">
                                                                    <th>Color</th>
                                                                    <td>
                                                                        <p>Black, Blue, Red, White</p>
                                                                    </td>
                                                                </tr>
                                                                <tr className="pa_size">
                                                                    <th>Size</th>
                                                                    <td>
                                                                        <p>M, S</p>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                    <div className={activeIndex === 3 ? "tab-pane fade active show" : "tab-pane fade"}>
                                                        <div className="vendor-logo d-flex mb-30"><img src="/assets/imgs/page/single-product/vendor-18.svg" alt />
                                                            <div className="vendor-name ml-15">
                                                                <h6>
                                                                    <Link href="vendor-details-2.html" legacyBehavior><a>Noodles Co.</a></Link></h6>
                                                                <div className="product-rate-cover text-end">
                                                                    <div className="product-rate d-inline-block">
                                                                        <div className="product-rating" style={{ width: '90%' }} />
                                                                    </div><span className="font-small ml-5 text-muted">(32 reviews)</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <ul className="contact-infor mb-50">
                                                            <li><img src="/assets/imgs/page/single-product/icon-location.svg" alt /><strong>Address: </strong><span>5171 W Campbell Ave undefined Kent, Utah 53127 United States</span></li>
                                                            <li><img src="/assets/imgs/page/single-product/icon-contact.svg" alt /><strong>Contact Seller:</strong><span>(+91) - 540-025-553</span></li>
                                                        </ul>
                                                        <div className="d-flex mb-55">
                                                            <div className="mr-30">
                                                                <p className="text-brand font-xs">Rating</p>
                                                                <h4 className="mb-0">92%</h4>
                                                            </div>
                                                            <div className="mr-30">
                                                                <p className="text-brand font-xs">Ship on time</p>
                                                                <h4 className="mb-0">100%</h4>
                                                            </div>
                                                            <div>
                                                                <p className="text-brand font-xs">Chat response</p>
                                                                <h4 className="mb-0">89%</h4>
                                                            </div>
                                                        </div>
                                                        <p className="text-body-text color-gray-500">Noodles and Company is an American fast-casual restaurant that offers international and American noodle dishes and pasta in addition to soups and salads. Noodles and Company was founded in 1995 by Aaron Kennedy and is headquartered in Broomfield, Colorado. The company went public in 2013 and recorded a $457 million revenue in 2017.In late 2018, there were 460 Noodles and Company locations across 29 states and Washington, D.C.</p>
                                                    </div>
                                                    <div className={activeIndex === 4 ? "tab-pane fade active show" : "tab-pane fade"}>
                                                        <div className="comments-area">
                                                            <div className="row">
                                                                <div className="col-lg-8">
                                                                    <h4 className="mb-30 title-question">Customer questions and answers</h4>
                                                                    <div className="comment-list">
                                                                        <div className="single-comment justify-content-between d-flex mb-30">
                                                                            <div className="user justify-content-between d-flex">
                                                                                <div className="thumb text-center"><img src="/assets/imgs/page/single-product/author-2.png" alt />
                                                                                    <Link href="#" legacyBehavior><a className="font-heading text-brand">Sienna</a></Link></div>
                                                                                <div className="desc">
                                                                                    <div className="d-flex justify-content-between mb-10">
                                                                                        <div className="d-flex align-items-center"><span className="font-xs text-muted">December 4, 2022 at 3:12 pm</span></div>
                                                                                        <div className="product-rate d-inline-block">
                                                                                            <div className="product-rating" style={{ width: '100%' }} />
                                                                                        </div>
                                                                                    </div>
                                                                                    <p className="mb-10 text-body-text color-gray-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, suscipit exercitationem accusantium obcaecati quos voluptate nesciunt facilis itaque modi commodi dignissimos sequi repudiandae minus ab deleniti totam officia id incidunt?
                                                                                        <Link href="#" legacyBehavior><a className="reply">Reply</a></Link></p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="single-comment justify-content-between d-flex mb-30 ml-30">
                                                                            <div className="user justify-content-between d-flex">
                                                                                <div className="thumb text-center"><img src="/assets/imgs/page/single-product/author-3.png" alt />
                                                                                    <Link href="#" legacyBehavior><a className="font-heading text-brand">Brenna</a></Link></div>
                                                                                <div className="desc">
                                                                                    <div className="d-flex justify-content-between mb-10">
                                                                                        <div className="d-flex align-items-center"><span className="font-xs text-muted">December 4, 2022 at 3:12 pm</span></div>
                                                                                        <div className="product-rate d-inline-block">
                                                                                            <div className="product-rating" style={{ width: '80%' }} />
                                                                                        </div>
                                                                                    </div>
                                                                                    <p className="mb-10 text-body-text color-gray-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, suscipit exercitationem accusantium obcaecati quos voluptate nesciunt facilis itaque modi commodi dignissimos sequi repudiandae minus ab deleniti totam officia id incidunt?
                                                                                        <Link href="#" legacyBehavior><a className="reply">Reply</a></Link></p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="single-comment justify-content-between d-flex">
                                                                            <div className="user justify-content-between d-flex">
                                                                                <div className="thumb text-center"><img src="/assets/imgs/page/single-product/author-4.png" alt />
                                                                                    <Link href="#" legacyBehavior><a className="font-heading text-brand">Gemma</a></Link></div>
                                                                                <div className="desc">
                                                                                    <div className="d-flex justify-content-between mb-10">
                                                                                        <div className="d-flex align-items-center"><span className="font-xs text-muted">December 4, 2022 at 3:12 pm</span></div>
                                                                                        <div className="product-rate d-inline-block">
                                                                                            <div className="product-rating" style={{ width: '80%' }} />
                                                                                        </div>
                                                                                    </div>
                                                                                    <p className="mb-10 text-body-text color-gray-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, suscipit exercitationem accusantium obcaecati quos voluptate nesciunt facilis itaque modi commodi dignissimos sequi repudiandae minus ab deleniti totam officia id incidunt?
                                                                                        <Link href="#" legacyBehavior><a className="reply">Reply</a></Link></p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-4">
                                                                    <h4 className="mb-30 title-question">Customer reviews</h4>
                                                                    <div className="d-flex mb-30">
                                                                        <div className="product-rate d-inline-block mr-15">
                                                                            <div className="product-rating" style={{ width: '90%' }} />
                                                                        </div>
                                                                        <h6>4.8 out of 5</h6>
                                                                    </div>
                                                                    <div className="progress"><span>5 star</span>
                                                                        <div className="progress-bar" role="progressbar" style={{ width: '50%' }} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100}>50%</div>
                                                                    </div>
                                                                    <div className="progress"><span>4 star</span>
                                                                        <div className="progress-bar" role="progressbar" style={{ width: '25%' }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>25%</div>
                                                                    </div>
                                                                    <div className="progress"><span>3 star</span>
                                                                        <div className="progress-bar" role="progressbar" style={{ width: '45%' }} aria-valuenow={45} aria-valuemin={0} aria-valuemax={100}>45%</div>
                                                                    </div>
                                                                    <div className="progress"><span>2 star</span>
                                                                        <div className="progress-bar" role="progressbar" style={{ width: '65%' }} aria-valuenow={65} aria-valuemin={0} aria-valuemax={100}>65%</div>
                                                                    </div>
                                                                    <div className="progress mb-30"><span>1 star</span>
                                                                        <div className="progress-bar" role="progressbar" style={{ width: '85%' }} aria-valuenow={85} aria-valuemin={0} aria-valuemax={100}>85%</div>
                                                                    </div>
                                                                    <Link href="#" legacyBehavior><a className="font-xs text-muted">How are ratings calculated?</a></Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                    </>
                )}

                <section className="section-box mt-90">
                    <div className="container">
                        <h2 className="text-heading-1 color-gray-900">You may also like</h2>
                        <p className="text-body-lead-large color-gray-600 mt-20">Take it to your cart</p>
                    </div>
                    <div className="container mt-70">
                        <div className="row">
                            <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12">
                                <div className="product-item-1 hover-up">
                                    <Link href="#" legacyBehavior><a>
                                        <div className="product-image"><img src="/assets/imgs/page/homepage5/sp1.png" alt="agon" /></div>
                                        <div className="product-info">
                                            <h3 className="title-product">Bass ultra x-203. Head phone</h3><span className="price-regular mr-15">$29.8</span><span className="price-regular price-line">$32.2</span>
                                        </div>
                                    </a></Link></div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12">
                                <div className="product-item-1 hover-up">
                                    <Link href="#" legacyBehavior><a>
                                        <div className="product-image"><img src="/assets/imgs/page/homepage5/sp2.png" alt="agon" /></div>
                                        <div className="product-info">
                                            <h3 className="title-product">Boxie by Dro C 3450. Active Noise</h3><span className="price-regular mr-15">$30.2</span><span className="price-regular price-line">$42.5</span>
                                        </div>
                                    </a></Link></div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12">
                                <div className="product-item-1 hover-up">
                                    <Link href="#" legacyBehavior><a>
                                        <div className="product-image"><img src="/assets/imgs/page/homepage5/sp3.png" alt="agon" /></div>
                                        <div className="product-info">
                                            <h3 className="title-product">Sony DSC H300 - 20.1 Megapixel</h3><span className="price-regular mr-15">$59.8</span><span className="price-regular price-line">$62.3</span>
                                        </div>
                                    </a></Link></div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12">
                                <div className="product-item-1 hover-up">
                                    <Link href="#" legacyBehavior><a>
                                        <div className="product-image"><img src="/assets/imgs/page/homepage5/sp4.png" alt="agon" /></div>
                                        <div className="product-info">
                                            <h3 className="title-product">Bass ultra x-203. Head phone</h3><span className="price-regular mr-15">$42.6</span><span className="price-regular price-line">$52.3</span>
                                        </div>
                                    </a></Link></div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12">
                                <div className="product-item-1 hover-up">
                                    <Link href="#" legacyBehavior><a>
                                        <div className="product-image"><img src="/assets/imgs/page/homepage5/sp5.png" alt="agon" /></div>
                                        <div className="product-info">
                                            <h3 className="title-product">Boxie by Dro C 3450. Active Noise</h3><span className="price-regular mr-15">$69.5</span><span className="price-regular price-line">$71.5</span>
                                        </div>
                                    </a></Link></div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12">
                                <div className="product-item-1 hover-up">
                                    <Link href="#" legacyBehavior><a>
                                        <div className="product-image"><img src="/assets/imgs/page/homepage5/sp6.png" alt="agon" /></div>
                                        <div className="product-info">
                                            <h3 className="title-product">Sony DSC H300 - 20.1 Megapixel</h3><span className="price-regular mr-15">$52.9</span><span className="price-regular price-line">$55.6</span>
                                        </div>
                                    </a></Link></div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-box mt-80 mb-40">
                    <div className="container">
                        <div className="banner-ads">
                            <div className="box-banner-ads">
                                <h3 className="text-head-ads mb-15">Big sale for Iphone 7 plus</h3>
                                <p className="desc-ads">Sed mauris Pellentesque elit Aliquam at<br className="d-lg-block d-none" />lacus interdum nascetur elit ipsum.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-box mt-70 shop-bottom-banner">
                    <div className="container">
                        <div className="box-green box-green-2 bdr-18">
                            <h3 className="text-heading-1 color-white">You can order on<br className="d-lg-block d-none" />App and Play store</h3>
                            <p className="text-desc-white">Bring the world of shopping to your phone</p>
                            <div className="mt-60">
                                <Link href="#" legacyBehavior><a className="mr-20"><img src="/assets/imgs/page/homepage5/apple-button.svg" alt="agon" /></a></Link>
                                <Link href="#" legacyBehavior><a><img src="/assets/imgs/page/homepage5/google-play.svg" alt="agon" /></a></Link></div>
                            <div className="mt-10"><span className="cb-layout mr-5">Order direct from the app</span><span className="cb-layout">Save and searches</span></div>
                            <div className="block-1 d-none d-lg-block"><img src="/assets/imgs/page/shop1/safety.png" alt="agon" /></div>
                            <div className="block-2 d-none d-lg-block"><img src="/assets/imgs/page/shop1/chart.png" alt="agon" /></div>
                        </div>
                    </div>
                </section>

            </Layout>
        </>
    );
};



export default SingleVendor;
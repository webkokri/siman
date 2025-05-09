import Layout from "../components/layout/Layout";
import { useState } from 'react';

function Contact() {
    const [name, setName] = useState('');
    const [company, setCompany] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        // You can add validation logic here if needed

        // Make an API request to your server-side API or a third-party service
        // For example, you can use the `fetch` API or a library like Axios
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, company, email, phone, message }),
            });
            const data = await response.json();
            console.log(data);
            // Handle the response data here
        } catch (error) {
            console.error(error);
            // Handle the error here
        }
    };

    return (
        <>
            <Layout>
                <section className="section-box">
                    <div className="banner-hero banner-breadcrums">
                        <div className="container text-center">
                            <h1 className="text-heading-2 color-gray-1000 mb-20">Lets talk—share your excitement with us!</h1>
                            <p className="text-body-text color-gray-500">Kindly provide the requested details below and proceed by clicking submit.<br className="d-lg-block d-none" />Rest assured, we will promptly reach out to you.</p>
                        </div>
                    </div>
                </section>
                <section className="section-box">
                    <div className="container mb-20 mt-140">
                        <div className="bdrd-58 box-gray-100 icon-wave">
                            <div className="row">
                                <div className="col-lg-12 mb-60"><span className="text-body-capitalized text-uppercase">Contact us</span>
                                    <h2 className="text-heading-3 color-gray-900 mt-10">Have an project in mind?</h2>
                                    <p className="text-body-text color-gray-600 mt-20">The right move at the right time saves your investment.<br className="d-lg-block d-none" />live the dream of expanding your business.</p>
                                </div>
                                <div className="col-lg-4 mb-40">
                                    <h4 className="text-heading-6 color-gray-900 icon-home mb-10 mt-10">Siman Infotech</h4>
                                    <p className="text-body-text color-gray-600">162, Heartstone Dr.<br />Winnipeg, Manitoba, Canada</p>
                                    <p className="text-body-text color-gray-600"><br/><br/>(204) 881 2662</p>
                                    <p className="text-body-text color-gray-600">(604)-655-1283</p>
                                    <p className="text-body-text color-gray-600">info@siman.ca</p>
                                </div>
                                <div className="col-lg-8">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <input
                                                    className="form-control"
                                                    placeholder="Enter your name"
                                                    value={name}
                                                    onChange={(event) => setName(event.target.value)}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <input
                                                    className="form-control"
                                                    placeholder="Comapy (optioanl)"
                                                    value={company}
                                                    onChange={(event) => setCompany(event.target.value)}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <input
                                                    className="form-control"
                                                    placeholder="Your email"
                                                    value={email}
                                                    onChange={(event) => setEmail(event.target.value)}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <input
                                                    className="form-control"
                                                    placeholder="Phone number"
                                                    value={phone}
                                                    onChange={(event) => setPhone(event.target.value)}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <textarea
                                                    className="form-control"
                                                    placeholder="Tell us about yourself"
                                                    value={message}
                                                    onChange={(event) => setMessage(event.target.value)}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 mt-15">
                                            <button className="btn btn-black icon-arrow-right-white mr-40 mb-20" type="submit" onClick={handleSubmit}>Send Message</button>
                                            <br className="d-lg-none d-block" />
                                            <span className="text-body-text-md color-gray-500 mb-20">By clicking contact us button, you agree our terms and policy,</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-box mt-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-sm-10 col-12 text-center mt-40">
                                <h2 className="text-heading-1 color-gray-900 mb-20">Our Location</h2>
                                {/* <p className="text-body-lead-large color-gray-600 mt-20">In a professional context it often happens that private or<br className="d-lg-block d-none" />corporate clients order a publication to publish news.</p> */}
                            </div>
                        </div>
                    </div>
                    <div className="container mt-100">
                        <div className="row">
                            <div className="col-lg-4 col-md-12 col-sm-12">
                                <div className="list-icons hover-up">
                                    <div className="item-icon"><span className="icon-left"><img src="/assets/imgs/page/homepage2/icon-acquis.svg" alt="Agon" /></span>
                                        <h4 className="text-heading-4">Technical Hub</h4>
                                        <p className="text-body-text color-gray-1100 mt-15">F-237, Phase 8-B,<br />Mohali, Punjab, India<br />Phone: +91-977-977-5874<br />Email: info@siman.ca</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12 col-sm-12">
                                <div className="list-icons hover-up">
                                    <div className="item-icon"><span className="icon-left"><img src="/assets/imgs/page/homepage2/icon-active.svg" alt="Agon" /></span>
                                        <h4 className="text-heading-4">Head Office</h4>
                                        <p className="text-body-text color-gray-1100 mt-15">162, Heartstone Dr.<br />Winnipeg, Manitoba, Canada<br />Phone: +1 (604)-655-1283<br/>Phone: +1 204 881 2662<br />Email: info@siman.ca</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12 col-sm-12">
                                <div className="list-icons hover-up">
                                    <div className="item-icon"><span className="icon-left"><img src="/assets/imgs/page/homepage2/icon-retent.svg" alt="Agon" /></span>
                                        <h4 className="text-heading-4">Corporate Office</h4>
                                        <p className="text-body-text color-gray-1100 mt-15">1204, Eco Tower<br />Sector 125, Mohali, Punjab<br />Whatsapp: +91-977-977-5874<br />Email: info@siman.ca</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </Layout>

        </>
    )
}

export default Contact;
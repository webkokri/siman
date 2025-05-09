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
                            <h1 className="text-heading-2 color-gray-1000 mb-20">Learn to Earn</h1>
                            <p className="text-body-text color-gray-500">Learning is the foundation for acquiring skills, achieving success, increasing opportunities, and attaining financial independence and stability in life.</p>
                        </div>
                    </div>
                </section>
                <section className="section-box">
                    <div className="container mb-20 mt-140">
                        <div className="bdrd-58 box-gray-100 icon-wave">
                            <div className="row">
                                <div className="col-lg-12 mb-60"><span className="text-body-capitalized text-uppercase">Skills empower seizing opportunities effectively.</span>
                                    <h2 className="text-heading-3 color-gray-900 mt-10">Struggling to Find a Job? Feel Unskilled?</h2>
                                    <p className="text-body-text color-gray-600 mt-20 mb-30">No worries—our industrial training program is here to help. We offer specialized training designed to equip<br/>you with the skills needed for high-demand white-collar jobs.</p>
                                    <h5>What We Provide:</h5>
                                    <ul className="text-body-text color-gray-600 mt-20">
                                        <li>1. Industry-Relevant Skills: Learn cutting-edge technologies and techniques that employers seek.</li>
                                        <li>2. Professional Development: Our courses focus on both technical and soft skills essential for career success.</li>
                                        <li>3. Rapid Career Advancement: Accelerate your entry into the tech industry with our comprehensive training.</li>
                                    </ul>

                                    <h5>Why Choose Us?</h5>
                                    <ul className="text-body-text color-gray-600 mt-20">
                                        <li>1. Experienced Instructors: Gain insights from seasoned professionals.</li>
                                        <li>2. Flexible Learning: Choose training options that fit your schedule.</li>
                                        <li>3. Career Support: Get the help you need to land your ideal job.</li>
                                    </ul>

                                    <p className="text-body-text color-gray-600 mt-20 mb-30">Join our multi-tech skill development course today and seize<br/> new opportunities in the growing tech sector. Your future is just an enrollment away!</p>
                                    <h4>Register Today!</h4>
                                </div>
                                {/* form registration */}
                                <form action="#" method="POST" enctype="multipart/form-data">
                                <div className="row">
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <input
                                                    className="form-control"
                                                    placeholder="Enter your name"
                                                    name="name"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <input
                                                    className="form-control"
                                                    placeholder="Mobile Number"
                                                    name="mobile"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <input
                                                    className="form-control"
                                                    placeholder="Your email"
                                                    name="email"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <input
                                                    className="form-control"
                                                    placeholder="Your Address"
                                                    name="address"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <input
                                                    className="form-control"
                                                    placeholder="your course"
                                                    name="course"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <input
                                                    className="form-control"
                                                    placeholder="your batch"
                                                    name="batch"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <input
                                                    className="form-control"
                                                    placeholder="Duration"
                                                    name="batch_length"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <input
                                                    className="form-control"
                                                    placeholder="Batch Start Date"
                                                    name="start_date"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <input
                                                    className="form-control"
                                                    placeholder="Class Timmings"
                                                    name="timmings"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <input
                                                    className="form-control"
                                                    placeholder="Batch Type"
                                                    name="type"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <textarea
                                                    className="form-control"
                                                    placeholder="Tell us about yourself"
                                                    name="message"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 mt-15">
                                            <br className="d-lg-none d-block" />
                                            <input type="submit" name="submit" className="btn btn-black icon-arrow-right-white mr-40 mb-20" value="Register" />
                                        
                                            
                                            <span className="text-body-text-md color-gray-500 mb-20">By clicking Register button, you agree with our terms and policies.</span>
                                        </div>
                                    </div>

                                    </form>

                                {/* form registration end here */}
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
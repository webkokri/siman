/* eslint-disable @next/next/no-img-element */
import { useState } from "react";

function Accordion() {
    const [isActive, setIsActive] = useState({
        status: false,
        key: 1,
    });

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            });
        } else {
            setIsActive({
                status: true,
                key,
            });
        }
    };
    return (
        <>

            <div className="accordion" id="accordionFAQ">
                <div className="accordion-item">
                    <h2 className="accordion-header" onClick={() => handleToggle(1)}>
                        <button className={isActive.key == 1 ? "accordion-button text-heading-5 " : "accordion-button text-heading-5 collapsed"}>Can I see the demo before purchasing?</button>
                    </h2>
                    <div className={isActive.key == 1 ? "accordion-collapse collapse show" : "accordion-collapse collapse "}>
                        <div className="accordion-body">Yes. Our free trials provide you with a full version of the software for 14 days. You will find that the trial period does impose a few temporary limits on the contents, like the number of invoice templates you can use. Other than that, you get the full experience of the software, so you know exactly what you are getting when you become an Siman customer.</div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" onClick={() => handleToggle(2)}><button className={isActive.key == 2 ? "accordion-button text-heading-5 " : "accordion-button text-heading-5 collapsed"}>Can I cancel my subscription at any time?</button></h2>
                    <div className={isActive.key == 2 ? "accordion-collapse collapse show" : "accordion-collapse collapse "}>
                        <div className="accordion-body">Yes. The subscription can be cancelled anytime with in the trial period. After the 14 days trial your account will be put on hold. If you choose to keep your Business plan, you will need to enter and confirm your payment details. After the confirmation you continue with your account and data as you left it during the free trial.</div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" onClick={() => handleToggle(3)}><button className={isActive.key == 3 ? "accordion-button text-heading-5 " : "accordion-button text-heading-5 collapsed"}>What kind of payment methods do you accept?</button></h2>
                    <div className={isActive.key == 3 ? "accordion-collapse collapse show" : "accordion-collapse collapse "}>
                        <div className="accordion-body">We accept all major credit/debit cards including Rupay, Visa and Mastercard. If you would like to pay though any other form of offline payment, please write our support desk: info@siman.ca</div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" onClick={() => handleToggle(4)}><button className={isActive.key == 4 ? "accordion-button text-heading-5 " : "accordion-button text-heading-5 collapsed"}>Is there an additional discount when paid annually?</button></h2>
                    <div className={isActive.key == 4 ? "accordion-collapse collapse show" : "accordion-collapse collapse "}>
                        <div className="accordion-body">Yes, those who pay us annually are eligible for a flat 20% reduction off the cost of their subscription.</div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" onClick={() => handleToggle(5)}><button className={isActive.key == 5 ? "accordion-button text-heading-5 " : "accordion-button text-heading-5 collapsed"}>I need a custom Invoice format.</button></h2>
                    <div className={isActive.key == 5 ? "accordion-collapse collapse show" : "accordion-collapse collapse "}>
                        <div className="accordion-body">You are not limited to by the pre-defined Invoice templates. Siman Bills can be expanded to include additional invoice kinds and formats. Simply email us the format of the invoice you need.</div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" onClick={() => handleToggle(6)}><button className={isActive.key == 6 ? "accordion-button text-heading-5 " : "accordion-button text-heading-5 collapsed"}> How long will the implementation of the custom invoice format take?</button></h2>
                    <div className={isActive.key == 6 ? "accordion-collapse collapse show" : "accordion-collapse collapse "}>
                        <div className="accordion-body">Normally, it should take 5-15 business days to implement the custom invoice format?</div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" onClick={() => handleToggle(7)}><button className={isActive.key == 7 ? "accordion-button text-heading-5 " : "accordion-button text-heading-5 collapsed"}>Can I use your system on mobile or table also?</button></h2>
                    <div className={isActive.key == 7 ? "accordion-collapse collapse show" : "accordion-collapse collapse "}>
                        <div className="accordion-body">Yes. Our technology is set up to make sure the website is efficient and simple to use on any device.</div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Accordion;
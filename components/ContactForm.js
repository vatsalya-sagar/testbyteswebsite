import react, { useState, useEffect } from "react"
import { useRouter } from 'next/router'

export default function ContactForm() {

    const router  = useRouter();
    // Local state for holding form data
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneField, setPhoneField] = useState('');
    const [message, setMessage] = useState('');
    

    //Form validation
    useEffect(() => {
        "use strict";
        var forms = document.querySelectorAll(".needs-validation");
        Array.prototype.slice.call(forms).forEach(function (form) {
            form.addEventListener(
                "submit",
                function (event) {
                    if (!form.checkValidity()) {
                        event.preventDefault();
                        event.stopPropagation();
                    } else {
                        // console.log("Thanks for submission");
                        document.querySelector(".formconfirm-msg").style.display = "block";
                    }
                    form.classList.add("was-validated");
                },
                false
            );
        });
    });

    // submitFormData
    const handleSubmit3 = async (e) => {
        e.preventDefault()
        // alert("Working")
        // console.log('Sending')
        await fetch('https://admin.officecaller.com/api/leads/website_lead/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "title": "Testbytes IN website",
                "first_name": name,
                "email": email,
                "phone": phoneField,
                "city": "Not Available, Not Available",
                "state": "",
                "country": "Not Available",
                "address_line": "",
                "latitude": "", "longitude": "",
                "contact_lead": "Lead from Testbytes.net",
                "app_category": "No Category",
                "category_text": "Lead from Testbytes.net",
                "app_platform": "Lead from Testbytes.net",
                "cross_platfrom_status": "NA",
                "which_cross_platform": "NA",
                "grand_cost": "",
                // "enq_date": enq_date,
                "favourite": "",
                "enq_through": "FM site contact page",
                "enq_from": "FM site contact page",
                "enquiryfrom": "Lead from Testbytes.net",
                "country_code": "Not Available",
                "choosen_approach": "NA",
                "choosen_devices": "NA",
                "choosen_screen_count": 0,
                "choosen_login_methods": ['Lead from Testbytes.net'],
                "choosen_features": ['Lead from Testbytes.net'],
                "choosen_language": "NA",
                "choosen_admin": "NA ",
                "admin_efforts": 0,
                "choosen_webapp": "NA",
                "secondary_app": "NA",
                "screen_efforts": 0,
                "webservices": 0,
                "webapp_efforts": 0,
                "ios_efforts": 0,
                "android_efforts": 0,
                "crossplatform_efforts": 0,
                "secondary_app_efforts": 0,
                "features_efforts": 0,
                "database_efforts": 0,
                "grand_total_efforts": 0,
                "approx_cost": "NA",
                "timeline_month": "NA",
                "user_comment": message,
                // "mail_date": enq_date,
                "apikey": "7dac0fcac909b349"
            })
        }).then((res) => {
            console.log('Response received')
            if (res.status === 200) 
            {
                router.push('/thank-you')
                console.log('Response succeeded!');
            } else {
                console.log('Something went wrong...please check')
            }
        })
    }
    
    return (
        <>
            <form onSubmit={(e) => { handleSubmit3(e) }} className="form needs-validation" noValidate autoComplete="off">
                <div className="row" id="innerFormMain">
                    <div className="col-md-12">
                        {/* <div className="formMain"> */}
                        <div className="form-group my-2 has-validation">
                            <div className="formicon">
                                <i className="fa fa-user"></i>
                            </div>
                            <input
                                required
                                type="text"
                                name="name"
                                onChange={(e) => setName(e.target.value)}
                                className="form-control mediaWay mb-3"
                                placeholder="Enter your name"
                            />
                            <div className="invalid-feedback">
                                Please type your Name
                            </div>
                        </div>
                        <div className="form-group my-2 has-validation">
                            <div className="formicon">
                                <i className="fa fa-envelope"></i>
                            </div>
                            <input
                                required
                                name="email"
                                onChange={(e) => setEmail(e.target.value)}
                                type="email"
                                pattern="[a-zA-Z0-9]+.+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]{2,4}$"
                                className="form-control mediaWay mb-3"
                                placeholder="Enter your email address"
                            />
                            <div className="invalid-feedback">
                                Please enter valid email address
                            </div>
                        </div>
                        <div className="form-group my-2 has-validation">
                            <div className="formicon">
                                <i className="fa fa-phone"></i>
                            </div>
                            <input
                                required
                                name="text"
                                onChange={(e) => setPhoneField(e.target.value)}
                                type="tel"
                                inputMode="numeric"
                                minLength="9"
                                maxLength="13"
                                className="form-control mediaWay mb-3"
                                placeholder="Enter your Phone No."
                            />
                            <div className="invalid-feedback">
                                Please enter phone no.
                            </div>
                        </div>
                        <div className="form-group my-2 has-validation">
                            <div className="formicon">
                                <i className="fa fa-comment"></i>
                            </div>
                            <textarea
                                required
                                name="message"
                                onChange={(e) => setMessage(e.target.value)}
                                className="form-control mediaWay mb-3"
                                rows="5"
                                placeholder="Enter your Message..."
                            ></textarea>
                            <div className="invalid-feedback">
                                Please enter message
                            </div>
                        </div>
                        <div className='formconfirm-msg' style={{ display: `none` }}>
                            <div style={{ display: `inline-block`, border: `solid 1px #ccc`, padding: `10px`, margin: `10px 0`, fontWeight: `bold`, color: `#000`, boxShadow: `0 5px 20px rgba(0,0,0,0.1)` }}>
                                Thanks for sending the email, we will get in touch with you soon.
                            </div>
                        </div>
                        <div className="submitBtn">
                            <button type="submit" className="btn btn-primary btn-rounded btn-lg fw-bold px-4">Submit <i className="fa fa-arrow-right ms-1"></i></button>
                        </div>
                    </div>

                </div>
                
            </form>
        </>
    )
}
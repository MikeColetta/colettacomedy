import emailjs from "emailjs-com";
import React from 'react';
import './style.css';

function ContactForm() {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_rd8vtud', 'coletta_comedy', e.target, 'user_TE3r1HuD1rL0tUl8fy6or')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    }

    return (
        <div>
            <div className="container">
                <form onSubmit={sendEmail}>
                    <div className="row pt-5 mx-auto">
                        <div className="col-8 form-group mx-auto">
                            <input type="text" className="form-control" placeholder="Name" name="name" />
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="email" className="form-control" placeholder="Email Address" name="email" />
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="text" className="form-control" placeholder="Subject" name="subject" />
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <textarea className="form-control" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
                        </div>
                        <div className="col-8 pt-2 mx-auto">
                            <input type="submit" className="btn sendButton" value="Send"></input>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ContactForm;
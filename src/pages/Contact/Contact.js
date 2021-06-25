import "./style.css";
import ContactForm from "../../components/ContactForm";

function Contact() {
    return (
        <div className="container my-2" id="contact">
            <div className="card contactCard">
                <div className="card-header contactCardHeader">
                    <h2>Contact</h2>
                </div>
                <ContactForm />
            </div>
        </div>
    )
}

export default Contact;
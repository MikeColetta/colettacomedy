import "./style.css";

function Contact() {
    return (
        <div className="container my-2" id="contact">
        <div className="card contactCard">
            <div className="card-header contactCardHeader">
                <h2>Contact</h2>
            </div>
            <div>
            <h3 className="card-body contactSubheading">Send me an email at coletta.mike@gmail.com!</h3>            </div>
            <div className="row iconRow">
                <div className="card col-6 iconCard">
                    <a href="mailto:coletta.mike@gmail.com" target="_blank" rel="noreferrer"><span
                            className="fa fa-envelope-o fa-5x"></span></a>
                </div>
            </div>
            
        </div>
    </div>
    )
}

export default Contact;
import mikeImage from "../../assets/images/Mike.jpg";
import "./style.css";

function Home() {
    return (
        <div className="container my-2" id="about-me">
            <div className="card cardStyle">
                <div className="card-header">
                    <h2>About</h2>
                </div>
                <div className="card-body">
                    <img src={mikeImage} className="card-img-top about-me-img" alt="Mike in San Diego."></img>
                    <p className="card-text about-me-text">Full stack web developer and educationally motivated paraeducator. 
                    Received certificate in full stack web development from the University of Washington Coding Boot Camp. 
                    Collaborative, industrious team member with a knack for problem solving. 
                    Personal interests in video and table-top gaming, performance, and other creative enterprises. </p>
                    <p>Technologies I've used recently include:</p>
                    <ul className="techList">
                        <li className="techListItem">HTML5</li>
                        <li className="techListItem">CSS3</li>
                        <li className="techListItem">Bootstrap</li>
                        <li className="techListItem">Javascript ES6+</li>
                        <li className="techListItem">JQuery</li>
                        <li className="techListItem">Node.js</li>
                        <li className="techListItem">Express</li>
                        <li className="techListItem">MySQL</li>
                        <li className="techListItem">Sequelize</li>
                        <li className="techListItem">Handlebars</li>
                        <li className="techListItem">MongoDB</li>
                        <li className="techListItem">React.js</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Home;
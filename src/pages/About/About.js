import React from 'react';
import mikeAboutImage from "../../assets/images/MikeAbout.jpg";
import './style.css'


function About() {
    return (
        <div className="container my-2">
            <div className="card cardStyle aboutCard">
                <div className="card-header aboutCardHeader">
                    <h2>About</h2>
                </div>
                <div className="row card-body">
                    <div className="col-3">
                        <img src={mikeAboutImage} className="aboutMeImage" alt="Mike on stage."></img>
                    </div>
                    <div className="col-9">
                        <p className="card-text about-me-text">Mike Coletta is a Seattle based comedian originally from Alaska.
                            He started comedy performing improv in the wheat-infested, cultural boomtown of Pullman, Washington.
                            There, Coletta cracked up college audiences in the Nuthouse Improv Comedy Troupe, where he performed and directed.
                            Coletta connects with audiences through his quick wit, energetic delivery, and positive presence.
                            His honest reaction to life experiences completely envelops his comedy, and emits a fun, passionate disposition to audiences.
                            Coletta has performed at The Bridgetown Comedy Festival, Emerald City Comicon, Treefort Fest, and Bumbershoot.
                            He’s also the co-host of the HugLife and Codex: History of Video Games podcasts.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;
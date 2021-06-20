import React from 'react';
import "./style.css";
import { Row, Col } from 'react-bootstrap/';
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import HomeCarousel from '../../components/HomeCarousel';
import ShowsTable from '../../components/ShowsTable';

function Home() {
    return (
        <div className="container my-2" id="about-me">
            <Row>
                <HomeCarousel />
            </Row>
            <Row className="mb-2">
                <Col xs={9}>
                    <div className="card homeCard">
                        <div className="card-header homeCardHeader">
                            <h2>Upcoming Shows</h2>
                        </div>
                        <div className="card-body">
                            <ShowsTable />
                        </div>
                    </div>
                </Col>
                <Col>
                    <TwitterTimelineEmbed
                        sourceType="profile"
                        screenName="MeColetta"
                        options={{ height: 400 }}
                        theme='dark'
                        noBorders
                    />
                </Col>
            </Row>
            <Row></Row>
            <Row></Row>

            <Row></Row>

        </div>
    )
}

export default Home;
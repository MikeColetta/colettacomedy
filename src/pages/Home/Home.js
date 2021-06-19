import React from 'react';
import "./style.css";
import { Table, Button, Row, Col } from 'react-bootstrap/';
import { TwitterTimelineEmbed } from 'react-twitter-embed';

function Home() {
    return (
        <div className="container my-2" id="about-me">
            <Row>
                <Col xs={9}>
                    <div className="card homeCard">
                        <div className="card-header homeCardHeader">
                            <h2>Upcoming Shows</h2>
                        </div>
                        <div className="card-body">
                            <Table striped bordered hover variant="dark">
                                <tbody>
                                    <tr>
                                        <td>SUN - Jun 27, 2021</td>
                                        <td>7:00pm</td>
                                        <td>Host</td>
                                        <td>Four Horsemen Brewery - Kent, WA</td>
                                        <td className="moreInfo"><Button className='moreInfoButton'><a href="https://fourhorsemen.beer/?" className="moreInfo" >More Info</a></Button></td>
                                    </tr>
                                    <tr>
                                        <td>SUN - Jun 27, 2021</td>
                                        <td>7:00pm</td>
                                        <td>Host</td>
                                        <td>Four Horsemen Brewery - Kent, WA</td>
                                        <td className="moreInfo"><Button className='moreInfoButton'><a href="https://fourhorsemen.beer/?" className="moreInfo" >More Info</a></Button></td>
                                    </tr>
                                    <tr>
                                        <td>SUN - Jun 27, 2021</td>
                                        <td>7:00pm</td>
                                        <td>Host</td>
                                        <td>Four Horsemen Brewery - Kent, WA</td>
                                        <td className="moreInfo"><Button className='moreInfoButton'><a href="https://fourhorsemen.beer/?" className="moreInfo">More Info</a></Button></td>
                                    </tr>
                                </tbody>
                            </Table>

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
        </div>
    )
}

export default Home;
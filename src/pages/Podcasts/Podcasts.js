import React, { useState, useEffect } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import './style.css'
import HugLifeCard from '../../components/HugLifeCard';
import CodexCard from '../../components/CodexCard';


let Parser = require('rss-parser');
let parser = new Parser();


function Podcasts() {
    const [huglifeEp, setHuglifeEp] = useState([]);
    const [codexEp, setCodexEp] = useState([]);
    const [loading, setLoading] = useState(false);

    async function getEpisodes() {
        setLoading(true);
        const hugFeed = await parser.parseURL('https://huglifepodcast.libsyn.com/rss');
        setHuglifeEp(hugFeed.items.slice(0, 1));

        const codexFeed = await parser.parseURL('https://codexhistoryofvideogames.libsyn.com/rss');
        setCodexEp(codexFeed.items.slice(0, 1))
        setLoading(false);
    }

    useEffect(() => {
        getEpisodes();
    }, [])

    return (
        <Container>
            <Row>
                <Col className="col-6 mb-2">
                    <HugLifeCard
                        loading={loading}
                        huglifeEp={huglifeEp}
                    />
                </Col>
                <Col className="col-6 mb-2">
                    <CodexCard
                        loading={loading}
                        codexEp={codexEp}
                    />
                    ))
                </Col>
            </Row>
        </Container >
    )
}

export default Podcasts;
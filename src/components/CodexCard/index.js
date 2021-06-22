import React from 'react';
import { Card } from 'react-bootstrap';


function CodexCard({ codexEp, loading }) {
    if (loading) return <h1>Loading...</h1>;

    return (
        <div>
            {codexEp.map((result, index) => (
                <Card className="mt-2 p-2 episodeCard">
                    <div>
                        <h5 className="card-title">{result.title}</h5>
                        <p>Published on {result.isoDate}</p>
                        <div>
                            <audio controls="controls">
                                <source src={result.enclosure.url} />
                            </audio>
                        </div>
                        <p className="card-text">{result.contentSnippet}</p>
                    </div>
                </Card>
            ))
            }
        </div>
    )
}

export default CodexCard;
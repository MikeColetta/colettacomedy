import "./style.css";
import resumePdf from "../../assets/MikeColettaResume.pdf"
import ReactPlayer from 'react-player'

function Media() {
    return (
        <div className="container my-2" id="experience">
            <div className="card videoCard">
                <h2 className="card-header videoCardHeader">Media</h2>
                <div className="card-body">
                    <ReactPlayer url='https://www.youtube.com/watch?v=Y2bcYzCj1xI' width="100%" height="720px"/>
                </div>
            </div>
            <br></br>
            <br></br>
            <br></br>
        </div>
    )
}

export default Media;
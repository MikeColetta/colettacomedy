import "./style.css";
import ReactPlayer from 'react-player'
// import GalleryImage1 from '../../assets/images/GalleryImage1.jpg'
import GalleryImage2 from '../../assets/images/GalleryImage2.jpg'
// import GalleryImage3 from '../../assets/images/GalleryImage3.jpg'
// import GalleryImage4 from '../../assets/images/GalleryImage4.jpg'
// import GalleryImage5 from '../../assets/images/GalleryImage5.jpg'
// import GalleryImage6 from '../../assets/images/GalleryImage6.jpg'
// import GalleryImage7 from '../../assets/images/GalleryImage7.jpg'
// import GalleryImage8 from '../../assets/images/GalleryImage8.jpg'
// import GalleryImage9 from '../../assets/images/GalleryImage9.jpg'
// import GalleryImage10 from '../../assets/images/GalleryImage10.jpg'
// import GalleryImage11 from '../../assets/images/GalleryImage11.jpg'


function Media() {
    return (
        <div className="container my-2" id="experience">
            <div className="card videoCard">
                <h2 className="card-header videoCardHeader">Video</h2>
                <div className="card-body">
                    <ReactPlayer url='https://www.youtube.com/watch?v=Y2bcYzCj1xI' width="100%" height="720px"/>
                </div>
            </div>
            <br></br>
            <div className="card videoCard">
                <h2 className="card-header videoCardHeader">Images</h2>
                <div className="card-body">
                <img
                    src={GalleryImage2}
                    alt="First slide"
                    className="galleryImage"
                />
                </div>
            </div>
            <br></br>
            <br></br>
        </div>
    )
}

export default Media;
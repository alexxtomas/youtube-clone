import './style.css'

const VideoCard = ({
  thumbnail,
  duration,
  chanelImage,
  title,
  chanelName,
  views,
  date
}) => {
  return /* html */ `
    <a href="#" class="video-card">
      <section class="video-card-first-secton">
      <img src="${thumbnail}" alt="" />
      <span class="video-card-time">${duration}</span>
      </section>
     
      <section class="video-card-second-section">
        <div class="video-card-container">
           <img src="${chanelImage}" />
           </div>
        <div class="video-card-data">
        <h3>${title}</h3>
           <p>${chanelName}</p>
           <div><span>${views}</span><span >${date}</span></div>
        </div>
      </section>
     
    </a>
  `
}

export default VideoCard

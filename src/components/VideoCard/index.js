import './style.css'

const VideoCard = () => {
  return /* html */ `
    <a class="video-card">
      <section class="video-card-first-secton">
      <img src="https://i.ytimg.com/vi/OEWDDQe_L0g/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLA2Fuia3jmRD3XqQmulsqCLlszWEw" alt="" />
      <span class="video-card-time">14:48</span>
      </section>
     
      <section class="video-card-second-section">
        <div class="video-card-container">
           <img src="https://yt3.ggpht.com/ytc/AOPolaTEMxnvpmhvtntW6jR6ZbGN91OUQIgo1sNp81Kiag=s68-c-k-c0x00ffffff-no-rj" />
           </div>
        <div class="video-card-data">
        <h3>BMW M3 Touring Vs. Audi RS4 Avant: no al SUV, ¿cuál es el MEJOR familiar DEPORTIVO? | Diariomotor</h3>
           <p>Diaromotor</p>
           <div><span>139k visualizaciones</span><span >hace 1 año</span></div>
        </div>
      </section>
     
    </a>
  `
}

export default VideoCard

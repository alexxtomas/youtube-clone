import PageHeader from '@components/PageHeader'
import TagSlider from '@components/TagSlider'
import './style.css'
import VideoCard from '@components/VideoCard'

const VIDEOS = [
  {
    thumbnail:
      'https://i.ytimg.com/vi/OEWDDQe_L0g/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLA2Fuia3jmRD3XqQmulsqCLlszWEw',
    duration: '14:48',
    chanelImage:
      'https://yt3.ggpht.com/ytc/AOPolaTEMxnvpmhvtntW6jR6ZbGN91OUQIgo1sNp81Kiag=s68-c-k-c0x00ffffff-no-rj',
    title:
      'BMW M3 Touring Vs. Audi RS4 Avant: no al SUV, ¿cuál es el MEJOR familiar DEPORTIVO? | Diariomotor',
    chanelName: 'Diaromotor',
    views: '139k visualizaciones',
    date: 'hace 1 año'
  },
  {
    thumbnail:
      'https://i.ytimg.com/vi/OEWDDQe_L0g/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLA2Fuia3jmRD3XqQmulsqCLlszWEw',
    duration: '14:48',
    chanelImage:
      'https://yt3.ggpht.com/ytc/AOPolaTEMxnvpmhvtntW6jR6ZbGN91OUQIgo1sNp81Kiag=s68-c-k-c0x00ffffff-no-rj',
    title:
      'BMW M3 Touring Vs. Audi RS4 Avant: no al SUV, ¿cuál es el MEJOR familiar DEPORTIVO? | Diariomotor',
    chanelName: 'Diaromotor',
    views: '139k visualizaciones',
    date: 'hace 1 año'
  },
  {
    thumbnail:
      'https://i.ytimg.com/vi/OEWDDQe_L0g/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLA2Fuia3jmRD3XqQmulsqCLlszWEw',
    duration: '14:48',
    chanelImage:
      'https://yt3.ggpht.com/ytc/AOPolaTEMxnvpmhvtntW6jR6ZbGN91OUQIgo1sNp81Kiag=s68-c-k-c0x00ffffff-no-rj',
    title:
      'BMW M3 Touring Vs. Audi RS4 Avant: no al SUV, ¿cuál es el MEJOR familiar DEPORTIVO? | Diariomotor',
    chanelName: 'Diaromotor',
    views: '139k visualizaciones',
    date: 'hace 1 año'
  },
  {
    thumbnail:
      'https://i.ytimg.com/vi/OEWDDQe_L0g/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLA2Fuia3jmRD3XqQmulsqCLlszWEw',
    duration: '14:48',
    chanelImage:
      'https://yt3.ggpht.com/ytc/AOPolaTEMxnvpmhvtntW6jR6ZbGN91OUQIgo1sNp81Kiag=s68-c-k-c0x00ffffff-no-rj',
    title:
      'BMW M3 Touring Vs. Audi RS4 Avant: no al SUV, ¿cuál es el MEJOR familiar DEPORTIVO? | Diariomotor',
    chanelName: 'Diaromotor',
    views: '139k visualizaciones',
    date: 'hace 1 año'
  },
  {
    thumbnail:
      'https://i.ytimg.com/vi/OEWDDQe_L0g/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLA2Fuia3jmRD3XqQmulsqCLlszWEw',
    duration: '14:48',
    chanelImage:
      'https://yt3.ggpht.com/ytc/AOPolaTEMxnvpmhvtntW6jR6ZbGN91OUQIgo1sNp81Kiag=s68-c-k-c0x00ffffff-no-rj',
    title:
      'BMW M3 Touring Vs. Audi RS4 Avant: no al SUV, ¿cuál es el MEJOR familiar DEPORTIVO? | Diariomotor',
    chanelName: 'Diaromotor',
    views: '139k visualizaciones',
    date: 'hace 1 año'
  },
  {
    thumbnail:
      'https://i.ytimg.com/vi/OEWDDQe_L0g/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLA2Fuia3jmRD3XqQmulsqCLlszWEw',
    duration: '14:48',
    chanelImage:
      'https://yt3.ggpht.com/ytc/AOPolaTEMxnvpmhvtntW6jR6ZbGN91OUQIgo1sNp81Kiag=s68-c-k-c0x00ffffff-no-rj',
    title:
      'BMW M3 Touring Vs. Audi RS4 Avant: no al SUV, ¿cuál es el MEJOR familiar DEPORTIVO? | Diariomotor',
    chanelName: 'Diaromotor',
    views: '139k visualizaciones',
    date: 'hace 1 año'
  }
]

const PageContent = ({ tags, results }) => {
  return /* html */ `
   <main>
    ${PageHeader({ results })}
    <section class="page-content-section">
    ${TagSlider({ tags })}
    </section>
    <section class="videos-layout">
      ${VIDEOS.map((video) => VideoCard(video)).join('')}
    </section>
    </main>
  `
}

export default PageContent

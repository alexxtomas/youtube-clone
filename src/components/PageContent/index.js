import PageHeader from '@components/PageHeader'
import TagSlider from '@components/TagSlider'
import './style.css'
import VideoCard from '@components/VideoCard'

const PageContent = ({ tags }) => {
  return /* html */ `
   <main>
    ${PageHeader()}
    <section class="page-content-section">
    ${TagSlider({ tags })}
    </section>
    <section>
      ${VideoCard()}
    </section>

    </main>
  `
}

export default PageContent

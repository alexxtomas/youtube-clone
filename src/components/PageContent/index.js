import PageHeader from '@components/PageHeader'
import TagSlider from '@components/TagSlider'
import './style.css'

const PageContent = ({ tags }) => {
  return /* html */ `
   <main>
    ${PageHeader()}
    <section class="page-content-section">
    ${TagSlider({ tags })}
    </section>

    </main>
  `
}

export default PageContent

import './style.css'
import AsideLink from '@components/AsideLink'
import GuideIcon from '@components/Icons/GuideIcon'

const Aside = ({ links }) => {
  return /* html */ `
  <aside class="aside">
    <button class="page-header-first-section-guide-button">
    ${GuideIcon()}
    </button>
    <section>
     ${links
       .map((link) => {
         return AsideLink(link)
       })
       .join('')}
 
    </section>
  </aside>
  `
}

export default Aside

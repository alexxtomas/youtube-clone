import './style.css'
import AsideLink from '@components/AsideLink'
import GuideIcon from '@components/Icons/GuideIcon'
import HomeIcon from '@components/Icons/HomeIcon'
import LibraryIcon from '@components/Icons/LibraryIcon'
import ShortsIcon from '@components/Icons/ShortsIcon'
import SubscriptionsIcon from '@components/Icons/SubscriptionsIcon'

const Aside = () => {
  return /* html */ `
  <aside class="aside">
    <button class="page-header-first-section-guide-button">
    ${GuideIcon()}
    </button>
    <section>
      ${AsideLink({ icon: HomeIcon(), text: 'Home' })}
      ${AsideLink({ icon: ShortsIcon(), text: 'Shorts' })}
      ${AsideLink({ icon: SubscriptionsIcon(), text: 'Suscripciones' })}
      ${AsideLink({ icon: LibraryIcon(), text: 'Mi bibilioteca' })}
    </section>
  </aside>
  `
}

export default Aside

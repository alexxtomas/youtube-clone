import './style.css'
import { PageHeaderListeners } from '@components/PageHeader/listeners'
import Aside from '@components/Aside'
import PageContent from '@components/PageContent'
import { TagSliderListeners } from '@components/TagSlider/listeners'
import HomeIcon from '@components/Icons/HomeIcon'
import ShortsIcon from '@components/Icons/ShortsIcon'
import SubscriptionsIcon from '@components/Icons/SubscriptionsIcon'
import LibraryIcon from '@components/Icons/LibraryIcon'

const tags = [
  'javascript',
  'css',
  'html',
  'javascript',
  'css',
  'html',
  'javascript',
  'css',
  'html',
  'javascript',
  'css',
  'html',
  'javascript',
  'css',
  'html',
  'javascript',
  'css',
  'html',
  'javascript',
  'css',
  'html',
  'javascript',
  'css',
  'html',
  'javascript',
  'css',
  'html',
  'javascript',
  'css',
  'html'
]
const results = ['javascript', 'css', 'html']

const ASIDE_LINKS = [
  {
    icon: HomeIcon(),
    text: 'Home',
    href: '#'
  },
  {
    icon: ShortsIcon(),
    text: 'Shorts',
    href: '#'
  },
  {
    icon: SubscriptionsIcon(),
    text: 'Suscripciones',
    href: '#'
  },
  {
    icon: LibraryIcon(),
    text: 'Mi bibilioteca',
    href: '#'
  }
]

document.querySelector('#app').innerHTML = /* html */ `
  ${Aside({ links: ASIDE_LINKS })}
  ${PageContent({ tags, results })}
`

PageHeaderListeners()
TagSliderListeners()

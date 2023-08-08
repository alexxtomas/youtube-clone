import './style.css'
import { PageHeaderListeners } from '@components/PageHeader/listeners'
import Aside from '@components/Aside'
import PageContent from '@components/PageContent'
import { TagSliderListeners } from '@components/TagSlider/listeners'

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

document.querySelector('#app').innerHTML = /* html */ `
  ${Aside()}
  ${PageContent({ tags })}
`

PageHeaderListeners()
TagSliderListeners()

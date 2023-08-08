import './style.css'
import PageHeader from './src/components/PageHeader'
import { PageHeaderListeners } from '@components/PageHeader/listeners'
import Aside from '@components/Aside'

document.querySelector('#app').innerHTML = /* html */ `
${Aside()}
  ${PageHeader()}
`

PageHeaderListeners()

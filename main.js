import './style.css'

import PageHeader from './src/components/PageHeader'
import { PageHeaderListeners } from '@components/PageHeader/listeners'

document.querySelector('#app').innerHTML = /* html */ `
  ${PageHeader()}
`

PageHeaderListeners()

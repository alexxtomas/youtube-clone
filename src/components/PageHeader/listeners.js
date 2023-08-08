import { $ } from '@utils/functions'

export function PageHeaderListeners() {
  const $searchOnYoutubeIcon = $('#search-on-youtube-icon')
  const $searchOnYoutube = $('#search-on-youtube')
  const $pageHeaderSearchBar = $('#search-on-youtube-container')
  const $closeSearchButton = $('#close-search-button')
  const $searchOnYoutubeResults = $('#search-on-youtube-results')

  $searchOnYoutube.addEventListener('focus', () => {
    $searchOnYoutubeIcon.style.display = 'block'
    $pageHeaderSearchBar.style.border = '1px solid #3ea6ff'
    $searchOnYoutubeResults.style.display = 'block'
  })

  $searchOnYoutube.addEventListener('blur', () => {
    $searchOnYoutubeIcon.style.display = 'none'
    $pageHeaderSearchBar.style.border = '1px solid #303030'
    $searchOnYoutubeResults.style.display = 'none'
  })

  $searchOnYoutube.addEventListener('input', () => {
    if ($searchOnYoutube.value.length > 0) {
      $closeSearchButton.style.display = 'flex'
    } else {
      $closeSearchButton.style.display = 'none'
    }
  })

  $closeSearchButton.addEventListener('click', () => {
    $closeSearchButton.style.display = 'none'
  })
}

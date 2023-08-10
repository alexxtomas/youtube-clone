import SearchIcon from '@components/Icons/SearchIcon'
import CloseIcon from '@components/Icons/CloseIcon'
import SearchBarResults from '@components/SearchBarResults'
import './style.css'

const SearchBar = ({ results }) => {
  return /* html */ `
  <section class="page-header-search-input-section">
  <div id="search-on-youtube-container" class="page-header-search-bar">
  ${SearchIcon('id="search-on-youtube-icon"')}
  <label  for="search-on-youtube">Search what you want on Youtube</label>
  <input autocapitalize="none" autocomplete="off" autocorrect="off" tabindex="0" spellcheck="false" aria-label="Buscar" placeholder="Buscar" role="combobox" dir="ltr" type="text" id="search-on-youtube" name="search-on-youtube" />
  ${SearchBarResults({ results })}
  <button type="reset" id="close-search-button" class="close-search-button">
  ${CloseIcon()}
  </button>
  </div>
  <button class="search-submit-button" type="submit">
  ${SearchIcon()}
</button>
  `
}

export default SearchBar

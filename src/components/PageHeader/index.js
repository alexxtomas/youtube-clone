import './style.css'
import BellIcon from '@components/Icons/BellIcon'
import CloseIcon from '@components/Icons/CloseIcon'
import HistoryIcon from '@components/Icons/HistoryIcon'
import MicrophoneIcon from '@components/Icons/MicrophoneIcon'
import SearchIcon from '@components/Icons/SearchIcon'
import VideoCameraIcon from '@components/Icons/VideoCameraIcon'
import YoutubeIcon from '@components/Icons/YoutubeIcon'

const PageHeader = () => {
  return /* html */ `
  <header class="page-header">
  <section class="page-header-first-section">
    <button class="page-header-fist-section-youtube-button">
      ${YoutubeIcon()}
    </button>
  </section>
  <form class="page-header-form">
  <section class="page-header-search-input-section">
    <div id="search-on-youtube-container" class="page-header-search-bar">
    ${SearchIcon('id="search-on-youtube-icon"')}
    <label  for="search-on-youtube">Search what you want on Youtube</label>
    <input autocapitalize="none" autocomplete="off" autocorrect="off" tabindex="0" spellcheck="false" aria-label="Buscar" placeholder="Buscar" role="combobox" dir="ltr" type="text" id="search-on-youtube" name="search-on-youtube" />
    <ul id="search-on-youtube-results" class="search-on-youtube-results">
       <li>
          <a>
          <div>
              ${HistoryIcon()}
              <span>How to read</span>
          </div>
          <button>Eliminar</button>
          </a>
          
       </li>
       <li>
       <a>
       <div>
           ${HistoryIcon()}
           <span>How to read</span>
       </div>
       <button>Eliminar</button>
       </a>
       </li>
       <li>
       <a>
       <div>
           ${HistoryIcon()}
           <span>How to read</span>
       </div>
       <button>Eliminar</button>
       </a>
       </li>
       <li>
       <a>
       <div>
           ${HistoryIcon()}
           <span>How to read</span>
       </div>
       <button>Eliminar</button>
       </a>
       </li>
    </ul>
    <button type="reset" id="close-search-button" class="close-search-button">
    ${CloseIcon()}
    </button>
    </div>
    <button class="search-submit-button" type="submit">
    ${SearchIcon()}
  </button>
    </section>
    <button type="button" class="search-by-voice">
      ${MicrophoneIcon()}
    </button>
  </form>
  <section class="page-header-second-section">
  <button class="video-camera-button">
  ${VideoCameraIcon()}

  </button>
  <button class="bell-button">
  ${BellIcon()}
  </button>
  <button class="avatar-button">
  <img id="img" draggable="false" class="style-scope yt-img-shadow" alt="Imagen del avatar" height="32" width="32" src="https://yt3.ggpht.com/yti/AOXPAcW7evHQYm_lmd1kvs3tqhW8nxLgiz1dSfP_5qEx-Q=s88-c-k-c0x00ffffff-no-rj">
  </button>
  </section>
</header>
  `
}

export default PageHeader

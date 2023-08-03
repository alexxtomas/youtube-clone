import './style.css'
import BellIcon from '@components/Icons/BellIcon'
import GuideIcon from '@components/Icons/GuideIcon'
import MicrophoneIcon from '@components/Icons/MicrophoneIcon'
import SearchIcon from '@components/Icons/SearchIcon'
import VideoCameraIcon from '@components/Icons/VideoCameraIcon'
import YoutubeIcon from '@components/Icons/YoutubeIcon'

const PageHeader = () => {
  return /* html */ `
  <header class="page-header">
  <section class="page-header-first-section">
    <button class="page-header-first-section-guide-button">
      ${GuideIcon()}
    </button>
    <button class="page-header-fist-section-youtube-button">
      ${YoutubeIcon()}
    </button>
  </section>
  <form class="page-header-form">
  <section class="page-header-search-input-section">
    <div class="page-header-search-bar">
    <label  for="search-on-youtube">Search what you want on Youtube</label>
    <input autocapitalize="none" autocomplete="off" autocorrect="off" tabindex="0" spellcheck="false" aria-label="Buscar" placeholder="Buscar" role="combobox" dir="ltr" type="text" id="search-on-youtube" name="search-on-youtube" />
    <button type="submit">
      ${SearchIcon()}
    </button>
    </div>

    </section>
    <button class="search-by-voice">
      ${MicrophoneIcon()}
    </button>
  </form>
  <section>
  <button>
  ${VideoCameraIcon()}

  </button>
  <button>
  ${BellIcon()}
  </button>
  <button>
  <img id="img" draggable="false" class="style-scope yt-img-shadow" alt="Imagen del avatar" height="32" width="32" src="https://yt3.ggpht.com/yti/AOXPAcW7evHQYm_lmd1kvs3tqhW8nxLgiz1dSfP_5qEx-Q=s88-c-k-c0x00ffffff-no-rj">
  </button>
  </section>
</header>
  `
}

export default PageHeader

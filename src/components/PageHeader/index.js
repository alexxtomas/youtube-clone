import './style.css'
import BellIcon from '@components/Icons/BellIcon'
import MicrophoneIcon from '@components/Icons/MicrophoneIcon'
import VideoCameraIcon from '@components/Icons/VideoCameraIcon'
import YoutubeIcon from '@components/Icons/YoutubeIcon'
import SearchBar from '@components/SearchBar'

const PageHeader = ({ results }) => {
  return /* html */ `
  <header class="page-header">
  <section class="page-header-first-section">
    <a href="/" class="page-header-first-section-anchor">
      ${YoutubeIcon()}
    </a>
  </section>
  <form class="page-header-form">
      ${SearchBar({ results })}
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

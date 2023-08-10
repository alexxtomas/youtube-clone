import './style.css'

const AsideLink = ({ href, icon, text }) => {
  return /* html */ `
    <a href="${href}" class="aside-link">
      ${icon}
      <span>${text}</span>
    </a>
  `
}

export default AsideLink

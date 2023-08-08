import './style.css'

const AsideLink = ({ icon, text }) => {
  return /* html */ `
    <a class="aside-link">
      ${icon}
      <span>${text}</span>
    </a>
  `
}

export default AsideLink

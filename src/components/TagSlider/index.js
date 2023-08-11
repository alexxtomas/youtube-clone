import './style.css'

const TagSlider = ({ tags }) => {
  return /* html */ `
    <div class="tag-slider-wraper">
      <ul id="tag-slider" class="tag-slider">
        ${tags
          .map((tag, idx) => {
            const isFirst = idx === 0
            return /* html */ `
              <li >
                  <button class="tag-slider-element ${
                    isFirst && 'active'
                  }">${tag}</button>
              </li>`
          })
          .join('')}
      </ul>
   
    </div>
  `
}

export default TagSlider

import ChevronRight from '@components/Icons/ChevronRight'
import './style.css'
import ChevronLeft from '@components/Icons/ChevronLeft'

const TagSlider = ({ tags }) => {
  return /* html */ `
    <div class="tag-slider-wraper">
    <button data-attribute="tag-slider-chevron-left" class="tag-slider-chevron hidden">
        ${ChevronLeft()}
    </button>
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
      <button data-attribute="tag-slider-chevron-right" class="tag-slider-chevron">
        ${ChevronRight()}
      </button>
    </div>
  `
}

export default TagSlider

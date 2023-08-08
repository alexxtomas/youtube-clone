import { $ } from '@utils/functions'

export function TagSliderListeners() {
  const $tagSlider = $('#tag-slider')
  const $chevronRight = $('[data-attribute="tag-slider-chevron-right"]')
  const $chevronLeft = $('[data-attribute="tag-slider-chevron-left"]')
  const $firstTag = $('.tag-slider-element')

  let isDragStart = false
  let prevPageX
  let prevScrollLeft
  const firstTagWidth = $firstTag.offsetWidth

  const dragStart = (e) => {
    isDragStart = true
    prevPageX = e.pageX
    prevScrollLeft = $tagSlider.scrollLeft
  }

  const dragging = (e) => {
    if (!isDragStart) return
    e.preventDefault()
    $tagSlider.classList.add('dragging')
    const positionDiff = e.pageX - prevPageX
    $tagSlider.scrollLeft += prevScrollLeft - positionDiff
  }

  const dragStop = () => {
    isDragStart = false
    $tagSlider.classList.remove('dragging')
  }

  $tagSlider.addEventListener('mousedown', dragStart)
  $tagSlider.addEventListener('mousemove', dragging)
  $tagSlider.addEventListener('mouseup', dragStop)

  $chevronRight.addEventListener('click', () => {
    $chevronLeft.classList.remove('hidden')
    $tagSlider.scrollLeft += firstTagWidth
  })

  $chevronLeft.addEventListener('click', () => {
    $tagSlider.scrollLeft -= firstTagWidth

    if ($tagSlider.scrollLeft <= firstTagWidth) {
      $chevronLeft.classList.add('hidden')
    }
  })
}

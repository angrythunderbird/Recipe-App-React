import { useRef} from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

import './slider.css';

const Slider = ({ popular }) => {

  const refSliderInner = useRef(null);

  const onSlideMove = (el, step) => {
    console.log(el)
    el.scrollLeft += step;
  };

  return (
    <div className='slider-wrapper'>

      <MdChevronLeft onClick={() => onSlideMove(refSliderInner.current, -250)} className='slider-arrow slider-arrow-left' />

      <div className='slider' ref={refSliderInner}>
        {
          popular.map((item) => {
            return (
              <div className='slider-card' key={item.id}>
                <img src={item.image} alt="dish" className='slider-img' />
                <p className='slider-title'>{item.title}</p>
              </div>
            )
          })
        }
      </div>

      <MdChevronRight onClick={() => onSlideMove(refSliderInner.current, 250)} className='slider-arrow slider-arrow-right' />

    </div>
  )
}

export default Slider;

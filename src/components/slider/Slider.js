/* eslint-disable jsx-a11y/alt-text */
import rightArrow from '../../assets/carousel_right.png'
import leftArrow from '../../assets/carousel_left.png'

import './slider.scss'

import { useState } from 'react'

//Slider function taking as a param a list of image links
export default function Slider({imageSlider}) {

    //Define image index
    const [currentIndex, setCurrentIndex] = useState(0)

    //Go to previous slide 
    const previousSlide = () => {
        setCurrentIndex(currentIndex - 1)

        if(currentIndex === 0) {
            setCurrentIndex(imageSlider.length - 1)
        }
    }

    //Go to next slide thanks to a modulo
    const nextSlide = () => {
        setCurrentIndex((currentIndex + 1) % imageSlider.length);
    }

    //return built HTML component for an Image Slider
    return (
        <section className='slider' style={{backgroundImage : `url(${imageSlider[currentIndex]})`}}>
            {imageSlider.length > 1 && 
                <>
                    <img 
                        className='slider_arrow slider_arrow_right' 
                        src={rightArrow}
                        onClick={nextSlide}
                    />
                    
                    <img 
                        className='slider_arrow slider_arrow_left' 
                        src={leftArrow} 
                        onClick={previousSlide}
                    />
                    <p className='slideCount'>{currentIndex + 1} / {imageSlider.length}</p>
                </>
            } 
        </section>
    )
}

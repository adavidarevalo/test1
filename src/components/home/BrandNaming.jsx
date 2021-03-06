import React, {useState} from 'react';
import Image from 'next/image'
import imageSlide1 from '../../assets/desktop/imageSlide1.jpg'
import imageSlide2 from '../../assets/desktop/imageSlide2.jpg'
import imageSlide3 from '../../assets/desktop/imageSlide3.jpg'
import iconArrowNext from '../../assets/desktop/iconArrowNext.svg'
import iconArrowPrevious from '../../assets/desktop/iconArrowPrevious.svg'

const carousel = [
    {
        image: imageSlide1,
        title: 'guidelines'
    },
    {
        image: imageSlide2,
        title: 'web design'
    },
    {
        image: imageSlide3,
        title: 'Design'
    },
]
const BrandNaming = () => {
    const [carouselItem, setCarousel] = useState(0)

    const next = () => {
        if(carouselItem === 2){
            setCarousel(0)
            return
        }
        setCarousel(carouselItem + 1)
    }
    const back = () => {
        if(carouselItem === 0){
            setCarousel(2)
            return
        }
        console.log('x1 ', carouselItem)
        setCarousel(carouselItem - 1)
        console.log('x2 ', carouselItem)
    }
    return(
        <section className="BrandNaming">
            <Image 
            layout='responsive'
            src={carousel[carouselItem].image} width={300} height={220}/>
            <div>
                <h2>Brand naming & {carousel[carouselItem].title}</h2>
                <div>
                    <div onClick={back}>
                        <Image src={iconArrowPrevious} width={50} height={50}/>
                    </div>
                    <div onClick={next}>
                        <Image src={iconArrowNext} width={50} height={50}/>
                    </div>
                </div>
                
            </div>
        </section>
    )
}

export default BrandNaming
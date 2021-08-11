import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"

function Banner2() {
    return (
        <div className="relative">
            <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent z-20 bottom-0" />
            <Carousel
                autoPlay
                infiniteLoop
                showStatus={false}
                showIndicators={false}
                showThumbs={false}
                interval={5000}
            >
                
                <div>
                    <img loading="lazy" src="https://rebrand.ly/04aohmr" alt="" />
                </div>
                <div>
                    <img loading="lazy" src="https://rebrand.ly/iiyg0va" alt="" />
                </div>
                <div>
                    <img loading="lazy" src="https://rebrand.ly/8oj1rco" alt="" />
                </div>
            
            </Carousel>
        </div>
    )
}

export default Banner2

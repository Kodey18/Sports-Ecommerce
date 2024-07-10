import { Carousel, CarouselResponsiveOption } from 'primereact/carousel';
import { motion } from 'framer-motion';


const HomePage = () => {
  const phrases = [
    "UNLEASH YOUR SOLE.",
    "FRESH KICKS, FRESH START.",
    "UNLEASH YOUR SOLE.",
    "FRESH KICKS, FRESH START.",
    "UNLEASH YOUR SOLE.",
    "FRESH KICKS, FRESH START.",
    // "UNLEASH YOUR SOLE",
    // "UNLEASH YOUR SOLE",
    // "UNLEASH YOUR SOLE",
    // "UNLEASH YOUR SOLE",
  ];
  
  return (
    <main className='homepage-container'>
      {/* <Carousel /> */}
      <div className='hero-product'>
        <img 
          className='hero-title' 
          src="/assets/Hero_product_title.png" 
          alt="hero-title" 
        />
        <motion.img 
          className='hero-image' 
          src="/assets/slider-img-1.png" 
          alt="hero image"
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: 'loop',
          }}
        />
      </div>

      <div className='hero-phrase'>
        <motion.div
          className='phrase-container'
          initial={{ x: 0 }}
          animate={{ x: '-50%' }}
          transition={{
            duration: 25,
            ease: 'linear',
            repeat: Infinity,
          }}
        >
          {[...phrases, ...phrases].map((phrase, index) => (
            <span key={index} className='phrase'>{phrase}</span>
          ))}
        </motion.div>
      </div>

      <div className="category-posters">
        <div className='poster-container'>
          <img src="/assets/ban2.png" alt="banner2" />
        </div>
        <div className='poster-container'>
          <img src="/assets/ban1.png" alt="banner1" />
          <span>
            NEW ARRIVALS
          </span>
        </div>
        <div className='poster-container'>
          <img src="/assets/ban3.jpg" alt="banner3" />
        </div>
      </div>
    </main>
  )
}

export default HomePage;
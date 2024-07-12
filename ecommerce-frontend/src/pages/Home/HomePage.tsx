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
        <div className='poster-container con1'>
          <img src="/assets/ban2.png" alt="banner2" />
          <span className='ban2-text1'>GRIP YOUR <span className='text1-cus'>DESTINY</span></span>
          <span className='ban2-text2'>
            <span>STEP INTO THE FUTURE WITH EVERY STRIDE.</span> 
            <span>
              <span className='text2-cus'>60% OFF</span> ON ALL GYM WEARS</span> 
          </span>
          {/* */}
        </div>

        <div className='poster-container con2'>
          <img src="/assets/ban1.png" alt="banner1" />
          <span className='ban1-text1'>
            UNLEASH YOUR
          </span>
          <span className='ban1-text2'>
            <span className='text2-cus'>INNER</span> ICON
          </span>
          <span className='ban1-text3'>
            ELEVATE YOUR STYLE WITH OUR<br /><span className='text3-cus'>EXCLUSIVE SNEAKER</span> COLLECTION
          </span>
        </div>

        <div className='poster-container con3'>
          <img src="/assets/ban3.jpg" alt="banner3" />
          <span className='ban3-text1'>USE PROMO CODE <span className='text3-cus'>FLYHIGH</span> TO GET FREE DELIVERY ON YOUR FIRST ORDER</span>
        </div>
      </div>
    </main>
  )
}

export default HomePage;
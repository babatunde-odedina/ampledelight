import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

SwiperCore.use([Autoplay, Pagination, Navigation]);

const Home = ({ slides }) => {
  return (
    <section className='home' id='home'>
      <div className='home_slider'>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 10500,
          }}
          loop={true}
          grabCursor={true}
          navigation={false}
          pagination={{
            clickable: true,
          }}
          className='home_wrapper'
        >
          {slides.map((slide, index) => {
            return (
              <SwiperSlide key={index} className='home_slide'>
                <div className='home_slide_content'>
                  <span>Our special dish</span>
                  <h3>{slide.title}</h3>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Perspiciatis voluptatibus ex incidunt.
                  </p>
                  <a href='#' className='btn'>
                    Order Now
                  </a>
                </div>
                <div className='home_slide_image'>
                  <img src={slide.image} alt='' />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Home;

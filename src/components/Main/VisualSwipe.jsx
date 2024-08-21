import styled from 'styled-components';
import { Link } from 'react-router-dom';

/* 슬라이드 - 스와이퍼 */
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

export default function VisualSwiper({ banner }) {
  return (
    <Visual>
      <div className='sec_head'>
        <h1>Visual Slider</h1>
      </div>
      <Swiper modules={[Autoplay]} slidesPerView={1} autoplay={{ delay: 5000, disableOnInteraction: false }} loop>
        {banner.map((item, index) => (
          <SwiperSlide key={index}>
            <Link to={item.link}>
              <img src={item.bannerUrl} alt={'mainBanner'}/>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </Visual>
  )
}

const Visual = styled.section`
  position: relative;

  img {
    width: 100%;
  }
`;
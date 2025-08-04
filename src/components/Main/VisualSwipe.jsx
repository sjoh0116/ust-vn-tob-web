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
      <Swiper modules={[Autoplay]} slidesPerView={1} autoplay={{ delay: 5000, disableOnInteraction: false }} >
        {banner.map((item, index) => (
          <SwiperSlide key={index}>
            <Link to={item.link}>
              <figure className="pc">
                  <img src={item.bannerUrl} alt="pc-visual" />
              </figure>
              <figure className="mo">
                  <img src={item.bannerUrl} alt="mo-visual"/>
              </figure>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </Visual>
  )
}

const Visual = styled.section`
    position: relative;

    figure, img {
        width: 100%;
    }
  
    .pc {
      display:block;
    }
  
    .mo {
      display:none;
    }

    @media only screen and (max-width: 1024px) {
      .pc {
        display:none;
      }

      .mo {
        display:block;
      }
    }
`;

import styled from 'styled-components';
import { Link } from 'react-router-dom';

/* 슬라이드 - 스와이퍼 */
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

export default function VisualSwiper({ banner }) {

  const dummy = [
    {
      link: '/product/17',
      bannerUrl:'https://ust-vina.s3.ap-northeast-2.amazonaws.com/tob_renewal/vita_mask_1x.webp'
    },
    {
      link: '/product/12',
      bannerUrl: 'https://ust-vina.s3.ap-northeast-2.amazonaws.com/tob_renewal/cleansing_balm_1x.webp'
    },
    {
      link: '/product/9',
      bannerUrl: 'https://ust-vina.s3.ap-northeast-2.amazonaws.com/tob_renewal/spotcream_1x.webp'
    },
  ];

  return (
    <Visual>
      <div className='sec_head'>
        <h1>Visual Slider</h1>
      </div>
      <Swiper modules={[Autoplay]} slidesPerView={1} autoplay={{ delay: 5000, disableOnInteraction: false }} >
        {banner.map((item, index) => (
          <SwiperSlide className="pc" key={index}>
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
        {dummy?.map((item, index) => (
          <SwiperSlide className="mo" key={index}>
            <Link to={item.link}>
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

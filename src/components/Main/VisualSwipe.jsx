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
        {/*{banner.map((item, index) => (*/}
        {/*  <SwiperSlide key={index}>*/}
        {/*    <Link to={item.link}>*/}
        {/*      <img src={item.bannerUrl} alt={'mainBanner'}/>*/}
        {/*    </Link>*/}
        {/*  </SwiperSlide>*/}
        {/*))}*/}
            <SwiperSlide>
              <Link to="">
                  <figure className="pc">
                      <img src="//ecimg.cafe24img.com/pg532b80180662007/truthofbeauty/web/upload/category/editor/2025/07/03/d42c24f7bd948c49a8f383dbc929980d.jpg" alt="pc_visual"/>
                  </figure>
                  <figure className="mo">
                      <img src="//ecimg.cafe24img.com/pg532b80180662007/truthofbeauty/web/upload/category/editor/2025/07/08/8f92a44fa7b235d16ec199cd35fc6f21.jpg" alt="mo_visual"/>
                  </figure>
              </Link>
            </SwiperSlide>
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

  @media only screen and (max-width: 1040px) {
    .pc {
      display:none;
    }

    .mo {
      display:block;
    }
  }
`;
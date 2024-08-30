import { useRef } from "react";
import styled from 'styled-components';

/* 슬라이드 - 스와이퍼 */
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';

export default function BottomSwiper({ banner }) {

  const swiperRef = useRef(null);

  return (
    <BotProduct>
      <div className='sec_head'>
        <h1>Bottom Product Swiper</h1>
      </div>

      <div className='inner'>
          <div className="swiper-con">
              <button className="prev" onClick={() => swiperRef.current?.slidePrev()}>
                  <img src="https://ust-vina.s3.ap-northeast-2.amazonaws.com/TOB-VN/left_arrow_ic.svg" alt="Prev Button" />
              </button>
              <Swiper
                  onSwiper={(swiper) => (swiperRef.current = swiper)}
                  navigation={false}
                  modules={[EffectFade, Autoplay, Navigation]}
                  effect={'fade'}
                  slidesPerView={1}
                  autoplay={{ delay: 5000, disableOnInteraction: false }}
                  loop
              >
                  {banner.map((item, index) => (
                      <SwiperSlide key={index}>
                          <img src={item.bannerUrl} alt={'subBanner'}/>
                      </SwiperSlide>
                  ))}
              </Swiper>
              <button className="next" onClick={() => swiperRef.current?.slideNext()}>
                  <img src="https://ust-vina.s3.ap-northeast-2.amazonaws.com/TOB-VN/right_arrow_ic.svg" alt="Prev Button" />
              </button>
          </div>
      </div>
    </BotProduct>
  )
}

const BotProduct = styled.section`
  padding: 70px 0 140px;

  .swiper-con {
    position:relative;
    
    button {
      z-index:10;
      position:absolute;
      top:50%;
      transform:translateY(-50%);
      display:flex;
      justify-content: center;
      align-items: center;
      width:40px;
      height:40px;
      border-radius:50%;
      background:rgba(0,0,0, 0.5);
      transition: background-color .3s ease-in-out;
      
      &:hover {
        background:rgba(0,0,0, 1);
      }
      
      &.prev {
        left:20px;
      }
      
      &.next {
        right:20px;
      }
    }
  }
  
  img {
    width: 100%;
    height: auto;
  }

  @media only screen and (max-width: 1024px) {
    padding: 35px 0 70px;
  }
`;
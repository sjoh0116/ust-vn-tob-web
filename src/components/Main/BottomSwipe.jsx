import styled from 'styled-components';
import { BOT_SWIPE_DATA } from "./Data";

/* 슬라이드 - 스와이퍼 */
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';


export default function BottomSwiper () {

    return (
        <BotProduct>
            <div className="sec_head">
                <h1>Bottom Product Swiper</h1>
            </div>

            <div className="inner">
                <Swiper modules={[EffectFade, Autoplay]} effect={'fade'} slidesPerView={1} autoplay={{ delay: 5000, disableOnInteraction: false }} loop>
                    {BOT_SWIPE_DATA.map((item, index) => (
                        <SwiperSlide key={index}>
                            <img src={item.img} alt={item.name} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </BotProduct>
    )
}

const BotProduct = styled.section`
  padding:70px 0 140px;
  
  img {
    width:100%;
    height:auto;
  }

  @media only screen and (max-width: 1024px) {
    padding:35px 0 70px;
  }
`
import styled from 'styled-components';
import {Link} from "react-router-dom";
import {VISUAL_DATA} from "./Data";

/* 슬라이드 - 스와이퍼 */
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

export default function VisualSwiper () {

    return (
            <Visual>
                <div className="sec_head">
                    <h1>Visual Slider</h1>
                </div>

                <Swiper modules={[Autoplay]} slidesPerView={1} autoplay={{ delay: 5000, disableOnInteraction: false }} loop>
                    {VISUAL_DATA.map((item, index) => (
                        <SwiperSlide key={index}>
                            <Link to={item.link}>
                                <img src={item.img} alt={item.name} />
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Visual>
        )
}

const Visual = styled.section`
  position:relative;
  
  img {
    width:100%;
  }
`
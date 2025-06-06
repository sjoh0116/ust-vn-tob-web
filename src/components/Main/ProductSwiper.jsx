import { useState } from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';

import { MAIN_PRODUCT_DATA } from "./Data";

/* 슬라이드 - 스와이퍼 */
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';

export default function ProductSwipe(){
    const [hovered, setHovered] = useState(null);

    return (
        <ProductWrap>
            <div className="title-desc">
                <h4>Our Best Sellers</h4>
                <p>토브의 독자적인 원료로 만들어진 화장품을 만나보세요.</p>
            </div>
            <div className="product-content">
                <Swiper modules={[ Autoplay, Navigation ]}
                        slidesPerView={3}
                        spaceBetween={20}
                        autoplay={{ delay: 5000, disableOnInteraction: false }}
                        loop={true}
                        navigation={{
                            prevEl: '.swiper-b-prev',
                            nextEl: '.swiper-b-next'
                        }}
                >
                    {MAIN_PRODUCT_DATA.map((slide, idx) => (
                        <SwiperSlide key={slide.id} onMouseEnter={()=> setHovered(idx)} onMouseLeave={()=> setHovered(null)}>
                            <Link to="">
                                <div className="swiper-item">
                                    <div className="item-thumb">
                                        <img className="thumb-img" src={slide.img} alt={slide.title} />
                                        <img className="thumb-hover" src={slide.hover} alt={slide.title} />
                                    </div>
                                    <div className="item-desc">
                                        <strong>{slide.title}</strong>
                                        <span>{slide.info}</span>
                                    </div>
                                </div>
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="swiper-button">
                    <button className="swiper-b-prev">
                        <img src="https://ust-vina.s3.ap-northeast-2.amazonaws.com/renewal/board/chevron-left.svg" alt="prev" />
                    </button>
                    <button className="swiper-b-next">
                        <img src="https://ust-vina.s3.ap-northeast-2.amazonaws.com/renewal/board/chevron-right.svg" alt="next" />
                    </button>
                </div>
            </div>
        </ProductWrap>
    )
}

const ProductWrap = styled.section`
  margin:120px auto;
  position:relative;
  max-width:1480px;
  
  .product-content {
    position:relative;
    margin-top:40px;
    
    .swiper-item {
      .item-thumb {
        position: relative;
        width: 100%;
        padding-top: 100%;
        overflow: hidden;

        img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          transition: opacity .3s;
          
          &.thumb-img {
            opacity:1;
          }
          
          &.thumb-hover {
            opacity:0;
          }
        }
      }
        
      .item-desc {
        margin-top:25px;
        position:relative;
        text-align:center;
        
        strong {
          font-size:12px;
          font-weight:500;
          line-height:1.5;
          color:#000000;
        }
        
        span {
          margin-top:10px;
          display:block;
          font-size:12px;
          font-weight:300;
          line-height:1.6;
          color:#999999;
        }
      }
    }
    
    .swiper-item:hover {
      .item-thumb img {
          &.thumb-img {
            opacity:0;
          }

          &.thumb-hover {
            opacity:1;
          }
      }
    }

    .swiper-button {

      button {
        z-index:99;
        position:absolute;
        top:50%;
        transform:translateY(-50%);
        display:flex;
        justify-content: center;
        align-items: center;
        width:50px;
        height:50px;
        border-radius:50%;
        background:#fff;
        opacity:0.8;
        box-shadow: 0 0 6px rgba(30, 30, 30, .2);
      }
      .swiper-b-prev {
        left:-25px;
      }

      .swiper-b-next {
        right:-25px;
      }
    }
  }
`
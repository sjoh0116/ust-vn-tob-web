import styled from 'styled-components';
import {Link} from "react-router-dom";

import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation} from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';

import reviewData from 'review.json';


export default function ProductReview() {

  const review = reviewData;

  return (
    <ReviewWrap>
      <div className="title-desc">
        <h4>Real Review</h4>
        <p>토브 고객들의 리뷰를 확인하세요.</p>
      </div>
      <div className="product-content">
        <Swiper
          modules={[Autoplay, Navigation]}
          slidesPerView={5} spaceBetween={20}
          autoplay={{delay: 5000, disableOnInteraction: false}}
          loop={true}
          navigation={{
            prevEl: '.swiper-b-prev',
            nextEl: '.swiper-b-next'
          }}
        >
          {review?.map((item, idx) => (
            <>
              <SwiperSlide>
                  <div className="swiper-in">
                      <Link to="">
                          <div className="thumbNail">
                              <img src={item.productImg}
                                   alt=""/>
                          </div>
                          <div className="review-desc">
                              <p>{item.contents}</p>
                              <div className="review-info">
                                  <span>{item.userId}</span>
                                  <span>{item.regDate}</span>
                              </div>
                          </div>
                      </Link>
                      <Link to="" className="review-product">
                          <div className="product-thumb">
                              <img src="https://ust-vina.s3.ap-northeast-2.amazonaws.com/renewal/b5b083f729bf1273fe3952b729c945b3.jpg"
                                   alt=""/>
                          </div>
                          <strong>{item.productName}</strong>
                      </Link>
                  </div>
              </SwiperSlide>
            </>
          ))}
        </Swiper>
        <div className="swiper-button">
          <button className="swiper-b-prev">
            <img src="https://ust-vina.s3.ap-northeast-2.amazonaws.com/renewal/board/chevron-left.svg" alt="prev"/>
          </button>
          <button className="swiper-b-next">
            <img src="https://ust-vina.s3.ap-northeast-2.amazonaws.com/renewal/board/chevron-right.svg" alt="next"/>
          </button>
        </div>
      </div>
    </ReviewWrap>
  )
}

const ReviewWrap = styled.div`
  margin:120px auto;
  position:relative;
  max-width:1480px;

  .product-content {
    position: relative;
    margin-top: 40px;
    
    .swiper-slide {
      padding:10px;
      
      .swiper-in {
        position:relative;
        padding:10px;
        border-radius:13px;
        border:1px solid #e8e8e8;

        &:hover {
          opacity:0.85;
          box-shadow:0 2px 8px rgba(30,30,30,.25);
        }
      }
      
      .thumbNail {
        position:relative;
        width:100%;
        padding-top:100%;
        
        img {
          position:absolute;
          width:100%;
          height:100%;
          top:0;
          left:0;
          border-radius:13px;
        }
      }
      
      .review-desc {
        position:relative;
        padding:30px 10px;
        border-bottom:1px solid #e8e8e8;
        
        strong {
          font-size:16px;
          font-weight:500;
          line-height:1.5;
          color:#000;
        }
        
        p {
          margin-top:10px;
          display:-webkit-box;
          font-size:14px;
          font-weight:400;
          line-height:1.5;
          color:#545454;
          overflow:hidden;
          word-break:keep-all;
          -webkit-line-clamp: 2;
          text-overflow:ellipsis;
          -webkit-box-orient: vertical;
        }
        
        .review-info {
          margin-top: 10px;
          display: flex;
          align-items: center;
          gap: 0 10px;
          
          span {
            font-size:12px;
            font-weight:400;
            color:#777;
          }
        }
        
      }
      
      .review-product {
        position:relative;
        padding:20px 0;
        display:flex;
        align-items:center;
        gap:0 20px;
        
        .product-thumb {
          position:relative;
          min-width:40px;
          width:40px;
          height:40px;
          border-radius:50%;
          overflow:hidden;
          
          img {
            width:100%;
            height:100%;
            object-fit: cover;
            object-position: center;
          }
        }
        
        strong {
          display:block;
          width:100%;
          font-size:12px;
          font-weight:500;
          line-height:1.5;
          color:#777;
          
          text-overflow:ellipsis;
          overflow:hidden;
          white-space: nowrap;
          word-wrap:normal;
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

import styled from 'styled-components';

import ReviewSlide from "./ReviewSlide";
import ReviewBoard from "./ReviewBoard";
import * as Server from "../../assets/js/Server";
import {useEffect, useState} from "react";
import useDidMountEffect from "../../hooks/useDidMountEffect";

export default function ReviewArea(param) {
    const [reviewList, setReviewList] = useState([]);

    const getProductReviewList = () => {
        Server.sendGet(
            'tob/product/review',
            {
                productSeq: param.param.prdNum
            },
            getProductReviewListCallback
        ).then();
    }

    const getProductReviewListCallback = res => {
        setReviewList(res['resultList']);
    }

    useEffect(() => {
        getProductReviewList();
    }, [])

    useDidMountEffect(() => {
        getProductReviewList();
    },[param]);

    return (
        <ReviewContent className="inner">
            {reviewList > 0 && (
                <ReviewSlide param={reviewList}/>
            )}
            <ReviewBoard param={param} total={reviewList.length}/>
        </ReviewContent>
    )
}

const ReviewContent = styled.div`
  position:relative;

  // 리뷰 슬라이드
  .review-slider {
    position:relative;

    .swiper-slide {
      padding:10px;

      .review-in {
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
        padding:20px 10px;

        p {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          word-break: break-all;
          font-weight: 400;
          font-size: 12px;
          color: #333;
          line-height: 1.5;
          letter-spacing: 0.2px;
          overflow:hidden;

        }

        .review-info {
          margin-top: 10px;
          display: flex;
          align-items: center;
          gap: 0 10px;

          span {
            font-size: 12px;
            font-weight:500;
            line-height: 1.5;
            color: #777;

            &.writer {
              font-weight:700;
            }
          }
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

  // 리뷰 테이블
  .review-board {
    margin-top:45px;
    position:relative;

    .board-head {
      display:flex;
      align-items: center;
      justify-content: space-between;

      .board-tit {
        display:flex;
        gap:0 5px;
        align-items: center;

        strong {
          font-size:20px;
          font-weight:700;
          line-height:1.5;
          color:#111;
        }

        span {
          font-size:20px;
          font-weight:700;
          line-height:1.5;
          color:#111;
        }
      }

      .board-filter {
        display:flex;
        align-items:center;
        gap:0 30px;
      }
    }

    .board-list {
      margin-top:45px;
      position:relative;
      border-top:1px solid #e9e9e9;

      .list-item {
        padding:20px 0;
        border-bottom:1px solid #e9e9e9;
        display:flex;
        gap:0 30px;

        .item-writer {
          min-width:120px;
          position:relative;
          padding:0 15px;

          .rating-score {
            display:flex;
            align-items: center;
          }

          span {
            margin-top:10px;
            display:block;
            font-size:0.7rem;
            font-weight:400;
            color:#777;

          }
        }

        .item-txt {
          position:relative;
          padding:0 15px;

          p {
            margin-bottom:15px;
            display:block;
            font-size:14px;
            font-weight:400;
            line-height:1.5;
            color:#111;
          }

          img {
            width:70px;
            height:70px;
          }
        }
      }
      
      .empty {
        padding:8rem 0;
        display:block;
        text-align:center;
        font-weight:500;
        font-size:1.4rem;
        line-height:1.2;
        color:#111;
      }
    }
  }

  @media only screen and (max-width: 1024px) {
    .review-slider {
      display:none;
    }

    .review-board {
      margin-top:0;
      
      .board-list {
        margin-top:20px;

        .list-item {
          padding:10px 0;
          gap:0 15px;
        }
      }
    }
  }
`

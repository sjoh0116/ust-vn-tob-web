import {useEffect, useRef, useState} from "react";
import {useParams} from "react-router-dom";
import styled from 'styled-components';

import * as Server from 'assets/js/Server';
import * as Common from 'assets/js/Common';

// 컴포넌트
import TopArea from "../components/Product/TopArea";
import DetailArea from "../components/Product/DetailArea";
import QnaBoard from "../components/Product/QnaList";
import DetailNav from "../components/Product/DetailNav";
import ReviewArea from "../components/Product/ReviewArea";
import useDidMountEffect from "../hooks/useDidMountEffect";

export default function ProductPage() {
  const params = useParams();

  const DetailRef = useRef(null);
  const QnaRef = useRef(null);
  const ReviewRef = useRef(null);

  const handleScroll = (ref) => {
    ref.current.scrollIntoView({behavior: "smooth"});
  };

  const [detail, setDetail] = useState([]);

  const getProductDetail = () => {
    Server.sendGet('tob/product/img', {productSeq: params.prdNum}, getProductDetailCallback).then();
  }

  const getProductDetailCallback = res => {
    setDetail(res['resultList']);
  }

  useEffect(() => {
    getProductDetail();
  }, []);

  useDidMountEffect(() => {
    getProductDetail();
  }, [params]);

  return (
    <ProductContent>
      {/* 제품 상단 영역 */}
      <TopArea param={params}/>

      {/* 제품 상세 영역 */}
      <section ref={DetailRef}>
        <DetailNav
          product="active"
          toDetail={() => handleScroll(DetailRef)}
          toQna={() => handleScroll(QnaRef)}
          toReview={() => handleScroll(ReviewRef)}
        />
        <DetailArea detail={detail}/>
      </section>

      {/* 리뷰 영역 */}
      <section ref={ReviewRef}>
        <DetailNav
          review="active"
          toDetail={() => handleScroll(DetailRef)}
          toQna={() => handleScroll(QnaRef)}
          toReview={() => handleScroll(ReviewRef)}
        />
        <ReviewArea param={params}/>
      </section>

      {/* Qna 테이블 */}
      <section ref={QnaRef}>
        <DetailNav
          qna="active"
          toDetail={() => handleScroll(DetailRef)}
          toQna={() => handleScroll(QnaRef)}
          toReview={() => handleScroll(ReviewRef)}
        />
        <QnaBoard/>
      </section>
    </ProductContent>
  )
}

const ProductContent = styled.div`
  padding:100px 0 80px;
  position:relative;
  
  section {
    position:relative;
    
    .detail-img img{
      width:100%;
    }
  }
`

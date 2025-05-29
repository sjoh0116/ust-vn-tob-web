import { useRef } from "react";
import { useParams } from "react-router-dom";
import styled from 'styled-components';

// 컴포넌트
import TopArea from "../components/Product/TopArea";
import DetailArea from "../components/Product/DetailArea";
import QnaBoard from "../components/Product/QnaList";
import DetailNav from "../components/Product/DetailNav";
import ReviewArea from "../components/Product/ReviewArea";

export default function ProductPage(){
    const params = useParams();

    const DetailRef = useRef(null);
    const QnaRef = useRef(null);
    const ReviewRef = useRef(null);

    const handleScroll = (ref) => {
        ref.current.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <ProductContent>
            {/* 제품 상단 영역 */}
            <TopArea />

            {/* 제품 상세 영역 */}
            <section ref={DetailRef}>
                <DetailNav
                    product="active"
                    toDetail={() => handleScroll(DetailRef)}
                    toQna={() => handleScroll(QnaRef)}
                    toReview={() => handleScroll(ReviewRef)}
                />
                <DetailArea />
            </section>

            {/* 리뷰 영역 */}
            <section ref={ReviewRef}>
                <DetailNav
                    review="active"
                    toDetail={() => handleScroll(DetailRef)}
                    toQna={() => handleScroll(QnaRef)}
                    toReview={() => handleScroll(ReviewRef)}
                />
                <ReviewArea />
            </section>

            {/* Qna 테이블 */}
            <section ref={QnaRef}>
                <DetailNav
                    qna="active"
                    toDetail={() => handleScroll(DetailRef)}
                    toQna={() => handleScroll(QnaRef)}
                    toReview={() => handleScroll(ReviewRef)}
                />
                <QnaBoard />
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
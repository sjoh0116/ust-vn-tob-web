import React from 'react';
import styled from 'styled-components';

const TobCleanser = () => {
  return (
    <React.Fragment>
      <ProdWrap>
        <div className="prod_inner">
          {/* 1 */}
          <ProdImg src="https://ust-tob-kr.s3.ap-northeast-2.amazonaws.com/detail/cleanser_01.webp"/>
          {/* 2 */}
          <ProdImg src="https://ust-tob-kr.s3.ap-northeast-2.amazonaws.com/detail/cleanser_02.webp"/>
          {/* 3 */}
          <ProdImg src="https://ust-tob-kr.s3.ap-northeast-2.amazonaws.com/detail/cleanser_03.webp"/>
          {/* 4 */}
          <ProdImg src="https://ust-tob-kr.s3.ap-northeast-2.amazonaws.com/detail/cleanser_04.webp"/>
          {/* 5 */}
          <ProdImg src="https://ust-tob-kr.s3.ap-northeast-2.amazonaws.com/detail/cleanser_05.webp"/>
          {/* 6 */}
          <ProdImg src="https://ust-tob-kr.s3.ap-northeast-2.amazonaws.com/detail/cleanser_06.webp"/>
          {/* 7 */}
          <ProdImg src="https://ust-tob-kr.s3.ap-northeast-2.amazonaws.com/detail/cleanser_07.gif"/>
          {/* 8 */}
          <ProdImg src="https://ust-tob-kr.s3.ap-northeast-2.amazonaws.com/detail/cleanser_08.webp"/>
          {/* 9 */}
          <ProdImg src="https://ust-tob-kr.s3.ap-northeast-2.amazonaws.com/detail/cleanser_09.webp"/>
          {/* 10 */}
          <ProdImg src="https://ust-tob-kr.s3.ap-northeast-2.amazonaws.com/detail/cleanser_10.webp"/>
          {/* 11 */}
          <ProdImg src="https://ust-tob-kr.s3.ap-northeast-2.amazonaws.com/detail/cleanser_11.gif"/>
          {/* 12 */}
          <ProdImg src="https://ust-tob-kr.s3.ap-northeast-2.amazonaws.com/detail/cleanser_12.webp"/>
        </div>
      </ProdWrap>
    </React.Fragment>
  )
}

const ProdWrap = styled.div`
  position: relative;
  padding: 70px 0 100px;

  .prod_inner {
    max-width: 1240px;
    margin: 0 auto;
    width: 95%;
    text-align:center;
  }


  @media only screen and (max-width: 1080px) {
    .prod_inner {
      max-width: 100%;
      width: 100%;
      padding: 0 20px;

      img {
        width: 100%;
      }
    }
  }
`

const ProdImg = styled.img.attrs({ alt: 'Product Image' })`
  max-width: 100%;
`

export default TobCleanser;
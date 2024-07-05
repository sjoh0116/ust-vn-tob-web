import React from 'react';
import styled from 'styled-components';

const TobMask = () => {
  return (
    <React.Fragment>
      <ProdWrap>
        <div className="prod_inner">
          {/* 1 */}
          <ProdImg src="https://ust-tob-kr.s3.ap-northeast-2.amazonaws.com/detail/tob01.jpg"/>
          {/* 2 */}
          <ProdImg src="https://ust-tob-kr.s3.ap-northeast-2.amazonaws.com/detail/tob02.jpg"/>
          {/* 3 */}
          <ProdImg src="https://ust-tob-kr.s3.ap-northeast-2.amazonaws.com/detail/tob03.jpg"/>
          {/* 4 */}
          <ProdImg src="https://ust-tob-kr.s3.ap-northeast-2.amazonaws.com/detail/tob04.jpg"/>
          {/* 5 */}
          <ProdImg src="https://ust-tob-kr.s3.ap-northeast-2.amazonaws.com/detail/tob05.jpg"/>
          {/* 6 */}
          <ProdImg src="https://ust-tob-kr.s3.ap-northeast-2.amazonaws.com/detail/tob06.jpg"/>
          {/* 7 */}
          <MaskVideo autoplay="autoplay" loop="loop" muted="muted" playsinline="playsinline" preload="metadata">
            <source src="https://ust-tob-kr.s3.ap-northeast-2.amazonaws.com/video/mask_detail.mp4" type="video/mp4"/>
          </MaskVideo>
          {/* 8 */}
          <ProdImg src="https://ust-tob-kr.s3.ap-northeast-2.amazonaws.com/detail/tob08.jpg"/>
          {/* 9 */}
          <ProdImg src="https://ust-tob-kr.s3.ap-northeast-2.amazonaws.com/detail/tob09.jpg"/>
          {/* 10 */}
          <ProdImg src="https://ust-tob-kr.s3.ap-northeast-2.amazonaws.com/detail/tob10.jpg"/>
          <DetailVideo autoplay="autoplay" loop="loop" muted="muted" playsinline="playsinline" preload="metadata">
            <source src="https://ust-tob-kr.s3.ap-northeast-2.amazonaws.com/video/phMask.mp4" type="video/mp4"/>
          </DetailVideo>
          {/* 11 */}
          <ProdImg src="https://ust-tob-kr.s3.ap-northeast-2.amazonaws.com/detail/tob11.jpg"/>
          {/* 12 */}
          <ProdImg src="https://ust-tob-kr.s3.ap-northeast-2.amazonaws.com/detail/tob12.jpg"/>
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

const MaskVideo = styled.video`
  display: block;
  max-width: 735px;
  margin: 0 auto;
  text-align: center;

  @media only screen and (max-width: 1080px) {
    max-width: 100%;
    width: 100%;
  }
`;

const DetailVideo = styled.video`
  display: block;
  max-width: 905px;
  margin: 0 auto;
  text-align: center;

  @media only screen and (max-width: 1080px) {
    max-width: 100%;
    width: 100%;
  }
`;

export default TobMask;
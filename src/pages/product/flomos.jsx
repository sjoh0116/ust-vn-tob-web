import React from 'react';
import styled from 'styled-components';

const DrFlomos = () => {
  return (
    <React.Fragment>
      <ProdWrap>
        <div className='prod_inner'>
          {/* 1 */}
          <ProdImg src='https://ust-vina.s3.ap-northeast-2.amazonaws.com/cosmetic/flomos01.png'/>
          {/* 2 */}
          <ProdImg src='https://ust-vina.s3.ap-northeast-2.amazonaws.com/cosmetic/flomos02.png'/>
          {/* 3 */}
          <ProdImg src='https://ust-vina.s3.ap-northeast-2.amazonaws.com/cosmetic/flomos03.png'/>
          {/* 4 */}
          <ProdImg src='https://ust-vina.s3.ap-northeast-2.amazonaws.com/cosmetic/flomos04.png'/>
          {/* 5 */}
          <ProdImg src='https://ust-vina.s3.ap-northeast-2.amazonaws.com/cosmetic/flomos05.png'/>
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

export default DrFlomos;
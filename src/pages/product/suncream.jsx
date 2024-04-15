import React from 'react';
import styled from 'styled-components';

const TobSunCream = () => {
    return (
        <React.Fragment>
            <ProdWrap>
                <div className="prod_inner">
                    {/* 1 */}
                    <ProdImg src="https://ust-vina.s3.ap-northeast-2.amazonaws.com/cosmetic/detail/sungel/sungel01.webp" />
                    {/* 2 */}
                    <ProdImg src="https://ust-vina.s3.ap-northeast-2.amazonaws.com/cosmetic/detail/sungel/sungel02.webp" />
                    {/* 3 */}
                    <ProdImg src="https://ust-vina.s3.ap-northeast-2.amazonaws.com/cosmetic/detail/sungel/sungel03.webp" />
                    {/* 4 */}
                    <ProdImg src="https://ust-vina.s3.ap-northeast-2.amazonaws.com/cosmetic/detail/sungel/sungel04.webp" />
                    {/* 5 */}
                    <ProdImg src="https://ust-vina.s3.ap-northeast-2.amazonaws.com/cosmetic/detail/sungel/sungel05.webp" />
                    {/* 6 */}
                    <ProdImg src="https://ust-vina.s3.ap-northeast-2.amazonaws.com/cosmetic/detail/sungel/sungel06.webp" />
                    {/* 7 */}
                    <ProdImg src="https://ust-vina.s3.ap-northeast-2.amazonaws.com/cosmetic/detail/sungel/sungel07.webp" />
                    {/* 8 */}
                    <ProdImg src="https://ust-vina.s3.ap-northeast-2.amazonaws.com/cosmetic/detail/sungel/sungel08.gif" />
                    {/* 9 */}
                    <ProdImg src="https://ust-vina.s3.ap-northeast-2.amazonaws.com/cosmetic/detail/sungel/sungel09.webp" />
                    {/* 10 */}
                    <ProdImg src="https://ust-vina.s3.ap-northeast-2.amazonaws.com/cosmetic/detail/sungel/sungel10.webp" />
                    {/* 11 */}
                    <ProdImg src="https://ust-vina.s3.ap-northeast-2.amazonaws.com/cosmetic/detail/sungel/sungel11.gif" />
                    {/* 12 */}
                    <ProdImg src="https://ust-vina.s3.ap-northeast-2.amazonaws.com/cosmetic/detail/sungel/sungel12.webp" />
                    {/* 13 */}
                    <ProdImg src="https://ust-vina.s3.ap-northeast-2.amazonaws.com/cosmetic/detail/sungel/sungel13.webp" />
                    {/* 14 */}
                    <ProdImg src="https://ust-vina.s3.ap-northeast-2.amazonaws.com/cosmetic/detail/sungel/sungel14.webp" />
                    {/* 15 */}
                    <ProdImg src="https://ust-vina.s3.ap-northeast-2.amazonaws.com/cosmetic/detail/sungel/sungel15.gif" />
                    {/* 16 */}
                    <ProdImg src="https://ust-vina.s3.ap-northeast-2.amazonaws.com/cosmetic/detail/sungel/sungel16.webp" />
                    {/* 17 */}
                    <ProdImg src="https://ust-vina.s3.ap-northeast-2.amazonaws.com/cosmetic/detail/sungel/sungel17.webp" />
                    {/* 18 */}
                    <ProdImg src="https://ust-vina.s3.ap-northeast-2.amazonaws.com/cosmetic/detail/sungel/sungel18.webp" />
                    {/* 19 */}
                    <ProdImg src="https://ust-vina.s3.ap-northeast-2.amazonaws.com/cosmetic/detail/sungel/sungel19.webp" />
                    {/* 20 */}
                    <ProdImg src="https://ust-vina.s3.ap-northeast-2.amazonaws.com/cosmetic/detail/sungel/sungel20.webp" />
                    {/* 21 */}
                    <ProdImg src="https://ust-vina.s3.ap-northeast-2.amazonaws.com/cosmetic/detail/sungel/sungel21.webp" />
                    {/* 22 */}
                    <ProdImg src="https://ust-vina.s3.ap-northeast-2.amazonaws.com/cosmetic/detail/sungel/sungel22.webp" />
                    {/* 23 */}
                    <ProdImg src="https://ust-vina.s3.ap-northeast-2.amazonaws.com/cosmetic/detail/sungel/sungel23.webp" />
                    {/* 24 */}
                    <ProdImg src="https://ust-vina.s3.ap-northeast-2.amazonaws.com/cosmetic/detail/sungel/sungel24.webp" />
                    {/* 25 */}
                    <ProdImg src="https://ust-vina.s3.ap-northeast-2.amazonaws.com/cosmetic/detail/sungel/sungel25.webp" />
                    {/* 26 */}
                    <ProdImg src="https://ust-vina.s3.ap-northeast-2.amazonaws.com/cosmetic/detail/sungel/sungel26.webp" />
                </div>
            </ProdWrap>
        </React.Fragment>
    )
}

const ProdWrap = styled.div`
  position:relative;
  padding:70px 0 100px;

  .prod_inner {
    max-width:1240px;
    margin:0 auto;
    width:95%;
  }


  @media only screen and (max-width: 1080px) {
    .prod_inner {
      max-width:100%;
      width:100%;
      padding:0 20px;

      img {
        width:100%;
      }
    }
  }
`

const ProdImg = styled.img.attrs({alt:'Product Image'})`
  max-width:100%;
`

export default TobSunCream;
import styled from 'styled-components';

export default function TopArea(){
    return (
        <TopContent>
            <div className="sec-inner">
                <div className="prd-img">
                    {/* 썸네일 */}
                    <div className="thumbNail">
                        <img src="https://ust-vina.s3.ap-northeast-2.amazonaws.com/renewal/product/TocTocShot/thum-01.jpg" alt="thumbnail" />
                    </div>
                    {/* 제품 관련 이미지 리스트 */}
                    <div className="img-list">
                        <ul>
                            <li>
                                <button>
                                    <img src="https://ust-vina.s3.ap-northeast-2.amazonaws.com/renewal/product/TocTocShot/thum-01.jpg" alt="thumb-list" />
                                </button>
                            </li>
                            <li>
                                <button>
                                    <img src="https://ust-vina.s3.ap-northeast-2.amazonaws.com/renewal/product/TocTocShot/thum-02.jpg" alt="thumb-list" />
                                </button>
                            </li>
                            <li>
                                <button>
                                    <img src="https://ust-vina.s3.ap-northeast-2.amazonaws.com/renewal/product/TocTocShot/thum-03.jpg" alt="thumb-list" />
                                </button>
                            </li>
                            <li>
                                <button>
                                    <img src="https://ust-vina.s3.ap-northeast-2.amazonaws.com/renewal/product/TocTocShot/thum-04.jpg" alt="thumb-list" />
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="prd-desc">
                    <strong>콜라겐 톡톡샷500 부스팅 클렌징밤</strong>
                    <span>딥클렌징+요철 스케일링+피부 부스팅</span>
                </div>
            </div>
        </TopContent>
    )
}

const TopContent = styled.section`
  position:relative;
  padding-top:100px;
  
  .sec-inner {
    display:flex;
    align-items: flex-start;
    gap:0 55px;
    
    > div {
      max-width:calc( 50% - 27.5px);
      flex:1;
      
      // 이미지 영역
      .thumbNail, .img-list {
        position:relative;
        width:100%;
        
        img {
          width:100%;
        }
      }
      
      .img-list {
        margin-top:5px;
        
        ul {
          display:flex;
          align-items: center;
          gap:0 5px;
          
          li {
            max-width:70px;
            
            img {
              width:100%;
            }
          }
        }
      }
      
      // 상품 정보
      &.prd-desc {
        position:relative;
        padding:40px 0;
        border-bottom:1px solid #000;
        
        strong {
          font-weight:600;
          font-size:18px;
          color:#555;
        }
        
        span {
          margin-top:25px;
          display:block;
          font-weight:400;
          font-size:14px;
          color:#555;
        }
      }
    }
  }
`
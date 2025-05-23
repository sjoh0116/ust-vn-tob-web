import styled from 'styled-components';
import {motion} from "framer-motion";

export default function TopArea(){

    const menuItems = [
        {
            img : "https://ust-vina.s3.ap-northeast-2.amazonaws.com/tob/shopper_ic.webp",
            label: "shopee",
            link: 'https://shopee.vn/tob_officialstore',
        },
        {
            img : "https://ust-vina.s3.ap-northeast-2.amazonaws.com/tob/lazada_ic.webp",
            label: "lazada",
            link: "https://www.lazada.vn/shop/aqua-solution/?spm=a2o4n.pdp_revamp.seller.1.15084a0ePaPdKq&amp;itemId=2221839876&amp;channelSource=pdp",
        },
        {
            img : "https://ust-vina.s3.ap-northeast-2.amazonaws.com/tob/tiktok_ic.webp",
            label: "tiktok",
            link: "https://www.tiktok.com/@healthacleanvietnam",
        },
    ]

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
                    <div className="info">
                        <strong>콜라겐 톡톡샷500 부스팅 클렌징밤</strong>
                        <span>딥클렌징+요철 스케일링+피부 부스팅</span>
                    </div>
                    <div className="price">
                        <strong>19,600원</strong>
                    </div>
                    <div className="desc">
                        <p>세틸에틸헥사노에이트, 카프릴릭/카프릭트라이글리세라이드, 피이지-20글리세릴트라이아이소스테아레이트, 피이지-100아이소스테아레이트, 합성왁스, 호호바씨오일, 아르간커넬오일, 진들딸기씨오일, 하이드롤라이즈드해면, 하이드롤라이즈드콜라겐, 로즈힙열매오일, 포도씨오일, 가지열매추출물, 비타민나무열매오일, 블랙체리열매추출물, 아사이팜열매오일, 아이비고드열매추출물, 토코페릴아세테이트, 세틸피이지/피피지-10/다이메티콘, 토코페롤, 1,2-헥산다이올, 지치뿌리추출물, 인도멀구슬나무잎추출물, 인도멀구슬나무꽃추출물, 해바라기씨오일, 알로에베라꽃추출물, 참산호말추출물, 물푸레나무잎추출물, 홀리바질잎추출물, 펜타에리스리틸테트라-다이-t-부틸하이드록시아이소히드록시하이드록시네이트, 향료</p>
                    </div>
                    <div className="sns">
                        <ul>
                            {menuItems.map((item, index) => (
                                <li>
                                    <a href={item.link}>
                                        <img src={item.img} alt={item.label} />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
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
        .info {
          position:relative;
          padding:20px 0;
          border-bottom:1px solid #d7d7d7;

          strong {
            font-weight:600;
            font-size:18px;
            color:#555;
          }

          span {
            margin-top:10px;
            display:block;
            font-weight:400;
            font-size:14px;
            color:#555;
          } 
        }
        
        .price {
          padding:20px 0;
          border-bottom:1px solid #d7d7d7;
          text-align:right;
          
          strong {
            font-weight:600;
            font-size:32px;
            color:#111;
          }
          
        }
        
        .desc {
          position:relative;
          padding:20px 0;
          
          p {
            font-weight:400;
            font-size:12px;
            line-height:1.5;
            color:#b4b4b4;
          }
        }
        
        .sns {
          position:relative;
          padding:20px 0;
          
          ul {
            display:flex;
            align-items:center;
            gap:0 40px;
            
            li {
              a {
                display:block;
                width:40px;
                
                img {
                  width:100%;
                }
              }
            }
          }
        }
      }
    }
  }
`
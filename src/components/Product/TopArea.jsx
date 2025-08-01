import styled from 'styled-components';
import {useEffect, useState} from "react";

import * as Server from 'assets/js/Server';
import useDidMountEffect from "../../hooks/useDidMountEffect";

export default function TopArea(param) {

    const [productMain, setProductMain] = useState({
        productMainImgList: []
    });

    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    const getProductMain = () => {
        Server.sendGet('tob/product/main/info', {productSeq: param.param.prdNum}, getProductMainCallback).then();
    }

    const getProductMainCallback = res => {
        setProductMain(res['resultObject']);
    }

    useEffect(() => {
        getProductMain();
    }, [productMain])

    const handleThumbnailClick = (index) => {
        setSelectedImageIndex(index);
    }

    const menuItems = [
        {
            img: "https://ust-vina.s3.ap-northeast-2.amazonaws.com/tob/shopper_ic.webp",
            label: "shopee",
            link: 'https://shopee.vn/tob_officialstore',
        },
        {
            img: "https://ust-vina.s3.ap-northeast-2.amazonaws.com/tob/lazada_ic.webp",
            label: "lazada",
            link: "https://www.lazada.vn/shop/tob-store-vn/",
        },
        {
            img: "https://ust-vina.s3.ap-northeast-2.amazonaws.com/tob/tiktok_ic.webp",
            label: "tiktok",
            link: "https://www.tiktok.com/@tob.vn",
        },
    ]

    return (
        <TopContent>
            <div className="inner">
                <div className="prd-img">
                    {/* 썸네일 */}
                    <div className="thumbNail">
                        <img src={productMain?.productMainImgList[selectedImageIndex]} alt="thumbnail"/>
                    </div>
                    {/* 제품 관련 이미지 리스트 */}
                    <div className="img-list">
                        <ul>
                            {productMain.productMainImgList?.map((item, idx) => (
                                <li key={idx}>
                                    <button   onClick={() => handleThumbnailClick(idx)}>
                                        <img src={item} alt="thumb-list"/>
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="prd-desc">
                    <div className="desc-info desc-depth">
                        <strong>{productMain.productName}</strong>
                        <span>{productMain.subTitle}</span>
                    </div>
                    <div className="desc-price desc-depth">
                        {/*<strong>19,600원</strong>*/}
                    </div>
                    <div className="desc-txt desc-depth">
                        <p>
                            {productMain.comment}
                        </p>
                    </div>
                    <div className="desc-sns desc-depth">
                        <ul>
                            {menuItems.map((item, index) => (
                                <li>
                                    <a href={item.link}>
                                        <img src={item.img} alt={item.label}/>
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

  .inner {
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

        .desc-depth {
          position:relative;
          padding:20px 0;
        }

        .desc-info {
          border-bottom:1px solid #d7d7d7;

          strong {
            font-weight:600;
            font-size:1.5rem;
            color:#555;
          }

          span {
            margin-top:10px;
            display:block;
            font-weight:400;
            font-size:1.2rem;
            color:#555;
          }
        }

        .desc-price {
          border-bottom:1px solid #d7d7d7;
          text-align:right;

          strong {
            font-weight:600;
            font-size:2rem;
            color:#111;
          }

        }

        .desc-txt {
          p {
            font-weight:400;
            font-size:1rem;
            line-height:1.5;
            color:#b4b4b4;
          }
        }

        .desc-sns {
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

  @media only screen and (max-width: 1024px) {
    padding-top:50px;

    .inner {
      display:block;
      > div {
        max-width:100%;
        flex:1;
        .img-list {

          ul {
            gap:0 10px;

            li {
              max-width:120px;
            }
          }
        }
      }
    }
  }
`

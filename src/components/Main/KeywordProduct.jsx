import { useState } from "react";

import { Link } from "react-router-dom";
import styled from 'styled-components';

import { MAIN_PRODUCT_DATA, PRODUCT_DATA, TAB_DATA } from "./Data";

export default function KeywordProduct(){
    const [hovered, setHovered] = useState(null);

    const [activeTab, setActiveTab] = useState(0);
    const tabLists = ["흔적 지우개","쿨링 진정","클렌징 루틴"];
    const contentData = [MAIN_PRODUCT_DATA, PRODUCT_DATA, TAB_DATA];
    const currentData = contentData[activeTab];

    return (
        <KeywordWrap>
            <div className="keyword-inner">
                <div className="tab-menu">
                    <div className="tab-title">
                        <strong>Truth Of Beauty<br/>Keyword</strong>
                        <span>원료와 효과에 집중한 진심을 담은 화장품<br/>Truth Of Beauty</span>
                    </div>
                    <div className="tab-nav">
                        <ul>
                            {tabLists.map((label, idx) => (
                                <li key={idx} className={activeTab===idx ? 'active' : ''}>
                                    <button onClick={() => setActiveTab(idx)}>{label}</button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="tab-content">
                    <div className="tab-item">
                        <ul>
                            {currentData.map((slide, sidx) => (
                                <li
                                    className="item-product"
                                    key={slide.id}
                                    onMouseEnter={() => setHovered(sidx)}
                                    onMouseLeave={() => setHovered(null)}
                                >
                                    <Link to="">
                                        <div className="swiper-item">
                                            <div className="item-thumb">
                                                <img className="thumb-img" src={slide.img} alt={slide.title} />
                                                <img className="thumb-hover" src={slide.hover} alt={slide.title} />
                                            </div>
                                            <div className="item-desc">
                                                <strong>{slide.title}</strong>
                                                <span>{slide.info}</span>
                                            </div>
                                        </div>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </KeywordWrap>
    )
}

const KeywordWrap = styled.section`
  position:relative;
  width:100%;
  padding:120px 0;
  margin:120px 0;
  overflow:hidden;
  background:url('https://ust-vina.s3.ap-northeast-2.amazonaws.com/renewal/keyword_bg.webp') 50% 50% no-repeat;
  background-size:cover;
  
  .keyword-inner {
    position:relative;
    max-width:1480px;
    margin:0 auto;
    display:flex;
    align-items: center;
    gap:0 30px;
    
    .tab-menu {
      position:relative;
      
      .tab-title {
        strong {
          font-size:30px;
          font-weight:700;
          font-family:'Pt-Serif', serif;
          line-height:1.4;
        }
        
        span {
          margin-top:15px;
          display:block;
          font-size:16px;
          line-height:1.6;
          color:#777777;
        }
      }
      
      .tab-nav {
        margin-top:20px;
        ul {
          display:flex;
          flex-direction: column;
          gap:10px 0;
          
          li {
            button {
              display:inline-block;
              border-radius:20px;
              padding:0 20px;
              font-size:16px;
              font-weight:500;
              line-height:45px;
              color:#000;
              transition:all .3s;
              letter-spacing: -0.03em;
              background:rgba(200, 200, 200, 0.5);
              opacity:0.5;

              &::before {
                content:'#';
                margin-right:5px;
              }

              &:hover {
                opacity:1;
              }
            }
            
            &.active {
              button {
                opacity:1;
              }
            }
          }
        }
      }
    }
    
    .tab-content {
      flex:1;

      .tab-item {
        ul {
          display:flex;
          gap:0 20px;
          
          li {
            flex:1;
          }
        }
        
        .item-thumb {
          position: relative;
          width: 100%;
          padding-top: 100%;
          overflow: hidden;

          img {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            transition: opacity .3s;
            border-radius:20%;

            &.thumb-img {
              opacity:1;
            }

            &.thumb-hover {
              opacity:0;
            }
          }
        }

        .item-desc {
          margin-top:25px;
          position:relative;
          text-align:center;

          strong {
            font-size:12px;
            font-weight:500;
            line-height:1.5;
            color:#000000;
          }

          span {
            margin-top:10px;
            display:block;
            font-size:12px;
            font-weight:300;
            line-height:1.6;
            color:#999999;
          }
        } 
      }
      .item-product:hover {
        .item-thumb img {
          &.thumb-img {
            opacity:0;
          }

          &.thumb-hover {
            opacity:1;
          }
        }
      }
    }
  }
`
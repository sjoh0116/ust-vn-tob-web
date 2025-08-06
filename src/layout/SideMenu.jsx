import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";

import * as Server from 'assets/js/Server';

import styled from 'styled-components';

export default function SideMenu({ isOpen, onClose }){
    const [productList, setProductList] = useState([]);
    const [isProductMenuOpen, setIsProductMenuOpen] = useState(false)

    const getProductList = () => {
        Server.sendGet('tob/product/list?useYn=Y', {}, getProductListCallback).then();
    }

    const getProductListCallback = res => {
        setProductList(res['resultList']);
    }

    useEffect(() => {
        getProductList();
    }, [])

    const menuItems = [
        {
            img : "https://ust-vina.s3.ap-northeast-2.amazonaws.com/tob/facebook_ic.webp",
            label: "facebook",
            link: "https://www.facebook.com/tobtruthofbeauty",
        },
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
            link: "https://www.tiktok.com/@tob.vn",
        },
    ]


    const handleLinkClick = () => {
        onClose()
    }

    const toggleProductMenu = (e) => {
        e.preventDefault()
        e.stopPropagation()
        setIsProductMenuOpen(!isProductMenuOpen)
    }

    return (
        <SideWrap className={isOpen ? 'open' : ''}>
            <div className='side-in'>
                <div className='logo-sec'>
                    <img src="https://ust-vina.s3.ap-northeast-2.amazonaws.com/renewal/tob_logo.webp" alt="truth of beauty" />
                </div>
                <div className='nav-sec'>
                    <div className="menu-nav">
                        <ul>
                            <li>
                                <Link to="/brand" onClick={handleLinkClick}>
                                    Brand Story
                                </Link>
                            </li>
                            <li>
                                <div className="accodian-nav">
                                    <Link to="/product" onClick={handleLinkClick}>
                                        Product
                                    </Link>
                                    <button onClick={toggleProductMenu} className={isProductMenuOpen ? "active" : ""}>
                                        <img src="https://ust-vina.s3.ap-northeast-2.amazonaws.com/renewal/drop_down.svg" alt="drop-down" />
                                    </button>                                </div>


                                <div className={`accodian-menu ${isProductMenuOpen ? "open" : ""}`}>
                                    <ul className="sub-nav">
                                        {productList?.map((item, idx) => (
                                            <li key={idx}>
                                                <Link to={`/product/${item.seq}`}>{item.menuName}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <Link to="/board" onClick={handleLinkClick}>
                                    Qna
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="sns-nav">
                        <ul>
                            {menuItems.map((item, index) => (
                                <li key={index} className="menu-item">
                                    <a href={item.link}>
                                        <img src={item.img} alt={item.label} />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <p className="copyright">Copyright © Truth Of Beauty</p>
                </div>
            </div>
        </SideWrap>
    )
}

const SideWrap = styled.div`
  z-index:999;
  position:fixed;
  opacity:0;
  top:0;
  left:-300px;
  width:300px;
  max-width:80%;
  height:100vh;
  background:#fff;
  box-shadow: 3px 0 5px rgba(0, 0, 0, 0.1);
  transition:all .3s ease-in;

  &.open {
    left:0;
    opacity:1;
  }
  
  .side-in {
    padding:20px 30px;
    
    .logo-sec {
      position:relative;
      margin:25px 0;
      img {
        width:100%;
      }
    }
    
    .nav-sec {
      position:relative;
      
      .menu-nav {
        margin:25px 0;
        
        > ul {
          > li {
            
                .accodian-nav {
                  display:flex;
                  justify-content: space-between;
                  align-items: center;
                }    
            
                a {
                  display:block;
                  font-size:16px;
                  font-weight:400;
                  line-height:1.5;
                  color:#000;
                }
            
                button.active {
                  transform:rotate(180deg);
                }

                .accodian-menu {
                  max-height: 0;
                  overflow: hidden;
                  transition: max-height 0.3s ease-in-out;
                  
                  &.open {
                    max-height: 365px; /* 충분히 큰 값 */
                    overflow:auto;
                  }

                  .sub-nav {
                    margin-top:12px;
                    
                    li {
                      padding-left:10px;

                      a {
                        font-size:14px;
                        font-weight:400;
                        line-height:1.5;
                        color:#000;
                      }
                    }

                    &.open {
                      max-height: max-content; /* 충분히 큰 값 */
                    }
                  }
                }
              }
              
              li + li {
                margin-top:7.5px;
              }
            }
          }
      
      .sns-nav {
        margin:25px 0;
        
        ul {
          position:relative;
          width:100%;
          display:flex;
          align-items: center;
          gap:0 10px;
          
          li {
            flex:1;
            
            a {
              display:block;
              text-align: center;
              
              img {
                width:75%;
              }
            }
          }
        }
      }
      
      .copyright {
        margin-top:25px;
        font-size: 10px;
        font-weight: 300;
        color: #888;
        letter-spacing: 0;
      }
    }
  }
`

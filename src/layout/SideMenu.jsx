import { Link } from "react-router-dom";
import React from "react";

import styled from 'styled-components';
import {motion} from "framer-motion";

export default function SideMenu({ isOpen }){

    const menuItems = [
        {
            img : "https://ust-vina.s3.ap-northeast-2.amazonaws.com/tob/facebook_ic.webp",
            label: "facebook",
            link: "https://www.facebook.com/TOBVinaKorean",
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
            link: "https://www.tiktok.com/@healthacleanvietnam",
        },
    ]

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
                                <Link to="/brand">
                                    Brand Story
                                </Link>
                            </li>
                            <li>
                                <Link to="/product">
                                    Product
                                </Link>
                            </li>
                            <li>
                                <Link to="/board">
                                    Qna
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="sns-nav">
                        <ul>
                            {menuItems.map((item, index) => (
                                <li className="menu-item">
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
    padding:20px 40px;
    
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
        
        ul {
          li {
            a {
              display:block;
              font-size:16px;
              font-weight:400;
              line-height:1.5;
              color:#000;
            }
          }
          
          li + li {
            margin-top:12px;
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
import { useState, useEffect } from 'react';
import { Link, NavLink } from "react-router-dom";
import styled from 'styled-components';

import * as Server from 'assets/js/Server';
import * as Common from 'assets/js/Common';

export default function Header(){
    const [isScrolled, setIsScrolled] = useState(false);

    const [productList, setProductList] = useState([]);

    const getProductList = () => {
        Server.sendGet('tob/product/list?useYn=Y', {}, getProductListCallback).then();
    }

    const getProductListCallback = res => {
        setProductList(res['resultList']);
    }

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 0);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);

    }, []);

    useEffect(() => {
        getProductList();
    }, [])

  return (
      <HeadWrap>
          <div className={`${isScrolled ? "head-inner active" : "head-inner"}`}>
              <div className="head-content">
                  <div className="hdLogo">
                      <Link to="/">
                          <img src="https://ust-vina.s3.ap-northeast-2.amazonaws.com/renewal/tob_logo.webp" alt="truth of beauty" />
                      </Link>
                  </div>
                  <nav className="hdNav">
                      <ul>
                          <li>
                            <NavLink to="/brand">Brand Story</NavLink>
                          </li>
                          <li>
                              <NavLink to="/product">Product</NavLink>
                              <ul className="sub-nav">
                                  {productList?.map((item, idx) => (
                                    <li>
                                        <Link to={`/product/${item.seq}`}>{item.menuName}</Link>
                                    </li>
                                  ))}
                              </ul>
                          </li>
                          <li>
                              <NavLink to="/board">Q&A</NavLink>
                          </li>
                      </ul>
                  </nav>
              </div>
          </div>
      </HeadWrap>
  )
}

const HeadWrap = styled.header`
  z-index:10;
  position:fixed;
  top:0;
  left:0;
  width:100%;
  
  .head-inner {
    z-index:1000;
    position:relative;
    width:100%;
    height:100px;
    padding:0 70px;
    background-color:rgba(255, 255, 255, 0);
    transition:all 0.3s ease;
    
    &.active {
      height:85px;
      background-color:rgba(255, 255, 255, 0.9);
    }
    
    .head-content {
      position:relative;
      width:100%;
      height:100%;
      display:flex;
      align-items: center;
      
      .hdLogo {
        a {
          display: block;
          
          img {
            height:57px;
          }
        }
      }
      
      .hdNav {
        position:absolute;
        top:50%;
        left:50%;
        transform:translate(-50%, -50%);
        
        > ul {
          display:flex;
          align-items:center;
          gap:0 30px;
          
          li {
            position:relative;
            
            a {
              display:block;
              font-size:18px;
              line-height:50px;
              font-weight:500;
              color:#000000;
            }
            
            .sub-nav {
              display:none;
              z-index:2;
              position:absolute;
              top:50px;
              left:50%;
              transform:translateX(-50%);
              padding:10px 20px;
              background:#fff;
              border-radius:7px;
              box-shadow:0 2px 9px rgba(0, 0, 0, 0.2);
              
              li a {
                font-weight:500;
                font-size:14px;
                line-height:1.5;
                color:#111;
              }
              
              li + li {
                margin-top:10px;
              }
            }
            
            &:hover .sub-nav {
              display:block;
            }
          }
        }
      }
    }
  }
`
import { useState, useEffect } from 'react';
import { Link, NavLink } from "react-router-dom";
import styled from 'styled-components';

export default function Header(){
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 0);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

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
  height:100px;
  
  .head-inner {
    z-index:1000;
    position:relative;
    width:100%;
    height:100%;
    padding:0 70px;
    background-color:rgba(255, 255, 255, 0);
    transition:all 0.3s ease;
    
    &.active {
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
        
        ul {
          display:flex;
          align-items:center;
          gap:0 30px;
          
          li a {
            font-size:18px;
            font-weight:500;
            color:#000000;
          }
        }
      }
    }
  }
`
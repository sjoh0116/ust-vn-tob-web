import { Link, NavLink } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

/* JS */
import * as Server from 'assets/js/Server';

const HeaderLayout = () => {
    const [sideOpen, setSideOpen] = useState(false);
    const [menu, setMenu] = useState([]);

    useEffect(() => {
        if (sideOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [sideOpen]);

    useEffect(() => {
        Server.sendGet(
            'tob/product/list',
            {
                useYn: 'Y'
            },
            getProductList
        ).then();
    }, []);

    const getProductList = res => {
        setMenu(res['resultList']);
    };
    const activeBurger = () => {
        setSideOpen(state => !state);
    };
    const sideClose = () => {
        setSideOpen(false);
    };

    return (
        <React.Fragment>
            <HeaderWrap>
                <div className="inner">
                    <div className="gnb_logo">
                        <Link to="/">
                            <img src="https://ust-vina.s3.ap-northeast-2.amazonaws.com/tob/tob_logo.webp" alt="Truth of Beauty" />
                        </Link>
                    </div>
                    <div className="gnb_nav">
                        <nav>
                            <ul>
                                {menu?.map((v, i) => (
                                    <li key={i}>
                                        <Link to={"/product/detail?seq=" + v['seq']} end={true} className={({isActive}) => { return isActive ? 'active' : ''; }}>
                                            {v['menuName']}
                                        </Link>
                                    </li>
                                ))}
                                <li>
                                    <Link to="/story">Our Story</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    <div className="hamburger">
                        <button onClick={activeBurger} className={sideOpen === true ? 'open' : ''}>
                            <div className="icon-left" />
                            <div className="icon-right" />
                        </button>
                    </div>
                </div>
            </HeaderWrap>

            <SideBar>
                <div className={sideOpen === true ? 'open sideWrap' : 'sideWrap'}>
                    <div className="logo_sec">
                        <Link to="/">
                            <img src="https://ust-vina.s3.ap-northeast-2.amazonaws.com/tob/tob_logo.webp" alt="Truth of Beauty" />
                        </Link>
                    </div>
                    <div className="nav_sec">
                        <ul className="menu_nav">
                            {menu?.map((v, i) => (
                                <li key={i}>
                                    <Link to={"/product/detail?seq=" + v['seq']}>{v['menuName']}</Link>
                                </li>
                            ))}
                            <li>
                                <NavLink to="/story">Our Story</NavLink>
                            </li>
                        </ul>
                        <ul className="sns_nav">
                            <li>
                                <Link to="https://www.facebook.com/TOBVinaKorean">
                                    <LinkImg src="https://ust-vina.s3.ap-northeast-2.amazonaws.com/tob/facebook_ic.webp" />
                                </Link>
                            </li>
                            <li>
                                <Link to="https://shopee.vn/tob_officialstore">
                                    <LinkImg src="https://ust-vina.s3.ap-northeast-2.amazonaws.com/tob/shopper_ic.webp" />
                                </Link>
                            </li>
                            <li>
                                <Link to="https://www.lazada.vn/shop/aqua-solution/?spm=a2o4n.pdp_revamp.seller.1.15084a0ePaPdKq&itemId=2221839876&channelSource=pdp">
                                    <LinkImg src="https://ust-vina.s3.ap-northeast-2.amazonaws.com/tob/lazada_ic.webp" />
                                </Link>
                            </li>
                            <li>
                                <Link to="https://www.tiktok.com/@healthacleanvietnam">
                                    <LinkImg src="https://ust-vina.s3.ap-northeast-2.amazonaws.com/tob/tiktok_ic.webp" />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={sideOpen === true ? 'open dimmed' : 'dimmed'} onClick={sideClose}/>
            </SideBar>
        </React.Fragment>
    )
}

const HeaderWrap = styled.header`
  z-index:10;
  position:fixed;
  top:0;
  left:0;
  width:100%;
  padding:16px 36px;
  background:var(--color-white);
  border-bottom:1px solid var(--border-color);
  
  & .inner {
    margin:0 auto;
    position:relative;
    display:grid;
    grid-template-columns: 120px calc(100% - 120px);
    
    & .gnb_logo {
      img {
        max-height:60px;
      }
    }
    
    & .gnb_nav {
      position:relative;
      display:flex;
      justify-content: center;
      align-items: center;
      
      ul {
        display:flex;
        align-items:center;
        gap:0 32px;
        
        li a {
          font-weight:700;
          font-size:var(--nav-tit);
          color:var(--color-black);
          
          &:hover {
            color:var(--color-primary);
          }
        }
      }
    }
    
    & .hamburger {
        display:none;
        z-index:99;
        position:relative;

        & button {
          position: relative;
          width: 50px;
          height: 50px;
          transition-property: top,bottom,left,right,opacity, transform;
          transition-duration: 0.5s;

          & .icon-left {
            position: absolute;
            top:25px;
            left:calc(50% - 10px);
            transform:translateX(-50%);
            width: 20px;
            height: 3px;
            background: var(--color-black);
            transition-property: top,bottom,left,right,opacity, transform;
            transition-duration: 0.5s;

            &::before {
              content: "";
              position: absolute;
              left:0;
              top: -10px;
              width: 20px;
              height: 3px;
              background: var(--color-black);
              transition-duration: 0.5s;
              transition-property: top,bottom,left,right,opacity, transform;
            }

            &::after {
              content: "";
              position: absolute;
              left:0;
              top: 10px;
              width: 20px;
              height: 3px;
              background: var(--color-black);
              transition-duration: 0.5s;
              transition-property: top,bottom,left,right,opacity, transform;
            }
          }

          & .icon-right {
            position: absolute;
            top:25px;
            left:calc(50% + 10px);
            transform:translateX(-50%);
            width: 20px;
            height: 3px;
            background: var(--color-black);
            transition-duration: 0.5s;
            transition-property: top,bottom,left,right,opacity, transform;

            &::before {
              content: "";
              position: absolute;
              left:0;
              top: -10px;
              width: 20px;
              height: 3px;
              background: var(--color-black);
              transition-duration: 0.5s;
              transition-property: top,bottom,left,right,opacity, transform;
            }

            &::after {
              content: "";
              position: absolute;
              left:0;
              top: 10px;
              width: 20px;
              height: 3px;
              background: var(--color-black);
              transition-duration: 0.5s;
              transition-property: top,bottom,left,right,opacity, transform;
            }
          }
        }

        & button.open {
          position: relative;
          width: 50px;
          height: 50px;

          & .icon-left {
            background: transparent;

            &::before {
              transform: rotateZ(45deg) scaleX(1.4) translate(1px, 0);
              top:-13px
            }

            &::after {
              transform: rotateZ(-45deg) scaleX(1.4) translate(1px, 0);
              top:7px;
            }
          }

          & .icon-right {
            transition-duration: 0.5s;
            background: transparent;

            &::before {
              transform: rotateZ(-45deg) scaleX(1.4) translate(-1px, 0);
              top:-13px;
            }

            &::after {
              transform: rotateZ(45deg) scaleX(1.4) translate(-1px, 0);
              top:7px;
            }
          }
        }
      }
  }

  @media only screen and (max-width: 1080px) {
    & .inner {
      display:flex;
      align-items: center;
      justify-content: space-between;
   
      & .gnb_nav {
        display:none;
      }
      
      & .hamburger {
        display:block;
      }
    }
  }
`

const SideBar = styled.div`
  z-index:11;
  position:relative;
  
  .sideWrap {
    z-index:2;
    position:fixed;
    left:-75vw;
    top:0;
    width:75vw;
    height:100vh;
    background:var(--color-white);
    transition:all .25s ease-in;
    overflow-y:auto;
    
    &.open {
      left:0;
    }
    
    .logo_sec {
      padding:30px 0;
      text-align:center;
      img {
        max-height:60px;
      }
    }
    
    .nav_sec {
      position:relative;
      .menu_nav {
        position:relative;
        li {
          padding:30px 0;
          text-align:center;
          border-bottom:1px solid rgba(0,0,0, .1);
          a {
            display:block;
            font-size:var(--nav-tit);
            font-weight:400;
            color:var(--color-black);
          }
        }
      }
      
      .sns_nav {
        margin-top:30px;
        display:flex;
        gap:0 24px;
        justify-content: center;
        align-items:center;
        
        li > a img {
          max-width:36px;
        }
      }
    }
  }

  .dimmed {
    display:none;
    z-index:1;
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:100vh;
    background:rgba(0,0,0, 0.7);
    
    &.open {
      display:block;
    }
  }
`

const LinkImg = styled.img.attrs({alt:'Sns Shop'})``

export default HeaderLayout
import { Link, NavLink, useLocation } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

/* JS */
import * as Server from 'assets/js/Server';

const HeaderLayout = () => {
    const [sideOpen, setSideOpen] = useState(false);
    const [menu, setMenu] = useState([]);

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const currentSeq = searchParams.get('seq');

    const [navMenu, setNavMenu] = useState(false);


    useEffect(() => {
        if (sideOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [sideOpen]);

    useEffect(() => {
        Server.sendGet('tob/product/list', {
            useYn: 'Y'
        }, getProductList).then();
    }, []);

    const getProductList = res => {
        setMenu(res['resultList']);
    };
    const activeBurger = () => {
        setSideOpen(state => !state);
    };
    const sideClose = () => {
        setSideOpen(false);
        setNavMenu(false);
    };

    return (
        <React.Fragment>
            <HeaderWrap>
                <div className='inner'>
                    <div className='gnb_logo'>
                        <Link to='/'>
                            <img src='https://ust-vina.s3.ap-northeast-2.amazonaws.com/tob/tob_logo.webp' alt='Truth of Beauty'/>
                        </Link>
                    </div>
                    <div className='gnb_nav'>
                        <nav>
                            <ul>
                                <li>
                                    <NavLink to='/brand'>Brand</NavLink>
                                </li>
                                <li onMouseEnter={() => setNavMenu(true)} onMouseLeave={() => setNavMenu(false)}>
                                    <NavLink to='/product'>Product</NavLink>

                                    { navMenu &&
                                        <ul>
                                            {menu?.map((v, i) => (
                                                <li key={i}>
                                                    <NavLink
                                                        to={`/product/detail?seq=${v['seq']}`}
                                                        className={({ isActive }) => {
                                                            return isActive && currentSeq === String(v['seq']) ? 'active' : '';
                                                        }}
                                                    >
                                                        {v['menuName']}
                                                    </NavLink>
                                                </li>
                                            ))}
                                        </ul>
                                    }
                                </li>
                                <li>
                                    <NavLink to='/story'>Our Story</NavLink>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    <div className='hamburger'>
                        <button onClick={activeBurger} className={sideOpen ? 'open' : ''}>
                            <div className='icon-left'/>
                            <div className='icon-right'/>
                        </button>
                    </div>
                </div>
            </HeaderWrap>

            <SideBar>
                <div className={sideOpen ? 'open sideWrap' : 'sideWrap'}>
                    <div className='logo_sec'>
                        <Link to='/'>
                            <img src='https://ust-vina.s3.ap-northeast-2.amazonaws.com/tob/tob_logo.webp' alt='Truth of Beauty'/>
                        </Link>
                    </div>
                    <div className='nav_sec'>
                        <ul className='menu_nav'>
                            <li>
                                <NavLink to='/brand' onClick={sideClose}>Brand</NavLink>
                            </li>
                            <li>
                                <button className={navMenu ? 'open' : ''} onClick={() => setNavMenu(prevState => !prevState)}>Product</button>
                                <ul className={navMenu ? 'open' : ''}>
                                    {menu?.map((v, i) => (
                                        <li key={i}>
                                            <NavLink
                                                onClick={sideClose}
                                                to={`/product/detail?seq=${v['seq']}`}
                                                className={({ isActive }) => {
                                                    return isActive && currentSeq === String(v['seq']) ? 'active' : '';
                                                }}
                                            >
                                                {v['menuName']}
                                            </NavLink>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                            <li>
                                <NavLink to='/story' onClick={sideClose}>Our Story</NavLink>
                            </li>
                        </ul>
                        <ul className='sns_nav'>
                            <li>
                                <Link onClick={sideClose} to='https://www.facebook.com/TOBVinaKorean'>
                                    <LinkImg src='https://ust-vina.s3.ap-northeast-2.amazonaws.com/tob/facebook_ic.webp'/>
                                </Link>
                            </li>
                            <li>
                                <Link onClick={sideClose} to='https://shopee.vn/tob_officialstore'>
                                    <LinkImg src='https://ust-vina.s3.ap-northeast-2.amazonaws.com/tob/shopper_ic.webp'/>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    onClick={sideClose}
                                    to='https://www.lazada.vn/shop/aqua-solution/?spm=a2o4n.pdp_revamp.seller.1.15084a0ePaPdKq&itemId=2221839876&channelSource=pdp'>
                                    <LinkImg src='https://ust-vina.s3.ap-northeast-2.amazonaws.com/tob/lazada_ic.webp'/>
                                </Link>
                            </li>
                            <li>
                                <Link onClick={sideClose} to='https://www.tiktok.com/@healthacleanvietnam'>
                                    <LinkImg src='https://ust-vina.s3.ap-northeast-2.amazonaws.com/tob/tiktok_ic.webp'/>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                {sideOpen &&
                    <div className='hamburger'>
                        <button onClick={activeBurger} className={sideOpen ? 'open' : ''}>
                            <div className='icon-left'/>
                            <div className='icon-right'/>
                        </button>
                    </div>
                }
                <div className={sideOpen ? 'open dimmed' : 'dimmed'} onClick={sideClose}/>
            </SideBar>
        </React.Fragment>
    )
}

const HeaderWrap = styled.header`
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 16px 0;
  background: var(--color-white);
  border-bottom: 1px solid var(--border-color);

  & .inner {
    margin: 0 auto;
    position: relative;
    display: grid;
    grid-template-columns: 120px calc(100% - 120px);

    & .gnb_logo {
      img {
        max-height: 60px;
      }
    }

    & .gnb_nav {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;

      nav {
        > ul {
          display: flex;
          align-items: center;
          gap: 0 32px;
          height:60px;

          > li {
              position:relative;
            
            > a {
              display:block;
              font-weight: 700;
              font-size: var(--nav-tit);
              color: var(--color-black);
              line-height:60px;
              
              &:hover {
                color: var(--color-primary);
              }
            }
            
            > ul {
              top:45px;
              background:var(--color-white);
              border:1px solid #eee;
              position:absolute;
              width:max-content;
              
              li {
                
                padding:12px;

                a  {
                  font-weight:400;
                  font-size: var(--info-txt);
                  color: var(--color-black);
                }

                &:hover {
                  background:#eee;
                }
              }
              
            }
          }

          li a.active {
            color: var(--color-primary);
          }
        } 
      }
    }

    & .hamburger {
      display: none;
      z-index: 99;
      position: relative;
      transform:scale(0.7);

      & button {
        position: relative;
        width: 50px;
        height: 50px;
        transition-property: top, bottom, left, right, opacity, transform;
        transition-duration: 0.5s;

        & .icon-left {
          position: absolute;
          top: 25px;
          left: calc(50% - 10px);
          transform: translateX(-50%);
          width: 20px;
          height: 3px;
          background: var(--color-black);
          transition-property: top, bottom, left, right, opacity, transform;
          transition-duration: 0.5s;

          &::before {
            content: '';
            position: absolute;
            left: 0;
            top: -10px;
            width: 20px;
            height: 3px;
            background: var(--color-black);
            transition-duration: 0.5s;
            transition-property: top, bottom, left, right, opacity, transform;
          }

          &::after {
            content: '';
            position: absolute;
            left: 0;
            top: 10px;
            width: 20px;
            height: 3px;
            background: var(--color-black);
            transition-duration: 0.5s;
            transition-property: top, bottom, left, right, opacity, transform;
          }
        }

        & .icon-right {
          position: absolute;
          top: 25px;
          left: calc(50% + 10px);
          transform: translateX(-50%);
          width: 20px;
          height: 3px;
          background: var(--color-black);
          transition-duration: 0.5s;
          transition-property: top, bottom, left, right, opacity, transform;

          &::before {
            content: '';
            position: absolute;
            left: 0;
            top: -10px;
            width: 20px;
            height: 3px;
            background: var(--color-black);
            transition-duration: 0.5s;
            transition-property: top, bottom, left, right, opacity, transform;
          }

          &::after {
            content: '';
            position: absolute;
            left: 0;
            top: 10px;
            width: 20px;
            height: 3px;
            background: var(--color-black);
            transition-duration: 0.5s;
            transition-property: top, bottom, left, right, opacity, transform;
          }
        }
      }

      & button.open {
        position: relative;
        width: 50px;
        height: 50px;

        & .icon-left {
          background: transparent;
          background: var(--color-white);

          &::before {
            background: var(--color-white);
            transform: rotateZ(45deg) scaleX(1.4) translate(1px, 0);
            top: -13px
          }

          &::after {
            background: var(--color-white);
            transform: rotateZ(-45deg) scaleX(1.4) translate(1px, 0);
            top: 7px;
          }
        }

        & .icon-right {
          background: var(--color-white);
          transition-duration: 0.5s;
          background: transparent;

          &::before {
            background: var(--color-white);
            transform: rotateZ(-45deg) scaleX(1.4) translate(-1px, 0);
            top: -13px;
          }

          &::after {
            background: var(--color-white);
            transform: rotateZ(45deg) scaleX(1.4) translate(-1px, 0);
            top: 7px;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 1024px) {
    & .inner {
      display: flex;
      align-items: center;
      justify-content: space-between;

      & .gnb_logo {
        img {
          max-height: 40px;
        }
      }
      
      & .gnb_nav {
        display: none;
      }

      & .hamburger {
        display: block;
      }
    }
  }
`

const SideBar = styled.div`
  z-index: 11;
  position: relative;

  & .hamburger {
    z-index: 99;
    position: fixed;
    top:20px;
    right:20px;
    transform:scale(0.7);

    & button {
      position: relative;
      width: 50px;
      height: 50px;
      transition-property: top, bottom, left, right, opacity, transform;
      transition-duration: 0.5s;

      & .icon-left {
        position: absolute;
        top: 25px;
        left: calc(50% - 10px);
        transform: translateX(-50%);
        width: 20px;
        height: 3px;
        background: var(--color-black);
        transition-property: top, bottom, left, right, opacity, transform;
        transition-duration: 0.5s;

        &::before {
          content: '';
          position: absolute;
          left: 0;
          top: -10px;
          width: 20px;
          height: 3px;
          background: var(--color-black);
          transition-duration: 0.5s;
          transition-property: top, bottom, left, right, opacity, transform;
        }

        &::after {
          content: '';
          position: absolute;
          left: 0;
          top: 10px;
          width: 20px;
          height: 3px;
          background: var(--color-black);
          transition-duration: 0.5s;
          transition-property: top, bottom, left, right, opacity, transform;
        }
      }

      & .icon-right {
        position: absolute;
        top: 25px;
        left: calc(50% + 10px);
        transform: translateX(-50%);
        width: 20px;
        height: 3px;
        background: var(--color-black);
        transition-duration: 0.5s;
        transition-property: top, bottom, left, right, opacity, transform;

        &::before {
          content: '';
          position: absolute;
          left: 0;
          top: -10px;
          width: 20px;
          height: 3px;
          background: var(--color-black);
          transition-duration: 0.5s;
          transition-property: top, bottom, left, right, opacity, transform;
        }

        &::after {
          content: '';
          position: absolute;
          left: 0;
          top: 10px;
          width: 20px;
          height: 3px;
          background: var(--color-black);
          transition-duration: 0.5s;
          transition-property: top, bottom, left, right, opacity, transform;
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
          background: var(--color-white);
          transform: rotateZ(45deg) scaleX(1.4) translate(1px, 0);
          top: -13px
        }

        &::after {
          background: var(--color-white);
          transform: rotateZ(-45deg) scaleX(1.4) translate(1px, 0);
          top: 7px;
        }
      }

      & .icon-right {
        transition-duration: 0.5s;
        background: transparent;

        &::before {
          background: var(--color-white);
          transform: rotateZ(-45deg) scaleX(1.4) translate(-1px, 0);
          top: -13px;
        }

        &::after {
          background: var(--color-white);
          transform: rotateZ(45deg) scaleX(1.4) translate(-1px, 0);
          top: 7px;
        }
      }
    }
  }
  
  .sideWrap {
    z-index: 2;
    position: fixed;
    left: -75vw;
    top: 0;
    width: 75vw;
    height: 100vh;
    background: var(--color-white);
    transition: all .25s ease-in;
    overflow-y: auto;

    &.open {
      left: 0;
    }

    .logo_sec {
      padding: 30px 0;
      text-align: center;

      img {
        max-height: 60px;
      }
    }

    .nav_sec {
      position: relative;

      .menu_nav {
        position: relative;

        > li {
          border-bottom: 1px solid rgba(0, 0, 0, .1);

          > ul {
            
            &.open {
              
              li {
                height:55px;
                opacity:1;
                border-top: 1px solid rgba(0, 0, 0, .1);
              }
            }
            
            li {
              height:0;
              border-top: none;
              background: rgba(0, 0, 0, .03);
              border-top: none;
              transition:height .5s ease-in-out, opacity .5s ease-in-out;
              overflow:hidden;
              opacity:0;

            }
          }
          
          button {
            padding: 20px;
            position:relative;
            width:100%;
            display: block;
            font-family: var(--font-family);
            font-size: var(--nav-tit);
            font-weight: 600;
            color: var(--color-black);
            text-align:left;
            
            &.open::before {
              transform: translateY(-50%) rotate(180deg);
            }
            
            &::before {
              content:'';
              position:absolute;
              top:50%;
              right:20px;
              transform:translateY(-50%);
              width:31px;
              height:30px;
              background:url('https://ust-kr.s3.ap-northeast-2.amazonaws.com/assets/layout/drop_arrow.svg') no-repeat;
            }
          }
          
          a {
            display: block;
            padding: 20px;
            font-size: var(--nav-tit);
            font-weight: 600;
            color: var(--color-black);
          }
        }
      }

      .sns_nav {
        margin-top: 30px;
        display: flex;
        gap: 0 24px;
        justify-content: center;
        align-items: center;

        li > a img {
          max-width: 36px;
        }
      }
    }
  }

  .dimmed {
    display: none;
    z-index: 1;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.7);

    &.open {
      display: block;
    }
  }
  
`

const LinkImg = styled.img.attrs({ alt: 'Sns Shop' })``

export default HeaderLayout
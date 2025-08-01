import styled from 'styled-components';
import React, { useState } from 'react';
import {NavLink, Outlet} from 'react-router-dom';

import HeaderLayout from 'layout/Header';
import FooterLayout from 'layout/Footer';
import FloatingMoveBtn from "../components/MoveBtn";
import FloatingMenu from "../components/FloadtingMenu";

import ZaloSdk from "../hooks/ZaloSDK";
import ZaloFloat from "../components/ZaloFloating";
import SideMenu from "./SideMenu";

const ContentLayout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false)
  }


  return (
    <>
      <ContentWrap>
        <HeaderLayout onMenuToggle={toggleMenu} />
        <SideMenu isOpen={isMenuOpen} onClose={closeMenu}/>
        {isMenuOpen &&
          <div onClick={toggleMenu} className="dimmed" />
        }
        <Outlet/>
        <FloatingMoveBtn />
        <ZaloFloat />
        <FloatingMenu />
        <FooterLayout/>
      </ContentWrap>
    </>
  );
};

const ContentWrap = styled.div`
  position: relative;
  
  .dimmed {
    z-index:99;
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background:rgba(0, 0, 0, 0.6);
  }
`;

export default ContentLayout;
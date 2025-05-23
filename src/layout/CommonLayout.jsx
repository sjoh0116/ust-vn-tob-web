import React from 'react';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';

import HeaderLayout from 'layout/Header';
import FooterLayout from 'layout/Footer';
import FloatingMoveBtn from "../components/MoveBtn";
import FloatingMenu from "../components/FloadtingMenu";

const ContentLayout = () => {
  return (
    <>
      <ContentWrap>
        <HeaderLayout/>
        <Outlet/>
        <FloatingMoveBtn />
        <FloatingMenu />
        <FooterLayout/>
      </ContentWrap>
    </>
  );
};

const ContentWrap = styled.div`
  position: relative;
`;

export default ContentLayout;
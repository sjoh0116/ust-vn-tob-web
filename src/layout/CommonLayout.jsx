import styled from 'styled-components';
import { Outlet } from 'react-router-dom';

import HeaderLayout from 'layout/Header';
import FooterLayout from 'layout/Footer';
import FloatingMoveBtn from "../components/MoveBtn";
import FloatingMenu from "../components/FloadtingMenu";

import ZaloSdk from "../hooks/ZaloSDK";
import ZaloFloat from "../components/Qna/ZaloFloating";

const ContentLayout = () => {
  return (
    <>
      <ContentWrap>
        <HeaderLayout/>
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
`;

export default ContentLayout;
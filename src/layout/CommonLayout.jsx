import React from 'react';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';

import HeaderLayout from 'layout/Header';
import FooterLayout from 'layout/Footer';

const ContentLayout = () => {
  return (
    <>
      <ContentWrap>
        <HeaderLayout/>
        <Outlet/>
        <FooterLayout/>
      </ContentWrap>
    </>
  );
};

const ContentWrap = styled.div`
  margin-top: 93px;
  position: relative;

  @media only screen and (max-width: 1024px) {
    margin-top: 85px;
  }
`;

export default ContentLayout;
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
  position: relative;
`;

export default ContentLayout;
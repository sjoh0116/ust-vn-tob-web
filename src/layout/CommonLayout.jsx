import React from 'react';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';

import HeaderLayout from "./Header";
import FooterLayout from "./Footer";

const ContentLayout = () => {

    return (
        <>
            <ContentWrap>
                <HeaderLayout />
                <Outlet />
                <FooterLayout />
            </ContentWrap>
        </>
    );
};

const ContentWrap = styled.div`
  margin-top:93px;
  position:relative;    
`;

export default ContentLayout;
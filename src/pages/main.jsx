import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

/* JS */
import * as Server from 'assets/js/Server';

import VisualSwiper from 'components/Main/VisualSwipe';
import ProductDesc from 'components/Main/ProductDesc';
import Philosophy from 'components/Main/Philosophy';
import BottomSwiper from 'components/Main/BottomSwipe';
import BrandStory from "../components/Main/BrandStory";
import ProductSwipe from "../components/Main/ProductSwiper";
import KeywordProduct from "../components/Main/KeywordProduct";

const MainPage = () => {
  const [mainItem, setMainItem] = useState({
    banner: [],
    subBanner: [],
    product: [],
  });

  useEffect(() => {
    Server.sendGet('tob/main/list', {
      bannerType: 'M',
      subBannerType: 'S',
    }, getProductMainList).then();
  }, []);

  const getProductMainList = res => {
    setMainItem(res['resultObject']);
  };

  return (
    <Wrap>
      {/* Visual Main Slider */}
      <VisualSwiper banner={mainItem?.banner}/>
      <ProductSwipe />
      <BrandStory />
      <KeywordProduct />
    </Wrap>
  )
}

const Wrap = styled.div`
  position: relative;
`;

export default MainPage;
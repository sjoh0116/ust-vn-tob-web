import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

/* JS */
import * as Server from 'assets/js/Server';

import VisualSwiper from 'components/Main/VisualSwipe';
import ProductDesc from 'components/Main/ProductDesc';
import Philosophy from 'components/Main/Philosophy';
import BottomSwiper from 'components/Main/BottomSwipe';

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
      {/* Product Desc */}
      <ProductDesc product={mainItem?.product}/>
      {/* Philosophy */}
      <Philosophy/>
      {/* Bottom Slider */}
      <BottomSwiper banner={mainItem?.subBanner}/>
    </Wrap>
  )
}

const Wrap = styled.div`
  position: relative;
`;

export default MainPage;
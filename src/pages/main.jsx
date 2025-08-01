import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

/* JS */
import * as Server from 'assets/js/Server';

import VisualSwiper from 'components/Main/VisualSwipe';
import ProductSwipe from "../components/Main/ProductSwiper";
import BrandStory from "../components/Main/BrandStory";
import ProductReview from "../components/Main/ProductReview";
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

  const [mainProduct, setMainProduct] = useState({});

  const getMainProduct = () => {
    Server.sendGet('tob/main/product/list', {}, getMainProductCallback).then();
  }

  const getMainProductCallback = res => {
    setMainProduct(res['resultObject']);
  }

  useEffect(() => {
    getMainProduct();
  }, []);

  return (
    <Wrap>
      {/* Visual Main Slider */}
      <VisualSwiper banner={mainItem?.banner}/>
      <ProductSwipe newProduct={mainProduct?.newProductList}/>
      <BrandStory />
      <ProductReview />
      <KeywordProduct param={mainProduct}/>
    </Wrap>
  )
}

const Wrap = styled.div`
  position: relative;
`;

export default MainPage;

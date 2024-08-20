import styled from 'styled-components';

import VisualSwiper from "../components/Main/VisualSwipe";
import ProductDesc from "../components/Main/ProductDesc";
import Philosophy from "../components/Main/Philosophy";
import BottomSwiper from "../components/Main/BottomSwipe";

const MainPage = () => {
    return (
         <Wrap>
             {/* Visual Main Slider */}
            <VisualSwiper />
             {/* Product Desc */}
            <ProductDesc />
             {/* Philosophy */}
             <Philosophy />
             {/* Bottom Slider */}
             <BottomSwiper />
        </Wrap>
    )
}

const Wrap = styled.div`
  position:relative;

`;

export default MainPage;
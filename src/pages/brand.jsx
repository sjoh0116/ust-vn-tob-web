import { useState, useEffect } from "react";
import styled from 'styled-components';

export default function Brand(){

    const [isMobile, setIsMobile] = useState(window.innerWidth < 1025);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1025);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [])

    return (
        <BrandWrap>
            <div className="visual">
                <div className="brand_tit">
                    <span>our company</span>
                    <h1>brand story</h1>
                </div>
            </div>

            <div className="brand_info">
                {!isMobile &&
                    <div className="inner">
                        <img src="https://ust-vina.s3.ap-northeast-2.amazonaws.com/TOB-VN/pc_brand.png" alt="tob brand" />
                    </div>
                }

                {isMobile &&
                    <div className="inner">
                        <img src="https://ust-vina.s3.ap-northeast-2.amazonaws.com/TOB-VN/mo_brand.png" alt="tob brand" />
                    </div>
                }

            </div>
        </BrandWrap>
    )
}

const BrandWrap = styled.section`
  position:relative;
  
  .visual {
    position:relative;
    display:flex;
    justify-content: center;
    align-items:center;
    height:360px;
    background:url('https://ust-vina.s3.ap-northeast-2.amazonaws.com/TOB-VN/company_bg.png') 50% 50% no-repeat;
    background-size:cover;
    
    &::before {
      z-index:1;
      content:'';
      position:absolute;
      width:100%;
      height:100%;
      background:rgba(0,0,0, 0.33);
    }
    
    .brand_tit {
      z-index:2;
      position:relative;
      text-align:center;
      
      span {
        display:block;
        font-weight:500;
        font-size:var(--info-tit);
        line-height:1.2;
        color:var(--color-white);
        text-transform: uppercase;
      }
      h1 {
        display:block;
        font-weight:700;
        font-size:var(--prd-tit);
        line-height:1.2;
        color:var(--color-white);
        text-transform: uppercase;
      }
    }
  }
  
  .brand_info {
    position:relative;
    padding:140px 0;
    
    text-align:center;
    
    img {
      width:90%;
    }
  }

  @media only screen and (max-width: 1024px) {
    .visual {
      height:200px;
    }
    
    .brand_info {
      position:relative;
      padding:70px 0;

      text-align:center;
    }

  }
`
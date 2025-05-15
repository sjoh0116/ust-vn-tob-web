import { useState, useEffect } from 'react';
import styled from 'styled-components';

export default function Brand() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1025);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1025);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <BrandWrap>
        <div className="content-in">
          <img src="https://ust-vina.s3.ap-northeast-2.amazonaws.com/renewal/brand_content.webp" alt="truth of beauty Brand Story" />
        </div>
    </BrandWrap>
  )
}

const BrandWrap = styled.section`
 padding:100px 0 80px;
  
  .content-in {
    max-width:1480px;
    margin:0 auto;
    text-align: center;
  }
  
  @media only screen and (max-width: 1024px) {
  }
  
`;
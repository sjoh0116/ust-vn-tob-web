import { useState, useEffect } from 'react';
import styled from 'styled-components';

export default function FloatingMoveBtn() {
    const [active, setActive] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const scrollToBottom = () => {
        window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
    };

    useEffect(() => {
        const handleScroll = () => {
            setActive(window.scrollY > 170);
        };

        window.addEventListener('scroll', handleScroll);

        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    return (
        <ScrollBtn className={active ? 'active' : ''}>
            <div className="up-btn btn">
                <button onClick={scrollToTop}>
                    <img src="https://ust-vina.s3.ap-northeast-2.amazonaws.com/renewal/chevron-up.svg" alt="go Up" />
                </button>
            </div>
            <div className="down-btn btn">
                <button onClick={scrollToBottom}>
                    <img src="https://ust-vina.s3.ap-northeast-2.amazonaws.com/renewal/chevron-down.svg" alt="go Down" />
                </button>
            </div>
        </ScrollBtn>
    )
}

const ScrollBtn = styled.div`
  z-index:1;
  opacity:0;
  position:fixed;
  top:50%;
  right:25px;
  transform:translateY(-50%);
  width:48px;
  height:80px;
  background:#fff;
  border-radius:24px;
  box-shadow:0 3px 7px rgba(0,0,0,0.15);
  transition:all .3s ease;
  
  &.active {
    z-index:99;
    opacity:1;
  }
  
  .btn {
    width:100%;
    text-align: center;
    
    button {
      line-height:40px;
    }
    
    &.up-btn {
      border-bottom:1px solid #eee;
    }
  }
`
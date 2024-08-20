import styled from 'styled-components';

import { PHIL_DATA } from "./Data";

import PhilItem from "./PhilItem";

export default function Philosophy () {

    return (
        <PhilsWrap>
            <div className="sec_head">
                <h1>Philosophy</h1>
            </div>

            <div className="inner">
                <div className="phil_con">
                    <div className="full_item">
                        <PhilItem title={PHIL_DATA[0].name} img={PHIL_DATA[0].img} />
                    </div>
                    <div className="half_item">
                        <PhilItem title={PHIL_DATA[1].name} img={PHIL_DATA[1].img}  />
                        <PhilItem title={PHIL_DATA[2].name} img={PHIL_DATA[2].img}  />
                    </div>
                </div>
            </div>
        </PhilsWrap>
    )
}

const PhilsWrap = styled.section`
  position:relative;
  padding:70px 0;
  
  .phil_con {
      position:relative;
      
      .full_item {
        position:relative;
      }
      
      .half_item {
        margin-top:18px;
        display:flex;
        align-items:center;
        gap:0 18px;
      }

      .item_in {
        position:relative;
        width:100%;
        height:280px;
        display:flex;
        justify-content: center;
        align-items:center;
        
        &::before {
          z-index:1;
          content:'';
          position:absolute;
          top:50%;
          left:50%;
          transform:translate(-50%, -50%);
          width:100%;
          height:100%;
          background:rgba(0,0,0, 0.35);
        }
        
        strong {
          z-index:2;
          position:relative;
          font-weight:700;
          font-size:36px;
          color:var(--color-white);
        }
      }
    }

  @media only screen and (max-width: 1024px) {
    padding:35px 0;

    .phil_con {
      position:relative;
      
      .half_item {
        margin-top:10px;
        gap:0 10px;
      }

      .item_in {
        height:140px;

        strong {
          z-index:2;
          position:relative;
          font-weight:700;
          font-size:18px;
          color:var(--color-white);
        }
      }
    }
  }
`
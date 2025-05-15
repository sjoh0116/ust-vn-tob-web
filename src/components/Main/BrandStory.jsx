import { Link } from "react-router-dom";
import styled from 'styled-components';

export default function BrandStory(){
    return (
        <StoryWrap>
            <div className="story-inner">
                <div className="storyVod">
                    <iframe
                        src="https://www.youtube.com/embed/bY0jJ4CST8c?rel=0&amp;loop=1&amp;playlist=bY0jJ4CST8c&amp;autoplay=1&amp;mute=1"
                        frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen=""
                        title="truth of beauty"
                    />
                </div>
                <div className="storyDesc">
                    <div className="desc-in">
                        <p>뷰티의 진실을 토브에서 찾아 보세요</p>
                        <strong>What is the ‘Truth Of Beauty’</strong>
                        <p className="blank">
                            화장품의 진실은 성분에 있습니다.<br />
                            적합한 원료 조합과 피부 고민에 충실한 최적의 함량,<br />
                            토브가 여러분께 전성분으로 제안합니다.
                        </p>
                        <Link to="/brand">view more</Link>
                    </div>
                </div>
            </div>
        </StoryWrap>
    )
}

const StoryWrap = styled.section`
    position:relative;
    width:100%;
    margin:120px 0;
    overflow:hidden;
    background:#f9f9f9;
  
    .story-inner {
      display:flex;
      
      .storyVod {
        flex-basis:63%;
        
        iframe {
          width:100%;
          height:675px;
        }
      }
      
      .storyDesc {
        position:relative;
        flex-basis:37%;
        display:flex;
        align-items:center;
        justify-content: center;
        
        .desc-in {
          text-align:center;
          line-height:1.6; 
          
          strong {
            margin-top:10px;
            display:block;
            font-size:34px;
            font-weight:700;
            font-family:'Pt-Serif', serif;
            line-height:1.2;
            letter-spacing: -0.015em;
          }
          
          p {
            display:block;
            font-size:16px;
            font-weight:300;
            
            &.blank::before {
              content:'';
              margin:35px auto;
              display:block;
              width:14px;
              height:1px;
              background-color:#888;
            }
          }
          
          a {
            margin-top:30px;
            display:inline-block;
            width:130px;
            font-size:12px;
            font-weight:500;
            line-height:3;
            color:#ffffff;
            background:#000;
            text-align:center;
          }
        }
      }
    }
`
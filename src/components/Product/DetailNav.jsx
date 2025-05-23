import styled from 'styled-components';
export default function DetailNav({ product, qna, toDetail, toQna }){
    return (
        <NavWrap>
            <div className="inner">
                <ul>
                    <li className={ product === 'active' ? 'active' : undefined}>
                        <button onClick={toDetail}>
                            <span>상세 정보</span>
                        </button>
                    </li>
                    <li className={ qna === 'active' ? 'active' : undefined}>
                        <button onClick={toQna}>
                            <span>Q&A</span><p>0</p>
                        </button>
                    </li>
                </ul>
            </div>
        </NavWrap>
    )
}

const NavWrap = styled.div`
  position:relative;
  padding:60px 0;
  
  .inner {
    max-width:1240px;
    margin:0 auto;
    
    ul {
      display:flex;
      justify-content: center;
      align-items:center;
      gap:0 70px;
      
      li {
        &:hover, &.active {
          opacity:1;
        }
      }
      
      li {
        opacity:.4;
        button {
          display:flex;
          align-items: center;
          gap:0 5px;
          transition:all .3s ease;

          span {
            font-size:16px;
            font-weight:700;
            color:#000;
          }

          p {
            display:inline-block;
            width:20px;
            border-radius:3px;
            background:#333;
            font-size:11px;
            line-height:18px;
            font-weight:700;
            color:#fff;
            text-align:center;
          }
        }\
      }
    }
  }
`
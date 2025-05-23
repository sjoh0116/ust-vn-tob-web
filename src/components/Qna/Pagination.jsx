import styled from 'styled-components';

export default function Pagination(){
    return (
        <PaginationBox>
            <button><img src="https://ust-vina.s3.ap-northeast-2.amazonaws.com/renewal/board/chevron-left.svg" alt="prev" /></button>
            <ul>
                <li className="active">
                    <button>1</button>
                </li>
                <li>
                    <button>2</button>
                </li>
            </ul>
            <button><img src="https://ust-vina.s3.ap-northeast-2.amazonaws.com/renewal/board/chevron-right.svg" alt="next" /></button>
        </PaginationBox>
    )
}

const PaginationBox = styled.div`
  margin-top:60px;
  position:relative;
  display:flex;
  justify-content: center;
  align-items:center;
  gap:0 20px;
  
  ul {
    display:flex;
    align-items:center;
    
    
    li {
      button {
        display:flex;
        justify-content: center;
        align-items: center;
        font-weight:500;
        font-size:13px;
        width:40px;
        height:40px;
        line-height:40px;
        border-radius:50%;
      }
      
      &.active button {
        background:#f5f5f5;
      }
    }
  }
`
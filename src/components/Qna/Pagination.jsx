import styled from 'styled-components';
import {useState} from "react";
import useDidMountEffect from "../../hooks/useDidMountEffect";

export default function Pagination(param) {

  const [pageLength, setPageLength] = useState(0);
  const pageSize = 5;

  const setPageNumbers = () => {
    const total = Math.ceil(param.param / pageSize);
    setPageLength(total);
  }

  useDidMountEffect(() => {
    setPageNumbers();
  }, [param])
  return (
    <PaginationBox>
      <button><img src="https://ust-vina.s3.ap-northeast-2.amazonaws.com/renewal/board/chevron-left.svg" alt="prev"/>
      </button>
      <ul>
        {Array.from({ length: pageLength }, (_, i) => (
          <li
            // key={i} className={i + 1 === currentPage ? 'active' : ''}
          >
            <button onClick={() => param.setOffset(i + 1)}>{i + 1}</button>
          </li>
        ))}
      </ul>
      <button><img src="https://ust-vina.s3.ap-northeast-2.amazonaws.com/renewal/board/chevron-right.svg" alt="next"/>
      </button>
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

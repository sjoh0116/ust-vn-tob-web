import styled from 'styled-components';

export default function BoardTitle(){
    return (
        <BoardTit>
            <h4>Product Q&A</h4>
            <p>상품에 대한 문의 답변드립니다.</p>
        </BoardTit>
    )
}

const BoardTit = styled.div`
  position:relative;
  text-align:center;
  
  h4 {
    font-family:'Pt-Serif', serif;
    font-weight:500;
    font-size:30px;
    color:#000;
  }
  
  p {
    margin-top:20px;
    display:block;
    font-weight:400;
    font-size:15px;
    color:#6d6d6d;
  }
`
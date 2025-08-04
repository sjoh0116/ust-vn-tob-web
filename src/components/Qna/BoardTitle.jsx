import styled from 'styled-components';

export default function BoardTitle(){
    return (
        <BoardTit>
            <h4>Product Q&A</h4>
            <p>Chúng tôi xin trả lời câu hỏi về sản phẩm.</p>
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
import styled from 'styled-components';

export default function QnaBoard(){
    return (
        <QnaContent>
            <div className="inner">
                <div className="qna-head">
                    <h4>Q&A</h4>
                    {/*<Link to="/board/write">상품 문의</Link>*/}
                </div>
                <div className="qna-table">
                    <table>
                        <colgroup>
                            <col width="70%" />
                            <col width="15%" />
                            <col width="15%" />
                        </colgroup>
                        <tbody>
                            <tr className="question">
                                <td>
                                    <button>문의명</button>
                                </td>
                                <td className="center">문의 작성자</td>
                                <td className="center">문의 날짜</td>
                            </tr>
                            <tr className="comment">
                                <td colSpan={3}>
                                    <p>관리자 답변</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </QnaContent>
    )
}

const QnaContent = styled.div`
  position:relative;
  
  .qna-head {
    position:relative;
    display:flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom:20px;
    border-bottom:1px solid #000;
    
    h4 {
      font-family:'Pt-Serif',serif;
      font-weight:700;
      font-size:24px;
      color:#111;
    }
    
    a {
      padding:0 20px;
      display:block;
      height:30px;
      line-height:30px;
      font-weight:500;
      font-size:12px;
      color:#111;
      border:1px solid #ddd;
    }
  }
  
  table {
    position:relative;
    
    td {
      padding:24px 15px;
      font-size:14px;
      font-weight:400;
      color:#777;
      line-height:1.3;
      border-bottom:1px solid #f9f9f9;
      
      &.center {
        text-align:center; 
      }
    }
    
    .comment td {
      color:#111;
      background:#f9f9f9;
      border-bottom:1px solid #e5e5e5;
    }
  }
`
import { Link } from "react-router-dom";

import styled from 'styled-components';
import BoardTitle from "../../components/Qna/BoardTitle";
import Pagination from "../../components/Qna/Pagination";

export default function BoardList(){
    return (
        <BoardContent>
            <div className="inner">
                <BoardTitle />
                <div className="board-content">
                    <div className="board-table">
                        <table>
                            <colgroup>
                                <col width="10%" />
                                <col width="10%" />
                                <col width="50%" />
                                <col width="15%" />
                                <col width="15%" />
                            </colgroup>
                            <tbody>
                            {/* 게시글 번호, 상품 이미지, 상품명 + 제목, 작성자, 날짜 */}
                                <tr>
                                    <td>1</td>
                                    <td>
                                        <Link to="">
                                            <img src="https://ust-vina.s3.ap-northeast-2.amazonaws.com/renewal/product/TocTocShot/thum-01.jpg" alt="product" />
                                        </Link>
                                    </td>
                                    <td className="left">
                                        <Link className="desc" to="/board/detail/1">
                                            <span>상품명</span>
                                            <p>문의명</p>
                                        </Link>
                                    </td>
                                    <td>Truth of Beauty</td>
                                    <td>2025-05-22</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="board-util">
                        <div className="board-search">
                            <div className="search-tool">
                                <select>
                                    <option>제목</option>
                                    <option>아이디</option>
                                </select>
                                <input type="text" />
                                <button>찾기</button>
                            </div>
                            <Link to="/board/write">작성하기</Link>
                        </div>
                        <Pagination />
                    </div>
                </div>
            </div>
        </BoardContent>
    )
}

const BoardContent = styled.section`
  padding:100px 0 80px;
  position:relative;

  .inner {
    padding-top:100px;
    
    .board-table {
      margin-top:60px;
      position:relative;
      border-top:1px solid #000;
      
      table {
        position:relative;
        width:100%;
        
        td {
          padding:24px 10px;
          vertical-align: middle;
          text-align:center;
          font-size:13px;
          line-height:1.4;
          color:#6d6d6d;
          border-bottom:1px solid #e5e5e5;
          
          &.left {
            text-align:left;
          }
          
          .desc {
            display:flex;
            flex-direction: column;
            gap:5px 0;
            
            span {
              font-size:12px;
              font-weight:400;
              line-height:1.5;
              color:#6d6d6d;
            }
            
            p {
              font-size:14px;
              font-weight:500;
              line-height:1.5;
              color:#111;
            }
          }
          
          img {
            width:45px;
            height:45px;
          }
        }
      }
      
    }
    
    .board-util {
      margin-top:20px;
      position:relative;
      
      .board-search {
        position:relative;
        display:flex;
        justify-content: space-between;
        align-items: center;
        
        .search-tool {
          display:flex;
          align-items: center;
          gap:0 10px;
          
          select {
            width:110px;
            padding:0 20px;
            height:40px;
            line-height:40px;
            font-size:13px;
            font-weight:400;
            color:#111;
            border:1px solid #e0e0e0;
          }

          input {
            width:170px;
            padding:0 20px;
            height:40px;
            line-height:40px;
            font-size:13px;
            font-weight:400;
            color:#111;
            border:1px solid #e0e0e0;
          }

          button {
            padding:0 20px;
            height:40px;
            line-height:40px;
            font-size:13px;
            font-weight:400;
            color:#111;
            border:1px solid #e0e0e0;
          } 
        }
        
        a {
          display:block;
          padding:0 20px;
          height:40px;
          line-height:40px;
          font-weight:500;
          font-size:14px;
          color:#fff;
          background:#000;
        }
      }
    }
  }

  @media only screen and (max-width: 1024px) {
    padding: 70px 0 50px;

    .inner {
      padding-top: 50px;
    }
  }
`
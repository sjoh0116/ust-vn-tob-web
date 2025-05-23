import { Link, useParams } from "react-router-dom";
import styled from 'styled-components';

import BoardTitle from "../../components/Qna/BoardTitle";



export default function BoardDetail(){
    const params = useParams();


    return (
        <BoardContent>
            <div className="sec-inner">
                <BoardTitle />
                <div className="board-content">
                    <div className="board-read">
                        <div className="product-info">
                            <div className="thumbnail">
                                <img src="https://ust-vina.s3.ap-northeast-2.amazonaws.com/renewal/product/TocTocShot/thum-01.jpg" alt="product" />
                            </div>
                            <div className="product-desc">
                                <strong>상품명</strong>
                                <p>상품 설명</p>
                            </div>
                        </div>
                        <div className="read-content">
                            <div className="read-tit">
                                <strong>문의명</strong>
                                <ul>
                                    <li>작성자</li>
                                    <li>날짜</li>
                                </ul>
                            </div>
                            <div className="read-area">
                                <p>
                                    asdasdsadsad <br />
                                    asdasdasdsad
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="board-util">
                        <Link to="/board">목록</Link>
                        <Link className="modify" to="/board/modify/:boardNum">수정</Link>
                    </div>
                </div>
            </div>
        </BoardContent>
    )
}

const BoardContent = styled.section`
  padding:100px 0 80px;
  position:relative;

  .sec-inner {
    padding-top:100px;
    
    .board-read {
      margin-top:60px;
      position:relative;
      
      .product-info {
        position:relative;
        width:100%;
        padding:10px;
        border:2px solid #cccccc;
        display:flex;
        align-items:center;
        gap:0 20px;
        
        .thumbnail {
          width:75px;
          height:75px;
          
          img {
            width:100%;
          }
        }
        
        .product-desc {
          display:flex;
          flex-direction: column;
          gap:5px 0;
          
          strong {
            font-size:12px;
            font-weight:600;
            color:#6d6d6d;
          }
          
          p {
            font-size:14px;
            font-weight:500;
            line-height:1.5;
            color:#111;
          }
        }
      }
      
      .read-content {
        position:relative;
        
        .read-tit {
          padding:35px 0;
          text-align:center;
          border-bottom:1px solid #ededed;
          
          strong {
            font-weight:600;
            font-size:18px;
            color:#111;
          }
          
          ul {
            margin-top:15px;
            display:flex;
            justify-content: center;
            align-items: center;
            gap:0 20px;
          }
        }
        
        .read-area {
          padding:40px 30px;
          
          p {
            font-weight:400;
            font-size:14px;
            line-height:1.5;
            color:#111;
          }
        }
      }
    }
    
    .board-util {
      margin-top:20px;
      position:relative;
      display:flex;
      gap:0 10px;
      align-items: center;
      justify-content: space-between;

      a {
        display:inline-block;
        padding:0 20px;
        height:40px;
        line-height:40px;
        font-size:13px;
        font-weight:400;
        color:#111;
        border:1px solid #e0e0e0;
        
        &.modify {
          font-weight:600;
          background:#000;
          color:#fff;
        }
      }
    }
  }
`
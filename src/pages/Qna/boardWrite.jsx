import styled from 'styled-components';
import { Link } from "react-router-dom";

// 에디터
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';


import BoardTitle from "../../components/Qna/BoardTitle";

export default function BoardWrite(){

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
                        <div className="write-content">
                            <CKEditor
                                editor={ ClassicEditor }
                                config={{
                                    placeholder: "문의 내용을 입력해주세요.",
                                }}
                            />
                        </div>
                    </div>
                    <div className="board-util">
                        <Link to="/board">목록</Link>
                        <button>작성</button>
                    </div>
                </div>
            </div>
        </BoardContent>
    )
}

const BoardContent = styled.div`
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

      .write-content {
        margin-top:60px;
        position:relative;

        .ck.ck-editor__editable:not(.ck-editor__nested-editable) {
          min-height:400px;
          padding:20px;
        }
      }
    }

    .board-util {
      margin-top:20px;
      position:relative;
      display:flex;
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
      }
      
      button {
        display:inline-block;
        padding:0 20px;
        height:40px;
        line-height:40px;
        font-size:13px;
        font-weight:400;
        color:#fff;
        background:#000;
      }
    }
  }
`
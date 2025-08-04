import styled from 'styled-components';
import {useEffect, useState} from "react";
import * as Server from "../../assets/js/Server";
import useDidMountEffect from "../../hooks/useDidMountEffect";
export default function DetailNav({ product, qna, review, toDetail, toQna, toReview, param }){

    const [reviewList, setReviewList] = useState([]);

    const getProductReviewList = () => {
        Server.sendGet(
            'tob/product/review',
            {
                productSeq: param.prdNum
            },
            getProductReviewListCallback
        ).then();
    }

    const getProductReviewListCallback = res => {
        setReviewList(res['resultList']);
    }

    useEffect(() => {
        getProductReviewList();
    }, [])

    useDidMountEffect(() => {
        getProductReviewList();
    },[param]);

    return (
        <NavWrap>
            <div className="inner">
                <ul>
                    <li className={ product === 'active' ? 'active' : undefined}>
                        <button onClick={toDetail}>
                            <span>thông tin chi tiết</span>
                        </button>
                    </li>
                    <li className={ review === 'active' ? 'active' : undefined}>
                        <button onClick={toReview}>
                            <span>Review</span><p>{reviewList.length}</p>
                        </button>
                    </li>
                    {/*<li className={ qna === 'active' ? 'active' : undefined}>*/}
                    {/*    <button onClick={toQna}>*/}
                    {/*        <span>Q&A</span><p>0</p>*/}
                    {/*    </button>*/}
                    {/*</li>*/}
                </ul>
            </div>
        </NavWrap>
    )
}

const NavWrap = styled.div`
  position:relative;
  padding:60px 0;

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
          font-size:1.2rem;
          font-weight:700;
          color:#000;
        }

        p {
          display: inline-block;
          font-size: 11px;
          min-width: 20px;
          line-height: 17px;
          padding: 1px 5px 0 4px;
          border-radius: 3px;
          background-color: #333;
          color: #fff;
          margin-left: 6px;
          text-align: center;
          vertical-align: 1px;
        }
      }
    }
  }

  @media only screen and (max-width: 1024px) {
    padding:45px 0;
    
    ul {
      gap:0;
      
      li {
        flex:1;
        text-align:center;
        button {
          display:inline-flex;
          
          span {
            font-weight:700;
            color:#000;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 360px) {
    ul {
      li {
        button {
          span {
            font-size:0.8rem;
          }
        }
      }
    }
  }

`
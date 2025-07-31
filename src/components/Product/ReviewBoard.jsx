import Pagination from "../Qna/Pagination";
import test from 'test.json';
import {useEffect, useState} from "react";
import * as Server from "../../assets/js/Server";
import useDidMountEffect from "../../hooks/useDidMountEffect";

export default function ReviewBoard(param) {

  const [reviewList, setReviewList] = useState([]);
  const [offset, setOffset] = useState('');

  const getProductReviewList = () => {
    Server.sendGet(
      'tob/product/review',
      {
        productSeq: param.param.param.prdNum,
        offset: 1
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
    <div className="review-board">
      <div className="board-head">
        <div className="board-tit">
          <strong>Review</strong>
          <span>{param.total}</span>
        </div>
        {/*<div className="board-filter">*/}
        {/*  <button>추천순</button>*/}
        {/*  <button>최신순</button>*/}
        {/*</div>*/}
      </div>
      <div className="board-list">
        {reviewList?.map((item, idx) => (
          <>
            <div className="list-item">
              <div className="item-writer">
                <ul className="rating-score">
                  <li>
                    <img src="https://ust-vina.s3.ap-northeast-2.amazonaws.com/renewal/product/fill_star.svg" alt="review"/>
                  </li>
                  <li>
                    <img src="https://ust-vina.s3.ap-northeast-2.amazonaws.com/renewal/product/fill_star.svg" alt="review"/>
                  </li>
                  <li>
                    <img src="https://ust-vina.s3.ap-northeast-2.amazonaws.com/renewal/product/fill_star.svg" alt="review"/>
                  </li>
                  <li>
                    <img src="https://ust-vina.s3.ap-northeast-2.amazonaws.com/renewal/product/fill_star.svg" alt="review"/>
                  </li>
                  <li>
                    <img src="https://ust-vina.s3.ap-northeast-2.amazonaws.com/renewal/product/fill_star.svg" alt="review"/>
                  </li>
                </ul>
                <span>{item.reviewUserId}</span>
                <span>{item.reviewRegDate}</span>
              </div>
              <div className="item-txt">
                <p>{item.reviewText}</p>
                <img src={item.reviewImg}
                     alt=""/>
              </div>
            </div>
          </>
        ))}
        <Pagination param={param.total} setOffset={setOffset}/>
      </div>
    </div>
  )
}

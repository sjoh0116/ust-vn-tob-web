import Pagination from "../Qna/Pagination";
import test from 'test.json';

export default function ReviewBoard() {
  const data = test;

  return (
    <div className="review-board">
      <div className="board-head">
        <div className="board-tit">
          <strong>리뷰</strong>
          <span>13</span>
        </div>
        <div className="board-filter">
          <button>추천순</button>
          <button>최신순</button>
        </div>
      </div>
      <div className="board-list">
        {test?.map((item, idx) => (
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
                <span>{item.userId}</span>
                <span>{item.regDate}</span>
              </div>
              <div className="item-txt">
                <p>{item.contents}</p>
                <img src={item.productImg}
                     alt=""/>
              </div>
            </div>
          </>
        ))}
        <Pagination/>
      </div>
    </div>
  )
}

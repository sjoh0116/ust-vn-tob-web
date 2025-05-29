import Pagination from "../Qna/Pagination";

export default function ReviewBoard(){
    return (
        <div className="review-board">
            <div className="board-head">
                <div className="board-tit">
                    <strong>리뷰</strong>
                    <span>00</span>
                </div>
                <div className="board-filter">
                    <button>추천순</button>
                    <button>최신순</button>
                </div>
            </div>
            <div className="board-list">
                <div className="list-item">
                    <div className="item-writer">
                        <ul className="rating-score">
                            <li>
                                <img src="https://ust-vina.s3.ap-northeast-2.amazonaws.com/renewal/product/fill_star.svg" alt="review" />
                            </li>
                            <li>
                                <img src="https://ust-vina.s3.ap-northeast-2.amazonaws.com/renewal/product/fill_star.svg" alt="review" />
                            </li>
                            <li>
                                <img src="https://ust-vina.s3.ap-northeast-2.amazonaws.com/renewal/product/fill_star.svg" alt="review" />
                            </li>
                            <li>
                                <img src="https://ust-vina.s3.ap-northeast-2.amazonaws.com/renewal/product/fill_star.svg" alt="review" />
                            </li>
                            <li>
                                <img src="https://ust-vina.s3.ap-northeast-2.amazonaws.com/renewal/product/fill_star.svg" alt="review" />
                            </li>
                        </ul>
                        <span>작성자</span>
                        <span>2025-05-29</span>
                    </div>
                    <div className="item-txt">
                        <p>예비 신부가 마음에 들어하네요~!!</p>
                        <img src="https://ust-vina.s3.ap-northeast-2.amazonaws.com/renewal/b5b083f729bf1273fe3952b729c945b3.jpg" alt="" />
                    </div>
                </div>
                <div className="list-item">
                    <div className="item-writer">
                        <ul className="rating-score">
                            <li>
                                <img src="https://ust-vina.s3.ap-northeast-2.amazonaws.com/renewal/product/fill_star.svg" alt="review" />
                            </li>
                            <li>
                                <img src="https://ust-vina.s3.ap-northeast-2.amazonaws.com/renewal/product/fill_star.svg" alt="review" />
                            </li>
                            <li>
                                <img src="https://ust-vina.s3.ap-northeast-2.amazonaws.com/renewal/product/fill_star.svg" alt="review" />
                            </li>
                            <li>
                                <img src="https://ust-vina.s3.ap-northeast-2.amazonaws.com/renewal/product/fill_star.svg" alt="review" />
                            </li>
                            <li>
                                <img src="https://ust-vina.s3.ap-northeast-2.amazonaws.com/renewal/product/fill_star.svg" alt="review" />
                            </li>
                        </ul>
                        <span>작성자</span>
                        <span>2025-05-29</span>
                    </div>
                    <div className="item-txt">
                        <p>예비 신부가 마음에 들어하네요~!!</p>
                        <img src="https://ust-vina.s3.ap-northeast-2.amazonaws.com/renewal/b5b083f729bf1273fe3952b729c945b3.jpg" alt="" />
                    </div>
                </div>
                <div className="list-item">
                    <div className="item-writer">
                        <ul className="rating-score">
                            <li>
                                <img src="https://ust-vina.s3.ap-northeast-2.amazonaws.com/renewal/product/fill_star.svg" alt="review" />
                            </li>
                            <li>
                                <img src="https://ust-vina.s3.ap-northeast-2.amazonaws.com/renewal/product/fill_star.svg" alt="review" />
                            </li>
                            <li>
                                <img src="https://ust-vina.s3.ap-northeast-2.amazonaws.com/renewal/product/fill_star.svg" alt="review" />
                            </li>
                            <li>
                                <img src="https://ust-vina.s3.ap-northeast-2.amazonaws.com/renewal/product/fill_star.svg" alt="review" />
                            </li>
                            <li>
                                <img src="https://ust-vina.s3.ap-northeast-2.amazonaws.com/renewal/product/fill_star.svg" alt="review" />
                            </li>
                        </ul>
                        <span>작성자</span>
                        <span>2025-05-29</span>
                    </div>
                    <div className="item-txt">
                        <p>예비 신부가 마음에 들어하네요~!!</p>
                        <img src="https://ust-vina.s3.ap-northeast-2.amazonaws.com/renewal/b5b083f729bf1273fe3952b729c945b3.jpg" alt="" />
                    </div>
                </div>

                <Pagination />
            </div>
        </div>
    )
}
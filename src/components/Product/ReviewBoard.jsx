"use client"

import Pagination from "../Qna/Pagination"
import { useEffect, useState } from "react"
import * as Server from "../../assets/js/Server"
import useDidMountEffect from "../../hooks/useDidMountEffect"

export default function ReviewBoard(param) {
    const [reviewList, setReviewList] = useState([])
    const [currentPage, setCurrentPage] = useState(1)

    const getProductReviewList = (page = 1) => {
        Server.sendGet(
            "tob/product/review",
            {
                productSeq: param.param.param.prdNum,
                offset: page,
            },
            getProductReviewListCallback,
        ).then()
    }

    const getProductReviewListCallback = (res) => {
        setReviewList(res["resultList"])
    }

    const handlePageChange = (page) => {
        setCurrentPage(page)
        getProductReviewList(page)
    }

    useEffect(() => {
        getProductReviewList(1)
    }, [])

    useDidMountEffect(() => {
        setCurrentPage(1)
        getProductReviewList(1)
    }, [param])

    return (
        <div className="review-board">
            <div className="board-head">
                <div className="board-tit">
                    <strong>Review</strong>
                    <span>{param.total}</span>
                </div>
            </div>
            <div className="board-list">
                {reviewList?.map((item, idx) => (
                    <div key={idx} className="list-item">
                        <div className="item-writer">
                            <ul className="rating-score">
                                <li>
                                    <img
                                        src="https://ust-vina.s3.ap-northeast-2.amazonaws.com/renewal/product/fill_star.svg"
                                        alt="review"
                                    />
                                </li>
                                <li>
                                    <img
                                        src="https://ust-vina.s3.ap-northeast-2.amazonaws.com/renewal/product/fill_star.svg"
                                        alt="review"
                                    />
                                </li>
                                <li>
                                    <img
                                        src="https://ust-vina.s3.ap-northeast-2.amazonaws.com/renewal/product/fill_star.svg"
                                        alt="review"
                                    />
                                </li>
                                <li>
                                    <img
                                        src="https://ust-vina.s3.ap-northeast-2.amazonaws.com/renewal/product/fill_star.svg"
                                        alt="review"
                                    />
                                </li>
                                <li>
                                    <img
                                        src="https://ust-vina.s3.ap-northeast-2.amazonaws.com/renewal/product/fill_star.svg"
                                        alt="review"
                                    />
                                </li>
                            </ul>
                            <span>{item.reviewUserId}</span>
                            <span>{item.reviewRegDate}</span>
                        </div>
                        <div className="item-txt">
                            <p>{item.reviewText}</p>
                            <img src={item.reviewImg || "/placeholder.svg"} alt="" />
                        </div>
                    </div>
                ))}
                <Pagination total={param.total} currentPage={currentPage} onPageChange={handlePageChange} />
            </div>
        </div>
    )
}

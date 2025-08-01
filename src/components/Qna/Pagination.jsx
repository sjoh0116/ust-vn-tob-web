"use client"

import styled from "styled-components"
import { useState, useEffect } from "react"

export default function Pagination({ total, currentPage, onPageChange }) {
    const [pageGroup, setPageGroup] = useState(1)
    const pageSize = 5 // 한 페이지당 아이템 수
    const pagesPerGroup = 5 // 한 그룹당 페이지 수

    const totalPages = Math.ceil(total / pageSize)
    const totalGroups = Math.ceil(totalPages / pagesPerGroup)

    // 현재 그룹의 시작 페이지와 끝 페이지 계산
    const startPage = (pageGroup - 1) * pagesPerGroup + 1
    const endPage = Math.min(pageGroup * pagesPerGroup, totalPages)

    // 현재 페이지가 변경될 때 해당 페이지가 속한 그룹으로 이동
    useEffect(() => {
        const newPageGroup = Math.ceil(currentPage / pagesPerGroup)
        setPageGroup(newPageGroup)
    }, [currentPage])

    // 이전 그룹으로 이동
    const handlePrevGroup = () => {
        if (pageGroup > 1) {
            const newPageGroup = pageGroup - 1
            setPageGroup(newPageGroup)
            const newPage = (newPageGroup - 1) * pagesPerGroup + 1
            onPageChange(newPage)
        }
    }

    // 다음 그룹으로 이동
    const handleNextGroup = () => {
        if (pageGroup < totalGroups) {
            const newPageGroup = pageGroup + 1
            setPageGroup(newPageGroup)
            const newPage = (newPageGroup - 1) * pagesPerGroup + 1
            onPageChange(newPage)
        }
    }

    // 페이지 번호 클릭
    const handlePageClick = (page) => {
        onPageChange(page)
    }

    // 페이지가 없으면 렌더링하지 않음
    if (totalPages <= 1) {
        return null
    }

    return (
        <PaginationBox>
            <button onClick={handlePrevGroup} disabled={pageGroup === 1} className={pageGroup === 1 ? "disabled" : ""}>
                <img src="https://ust-vina.s3.ap-northeast-2.amazonaws.com/renewal/board/chevron-left.svg" alt="prev" />
            </button>

            <ul>
                {Array.from({ length: endPage - startPage + 1 }, (_, i) => {
                    const pageNumber = startPage + i
                    return (
                        <li key={pageNumber} className={pageNumber === currentPage ? "active" : ""}>
                            <button onClick={() => handlePageClick(pageNumber)}>{pageNumber}</button>
                        </li>
                    )
                })}
            </ul>

            <button
                onClick={handleNextGroup}
                disabled={pageGroup === totalGroups}
                className={pageGroup === totalGroups ? "disabled" : ""}
            >
                <img src="https://ust-vina.s3.ap-northeast-2.amazonaws.com/renewal/board/chevron-right.svg" alt="next" />
            </button>
        </PaginationBox>
    )
}

const PaginationBox = styled.div`
  margin-top: 60px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0 20px;

  > button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #fff;
    border: 1px solid #e8e8e8;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover:not(.disabled) {
      background: #f5f5f5;
    }

    &.disabled {
      opacity: 0.3;
      cursor: not-allowed;
    }

    img {
      width: 16px;
      height: 16px;
    }
  }

  ul {
    display: flex;
    align-items: center;
    gap: 0 5px;

    li {
      button {
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: 500;
        font-size: 13px;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background: #fff;
        border: 1px solid transparent;
        cursor: pointer;
        transition: all 0.2s ease;

        &:hover {
          background: #f5f5f5;
        }
      }

      &.active button {
        background: #333;
        color: #fff;
        border-color: #333;
      }
    }
  }
`

import {Link} from "react-router-dom";
import styled from 'styled-components';
import {useEffect, useState} from "react";

import * as Server from 'assets/js/Server';

export default function ProductList() {
  const [productList, setProductList] = useState([]);

  const getProductList = () => {
    Server.sendGet('tob/product/list', {}, getProductListCallback).then();
  }

  const getProductListCallback = res => {
    setProductList(res['resultList']);
  }

  useEffect(() => {
    getProductList()
  },[])

  return (

    <ProductWrap>
      <div className="inner">
        <div className="list-title">
          <h4>전체 제품</h4>
        </div>
        <div className="list-content">
          {/* 리스트 MENU */}
          <div className="list-menu">
            <div className="prd-count">
              <span>Total</span>
              <strong>{productList?.length}</strong>
            </div>
          </div>

          {/* 상품 리스트 */}
          <div className="product-list">
            <ul className="prd-list">
              {/* map 데이터 반복 지점 */}
              {productList?.map((item, idx) => (
                <li key={idx} className="prd-item">
                  <div className="prd-thumb">
                    <Link to={`/product/${item.seq}`}>
                      <img
                        className="thumb-img"
                        src={item.productUrl}
                        alt={item.productName}/>
                      <img
                        className="thumb-hover"
                        src={item.productHoverUrl}
                        alt={item.productName}/>
                    </Link>
                  </div>
                  <div className="prd-desc">
                    <Link to={`/product/${item.seq}`}>{item.productName}</Link>
                    {/*<span>제품 설명</span>*/}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </ProductWrap>
  )
}

const ProductWrap = styled.section`
  position:relative;
  padding:100px 0 80px;
  
  .list-title {
    position:relative;
    padding:80px 0;
    text-align:center;
    
    h4 {
      font-weight:700;
      font-size:2.5em;
      color:#111;
    }
  }
  
  .list-content {
    position:relative;
    
    .list-menu {
      position:relative;
      
      .prd-count {
        display:flex;
        align-items:center;
        gap:0 5px;
        
        span {
          font-weight:400;
          font-size:1rem;
          color:#111;
        }
        
        strong {
          font-weight:700;
          font-size:1rem;
          color:#111;
        }
      }
    }
    
    .product-list {
      margin-top:30px;
      position:relative;
      
      .prd-list {
        display:flex;
        flex-wrap:wrap;
        gap:60px 30px;
        
        .prd-item {
          width:calc(25% - 22.5px);
          
          .prd-thumb {
            position:relative;
            width:100%;
            
            a {
              position:relative;
              display:block;
              width:100%;
              
              img {
                width:100%;
              }
              
              .thumb-hover {
                opacity:0;
                z-index:10;
                position:absolute;
                top:0;
                left:0;
                width:100%;
                transition:all .3s ease-in;

              }
              
              &:hover .thumb-hover {
                opacity:1;
              }
            }
          }
          
          .prd-desc {
            margin-top:10px;
            position:relative;
            padding:1rem;
            text-align:center;
            
            a {
              display:block;
              font-size:1.2rem;
              font-weight:700;
              color:#111;
            }
            
            span {
              margin-top:15px;
              display:block;
              font-weight:400;
              font-size:.9rem;
              line-height:1.2;
              color:#a4a4a4;
            }
          }
        }
      }
    }
  }

  @media only screen and (max-width: 1024px) {

    .list-content {
      .product-list {
        .prd-list {
          gap:40px 12px;

          .prd-item {
            width:calc(50% - 12px);
          }
        }
      }
    }
  }
`
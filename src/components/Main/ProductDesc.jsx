import styled from 'styled-components';

import ProdItem from 'components/Main/ProdItem';

export default function ProductDesc({ product }) {
  return (
    <Product>
      <div className='sec_head'>
        <h1>Product Desc</h1>
      </div>
      <div className='inner'>
        <ul>
          {product.map((item, index) => (
            <ProdItem key={index} item={item}/>
          ))}
        </ul>
      </div>
    </Product>
  )
}

const Product = styled.section`
  position: relative;
  padding: 140px 0 70px;

  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 30px 30px;

    li {
      width: calc(33.33% - 20px);

      .prod_img {
        width: 100%;

        img {
          width: 100%;
          height: auto;
        }
      }

      .prod_tit {
        margin-top: 18px;
        text-align: center;

        strong {
          font-weight: 700;
          font-size: var(--prd-txt);
          color: var(--color-black);
        }
      }
    }
  }

  @media only screen and (max-width: 1024px) {
    padding: 70px 0 35px;

    ul {
      display: flex;
      flex-wrap: wrap;
      gap: 18px 18px;

      li {
        width: calc(33.33% - 12px);

        .prod_img {
          width: 100%;

          img {
            width: 100%;
            height: auto;
          }
        }

        .prod_tit {
          margin-top: 10px;
        }
      }
    }
  }
`;
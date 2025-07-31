import styled from 'styled-components';

export default function DetailArea(param){

    return (
        <DetailContent>
            <div className="sec-inner">
                {param?.detail?.map((item, idx) => (
                  <img src={item.imgUrl} alt="product-detail" />
                ))}
            </div>
        </DetailContent>
    )
}

const DetailContent = styled.div`
  position:relative;
  
    img {
      width:100%;
  }
`
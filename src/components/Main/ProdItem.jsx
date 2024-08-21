import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function ProdItem({ item }) {
  const [imgSrc, setImgSrc] = useState(item.productUrl);

  return (
    <li onMouseEnter={() => setImgSrc(item.productHoverUrl)} onMouseLeave={() => setImgSrc(item.productUrl)}>
      <Link to={`product/detail?seq=${item.seq}`}>
        <div className='prod_img'>
          <img width={420} height={420} src={imgSrc} alt={item.productName}/>
        </div>
        <div className='prod_tit'>
          <strong>{item.productName}</strong>
        </div>
      </Link>
    </li>
  )
}
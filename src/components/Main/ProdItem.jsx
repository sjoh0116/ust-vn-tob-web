import { useState } from "react";
import { Link } from "react-router-dom";


export default function ProdItem ({ item }) {

    const [imgSrc, setImgSrc] = useState(item.front_img)

    return (
            <li onMouseEnter={() => setImgSrc(item.back_img)} onMouseLeave={() => setImgSrc(item.front_img)} >
                <Link to="">
                    <div className="prod_img">
                        <img width={420} height={420} src={imgSrc} alt={item.name} />
                    </div>
                    <div className="prod_tit">
                        <strong>{item.name}</strong>
                    </div>
                </Link>
            </li>
        )
}
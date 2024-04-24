import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';

/* JS */
import * as Server from 'assets/js/Server';
import * as Common from 'assets/js/Common';

/* 슬라이드 - 스와이퍼 */
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';

const Detail = () => {
    const [searchParams] = useSearchParams();
    const [productDetail, setProductDetail] = useState({
        slideY: [],
        slideN: []
    });

    useEffect(() => {
        Server.sendGet(
            'tob/product/img',
            {
                productSeq: searchParams.get('seq'),
            },
            getProductImgList
        ).then();
    }, []);

    const getProductImgList = res => {
        const item = {
            slideY: [],
            slideN: [],
        };

        res['resultList'].forEach(v => {
            if (v['slideYn'] === 'Y') item.slideY.push(v);
            else item.slideN.push(v);
        });

        setProductDetail(item);
    };

    return (
        <React.Fragment>
            <ProdWrap>
                <div className="prod_inner">
                    {!Common.isEmpty(productDetail?.slideY) &&
                        <Swiper
                            modules={[EffectFade, Autoplay]}
                            effect="fade"
                            autoplay={{
                                delay: 6000,
                                disableOnInteraction: false,
                            }}
                            loop={true}
                        >
                            {productDetail?.slideY?.map((v, i) => (
                                <SwiperSlide key={i}>
                                    <ProdImg src={v['imgUrl']} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    }
                    {productDetail?.slideN?.map((v, i) => {
                        if (v['imgUrl'].includes('mp')) {
                            return (
                                <DetailVideo autoplay="autoplay" loop="loop" muted="muted" playsinline="playsinline" preload="metadata">
                                    <source src={v['imgUrl']} type="video/mp4" />
                                </DetailVideo>
                            );
                        } else {
                            return (
                                <ProdImg key={i} src={v['imgUrl']} />
                            );
                        }
                    })}
                </div>
            </ProdWrap>
        </React.Fragment>
    )
}

const ProdWrap = styled.div`
    position:relative;
    padding:70px 0 100px;
  
  .prod_inner {
    max-width:1240px;
    margin:0 auto;
    width:95%;
  }
    

  @media only screen and (max-width: 1080px) {
    .prod_inner {
      max-width:100%;
      width:100%;
      padding:0 20px;
      
      img {
        width:100%;
      }
    }
  }
`;

const ProdImg = styled.img.attrs({alt:'Product Image'})`
  max-width:100%;
`;

const DetailVideo = styled.video`
  display: block;
  max-width: 905px;
  margin: 0 auto;
  text-align: center;

  @media only screen and (max-width: 1080px) {
    max-width:100%;
    width:100%;
  }
`;

export default Detail;
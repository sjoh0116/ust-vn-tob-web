s/js/Server';
import * as Common from 'assets/js/Common';

/* 슬라이드 - 스와이퍼 */
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

const MainPage = () => {
    const [mainItem, setMainItem] = useState({
        banner: [],
        subBanner: [],
        product: [],
    });

    const [isMobile, setIsMobile] = useState(window.innerWidth < 1025);

    useEffect(() => {
        Server.sendGet('tob/main/list', {
            bannerType: 'M',
            subBannerType: 'S',
        }, getProductMainList).then();

        const handleResize = () => {
            setIsMobile(window.innerWidth < 1025);
        };

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const getProductMainList = res => {
        setMainItem(res['resultObject']);
    };

    return (
        <React.Fragment>
            <Wrap>
                <div className='inner'>
                    <Swiper
                        modules={[Autoplay]}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        loop={true}
                    >
                        {mainItem?.banner?.map((v, i) => (
                            <SwiperSlide key={i}>
                                <section className='visual_sec'>
                                    <img src={v['bannerUrl']} alt='visual img'/>
                                </section>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <section className='info_sec'>
                        <ul>
                            <Swiper loop={true} spaceBetween={14} slidesPerView={4}>
                                {mainItem?.subBanner?.map((v, i) => (
                                    <SwiperSlide key={i}>
                                        <li>
                                            <div>
                                                <div className='info_img'>
                                                    <InfoImg src={v['bannerUrl']} alt={'sub img'}/>
                                                </div>
                                                <div className='info_desc'>
                                                    <strong>{v['title']}</strong>
                                                    <p>{v['subTitle']}</p>
                                                </div>
                                            </div>
                                        </li>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </ul>
                    </section>
                    <section className='prod_sec'>
                        <ul>
                            {mainItem?.product?.map((v, i) => (
                                <li key={i}>
                                    <div className='prod_in' style={{ backgroundImage: 'url(' + v['productUrl'] + ')' }}>
                                        {!Common.isEmpty(v['tagName']) &&
                                            <ItemUtil>
                                                {v['tagName'].split(',').map((item, index) => (
                                                    <Util key={index}>
                                                        <span>{item}</span>
                                                    </Util>
                                                ))}
                                            </ItemUtil>
                                        }
                                        <div className='prod_desc'>
                                            <span>{v['description']}</span>
                                            <strong>{v['productName']}</strong>
                                            <div className='brand'>
                                                <img src={v['trademarkUrl']} alt='tob'/>
                                            </div>
                                            <p>{v['subName']}</p>
                                            <Link to={'/product/detail?seq=' + v['seq']}>Chi tiết sản phẩm</Link>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </section>
                </div>
            </Wrap>
        </React.Fragment>
    )
}

const Wrap = styled.div`
  position:relative;

  & .inner {
    max-width:1240px;
    margin:0 auto;
    width:95%;
    text-align: center;

    // 비주얼 섹션
    & .visual_sec {
      position:relative;

      img {
        width:100%;
        object-fit: cover;
      }
    }

    // 인포 섹션
    & .info_sec {
      padding:140px 0 70px;
      position:relative;

      .info_box {
        position:relative;
        & .info_desc {
          margin-top:30px;
          text-align:center;

          strong {
            display:block;
            min-height:62px;
            font-size:var( --info-tit);
            line-height:1.2;
            font-weight:500;
            color:var(--color-black);
          }

          p {
            margin-top:15px;
            display:block;
            font-size:var( --info-txt);
            line-height:1.5;
            font-weight:400;
            color:var(--color-grey);
          }
        }
      }

      ul {
        display:flex;
        gap:0 30px;

        & li {
          flex:1;

          img {
            width:100%;
          }
        }
      }
    }

    & .prod_sec {
      position:relative;
      padding:70px 0 140px;

      > ul li + li {
        margin-top:48px;
      }

      & .prod_in {
        position:relative;
        width:100%;
        height:488px;
        background-size:cover;
        background-repeat: no-repeat;
        padding:0 80px;
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        justify-content: center;

        & .prod_desc {
          z-index:2;
          position:relative;
          margin-top: 20px;

          & span {
            font-size:var(--prd-info);
            font-weight:400;
            color:var(--color-grey);
          }

          & strong {
            margin-top:12px;
            display:block;
            font-weight:700;
            font-size:var(--prd-tit);
            color:var(--color-black);
          }

          & p {
            margin-top:12px;
            display:block;
            font-size:var(--prd-txt);
            font-weight:400;
            color:var(--color-grey);
          }

          & h6 {
            margin-top:12px;
            font-size:32px;
            font-weight:500;
            line-height:48px;
            color:rgb(84, 84, 84);
          }

          & .brand {
            margin-top:12px;
            & img {
              max-height:48px;
            }
          }

          & a {
            margin-top:45px;
            display:inline-block;
            padding:0 30px;
            height:45px;
            line-height:45px;
            background:rgb(72, 72, 72);
            font-size:var(--btn-txt);
            font-weight:400;
            color:var(--color-white);
          }
        }
      }
    }
  }

  @media only screen and (max-width: 1080px) {
    & .inner {
      max-width:100%;
      margin:0;
      width:100%;
      padding:0 16px;

      & .visual_sec {
        position:relative;

        img {
          height:50vh;
        }
      }

      // 인포 섹션
      & .info_sec {
        padding:140px 0 70px;
        position:relative;

        .info_box {
          & .info_desc {
            strong {
              min-height:auto;
            }
          }
        }
      }

      & .prod_sec {
        & .prod_in {
          padding:0 40px;
          background-position:75% 100%;
          align-items: center;
        }
      }
    }
  }


  @media only screen and (max-width: 520px) {
    & .inner {
      // 인포 섹션
      & .info_sec {
        padding:70px 0 35px;
      }

      & .prod_sec {
        padding:35px 0 70px;
        & .prod_in {
          justify-content: center;
          text-align:center;
          height:328px;

          &::before {
            z-index:1;
            content:'';
            position:absolute;
            width:100%;
            height:100%;
            top:0;
            left:0;
            background:rgba(255,255,255, 0.5);
          }

          & .prod_desc {
            z-index:2;
            position:relative;

            & span {
              font-size:var(--m-prd-info);
              font-weight:400;
              color:var(--color-grey);
            }

            & strong {
              margin-top:12px;
              display:block;
              font-weight:700;
              font-size:var(--m-prd-tit);
              color:var(--color-black);
            }

            & p {
              margin-top:12px;
              display:block;
              font-size:var(--m-prd-txt);
              font-weight:400;
              color:var(--color-grey);
            }

            & a {
              margin-top:45px;
              display:inline-block;
              padding:0 15px;
              height:45px;
              line-height:45px;
              background:rgb(72, 72, 72);
              font-size:var(--m-btn-txt);
              font-weight:400;
              color:var(--color-white);
            }
          }
        }
      }
    }
  }
`;

const ItemUtil = styled.ul`
  display: flex;
  align-items: center;
  gap: 0 12px;
`;

const Util = styled.li`
  padding: 0 15px;
  height: 30px;
  background: #d9d9d9;
  border-radius: 25px;
  margin: 0 !important;

  & span {
    display: block;
    font-weight: 500;
    font-size: 15px;
    line-height: 30px;
    color: #7d7d7d;
  }

  @media only screen and (max-width: 1240px) {
    padding:0 8px;
    height:20px;
    background:#ffffff;

    & span {
      font-size:12px;
      line-height:20px;
    }
  }
`;

const InfoImg = styled.img.attrs({alt:'tob info'})``

export default MainPage;
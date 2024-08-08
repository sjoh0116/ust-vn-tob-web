import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

/* JS */
import * as Server from 'assets/js/Server';
import * as Common from 'assets/js/Common';

/* 슬라이드 - 스와이퍼 */
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

const TobStory = () => {
  const [mainItem, setMainItem] = useState({
    banner: [],
  });

  useEffect(() => {
    Server.sendGet('tob/main/ourStory/list', {
      bannerType: 'O',
    }, getProductMainList).then();
  }, []);

  const getProductMainList = res => {
    setMainItem(res['resultObject']);
  };

  return (
    <React.Fragment>
      <StoryWrap>
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
                <section
                  className='visual_story'
                  style={{
                    background: 'url(' + v['bannerUrl'] + ') top 50% left 50% no-repeat',
                  }}
                >
                  <div className='visual_box'>
                    <h4>{v['title']}</h4>
                    <div className='img_box'>
                      {v['bannerSubList']?.map((val, idx) => {
                        if (val['frontYn'] === 'Y') {
                          return (
                            <DecoImg key={idx} className='top' src={val['imgUrl']}/>
                          );
                        } else {
                          return (
                            <DecoImg key={idx} className='bot' src={val['imgUrl']}/>
                          );
                        }
                      })}
                    </div>
                  </div>
                </section>
              </SwiperSlide>
            ))}
          </Swiper>
          <section className='brand_story'>
            <div className='title'>
              <h4>Thương hiệu TOB luôn</h4>
              <p>Thay đổi sản phẩm mặt nạ giấy thông thường thành Wrapping Mask ngay nhé!</p>
            </div>
            <ul>
              <li>Lắng nghe nhu cầu<br/>của khách hàng</li>
              <li>Phát triển giải pháp<br/>đến từ thiên nhiên</li>
              <li>Mang lại hiệu quả<br/>vượt trội</li>
            </ul>
          </section>
          <section className='ceo_story'>
            <div className='ceo_box'>
              <div className='ceo_img'>
                <img src='https://ust-vina.s3.ap-northeast-2.amazonaws.com/tob/ceo_img.jpg' alt='Ceo'/>
                <span>CEO</span>
              </div>
              <div className='ceo_desc'>
                <div className='desc_tit'>
                  <h4>TOB</h4>
                  <p>
                    TOB trong tiếng Do thái có nghĩa là “đẹp (Beautiful), đúng (Right), tốt (Good)”. TOB luôn hướng tới
                    mục tiêu trở thành một thương hiệu làm đẹp an toàn, hiệu quả và chất lượng nhất dành cho khách hàng.
                  </p>
                </div>
                <ul className='desc_list'>
                  <li>
                    <strong>Beautiful</strong>
                    <span>Thương hiệu TOB chuyên nghiên cứu các sản phẩm hiệu quả với mụn trứng cá, cung cấp giải pháp làm đẹp mới cho khách hàng.</span>
                  </li>
                  <li>
                    <strong>Right</strong>
                    <span>
                        Với nguyên liệu và giải pháp mỹ phẩm hàng đầu tại Hàn Quốc, thương hiệu TOB thực hiện sứ mệnh cung cấp giải pháp làm đẹp dành cho người Việt. Bạn đã sẵn sàng cùng TOB tham gia hành trình làm đẹp chưa nào?
                    </span>
                  </li>
                  <li>
                    <strong>Good</strong>
                    <span>TOB sẽ luôn bên cạnh ủng hộ hành trình đi tìm vẻ đẹp của bạn.</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <section className='choose_story'>
            <div className='title'>
              <h4>Tại sao chọn chúng tôi?</h4>
            </div>
            <ul>
              <li>
                <div className='choose_in'>
                  <strong>Vận chuyển toàn quốc</strong>
                  <p>
                    Hỗ trợ vận chuyển nhanh chóng, đa dạng hình thức thông qua các công ty uy tín hàng đầu
                  </p>
                </div>
              </li>
              <li>
                <div className='choose_in'>
                  <strong>Giá trị cộng đồng</strong>
                  <p>
                    Hướng đến vẻ đẹp chân thực, chia sẻ kiến thức làm đẹp vì cộng đồng
                  </p>
                </div>
              </li>
              <li>
                <div className='choose_in'>
                  <strong>Cá nhân hóa</strong>
                  <p>
                    Tư vấn gián tiếp bởi các chuyên gia Hàn Quốc có kinh nghiệm trên 10 năm về mỹ phẩm chăm
                    sóc da mặt
                  </p>
                </div>
              </li>
            </ul>
          </section>
        </div>
      </StoryWrap>
    </React.Fragment>
  )
}

const StoryWrap = styled.div`
  position: relative;
  padding: 70px 0 100px;

  .inner {
    max-width: 1240px;
    margin: 0 auto;
    width: 95%;

    .visual_story {
      position: relative;
      width: 100%;
      height: 455px;
      background-size: cover;
      display: flex;
      align-items: center;
      border-radius: 20px;
      padding: 0 125px;

      h4 {
        font-weight: 500;
        font-size: var(--banner-tit);
        color: var(--color-white);
      }

      .img_box img {
        position: absolute;
        border-radius: 20px;

        &.top {
          z-index: 2;
          bottom: 20px;
          right: 25px;
          transform: translateX(-50%);
          height: 60%;
        }

        &.bot {
          z-index: 1;
          top: 20px;
          right: 20px;
          height: 80%;
        }
      }
    }

    .brand_story {
      padding: 90px 0 45px;

      ul {
        margin-top: 90px;
        display: flex;
        text-align: center;

        li {
          flex: 1;
          font-weight: 600;
          font-size: var(--info-tit);
          line-height: 1.5;
        }
      }
    }

    .ceo_story {
      position: relative;
      padding: 45px 0;

      .ceo_box {
        padding: 20px;
        display: flex;
        align-items: center;
        gap: 0 30px;
        background: url('https://ust-vina.s3.ap-northeast-2.amazonaws.com/tob/ceo_bg.webp') no-repeat;
        background-size: cover;

        .ceo_img {
          position: relative;
          flex: 0.75;

          img {
            width: 100%;
          }

          span {
            position: absolute;
            right: 20px;
            bottom: -22.5px;
            height: 45px;
            line-height: 45px;
            padding: 0 30px;
            font-weight: 400;
            font-size: var(--info-tit);
            color: var(--color-white);
            background: var(--color-primary);
          }
        }

        .ceo_desc {
          flex: 1.25;

          .desc_tit {
            h4 {
              font-weight: 600;
              font-size: var(--tit-head);
              color: var(--color-primary);
            }

            p {
              margin-top: 16px;
              display: block;
              font-weight: 400;
              font-size: var(--tit-desc);
              line-height: 1.5;
              color: var(--color-black);
            }
          }

          .desc_list {
            margin-top: 70px;

            li + li {
              margin-top: 48px;
            }

            strong {
              font-weight: 600;
              font-size: var(--info-tit);
              color: var(--color-black);
            }

            span {
              margin-top: 16px;
              display: block;
              font-weight: 400;
              font-size: var(--tit-desc);
              line-height: 1.5;
              color: var(--color-grey);
            }
          }
        }
      }
    }

    .choose_story {
      position: relative;
      padding-top: 45px;

      ul {
        margin-top: 90px;
        display: flex;
        gap: 0 16px;

        li {
          flex: 1;
        }

        .choose_in {
          min-height: 175px;
          text-align: center;
          padding: 40px 20px;
          border-radius: 20px;
          box-shadow: 0 0 4px rgba(0, 0, 0, 0.04), 0 4px 8px rgba(0, 0, 0, 0.06);


          strong {
            font-weight: 600;
            font-size: var(--info-tit);
            color: var(--color-black);
          }

          p {
            margin-top: 16px;
            display: block;
            font-weight: 400;
            font-size: var(--m-prd-info);
            color: var(--color-grey);
          }
        }
      }
    }

    .title {
      text-align: center;

      h4 {
        font-weight: 700;
        font-size: var(--tit-head);
        color: var(--color-black);
      }

      p {
        margin-top: 16px;
        display: block;
        font-weight: 400;
        font-size: var(--tit-desc);
        color: var(--color-grey);
      }
    }
  }

  @media only screen and (max-width: 1080px) {
    .inner {
      max-width: 100%;
      margin: 0;
      padding: 0 20px;
      width: 100%;

      .visual_story {
        position: relative;
        width: 100%;
        padding: 20px;
        height: auto;
        text-align: center;

        h4 {
          font-size: var(--tit-head);
        }

        .img_box {
          margin-top: 30px;
          text-align: center;
          display: flex;
          align-items: flex-end;
          justify-content: center;
          gap: 0 16px;

          img {
            &.top {
              position: unset;
              width: 25%;
              transform: translateX(0)
            }

            &.bot {
              position: unset;
              width: 25%;
            }
          }
        }
      }

      .brand_story {
        ul {
          margin-top: 45px;

          li {
            font-size: var(--m-prd-info);
          }
        }
      }

      .ceo_story {
        .ceo_box {
          display: block;

          .ceo_img {
            text-align: center;

            img {
              width: 60%;
            }

            span {
              right: 50%;
              transform: translateX(50%);
            }
          }

          .ceo_desc {
            margin-top: 45px;

            .desc_list {
              margin-top: 45px;

              li + li {
                margin-top: 25px;
              }
            }
          }
        }
      }

      .choose_story {
        position: relative;
        padding-top: 45px;

        ul {
          margin-top: 45px;
          display: flex;
          flex-wrap: wrap;
          gap: 30px 0;

          li {
            flex: none;
            width: 100%;
          }

          .choose_in {
            min-height: 175px;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            gap: 16px 0;

          }
        }
      }
    }
  }

  @media only screen and (max-width: 520px) {
    .inner {
      .visual_story {
        padding: 16px;

        h4 {
          font-size: var(--prd-info);
        }
      }

      .brand_story {
        padding: 40px 0 20px;

        ul {
          margin-top: 20px;
          display: block;

          li {
            & + li {
              margin-top: 40px;
            }
          }
        }
      }

      .ceo_story {
        padding: 20px 0;

        .ceo_box {
          display: block;

          .ceo_img {
            text-align: center;

            img {
              width: 60%;
            }

            span {
              right: 50%;
              transform: translateX(50%);
            }
          }

          .ceo_desc {
            margin-top: 20px;

            .desc_tit {
              h4 {
                font-size: var(--m-prd-info);
              }

              p {
                margin-top: 10px;
                font-size: var(--m-prd-txt);
              }
            }

            .desc_list {
              margin-top: 45px;

              li + li {
                margin-top: 25px;
              }

              strong {
                font-size: var(--m-prd-info);
              }

              span {
                margin-top: 10px;
                font-size: var(--m-prd-txt);
              }
            }
          }
        }
      }

      .choose_story {
        position: relative;
        padding-top: 20px;

        ul {
          margin-top: 45px;
          display: flex;
          flex-wrap: wrap;
          gap: 30px 0;

          li {
            flex: none;
            width: 100%;
          }

          .choose_in {
            min-height: auto;
            padding: 20px 10px;


            strong {
              font-size: var(--m-prd-info);
            }

            p {
              margin-top: 10px;
              display: block;
              font-size: var(--m-prd-txt);
            }
          }
        }
      }

      .title {
        h4 {
          font-size: var(--m-tit-head);
          line-height: 1.5;
        }

        p {
          margin-top: 10px;
          font-size: var(--m-tit-desc);
        }
      }
    }
`

const DecoImg = styled.img.attrs({ alt: 'Deco Image' })``

export default TobStory;
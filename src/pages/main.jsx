import { Link } from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';

const MainPage = () => {
    return (
        <React.Fragment>
            <Wrap>
                <div className="inner">
                    <section className="visual_sec">
                        <img src="https://ust-vina.s3.ap-northeast-2.amazonaws.com/tob/visual_bg.png" alt="visual img" />
                    </section>
                    <section className="info_sec">
                        <ul>
                            <li>
                                <div>
                                    <div className="info_img">
                                        <InfoImg src="https://ust-vina.s3.ap-northeast-2.amazonaws.com/tob/main_info01.png" />
                                    </div>
                                    <div className="info_desc">
                                        <strong>Công nghệ làm đẹp từ Hàn Quốc</strong>
                                        <p>
                                            Thương hiệu luôn bắt kịp xu hướng công nghệ làm đẹp Hàn Quốc đang thay đổi nhanh chóng
                                        </p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <div className="info_img">
                                        <InfoImg src="https://ust-vina.s3.ap-northeast-2.amazonaws.com/tob/main_info02.png" />
                                    </div>
                                    <div className="info_desc">
                                        <strong>Thương hiệu thấu hiểu thiên nhiên</strong>
                                        <p>
                                            Phân tích những yếu tố gây hại cho da trong nước, đất và không khí
                                        </p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <div className="info_img">
                                        <InfoImg src="https://ust-vina.s3.ap-northeast-2.amazonaws.com/tob/main_info03.png" />
                                    </div>
                                    <div className="info_desc">
                                        <strong>Clean Beauty</strong>
                                        <p>
                                            Công thức clean beauty không chứa 12 thành phần gây hại cho da
                                        </p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <div className="info_img">
                                        <InfoImg src="https://ust-vina.s3.ap-northeast-2.amazonaws.com/tob/main_info04.png" />
                                    </div>
                                    <div className="info_desc">
                                        <strong>Hành trình tìm kiếm nguyên liệu tốt nhất</strong>
                                        <p>
                                            Nghiên cứu công thức phù hợp từ việc tìm kiếm nguyên liệu ở các vùng đất màu mỡ và phân tích môi trường nơi sản sinh nguồn nguyên liệu
                                        </p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </section>
                    <section className="prod_sec">
                        <ul>
                            <li>
                                <div className="prod_in sun">
                                    <div className="prod_desc">
                                        <span>Chống nắng, làm dịu và bảo vệ da</span>
                                        <strong>SUN GEL+</strong>
                                        <div className="brand">
                                            <img src="https://ust-vina.s3.ap-northeast-2.amazonaws.com/tob/tob_logo.webp" alt="tob" />
                                        </div>
                                        <p>Gel chống nắng SPF50+ PA++++</p>
                                        <Link to="/product/suncream">Chi tiết sản phẩm</Link>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="prod_in clean">
                                    <div className="prod_desc">
                                        <span>Làm sạch sâu, dưỡng ẩm và se khít lỗ chân lông</span>
                                        <strong>CREAM-CLEANSER</strong>
                                        <div className="brand">
                                            <img src="https://ust-vina.s3.ap-northeast-2.amazonaws.com/tob/tob_logo.webp" alt="tob" />
                                        </div>
                                        <p>Sữa rửa mặt Collagen</p>
                                        <Link to="/product/cleanser">Chi tiết sản phẩm</Link>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="prod_in mask">
                                    <div className="prod_desc">
                                        <span>Cải thiện độ đàn hồi nâng cơ làm trắng</span>
                                        <strong>WRAPPING MASK</strong>
                                        <div className="brand">
                                            <img src="https://ust-vina.s3.ap-northeast-2.amazonaws.com/tob/tob_logo.webp" alt="tob" />
                                        </div>
                                        <p>Mặt nạ ngủ tiện dụng</p>
                                        <Link to="/product/mask">Chi tiết sản phẩm</Link>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="prod_in toner">
                                    <div className="prod_desc">
                                        <span>Chống nắng, làm dịu và bảo vệ da</span>
                                        <strong>SUN GEL+</strong>
                                        <h6>Dr.flomos</h6>
                                        <p>Gel chống nắng SPF50+ PA++++</p>
                                        <Link to="/product/flomos">Chi tiết sản phẩm</Link>
                                    </div>
                                </div>
                            </li>
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
      
      ul {
        display:flex;
        gap:0 30px;
        
        & li {
          flex:1;
          
          img {
            width:100%;
          }
        }
        
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
            line-height:24px;
            font-weight:400;
            color:var(--color-grey);
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
        display:flex;
        align-items: center;
        
        &.sun {
          background-image:url('https://ust-vina.s3.ap-northeast-2.amazonaws.com/tob/prod_01.png');
        }
        
        &.clean {
          background-image:url('https://ust-vina.s3.ap-northeast-2.amazonaws.com/tob/prod_02.png');
        }
        
        &.mask {         
          background-image:url('https://ust-vina.s3.ap-northeast-2.amazonaws.com/tob/prod_03.png');
        }
        
        &.toner {
          background-image:url('https://ust-vina.s3.ap-northeast-2.amazonaws.com/tob/prod_04.png');
        }
        
        & .prod_desc {
          z-index:2;
          position:relative;
          
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

        ul {
          display:flex;
          flex-wrap:wrap;
          gap:30px 30px;

          & li {
            flex:none;
            width:calc(50% - 15px);

            img {
              width:100%;
            }
          }

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
              line-height:24px;
              font-weight:400;
              color:var(--color-grey);
            }
          }
        }
      }

      & .prod_sec {
        & .prod_in {
          padding:0 40px;
          background-position:75% 100%;
          }
        }
      }
    }
  
  
  @media only screen and (max-width: 520px) {
    & .inner {
      // 인포 섹션
      & .info_sec {
        padding:70px 0 35px;

        ul {
          display:block;
          
          & li {
            width:100%;

            & + li {
              margin-top:36px;  
            }
            
            img {
              width:100%;
            }
          }

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
              line-height:24px;
              font-weight:400;
              color:var(--color-grey);
            }
          }
        }
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
`

const InfoImg = styled.img.attrs({alt:'tob info'})``

export default MainPage;
import { useEffect } from "react";
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const FooterLayout = () => {
  return (
      <FooterWrap>
        <div className="inner">
          <div className="foot_menu">
            <div className="menu_logo">
              <img src="https://ust-vina.s3.ap-northeast-2.amazonaws.com/renewal/tob_logo.webp" alt="truth of beauty" />
            </div>
            <ul className="menu_link">
              <li>
                <Link to="https://www.facebook.com/TOBVinaKorean">
                  <LinkImg src="https://ust-vina.s3.ap-northeast-2.amazonaws.com/tob/facebook_ic.webp"/>
                </Link>
              </li>
              <li>
                <Link to="https://shopee.vn/tob_officialstore">
                  <LinkImg src="https://ust-vina.s3.ap-northeast-2.amazonaws.com/tob/shopper_ic.webp"/>
                </Link>
              </li>
              <li>
                <Link to="https://www.lazada.vn/shop/aqua-solution/?spm=a2o4n.pdp_revamp.seller.1.15084a0ePaPdKq&itemId=2221839876&channelSource=pdp">
                  <LinkImg src="https://ust-vina.s3.ap-northeast-2.amazonaws.com/tob/lazada_ic.webp"/>
                </Link>
              </li>
              <li>
                <Link to="https://www.tiktok.com/@healthacleanvietnam">
                  <LinkImg src="https://ust-vina.s3.ap-northeast-2.amazonaws.com/tob/tiktok_ic.webp"/>
                </Link>
              </li>
            </ul>
          </div>
          <div className="foot_desc">
            <div className="address">
              <h6>Địa chỉ</h6>
              <ul>
                <li>
                  QUYỀN WEBSITE VÀ CHỊU TRÁCH NHIỆM VỀ HÀNG HOÁ CÔNG TY TNHH UST VINA - 637-639 Nguyễn Tất Thành, phường Xuân Hà, quận Thanh Khê, Tp Đà Nẵng
                </li>
                <li>Số GPKD: 0401 885 261 Cấp ngày 16/03/2018</li>
                <li>Cấp tại: Sở Kế Hoạch Đầu Tư Thành Phố Đà Nẵng</li>
              </ul>
            </div>
            <div className="support">
              <h6>Liên lạc & Hỗ trợ</h6>
              <ul>
                <li>
                  <a href="mailto: tobofficial@ust.co">Email: tobofficial@ust.co</a>
                </li>
                <li>
                  <a href="tel:02363 811 116">Hotline: 02363 811 116</a>
                </li>
              </ul>
            </div>
            <div className="time">
              <h6>Giờ làm việc</h6>
              <ul>
                <li>
                  Thứ 2 đến thứ 6
                  <ul>
                    <li>Từ 8 giờ > 12 giờ</li>
                    <li>Từ 13 giờ > 17 giờ</li>
                  </ul>
                </li>
                <li>
                  <Link to="http://online.gov.vn/Home/WebDetails/104571">
                    <img
                      src="https://ust-vina.s3.ap-northeast-2.amazonaws.com/tob/salenoti_logo.webp"
                      alt="THÔNG TIN WEBSITE THƯƠNG MẠI ĐIỆN TỬ"
                    />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="copyright">
          <p>
            © 2024 TOB. All rights reserved.
          </p>
        </div>

      </FooterWrap>
  )
}

const FooterWrap = styled.footer`
  position: relative;
  background: var(--color-white);
  border-top: 1px solid var(--border-color);

  & .inner {
    max-width: 1280px;
    margin: 0 auto;
    position: relative;

    & .foot_menu {
      padding: 36px 0;
      display: grid;
      grid-template-columns: 320px calc(100% - 320px);

      & .menu_logo {
        img {
          max-height: 60px;
        }
      }

      & .menu_link {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        gap: 0 36px;

        & li a > img {
          max-width: 24px;
        }
      }
    }

    & .foot_desc {
      padding: 36px 0;
      display: grid;
      grid-template-columns: calc(100% - 720px) 360px 360px;

      & > div {
        h6 {
          font-size: var(--foot-cate);
          font-weight: 700;
          color: var(--color-primary);
        }

        > ul {
          margin-top: 15px;

          li, a {
            font-size: var(--foot-txt);
            line-height: 1.8;
            font-weight: 400;

            ul {
              margin-top: 10px;

              li {
                margin-left: 16px;
                list-style: disc;
              }
            }

            img {
              max-width: 190px;
            }
          }
        }
      }
    }
  }

  & .copyright {
    padding: 16px 0;
    border-top: 1px solid var(--border-color);
    text-align: center;

    p {
      font-size: 12px;
      font-weight: 400;
      color: rgb(128, 128, 128);
    }
  }

  @media only screen and (max-width: 1080px) {
    & .inner {
      max-width: 100%;
      padding: 0 16px;

      & .foot_menu {
        padding: 36px 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      & .foot_desc {
        padding: 36px 0;
        display: block;

        & > div {
          padding: 0;

          & + div {
            margin-top: 36px;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 480px) {
    & .inner {
      max-width: 100%;
      padding: 0 16px;

      & .foot_menu {
        padding: 36px 0;
        display: block;

        & .menu_link {
          margin-top: 18px;
          justify-content: flex-start;
        }
      }
    }
  }
`;

const LinkImg = styled.img.attrs({ alt: 'Sns Shop' })``;

export default FooterLayout;
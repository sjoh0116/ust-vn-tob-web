import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation} from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import reviewData from "../../test.json";

export default function ReviewSlide(param) {

  return (
    <div className="review-slider">
      <Swiper
        modules={[Autoplay, Navigation]}
        loop={true}
        navigation={{
          prevEl: '.swiper-b-prev',
          nextEl: '.swiper-b-next'
        }}
        breakpoints={{
            0: { slidesPerView: 2},
            841: { slidesPerView: 3},
            1340: { slidesPerView: 4},
            1760: { slidesPerView: 5},
        }}
      >
        {param.param?.map((item, idx) => (
          <>
            <SwiperSlide>
                <div className="review-in">
                    <div className="thumbNail">
                        <img src={item.reviewImg} alt="review"/>
                    </div>
                    <div className="review-desc">
                        <p>{item.reviewText}</p>
                        <div className="review-info">
                            <span className="writer">{item.reviewUserId}</span>
                            <span>{item.reviewRegDate}</span>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
          </>
        ))}
      </Swiper>
      <div className="swiper-button">
        <button className="swiper-b-prev">
          <img src="https://ust-vina.s3.ap-northeast-2.amazonaws.com/renewal/board/chevron-left.svg" alt="prev"/>
        </button>
        <button className="swiper-b-next">
          <img src="https://ust-vina.s3.ap-northeast-2.amazonaws.com/renewal/board/chevron-right.svg" alt="next"/>
        </button>
      </div>
    </div>
  )
}

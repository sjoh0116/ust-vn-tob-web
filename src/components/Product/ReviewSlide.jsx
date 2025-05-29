import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';

export default function ReviewSlide(){
    return (
        <div className="review-slider">
            <Swiper
                modules={[ Autoplay, Navigation ]}
                slidesPerView={5} spaceBetween={20}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                loop={true}
                navigation={{
                    prevEl: '.swiper-b-prev',
                    nextEl: '.swiper-b-next'
                }}
            >
                <SwiperSlide>
                    <div className="thumbNail">
                        <img src="https://ust-vina.s3.ap-northeast-2.amazonaws.com/renewal/b5b083f729bf1273fe3952b729c945b3.jpg" alt="" />
                    </div>
                    <div className="review-desc">
                        <p>예비 신부가 마음에 들어하네요~!!</p>
                        <div className="review-info">
                            <span>작성자</span>
                            <span>2025/05/28</span>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="thumbNail">
                        <img src="https://ust-vina.s3.ap-northeast-2.amazonaws.com/renewal/b5b083f729bf1273fe3952b729c945b3.jpg" alt="" />
                    </div>
                    <div className="review-desc">
                        <p>예비 신부가 마음에 들어하네요~!!</p>
                        <div className="review-info">
                            <span>작성자</span>
                            <span>2025/05/28</span>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="thumbNail">
                        <img src="https://ust-vina.s3.ap-northeast-2.amazonaws.com/renewal/b5b083f729bf1273fe3952b729c945b3.jpg" alt="" />
                    </div>
                    <div className="review-desc">
                        <p>예비 신부가 마음에 들어하네요~!!</p>
                        <div className="review-info">
                            <span>작성자</span>
                            <span>2025/05/28</span>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="thumbNail">
                        <img src="https://ust-vina.s3.ap-northeast-2.amazonaws.com/renewal/b5b083f729bf1273fe3952b729c945b3.jpg" alt="" />
                    </div>
                    <div className="review-desc">
                        <p>예비 신부가 마음에 들어하네요~!!</p>
                        <div className="review-info">
                            <span>작성자</span>
                            <span>2025/05/28</span>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="thumbNail">
                        <img src="https://ust-vina.s3.ap-northeast-2.amazonaws.com/renewal/b5b083f729bf1273fe3952b729c945b3.jpg" alt="" />
                    </div>
                    <div className="review-desc">
                        <p>예비 신부가 마음에 들어하네요~!!</p>
                        <div className="review-info">
                            <span>작성자</span>
                            <span>2025/05/28</span>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="thumbNail">
                        <img src="https://ust-vina.s3.ap-northeast-2.amazonaws.com/renewal/b5b083f729bf1273fe3952b729c945b3.jpg" alt="" />
                    </div>
                    <div className="review-desc">
                        <p>예비 신부가 마음에 들어하네요~!!</p>
                        <div className="review-info">
                            <span>작성자</span>
                            <span>2025/05/28</span>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
            <div className="swiper-button">
                <button className="swiper-b-prev">
                    <img src="https://ust-vina.s3.ap-northeast-2.amazonaws.com/renewal/board/chevron-left.svg" alt="prev" />
                </button>
                <button className="swiper-b-next">
                    <img src="https://ust-vina.s3.ap-northeast-2.amazonaws.com/renewal/board/chevron-right.svg" alt="next" />
                </button>
            </div>
        </div>
    )
}


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Sliders from './Sliders';

const Carousel = () => {
    return (
        <div className=' py-10 mx-auto'>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {/* 


*/}
                <SwiperSlide>
                    <Sliders image={'https://i.ibb.co/mSrCCvC/banner1.jpg'} text='We provide free vaccines to underprivileged children all over the world'></Sliders>
                </SwiperSlide>
                <SwiperSlide>
                    <Sliders image={'https://i.ibb.co/qBrbDp4/banner2.jpg '} text='Children and women are provided with safe food continuously'></Sliders>
                </SwiperSlide>
                <SwiperSlide>
                    <Sliders image={'https://i.ibb.co/DkSDT0F/banner3.jpg'} text='We are committed to ending global food insecurity'></Sliders>
                </SwiperSlide>
                <SwiperSlide>
                    <Sliders image={'https://i.ibb.co/yhDJ4Kz/banner4.jpg'} text='Our first goal is to provide food and medicine to children and women '></Sliders>
                </SwiperSlide>




            </Swiper>
        </div>
    );
};

export default Carousel;
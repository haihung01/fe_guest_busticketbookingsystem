import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


const slide_img = [
    {
        id: 1,
        img: "https://i.ibb.co/LnPJpsq/bus.png",
    },
    {
        id: 2,
        img: "https://homepage.momocdn.net/blogscontents/momo-upload-api-220803151053-637951362531172965.jpg",
    },
    {
        id: 3,
        img: "https://i.ibb.co/0nZhntN/anhmomo.png",
    },
    {
        id: 4,
        img: "https://www.hyundaivna.com/wp-content/uploads/2019/02/11.jpg",
    },

];

const Banner = () => {
    return (
        <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            navigation={false}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
        >
            {slide_img.map((item) => (
                <SwiperSlide key={item.id}>
                    <div className="h-[750px] w-[1200px] flex justify-center items-center mx-auto">
                        <div className="swipper shadow-2xl">
                            <img src={item.img} className="img_banner rounded-2xl shadow-2xl h-[630px] w-[1200px]" alt="" />
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Banner;

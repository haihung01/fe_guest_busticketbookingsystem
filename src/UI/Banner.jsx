import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Banner.scss";


const slide_img = [
    {
        id: 1,
        img: "https://storage.googleapis.com/futa-busline-cms-dev/343x184_4x_29d182ce55/343x184_4x_29d182ce55.png",
    },
    {
        id: 2,
        img: "https://storage.googleapis.com/futa-busline-web-cms-prod/Zalo_11b66ecb81/Zalo_11b66ecb81.png",
    },
    {
        id: 3,
        img: "https://storage.googleapis.com/futa-busline-web-cms-prod/5_343_x_184_px_fe99f594f1/5_343_x_184_px_fe99f594f1.png",
    },
    {
        id: 4,
        img: "https://storage.googleapis.com/futa-busline-web-cms-prod/343_x_184_px_0b1588190d/343_x_184_px_0b1588190d.png",
    },
    // {
    //     id: 5,
    //     img: "https://storage.googleapis.com/futa-busline-web-cms-prod/VNPAYFUTA_67_Resize_343_x_184_bd2e13cd77/VNPAYFUTA_67_Resize_343_x_184_bd2e13cd77.png",
    // },
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
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"

        >
            {slide_img.map((item) => (
                <SwiperSlide key={item.id}>
                    <div className="h-[640px] w-[1200px]">
                        <div className="swipper shadow-2xl">
                            <img src={item.img} className="img_banner rounded-2xl shadow-2xl" alt="" />
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Banner;

import { Container, Row, Col } from "reactstrap";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";

const CardList = () => {
    const [showMore, setShowMore] = useState(true);



    const slide_img = [
        {
            img: "https://storage.googleapis.com/futa-busline-web-cms-prod/343_x_184_px_0b1588190d/343_x_184_px_0b1588190d.png",
        },
        {
            img: "https://storage.googleapis.com/futa-busline-cms-dev/343x184_4x_29d182ce55/343x184_4x_29d182ce55.png",
        },
        {
            img: "https://storage.googleapis.com/futa-busline-web-cms-prod/5_343_x_184_px_fe99f594f1/5_343_x_184_px_fe99f594f1.png",
        },
    ];
    const slide_img2 = [
        {
            img: "https://storage.googleapis.com/futa-busline-cms-dev/Rectangle_23_2_8bf6ed1d78/Rectangle_23_2_8bf6ed1d78.png",
            price: '280.000đ',
            address: 'Tp.Hồ Chí Minh',
            route: '305km - 8 hours - 06/09/2023'
        },
        {
            img: "https://storage.googleapis.com/futa-busline-cms-dev/Rectangle_23_3_2d8ce855bc/Rectangle_23_3_2d8ce855bc.png",
            price: '300.000đ',
            address: 'Đà Lạt',
            route: '305km - 8 hours - 06/09/2023'
        },
        {
            img: "https://storage.googleapis.com/futa-busline-cms-dev/Rectangle_23_4_061f4249f6/Rectangle_23_4_061f4249f6.png",
            price: '450.000đ',
            address: 'Đà Nẵng',
            route: '305km - 8 hours - 06/09/2023'
        },
    ];

    const visibleImages = showMore ? slide_img : slide_img.slice(0, 3);

    const [loading, setLoading] = useState(false);
    const [title, setTitle] = useState("")
    const [title2, setTitle2] = useState("")


    return (
        <>
            <section>
                <div className="w-full bg-orange-50">
                    <div className="flex">
                        <h1 className="text-blue-900 text-2xl font-medium mx-auto text-center mt-1">
                            {title || <Skeleton />}
                        </h1>
                    </div>
                    <h1 className="text-blue-900 text-2xl font-medium mx-auto text-center">KHUYẾN MÃI NỔI BẬT</h1>
                    <div className="list_counsera w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mt-3">
                        {loading ? (
                            Array.from({ length: 3 }).map((_, index) => (
                                <Skeleton key={index} className="h-56" />
                            ))
                        ) : (
                            visibleImages.map((item, index) => (
                                <div
                                    className="card rounded-lg p-3 mx-auto h-56"
                                    key={index}
                                >
                                    <Link to="/news">
                                        <img
                                            src={item.img}
                                            className="max-w-full h-auto sm:h-[200px] object-cover shadow-2xl rounded-lg relative"
                                            alt=""
                                        />
                                    </Link>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </section>

            <section className="mt-16">
                <div className="w-full bg-slate-100">
                    <div className="flex">
                        <h1 className="text-blue-900 text-2xl font-medium mx-auto text-center mt-1">
                            {title2 || <Skeleton />}
                        </h1>
                    </div>
                    <h1 className="text-blue-900 text-2xl font-medium mx-auto text-center">TUYẾN PHỔ BIẾN</h1>
                    <div className="list_counsera w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mt-3">
                        {loading ? (
                            Array.from({ length: 3 }).map((_, index) => (
                                <Skeleton key={index} className="h-56" />
                            ))
                        ) : (
                            slide_img2.map((item, index) => (
                                <div
                                    className="card rounded-lg p-3 mx-auto"
                                    key={index}
                                >
                                    <Link to="/schedule">
                                        <img
                                            src={item.img}
                                            className="max-w-full h-auto sm:h-[200px] object-cover shadow-2xl rounded-lg relative"
                                            alt=""
                                        />
                                    </Link>


                                    <div className="max-w-full h-auto sm:h-[401px] rounded-2xl mx-auto bg-slate-50 border border-gray-200 text-center justify-center align-center mt-[-120px]">
                                        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-2 mt-36">
                                            <div>
                                                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">{item.address}</h2>
                                            </div>
                                            <div>
                                                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">{item.price}</h2>
                                            </div>
                                        </div>
                                        <span className="text-gray-400 ">{item.route}</span>
                                        <hr></hr>
                                        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-2 mt-5">
                                            <div>
                                                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">{item.address}</h2>
                                            </div>
                                            <div>
                                                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">{item.price}</h2>
                                            </div>
                                        </div>
                                        <span className="text-gray-400 ">{item.route}</span>
                                        <hr></hr>
                                        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-2 mt-5">
                                            <div>
                                                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">{item.address}</h2>
                                            </div>
                                            <div>
                                                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">{item.price}</h2>
                                            </div>
                                        </div>
                                        <span className="text-gray-400 ">{item.route}</span>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </section>
        </>
    )
}

export default CardList
import { Container, Row, Col } from "reactstrap";
import { useState } from "react";
import { Link } from "react-router-dom";

const CardList = () => {
    const [showMore, setShowMore] = useState(false);

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

    const visibleImages = showMore ? slide_img : slide_img.slice(0, 3);
    return (
        <>
            <section>
                <div className="w-full bg-slate-100">
                    <div className="flex">
                        <h1 className="text-blue-900 text-2xl font-medium mx-auto text-center mt-10">
                            KHUYẾN MÃI NỔI BẬT
                        </h1>
                    </div>

                    <div className="list_counsera w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mt-3">
                        {visibleImages.map((item, index) => (
                            <div
                                className="card rounded-lg p-3 mx-auto"
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
                        ))}
                    </div>
                </div>
            </section>

            <section>
                <div className="w-full bg-slate-100">
                    <div className="flex">
                        <h1 className="text-blue-900 text-2xl font-medium mx-auto text-center mt-10">
                            TUYẾN PHỔ BIẾN
                        </h1>
                    </div>

                    <div className="list_counsera w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mt-3">
                        {visibleImages.map((item, index) => (
                            <div
                                className="card rounded-lg p-3 mx-auto"
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
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default CardList
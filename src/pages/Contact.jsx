import React, { useEffect } from 'react'
import { useState } from 'react';
import { Col, Container, Row } from 'reactstrap'
import Skeleton from 'react-loading-skeleton'


const Contact = () => {
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 3000)
    })
    const [isChecked, setIsChecked] = useState({
        sold: false,
        empty: false,
        selected: false,
    });

    const handleButtonClick = () => {
        // Redirect to the specified link
        window.location.href = 'https://www.facebook.com/profile.php?id=61554950033197';
    };
    return (
        <>
            <section className="home-banner" >
                <Container>
                    <Row>
                        <h1 className='text-4xl text-center justify-center mt-10'>Liên hệ trang chủ TripTix</h1>
                        <Col className=' mt-10'>
                            <div className="w-[1200px] h-[750px] p-12  rounded-2xl mx-auto bg-slate-50 border border-gray-200">
                                {loading ? (
                                    <Skeleton className='w-[1200px] h-[690px]' />
                                ) : (
                                    <section>
                                        <Container>
                                            <Row className='flex gap-9'>
                                                <Col className=''>
                                                    <div className='d-flex'>
                                                        <h1 className='font-medium text-3xl'>Trụ sở chính</h1>
                                                        <h1 className='font-medium text-lg'>Công ty TripTix - Chi nhánh đại học FPT</h1>

                                                        <ul className='mt-7'>
                                                            <li className='flex gap-2'>
                                                                <img
                                                                    className='h-5 w-5'
                                                                    src='https://www.svgrepo.com/show/418950/address-location-map.svg' />
                                                                28/36 đường số 7, phường Phúc Thọ
                                                            </li>
                                                            <li className='flex gap-3 mt-3'>
                                                                <img
                                                                    className='h-4 w-4'
                                                                    src='https://www.svgrepo.com/show/129965/phone.svg' />
                                                                0123456789
                                                            </li>
                                                            <li className='flex gap-2 mt-3'>
                                                                <img
                                                                    className='h-5 w-5'
                                                                    src='https://www.svgrepo.com/show/507361/mail.svg' />
                                                                nobita@gmail.com
                                                            </li>
                                                            <li className='flex gap-2 mt-3'>
                                                                <img
                                                                    className='h-5 w-5'
                                                                    src='https://www.svgrepo.com/show/337733/earth.svg' />
                                                                nobitaexpress.vn
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </Col>



                                                <Col className='w-[700px] h-[640px] border border-gray-200 rounded-2xl shadow-xl    '>
                                                    <h1 className='ml-6 mt-9 font-medium text-lg '>Mọi thắc mắc - yêu cầu</h1>
                                                    <spam className='text-gray-500 ml-6'>Truy cập vào fanpage chúng tôi</spam>
                                                    <div className='ml-6 flex flex-col mt-3'>
                                                        <div>
                                                            <img src='https://scontent.xx.fbcdn.net/v/t1.15752-9/385525600_2267895093410289_12196275034908805_n.png?stp=dst-png_p206x206&_nc_cat=111&ccb=1-7&_nc_sid=510075&_nc_eui2=AeEBZGajT1MZxvlsMd2eBPblYRS1vk3pBvxhFLW-TekG_NHyrWkyfK6GVztx_PXC7I4FWqU93pM-wRLx8_3kFYrN&_nc_ohc=olvlqnkK0cIAX8gng9v&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdQnk8u1Aj9vlyjh23XpD06OYveYzr62F0WIaM0eZuM3iQ&oe=65A928C6' />
                                                            <br></br>
                                                            <img
                                                                className='ml-28'
                                                                src='https://scontent.xx.fbcdn.net/v/t1.15752-9/410686403_948361256726745_2941965965822320988_n.png?stp=dst-png_s403x403&_nc_cat=103&ccb=1-7&_nc_sid=510075&_nc_eui2=AeG0GqNBOcgeGT5DtVzvwQ8MUiF9wVWMcwBSIX3BVYxzALdnsVSLQBJyANbzWS6K-7I-XKcFRjgWAOiMPSDQC1ZU&_nc_ohc=TMXftI8uv9UAX92T0tf&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdRNktSPa7iYD5UXVbyyLJN53dMdSD3qFHXJPF6okZWyyA&oe=65A91975' />
                                                        </div>
                                                        <Col>
                                                            <div className="w-[216px] h-[44px] rounded-3xl flex bg-orange-500 mt-20 justify-center  relative text-gray-50">
                                                                <button
                                                                    onClick={handleButtonClick}
                                                                    className="font-sans w-[216px] h-[44px]">
                                                                    Liên hệ
                                                                </button>

                                                                {/* https://www.facebook.com/profile.php?id=61554950033197 */}
                                                            </div>
                                                        </Col>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </section>
                                )}


                            </div>
                        </Col>

                    </Row>
                </Container>
            </section >

            <section className='mt-16'>
                <Container >
                    <Row>
                        <Col lg="12" className=" h-[550px]">
                            {loading ? (
                                [<Skeleton className=" h-[550px]" />]
                            ) : (
                                <div>
                                    <div>
                                        <h1 className="text-blue-900 text-2xl font-medium mx-auto text-center mt-10">
                                            TRIP TIX BUS LINES - MANG LẠI KỶ NIỆM ĐÁNG NHỚ
                                        </h1>
                                    </div>

                                    <div className="time_sales rounded-lg relative  mt-7">
                                        <div className="w-[1200px]  mx-auto justify-between flex">
                                            <div>
                                                <h1 className="text-blue-900 text-3xl font-bold text-center p-14">
                                                    Thời gian vàng, săn sale ngay!! <br />
                                                    Giảm tới 50% giá vé!
                                                </h1>
                                                <h1 className="text-center">
                                                    Tải ứng dụng ngay để sử dụng sản phẩm.
                                                    <br /> Đừng bỏ qua cơ hội săn vé rẽ trong ngày.
                                                </h1>
                                            </div>
                                            <img
                                                src="https://free.vector6.com/wp-content/uploads/2020/04/072-Vector-Viet-Nam-poeqrc006.jpg"
                                                className="w-[600px] h-[470px]"
                                            />
                                        </div>
                                    </div>
                                </div>
                            )}

                        </Col>
                    </Row>
                </Container>
            </section>

        </>
    )
}

export default Contact
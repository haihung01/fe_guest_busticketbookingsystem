import React from 'react'
import { Col, Container, Row } from 'reactstrap'

const AboutUs = () => {
    return (
        <section className="home-banner" >
            <Container className="w-[1200px] h-[2000px] rounded-2xl mx-auto bg-slate-50 border border-gray-500 mt-20">
                <Row className='h-[780px] bg-slate-400' >
                    <Col className='lg text-center justify-center items-center font-medium text-4xl mt-5'>
                        <span className=''>Chúng tôi ở đây để đảm bảo </span>
                        <br />
                        <span className='text-orange-500'>"THÀNH CÔNG của bạn"</span>
                    </Col>

                    <Col className='mt-10 lg'>
                        <div className='border border-gray-400 w-full h-[321px] bg-orange-500 rounded-2xl relative'>
                            <div className='w-[1100px] mx-auto text-justify mt-8'>
                                <span className='text-white'>
                                    Tập đoàn Phương Trang – FUTA Group được thành lập năm 2001. Với hoạt động kinh doanh chính trong lĩnh vực mua bán xe ô tô, vận tải hành khách, bất động sản và kinh doanh dịch vụ.
                                    Phương Trang dần trở thành cái tên quen thuộc đồng hành cùng người Việt trên mọi lĩnh vực.
                                    <br /><br />
                                    Trải qua hơn 20 năm hình thành và phát triển đặt khách hàng là trọng tâm, chúng tôi tự hào trở thành doanh nghiệp vận tải nòng cốt đóng góp tích cực vào sự phát triển chung của ngành
                                    vận tải nói riêng và nền kinh tế đất nước nói chung. Luôn cải tiến mang đến chất lượng dịch vụ tối ưu nhất dành cho khách hàng, Công ty Phương Trang được ghi nhận qua nhiều giải thưởng danh giá như
                                    “Thương hiệu số 1 Việt Nam, “Top 10 Thương hiệu nổi tiếng Việt Nam”, “Top 10 Dịch vụ hoàn hảo vì quyền lợi người tiêu dùng năm 2022”, “Top 10 Doanh nghiệp tiêu biểu Việt Nam”, “Top 10 thương hiệu, sản phẩm dịch vụ uy tín Việt Nam – ASEAN 2022
                                </span>
                            </div>
                            <div className='w-[1000px] h-[321px] mx-auto absolute top-[420px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-2xl shadow-xl'>
                                <img src='https://bookboon.com/blog/wp-content/uploads/sites/5/2020/12/teamwork-skills-611-main-low.jpg.webp' className='w-full h-full rounded-2xl' />
                            </div>
                        </div>
                    </Col>
                </Row>

                <Row className='h-[780px] bg-red-300'>
                    <Col className=''>
                        <div className='flex mx-auto text-center justify-center gap-2 font-medium text-4xl'>
                            <h1>Our</h1>
                            <h1 className='text-orange-500'>Misson</h1>
                        </div>

                        <div className=' border border-gray-200 rounded-2xl shadow-xl mt-5 w-[1000px] mx-auto flex gap-5'>
                            <div className=' mt-3 ml-4 '>
                                <tr className=''>
                                    <td className='text-gray-400 font-normal'>Dịch vụ chưa từng có</td>
                                    <td className='mr-6 font-normal'>Hỗ trợ khách hàng doanh nghiệp và nhà đầu tư tài chính về chiến lược tăng trưởng và phát triển quốc tế của họ.</td>
                                </tr>
                                <tr className='flex justify-between'>
                                    <td className='text-gray-400 font-normal'>Thời gian</td>
                                    <td className='mr-6 text-green-800 font-normal'>19:00 11-0r-6063</td>
                                </tr>
                                <tr className='flex justify-between'>
                                    <td className='text-gray-400 font-normal'>Số lượng ghế</td>
                                    <td className='mr-6 font-normal'>1 Ghế</td>
                                </tr>
                                <tr className='flex justify-between'>
                                    <td className='text-gray-400 font-normal'>Số ghế</td>
                                    <td className='mr-6 text-green-800 font-normal'>B06</td>
                                </tr>
                                <tr className='flex justify-between'>
                                    <td className='text-gray-400 font-normal'>Tổng tiền lượt đi</td>
                                    <td className='mr-6 text-green-800 font-normal'>280.000đ</td>
                                </tr>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default AboutUs


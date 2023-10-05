import React from 'react'
import { Col, Container, Row } from 'reactstrap'

const AboutUs = () => {
    return (
        <section className="home-banner " >
            <Container className="w-[1200px] h-full mx-auto  mt-20">
                <Row className='h-[780px]' >
                    <Col className='lg text-center justify-center items-center font-medium text-4xl mt-4'>
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

                <Row className='h-[780px]  w-full'>
                    <Col className='w-[1000px] mx-auto'>
                        <div className='flex ml-4 gap-2 font-medium text-4xl'>
                            <h1>Our</h1>
                            <h1 className='text-orange-500'>Misson</h1>
                        </div>

                        <div className=' mt-1 w-[1000px] h-[300px] mx-auto'>
                            <div className=' mt-2 p-5 w-[1000px]  flex flex-col'>
                                <tr className='flex justify-start gap-[104px]'>
                                    <td className=' font-semibold text-lg'>Dịch vụ chưa từng có</td>
                                    <td className='text-gray-400 mr-6 font-normal'>Hỗ trợ khách hàng doanh nghiệp và nhà đầu tư tài chính về chiến lược <br /> tăng trưởng và phát triển quốc tế của họ.</td>
                                </tr>
                                <tr className='flex justify-start gap-56 mt-4'>
                                    <td className=' font-semibold text-lg'>Cụ thể</td>
                                    <td className='text-gray-400 mr-6  font-normal'>Chuyên môn cốt lõi của ConsultUs nằm ở khả năng hỗ trợ khách hàng hiểu,<br />
                                        phân tích và thực hiện các chiến lược thương mại và đầu tư tại các thị trường cụ thể.</td>
                                </tr>
                                <tr className='flex justify-start gap-[216px] mt-4'>
                                    <td className=' font-semibold text-lg'>Kinh nghiệm</td>
                                    <td className='text-gray-400 mr-6 font-normal'>Có kinh nghiệm làm việc và hỗ trợ nhiều khách hàng từ các tập đoàn quốc tế
                                        đến doanh nghiệp vừa/nhỏ, từ các nhà cung cấp nợ doanh nghiệp lớn đến các nhà tư cổ phần tư nhân tầm trung.</td>
                                </tr>
                                <tr className='flex justify-start gap-48 mt-4'>
                                    <td className=' font-semibold text-lg'>Công nghệ</td>
                                    <td className='text-gray-400 mr-6 font-normal'>Sự kết hợp tốt nhất giữa công nghệ và con người.</td>
                                </tr>

                            </div>
                        </div>
                    </Col>

                    <Col className='w-[1000px] mx-auto mt-14'>
                        <div className='flex ml-4 gap-2 font-medium text-4xl'>
                            <h1>Our</h1>
                            <h1 className='text-orange-500'>Commitment</h1>
                        </div>

                        <div className=' mt-1 w-[1000px] h-[300px] mx-auto'>
                            <div className=' mt-2 p-5 w-[1000px]  flex flex-col'>
                                <tr className='flex justify-start gap-[105px]'>
                                    <td className=' font-semibold text-lg'>Dịch vụ chưa từng có</td>
                                    <td className='text-gray-400 mr-6 font-normal'>Hỗ trợ khách hàng doanh nghiệp và nhà đầu tư tài chính về chiến lược <br /> tăng trưởng và phát triển quốc tế của họ.</td>
                                </tr>
                                <tr className='flex justify-start gap-56 mt-4'>
                                    <td className=' font-semibold text-lg'>Cụ thể</td>
                                    <td className='text-gray-400 mr-6  font-normal'>Chuyên môn cốt lõi của ConsultUs nằm ở khả năng hỗ trợ khách hàng hiểu,<br />
                                        phân tích và thực hiện các chiến lược thương mại và đầu tư tại các thị trường cụ thể.</td>
                                </tr>
                                <tr className='flex justify-start gap-[216px] mt-4'>
                                    <td className=' font-semibold text-lg'>Kinh nghiệm</td>
                                    <td className='text-gray-400 mr-6 font-normal'>Có kinh nghiệm làm việc và hỗ trợ nhiều khách hàng từ các tập đoàn quốc tế
                                        đến doanh nghiệp vừa/nhỏ, từ các nhà cung cấp nợ doanh nghiệp lớn đến các nhà tư cổ phần tư nhân tầm trung.</td>
                                </tr>
                                <tr className='flex justify-start gap-48 mt-4'>
                                    <td className=' font-semibold text-lg'>Công nghệ</td>
                                    <td className='text-gray-400 mr-6 font-normal'>Sự kết hợp tốt nhất giữa công nghệ và con người.</td>
                                </tr>

                            </div>
                        </div>
                    </Col>
                </Row>

                <Row className='h-[550px] '>
                    <Col>
                        <div className='flex text-center justify-center font-medium text-4xl'>
                            <h1 className='text-orange-500 mt-10'>Our Success Team</h1>
                        </div>

                        <div className='flex gap-16 justify-center mt-12 '>
                            <img src='https://public.nftstatic.com/static/nft/res/8edfc7e2444f43e681d653e3e7ea037b.png' className='w-[250px] h-[350px] rounded-lg ' />
                            <img src='https://public.nftstatic.com/static/nft/res/8edfc7e2444f43e681d653e3e7ea037b.png' className='w-[250px] h-[350px] rounded-lg ' />
                            <img src='https://public.nftstatic.com/static/nft/res/8edfc7e2444f43e681d653e3e7ea037b.png' className='w-[250px] h-[350px] rounded-lg ' />
                            <img src='https://public.nftstatic.com/static/nft/res/8edfc7e2444f43e681d653e3e7ea037b.png' className='w-[250px] h-[350px] rounded-lg ' />

                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col lg="12" className="">
                        <div>
                            <div>
                                <h1 className="text-blue-900 text-2xl font-medium mx-auto text-center mt-10">
                                    TRIP TIX BUS LINES - MANG LẠI KỶ NIỆM ĐÁNG NHỚ
                                </h1>
                            </div>

                            <div className="time_sales rounded-lg relative  mt-7">
                                <div className='w-[1200px]  mx-auto justify-between flex'>
                                    <div>
                                        <h1 className="text-blue-900 text-3xl font-bold text-center p-14">
                                            All tickets are 50% off now! <br />Don't miss such a deal!
                                        </h1>
                                        <h1 className="text-center">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            <br /> Sed eu feugiat amet, libero ipsum enim pharetra
                                            hac.
                                        </h1>
                                    </div>
                                    <img
                                        src='https://free.vector6.com/wp-content/uploads/2020/04/072-Vector-Viet-Nam-poeqrc006.jpg'
                                        className="w-[600px] h-[470px]" />
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default AboutUs


import React, { useState } from 'react'
import { Col, Container, Row } from 'reactstrap'
import Bg_Banner from '../bg-banner/Bg_Banner'

const ProductCart = () => {

    const [isChecked, setIsChecked] = useState({
        sold: false,
        empty: false,
        selected: false,
    });

    // Hàm xử lý khi checkbox thay đổi trạng thái
    const handleCheckboxChange = (name) => {
        setIsChecked({
            ...isChecked,
            [name]: !isChecked[name],
        });
    };

    return (
        <>
            <section className="home-banner" >
                <Container>
                    <Row>
                        <Col className='Widget-Section mt-20'>
                            <div className="w-[1200px] h-[900px] p-12  rounded-2xl mx-auto bg-slate-50 shadow-2xl border border-gray-500">
                                <section>
                                    {/* <Container>
                                        <Row>
                                            <Col className='flex align-items-center gap-28  mx-auto w-[876.2px] round-checkbox mt-3'>
                                                <div>
                                                    <input type="checkbox" id="myCheck1" />
                                                    <label for="myCheck1">Một chiều</label>
                                                </div>
                                                <div>
                                                    <input type="checkbox" id="myCheck2" />
                                                    <label for="myCheck2">Khứ hồi</label>
                                                </div>
                                            </Col>

                                            <Col className=' align-items-center  mx-auto w-[798px] h-[200px]'>
                                                <div className='mt-3 flex  gap-4'>
                                                    <div>
                                                        <span className='ml-3'>Điểm đi :</span>
                                                        <div className=' border border-gray-300 flex rounded-lg w-[252px] h-[67px]'>
                                                            <input className='mx-auto text-center font-medium text-lg' placeholder='Chọn điểm đến'></input>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <span className='ml-3'>Điểm đến :</span>
                                                        <div className=' border border-gray-300 flex rounded-lg w-[252px] h-[67px]'>
                                                            <input className='mx-auto text-center font-medium text-lg' placeholder='Chọn điểm đi'></input>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <span className='ml-3'>Ngày đi :</span>
                                                        <div className=' border border-gray-300 flex rounded-lg w-[252px] h-[67px]'>
                                                            <input className='mx-auto text-center font-medium text-lg' placeholder='Chọn ngày '></input>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className='mt-4'>
                                                    <span className='ml-3'>Tìm kiếm gần đây :</span>
                                                    <div className=' border border-gray-300 flex rounded-lg w-[252px] h-[67px]'>
                                                        <input className='mx-auto text-center font-medium text-lg'></input>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Container> */}
                                    <Container>
                                        <Row className='flex gap-5'>
                                            <Col className='w-[700px] h-[336px] border border-gray-200 rounded-2xl shadow-xl'>
                                                <Col className=''>
                                                    <div className='flex gap-20 mt-3 items-center ml-9'>
                                                        <h1 className='text-2xl font-medium'>Chọn ghế</h1>
                                                        <span className=''>Thông tin xe</span>
                                                    </div>
                                                    <div className='flex gap-32 items-center ml-20 mt-4'>
                                                        <span>Tầng trên</span>
                                                        <span>Tầng dưới</span>
                                                    </div>

                                                </Col>

                                                <Col className='flex gap-5 ml-4'>
                                                    <div className='w-[475px] '>
                                                        <Table />
                                                    </div>

                                                    <div className=''>
                                                        <ul className=''>
                                                            <li className='gap-2 flex items-center'>
                                                                <input className='w-[16px] h-[16px] bg-gray-700 ' />
                                                                Đã bán
                                                            </li>
                                                            <li className='gap-2 flex items-center'>
                                                                <input className='w-[16px] h-[16px] bg-blue-300' />
                                                                Còn trống
                                                            </li>
                                                            <li className='gap-2 flex items-center'>
                                                                <input className='w-[16px] h-[16px] bg-purple-300' />
                                                                Đang chọn
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </Col>
                                            </Col>

                                            <Col>
                                                <div className='w-[345px] h-[206px] border border-gray-200 rounded-2xl shadow-xl'>
                                                    <h1 className='text-2xl font-medium ml-7 mt-3'>Thông tin lượt đi</h1>
                                                    <div className='ml-7 mt-3'>
                                                        <tr className='flex justify-between'>
                                                            <td>Tuyến xe</td>
                                                            <td className='mr-6'>BX Mien Tay ⇒ Da Lat</td>
                                                        </tr>
                                                        <tr className='flex justify-between'>
                                                            <td>Thời gian</td>
                                                            <td className='mr-6'>19:00 11-0r-6063</td>
                                                        </tr>
                                                        <tr className='flex justify-between'>
                                                            <td>Số lượng ghế</td>
                                                            <td className='mr-6'>1 Ghế</td>
                                                        </tr>
                                                        <tr className='flex justify-between'>
                                                            <td>Số ghế</td>
                                                            <td className='mr-6'>B06</td>
                                                        </tr>
                                                        <tr className='flex justify-between'>
                                                            <td>Tổng tiền lượt đi</td>
                                                            <td className='mr-6'>280.000đ</td>
                                                        </tr>
                                                    </div>
                                                </div>

                                                <div className='w-[345px] h-[171px] bg-slate-400 mt-5 rounded-2xl'>

                                                </div>
                                            </Col>
                                        </Row>

                                        <Row className='flex gap-5'>
                                            <Col className='w-[700px] h-[200px] bg-slate-400 rounded-2xl mt-[-40px]'>
                                            </Col>
                                            <Col className='w-[345px] h-[100px] rounded-2xl mt-5  flex gap-10 justify-end'>
                                                <div className='w-[112px] h-[32px] bg-slate-400 rounded-2xl '>

                                                </div>
                                                <div className='w-[112px] h-[32px] bg-slate-400 rounded-2xl '>

                                                </div>
                                            </Col>

                                        </Row>
                                    </Container>
                                </section>

                            </div>
                        </Col>

                    </Row>
                </Container>
            </section></>
    )
}

function Table() {
    return (
        <table className="table-fixed">
            <tbody>
                {Array(6).fill().map((_, rowIndex) => (
                    <tr key={rowIndex}>
                        {Array(6).fill().map((_, colIndex) => (
                            <td key={colIndex} className=" border px-6 py-[6.5px] m-4">
                                {rowIndex * 6 + colIndex + 1}

                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default ProductCart
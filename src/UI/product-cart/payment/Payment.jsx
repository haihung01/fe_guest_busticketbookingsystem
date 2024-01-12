import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import React, { useState } from "react";
import Skeleton from "react-loading-skeleton";
import { useSelector } from "react-redux";
import { Col, Container, Row } from "reactstrap";
import IconAppStore from '../../../assets/icon/AppStore.svg';
import IconCHplay from '../../../assets/icon/CHPlay.svg';
import { Chip, Stack } from '@mui/material';
import axiosClient from '../../../utils/customizeAPI';
const Payment = () => {
    const paymentInfo = useSelector((state) => state.tripReducer.dataPayment);
    const [loading, setLoading] = useState(false);
    console.log("paymentInfo", paymentInfo);
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [age, setAge] = useState('');

    const handlePayment = async () => {
        try {
        const responsePayment = await axiosClient.post('/payment/booking-guest-url', paymentInfo) 
        console.log("res payment: ",responsePayment?.data);
        if (responsePayment) {
            const url = responsePayment?.data?.data;
            const a = document.createElement('a')
            a.style.display = 'none'
            a.href = url
            a.download = 'ThongKeHoatDong.xlsx'
            document.body.appendChild(a)
            a.click()
            window.URL.revokeObjectURL(url)           
        }
        } catch (error) {
            console.log("error payment: ",error);
        }
    };

    return (
        <>
            <section className="home-banner">
                <Container>
                    <Row>
                        <Col className=" mt-20">
                            <div className="w-[1200px] p-12 rounded-2xl mx-auto bg-slate-50 border border-gray-200 ">
                                <section>
                                    <Container>
                                        <Row className="flex justify-between">
                                            <Col>
                                                <span className="ml-6 text-lg font-medium">Chọn phương thức thanh toán</span>
                                                <div className="flex mt-5 gap-4 ml-6">
                                                    <img
                                                        className="border border-gray-400 h-12 w-12 rounded-lg"
                                                        src="https://downloadlogomienphi.com/sites/default/files/logos/download-logo-vector-vnpayqr-noqr-mien-phi.jpg" />
                                                    <h1 className="my-auto text-lg font-medium">VNPay</h1>
                                                </div>
                                            </Col>

                                            <Col className="w-[345px] h-[556px] bg-gray-100">
                                                <div className="justify-center items-center text-center">
                                                    <h1 className="text-gray-500 text-lg font-medium">Tổng thanh toán</h1>
                                                    <span className="font-medium text-4xl text-orange-500">{paymentInfo?.amountMoneyToRecharge} VNĐ</span>
                                                    <img
                                                        className="mx-auto w-80 h-80"
                                                        src="data:image/png;base64,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" />
                                                </div>
                                                <div className="ml-7">
                                                    <h1 className="mt-5 font-medium text-lg text-green-800">Hướng dẫn thanh toán bằng TripTix</h1>
                                                    <tr>
                                                        <li>Mở ứng dụng TripTix trên điện thoại</li>
                                                        <li>Dùng biểu tượng để quét mã QR</li>
                                                        <li>Quét mã ở trang này và thanh toán</li>
                                                    </tr>
                                                </div>
                                            </Col>


                                            <Col>
                                                {loading ? (
                                                    <Skeleton className="w-[345px] h-[206px] " />
                                                ) : (
                                                    <div className="w-[345px] h-[220px] border border-gray-200 rounded-2xl shadow-xl">
                                                       <h3 style={{textAlign:"center"}}>Thông tin vé</h3>   
                                                       <div><span>Tuyến đường: </span><span>{paymentInfo?.stationOn}</span>-<span>{paymentInfo?.stationOff}</span></div>
                                                    <div>
                                                        <span>Các ghế đã chọn: </span>
                                                        {paymentInfo?.seatName?.map((s)=>(
                                                            <Chip key={s} label={s} sx={{mr: 1}} color='info'/>
                                                        ))}
                                                    </div>
                                                    <div><span>Tổng giá tiền: </span><span>{paymentInfo?.amountMoneyToRecharge}</span></div>                           
                                                    </div>
                                                )}

                                                {loading ? (
                                                    <Skeleton className="w-[345px] h-[171px]" />
                                                ) : (
                                                    <div className="w-[345px] h-[171px] mt-5 border border-gray-200 rounded-2xl shadow-xl">
                                                         <h3 style={{textAlign:"center"}}>Thông tin khách hàng</h3>   
                                                         <div><span>Tên khách hàng: </span><span>{paymentInfo?.nameGuest}</span></div>
                                                    <div><span>Số điện thoại: </span><span>{paymentInfo?.phoneGuest}</span></div>
                                                    <div><span>Email: </span><span>{paymentInfo?.emailGuest}</span></div> 
                                                    </div>
                                                )}


                                                <div className='w-[345px] h-[100px] rounded-2xl mt-5  flex gap-10 justify-end'>
                                                    <button onClick={handleOpen} className='w-[112px] h-[32px] border border-gray-300 rounded-2xl flex justify-center text-center items-center text-orange-500'>
                                                        Hủy
                                                    </button>
                                                    <button onClick={handlePayment} className='w-[112px] h-[32px] bg-orange-500 rounded-2xl flex justify-center text-center items-center text-gray-50'>
                                                        Thanh toán
                                                    </button>
                                                    <Modal
                                                        open={open}
                                                        onClose={handleClose}
                                                        aria-labelledby="modal-modal-title"
                                                        aria-describedby="modal-modal-description"
                                                    >
                                                        <Box sx={style}>
                                                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                                                DOWNLOAD THE TRIPTIX APP
                                                            </Typography>
                                                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                                                Tải app để có thẻ trải nghiệm dịch vụ một cách tốt nhất.
                                                            </Typography>
                                                            <div className='flex mt-10 justify-between '>
                                                                <img
                                                                    className='h-9'
                                                                    src={IconCHplay}
                                                                    alt='CHplay'
                                                                />
                                                                <img
                                                                    className='h-9'
                                                                    src={IconAppStore}
                                                                    alt='AppStore'
                                                                />
                                                            </div>
                                                        </Box>
                                                    </Modal>
                                                </div>
                                            </Col>
                                        </Row>

                                    </Container>
                                </section>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    // height: 200,
    bgcolor: 'background.paper',
    // border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    borderRadius: 3,
};
export default Payment;

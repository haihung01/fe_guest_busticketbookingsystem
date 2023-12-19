import React, { useEffect, useRef, useState } from 'react';
import { Col, Container, Row } from 'reactstrap';
import './header.scss';
import { Link, NavLink } from 'react-router-dom';
import Bg_Banner from '../../UI/bg-banner/Bg_Banner';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { motion } from 'framer-motion'
import IconHome from '../../assets/icon/home-svgrepo-com.svg'
import IconNews from '../../assets/icon/news-publishing-svgrepo-com.svg'
import IconSchedule from '../../assets/icon/calendar-svgrepo-com.svg'
import IconBill from '../../assets/icon/invoice-bill-svgrepo-com.svg'
import IconContact from '../../assets/icon/contact-headset-communication-svgrepo-com.svg'
import IconAboutUs from '../../assets/icon/people-svgrepo-com.svg'
import IconCHplay from '../../assets/icon/CHPlay.svg'
import IconAppStore from '../../assets/icon/AppStore.svg'
import Logo from '../../assets/img/386821698_158043907397075_3857281237486244557_n.png'

const Header = () => {
    const headerRef = useRef(null);
    const [isSticky, setIsSticky] = useState(false);


    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 80) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const headerClassName = `header ${isSticky ? 'sticky' : ''}`;

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    return (
        <>
            <header className={headerClassName} ref={headerRef}>
                <Container>
                    <Row>
                        <div className='nav-wrapper'>
                            <div className='logo'>
                                <Link to='/home'>
                                    <img src={Logo}
                                        className='h-[85px] w-[85px] rounded-full'
                                        alt='Logo' />
                                </Link>
                            </div>
                            <div className='button'>
                                <button className='btn button-login bg-[#ef5222] shadow-2xl  text-white text-lg' onClick={handleOpen}>Tải xuống</button>
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
                        </div>
                        {isSticky ? (
                            <div className='contents-in-sticky'>
                                <Col className="navigation">
                                    <ul className='menu flex justify-center gap-20 mt-[-42px] mx-auto'>
                                        <motion.li whileTap={{ scale: 1.1 }} className='nav_item'>
                                            <NavLink to='/home' style={{ transform: 'translateY(-30px)' }}>
                                                <img
                                                    src={IconHome}
                                                    className='w-[39px] h-[39px]'
                                                    alt='Home Icon'
                                                />
                                                Trang chủ
                                            </NavLink>
                                        </motion.li>
                                        <motion.li whileTap={{ scale: 1.1 }} className='nav_item'>
                                            <NavLink to='/schedule2' style={{ transform: 'translateY(-30px)' }}>
                                                <img
                                                    src={IconSchedule}
                                                    className='w-[39px] h-[38px]'
                                                    alt='Schedule Icon'
                                                />
                                                Lịch trình
                                            </NavLink>
                                        </motion.li>
                                        <motion.li whileTap={{ scale: 1.1 }} className='nav_item'>
                                            <NavLink to='/news' style={{ transform: 'translateY(-30px)' }}>
                                                <img
                                                    src={IconNews}
                                                    className='w-[39px] h-[38px]'
                                                    alt='News Icon'
                                                />
                                                Tin tức
                                            </NavLink>
                                        </motion.li>
                                        <motion.li whileTap={{ scale: 1.1 }} className='nav_item'>
                                            <NavLink to='/' onClick={handleOpen} style={{ transform: 'translateY(-30px)' }}>
                                                <img
                                                    src={IconBill}
                                                    className='w-[39px] h-[38px]'
                                                    alt='Bill Icon'
                                                />
                                                Hóa đơn
                                            </NavLink>
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
                                        </motion.li>
                                        <motion.li whileTap={{ scale: 1.1 }} className='nav_item'>
                                            <NavLink to='/contact' style={{ transform: 'translateY(-30px)' }}>
                                                <img
                                                    src={IconContact}
                                                    className='w-[39px] h-[38px]'
                                                    alt='Contact Icon'
                                                />
                                                Liên hệ
                                            </NavLink>
                                        </motion.li>
                                        <motion.li whileTap={{ scale: 1.1 }} className='nav_item'>
                                            <NavLink to='/about-us' style={{ transform: 'translateY(-30px)' }}>
                                                <img
                                                    src={IconAboutUs}
                                                    className='w-[39px] h-[38px]'
                                                    alt='About Us Icon'
                                                />
                                                Về chúng tôi
                                            </NavLink>
                                        </motion.li>
                                    </ul>
                                </Col>
                            </div>
                        ) : null}
                    </Row>
                </Container>
            </header>
            <section className="home-banner" >
                <Container>
                    <Row>
                        <Col lg="12">
                            <Bg_Banner />
                        </Col>
                    </Row>
                </Container>
            </section>
        </>

    );
}
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
export default Header;
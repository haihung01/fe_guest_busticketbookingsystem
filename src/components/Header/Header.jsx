import React, { useEffect, useRef, useState } from 'react';
import { Col, Container, Row } from 'reactstrap';
import './header.scss';
import { Link, NavLink } from 'react-router-dom';
import Bg_Banner from '../../UI/bg-banner/Bg_Banner';

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

    return (
        <>
            <header className={headerClassName} ref={headerRef}>
                <Container>
                    <Row>
                        <div className='nav-wrapper'>
                            <div className='logo'>
                                <Link to='/home'>
                                    <img src='https://t3.ftcdn.net/jpg/04/91/24/24/360_F_491242470_WdSpwKRMYiHqTvRBRpsH72cM4g1VWL22.jpg' style={{ width: 108, height: 81 }} alt='Logo' />
                                </Link>
                            </div>
                            <div className='button'>
                                <div className='btn button-login'>
                                    <button>Đăng nhập/Đăng kí</button>
                                </div>
                            </div>
                        </div>
                        {isSticky ? (
                            <div className='contents-in-sticky'>
                                <Col className="navigation">
                                    <ul className='menu flex justify-center gap-20 mt-[-42px] mx-auto'>
                                        <li className='nav_item'>
                                            <NavLink to='/' style={{ transform: 'translateY(-30px)' }}>
                                                <img
                                                    src='https://www.svgrepo.com/show/489752/home.svg'
                                                    className='w-[42px] h-[42px]'
                                                    alt='Home Icon'
                                                />
                                                Trang chủ
                                            </NavLink>
                                        </li>
                                        <li className='nav_item'>
                                            <NavLink to='/schedule' style={{ transform: 'translateY(-30px)' }}>
                                                <img
                                                    src='https://www.svgrepo.com/show/513101/calendar.svg'
                                                    className='w-[39px] h-[38px]'
                                                    alt='Schedule Icon'
                                                />
                                                Lịch trình
                                            </NavLink>
                                        </li>
                                        <li className='nav_item'>
                                            <NavLink to='/news' style={{ transform: 'translateY(-30px)' }}>
                                                <img
                                                    src='https://www.svgrepo.com/show/494016/news-publishing.svg'
                                                    className='w-[39px] h-[38px]'
                                                    alt='News Icon'
                                                />
                                                Tin tức
                                            </NavLink>
                                        </li>
                                        <li className='nav_item'>
                                            <NavLink to='/bill' style={{ transform: 'translateY(-30px)' }}>
                                                <img
                                                    src='https://www.svgrepo.com/show/259026/invoice-bill.svg'
                                                    className='w-[39px] h-[38px]'
                                                    alt='Bill Icon'
                                                />
                                                Hóa đơn
                                            </NavLink>
                                        </li>
                                        <li className='nav_item'>
                                            <NavLink to='/contact' style={{ transform: 'translateY(-30px)' }}>
                                                <img
                                                    src='https://www.svgrepo.com/show/415825/contact-headset-communication.svg'
                                                    className='w-[39px] h-[38px]'
                                                    alt='Contact Icon'
                                                />
                                                Liên hệ
                                            </NavLink>
                                        </li>
                                        <li className='nav_item'>
                                            <NavLink to='/about-us' style={{ transform: 'translateY(-30px)' }}>
                                                <img
                                                    src='https://www.svgrepo.com/show/521200/people.svg'
                                                    className='w-[39px] h-[38px]'
                                                    alt='About Us Icon'
                                                />
                                                Về chúng tôi
                                            </NavLink>
                                        </li>
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

export default Header;

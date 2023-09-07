import React from 'react'
import { Container, Row } from 'reactstrap'
import './header.scss'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className='header'>
            <Container>
                <Row>
                    <div className='nav-wrapper'>
                        <div className='logo'>
                            <Link to='/home'>
                                <img src='https://t3.ftcdn.net/jpg/04/91/24/24/360_F_491242470_WdSpwKRMYiHqTvRBRpsH72cM4g1VWL22.jpg' style={{ width: 108, height: 81 }} />
                            </Link>
                        </div>

                        <div className='button'>
                            <div className='btn button-login'>
                                <button>Đăng nhập/Đăng kí</button>
                            </div>
                        </div>
                    </div>
                </Row>
            </Container>
        </header>
    )
}

export default Header
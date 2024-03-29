import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import PlayCircleFilledWhiteIcon from '@material-ui/icons/PlayCircleFilledWhite';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../assets/images/logo.png'
import { NavLink } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav} from 'react-bootstrap'
import '../assets/styles/navbar.scss'
import Container from 'react-bootstrap/Container';
import { useState, useEffect } from 'react';



const NavbarHeading = ({ heading, onFilter })=> { 

    const [background, setBackground] = useState(false);


    const changeBackground = () => {
        if(!heading.current) {
            return null;
        }
        
        if(window.scrollY >= heading.current.getBoundingClientRect().bottom) {
            setBackground(true);
        } else {
            setBackground(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', changeBackground);
        return () => window.removeEventListener('scroll', changeBackground);
    }, []);

    return (
        <div className="navbar-container navbar-heading">
            <Navbar collapseOnSelect expand="lg" variant={background ? 'dark' : 'light'} bg={background ? 'dark' : ''}>
                <Container>
                    <Navbar.Brand as={NavLink} to='/' className="d-flex justify-content-center align-items-center icon-container">
                        <img src={Logo} alt="Logo" className="mx-100 nav-icon"/>
                        <div className="ml-2 nav-title">SexyCars</div>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={onFilter} className={`${!background ? '' : 'white-icon'}`}/>
                    <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-around" >
                        <Nav className="me-auto align-items-xl-center align-items-lg-center align-items-md-start align-items-sm-start ml-xl-3 ml-lg-3 mr-xl-3 mr-lg-3 links-container">
                            <Nav.Link as={NavLink}  className={`${background ? 'link' : 'custom-link'}`} to='/'>Home Page</Nav.Link>
                            <Nav.Link as={NavLink}  className={`${background ? 'link' : 'custom-link'}`} to='/cars-information'>Cars Information</Nav.Link>
                            <Nav.Link as={NavLink}  className={`${background ? 'link' : 'custom-link'}`} to='/contact'>Contact</Nav.Link>
                        </Nav>
                        <Nav className="links-container flex-md-row flex-sm-row align-items-xl-center align-items-lg-center align-items-md-start align-items-sm-start flex-row">
                            <Nav.Link  className={`${background ? 'link' : 'custom-link'}`} href="#deets"><InstagramIcon /></Nav.Link>
                            <Nav.Link  className={`${background ? 'link' : 'custom-link'}`} href="#deets"><FacebookIcon /></Nav.Link>
                            <Nav.Link  className={`${background ? 'link' : 'custom-link'}`} href="#deets"><PlayCircleFilledWhiteIcon /></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}


export default NavbarHeading;
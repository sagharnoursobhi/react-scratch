import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarApp from '../Navbar';
import NavbarSecond from '../NavbarSecond';
import FirstCar from '../../images/car1.png'
import SecondCar from '../../images/car2.png'
import ThirdCar from '../../images/car3.png'
import FourthCar from '../../images/car4.png'
import FifthCar from '../../images/car5.png'
import SixthCar from '../../images/car6.png'
import LocalTaxiIcon from '@material-ui/icons/LocalTaxi';
import ViewCarouselIcon from '@material-ui/icons/ViewCarousel';
import InvertColorsIcon from '@material-ui/icons/InvertColors';
import Footer from '../Footer'
import TenCar from '../../images/car10.png'
import Eleven from '../../images/image11.png'
import Twolve from '../../images/car12.png'
import Thirtheen from '../../images/car13.png'
import Fourteen from '../../images/car14.png'
import Fifteen from '../../images/car15.png'
import Sixteen from '../../images/image16.png'
import Seventeen from '../../images/car17.png'




const App = () => (
    <i>
        <FontAwesomeIcon icon={faHome} />
    </i>
);
function Cars() {
    return (
        <>
            <NavbarApp />
            <NavbarSecond />
            <div className="container-fluid">
                <section id="section1">
                    <div className="row justify-content-center align-items-center d-flex">
                        <div className="col-lg-4 col-xl-4 col-md-4 col-sm-6 extraBorder d-flex ml-auto mr-auto ">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-12 style ">
                                        <div className="col-7"><h4 className="text-center">Porsche 911 Carrera 4s</h4></div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-6 margin">
                                        <img src={FirstCar} alt="firstCar" />
                                    </div>
                                    <div className="col-6 margin">
                                        <ul className="list-group">
                                            <li className="list-group-item border-0 list"><span><LocalTaxiIcon /></span><span className="margin1">Coupe</span></li>
                                            <li className="list-group-item border-0 list"><span><ViewCarouselIcon /></span><span className="margin1">3.0l Twin Turbo</span></li>
                                            <li className="list-group-item border-0 list"><span><InvertColorsIcon /></span><span className="margin1">Red</span></li>
                                            <li className="list-group-item border-0 list"><span><App /></span><span className="margin1">450 Hourses</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-xl-4 col-md-6 col-sm-6 extraBorder d-flex ml-auto mr-auto">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-12 style ">
                                        <div className="col-7"><h4 className="text-center">Porsche 718 Cayman</h4></div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-6 margin">
                                        <img src={SecondCar} alt="firstCar" />
                                    </div>
                                    <div className="col-6 margin">
                                        <ul className="list-group">
                                            <li className="list-group-item border-0 list"><span><LocalTaxiIcon /></span><span className="margin1">Coupe</span></li>
                                            <li className="list-group-item border-0 list"><span><ViewCarouselIcon /></span><span className="margin1">3.0l Twin Turbo</span></li>
                                            <li className="list-group-item border-0 list"><span><InvertColorsIcon /></span><span className="margin1">Yellow</span></li>
                                            <li className="list-group-item border-0 list"><span><App /></span><span className="margin1">300 Hourses</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-xl-4 col-md-4 col-sm-6 extraBorder d-flex ml-auto mr-auto ">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-12 style ">
                                        <div className="col-7"><h4 className="text-center">Mercedes A45 AMG</h4></div>
                                    </div>
                                </div>
                                <div className="row justify-content-center align-items-center d-flex">
                                    <div className="col-6 margin">
                                        <img src={ThirdCar} alt="firstCar" />
                                    </div>
                                    <div className="col-6 margin">
                                        <ul className="list-group">
                                            <li className="list-group-item border-0 list"><span><LocalTaxiIcon /></span><span className="margin1">Coupe</span></li>
                                            <li className="list-group-item border-0 list"><span><ViewCarouselIcon /></span><span className="margin1">3.0l Twin Turbo</span></li>
                                            <li className="list-group-item border-0 list"><span><InvertColorsIcon /></span><span className="margin1">Gold</span></li>
                                            <li className="list-group-item border-0 list"><span><App /></span><span className="margin1">421 Hourses</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-xl-4 col-md-6 col-sm-6 extraBorder d-flex ml-auto mr-auto">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-12 style ">
                                        <div className="col-7"><h4 className="text-center">BMW M5 Competition</h4></div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-6 margin">
                                        <img src={FourthCar} alt="firstCar" />
                                    </div>
                                    <div className="col-6 margin">
                                        <ul className="list-group">
                                            <li className="list-group-item border-0 list"><span><LocalTaxiIcon /></span><span className="margin1">Coupe</span></li>
                                            <li className="list-group-item border-0 list"><span><ViewCarouselIcon /></span><span className="margin1">3.0l Twin Turbo</span></li>
                                            <li className="list-group-item border-0 list"><span><InvertColorsIcon /></span><span className="margin1">Blue</span></li>
                                            <li className="list-group-item border-0 list"><span><App /></span><span className="margin1">625 Hourses</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center align-items-center d-flex">
                        <div className="col-lg-4 col-xl-4 col-md-4 col-sm-6 extraBorder d-flex ml-auto mr-auto ">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-12 style ">
                                        <div className="col-7"><h4 className="text-center">BMW M4</h4></div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-6 margin">
                                        <img src={FifthCar} alt="firstCar" />
                                    </div>
                                    <div className="col-6 margin">
                                        <ul class="list-group">
                                            <li className="list-group-item border-0 list"><span><LocalTaxiIcon /></span><span className="margin1">Coupe</span></li>
                                            <li className="list-group-item border-0 list"><span><ViewCarouselIcon /></span><span className="margin1">3.0l Twin Turbo</span></li>
                                            <li className="list-group-item border-0 list"><span><InvertColorsIcon /></span><span className="margin1">Gold</span></li>
                                            <li className="list-group-item border-0 list"><span><App /></span><span className="margin1">450 Hourses</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-xl-4 col-md-6 col-sm-6 extraBorder d-flex ml-auto mr-auto">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-12 style ">
                                        <div className="col-7"><h4 className="text-center">Nissan GT-R</h4></div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-6 margin">
                                        <img src={SixthCar} alt="firstCar" />
                                    </div>
                                    <div className="col-6 margin">
                                        <ul class="list-group">
                                            <li className="list-group-item border-0 list"><span><LocalTaxiIcon /></span><span className="margin1">Coupe</span></li>
                                            <li className="list-group-item border-0 list"><span><ViewCarouselIcon /></span><span className="margin1">3.0l Twin Turbo</span></li>
                                            <li className="list-group-item border-0 list"><span><InvertColorsIcon /></span><span className="margin1">Copper</span></li>
                                            <li className="list-group-item border-0 list"><span><App /></span><span className="margin1">570 Hourses</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center align-items-center d-flex">
                        <div className="col-lg-4 col-xl-4 col-md-4 col-sm-6 extraBorder d-flex ml-auto mr-auto ">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-12 style ">
                                        <div className="col-7"><h4 className="text-center">BMW M4</h4></div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-6 margin">
                                        <img src={TenCar} alt="firstCar" />
                                    </div>
                                    <div className="col-6 margin">
                                        <ul class="list-group">
                                            <li className="list-group-item border-0 list"><span><LocalTaxiIcon /></span><span className="margin1">Coupe</span></li>
                                            <li className="list-group-item border-0 list"><span><ViewCarouselIcon /></span><span className="margin1">3.0l Twin Turbo</span></li>
                                            <li className="list-group-item border-0 list"><span><InvertColorsIcon /></span><span className="margin1">Gold</span></li>
                                            <li className="list-group-item border-0 list"><span><App /></span><span className="margin1">450 Hourses</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-xl-4 col-md-6 col-sm-6 extraBorder d-flex ml-auto mr-auto">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-12 style ">
                                        <div className="col-7"><h4 className="text-center">Nissan GT-R</h4></div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-6 margin">
                                        <img src={Eleven} alt="firstCar" />
                                    </div>
                                    <div className="col-6 margin">
                                        <ul class="list-group">
                                            <li className="list-group-item border-0 list"><span><LocalTaxiIcon /></span><span className="margin1">Coupe</span></li>
                                            <li className="list-group-item border-0 list"><span><ViewCarouselIcon /></span><span className="margin1">3.0l Twin Turbo</span></li>
                                            <li className="list-group-item border-0 list"><span><InvertColorsIcon /></span><span className="margin1">Copper</span></li>
                                            <li className="list-group-item border-0 list"><span><App /></span><span className="margin1">570 Hourses</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center align-items-center d-flex" id="1">
                        <div className="col-lg-4 col-xl-4 col-md-4 col-sm-6 extraBorder d-flex ml-auto mr-auto ">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-12 style ">
                                        <div className="col-7"><h4 className="text-center">BMW M4</h4></div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-6 margin">
                                        <img src={Twolve} alt="tenCar" />
                                    </div>
                                    <div className="col-6 margin">
                                        <ul class="list-group">
                                            <li className="list-group-item border-0 list"><span><LocalTaxiIcon /></span><span className="margin1">Coupe</span></li>
                                            <li className="list-group-item border-0 list"><span><ViewCarouselIcon /></span><span className="margin1">3.0l Twin Turbo</span></li>
                                            <li className="list-group-item border-0 list"><span><InvertColorsIcon /></span><span className="margin1">Gold</span></li>
                                            <li className="list-group-item border-0 list"><span><App /></span><span className="margin1">450 Hourses</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-xl-4 col-md-6 col-sm-6 extraBorder d-flex ml-auto mr-auto">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-12 style ">
                                        <div className="col-7"><h4 className="text-center">Nissan GT-R</h4></div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-6 margin">
                                        <img src={Thirtheen} alt="elevenCar" />
                                    </div>
                                    <div className="col-6 margin">
                                        <ul class="list-group">
                                            <li className="list-group-item border-0 list"><span><LocalTaxiIcon /></span><span className="margin1">Coupe</span></li>
                                            <li className="list-group-item border-0 list"><span><ViewCarouselIcon /></span><span className="margin1">3.0l Twin Turbo</span></li>
                                            <li className="list-group-item border-0 list"><span><InvertColorsIcon /></span><span className="margin1">Copper</span></li>
                                            <li className="list-group-item border-0 list"><span><App /></span><span className="margin1">570 Hourses</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center align-items-center d-flex" id="2">
                        <div className="col-lg-4 col-xl-4 col-md-4 col-sm-6 extraBorder d-flex ml-auto mr-auto ">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-12 style ">
                                        <div className="col-7"><h4 className="text-center">BMW M4</h4></div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-6 margin">
                                        <img src={Fourteen} alt="twolveCar" />
                                    </div>
                                    <div className="col-6 margin">
                                        <ul class="list-group">
                                            <li className="list-group-item border-0 list"><span><LocalTaxiIcon /></span><span className="margin1">Coupe</span></li>
                                            <li className="list-group-item border-0 list"><span><ViewCarouselIcon /></span><span className="margin1">3.0l Twin Turbo</span></li>
                                            <li className="list-group-item border-0 list"><span><InvertColorsIcon /></span><span className="margin1">Gold</span></li>
                                            <li className="list-group-item border-0 list"><span><App /></span><span className="margin1">450 Hourses</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-xl-4 col-md-6 col-sm-6 extraBorder d-flex ml-auto mr-auto">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-12 style ">
                                        <div className="col-7"><h4 className="text-center">Nissan GT-R</h4></div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-6 margin">
                                        <img src={Fifteen} alt="thirteenCar" />
                                    </div>
                                    <div className="col-6 margin">
                                        <ul class="list-group">
                                            <li className="list-group-item border-0 list"><span><LocalTaxiIcon /></span><span className="margin1">Coupe</span></li>
                                            <li className="list-group-item border-0 list"><span><ViewCarouselIcon /></span><span className="margin1">3.0l Twin Turbo</span></li>
                                            <li className="list-group-item border-0 list"><span><InvertColorsIcon /></span><span className="margin1">Copper</span></li>
                                            <li className="list-group-item border-0 list"><span><App /></span><span className="margin1">570 Hourses</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center align-items-center d-flex" id="3">
                        <div className="col-lg-4 col-xl-4 col-md-4 col-sm-6 extraBorder d-flex ml-auto mr-auto ">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-12 style ">
                                        <div className="col-7"><h4 className="text-center">BMW M4</h4></div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-6 margin">
                                        <img src={Sixteen} alt="fourteenCar" />
                                    </div>
                                    <div className="col-6 margin">
                                        <ul class="list-group">
                                            <li className="list-group-item border-0 list"><span><LocalTaxiIcon /></span><span className="margin1">Coupe</span></li>
                                            <li className="list-group-item border-0 list"><span><ViewCarouselIcon /></span><span className="margin1">3.0l Twin Turbo</span></li>
                                            <li className="list-group-item border-0 list"><span><InvertColorsIcon /></span><span className="margin1">Gold</span></li>
                                            <li className="list-group-item border-0 list"><span><App /></span><span className="margin1">450 Hourses</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-xl-4 col-md-6 col-sm-6 extraBorder d-flex ml-auto mr-auto">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-12 style ">
                                        <div className="col-7"><h4 className="text-center">Nissan GT-R</h4></div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-6 margin">
                                        <img src={Seventeen} alt="firstCar" />
                                    </div>
                                    <div className="col-6 margin">
                                        <ul class="list-group">
                                            <li className="list-group-item border-0 list"><span><LocalTaxiIcon /></span><span className="margin1">Coupe</span></li>
                                            <li className="list-group-item border-0 list"><span><ViewCarouselIcon /></span><span className="margin1">3.0l Twin Turbo</span></li>
                                            <li className="list-group-item border-0 list"><span><InvertColorsIcon /></span><span className="margin1">Copper</span></li>
                                            <li className="list-group-item border-0 list"><span><App /></span><span className="margin1">570 Hourses</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="footer">
                    <Footer id="footer" />
                </section>
            </div>
        </>
    );
}

export default Cars;
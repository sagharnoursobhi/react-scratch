import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import 'bootstrap/dist/css/bootstrap.min.css';
import FirstCar from '../../assets/images/car1.png';
import SecondCar from '../../assets/images/carsecond.png';
import ThirdCar from '../../assets/images/car3.png';
import FourthCar from '../../assets/images/car4.png';
import FifthCar from '../../assets/images/car5.png';
import SixthCar from '../../assets/images/car6.png';
import SeventhCar from '../../assets/images/car7.png';
import EighthCar from '../../assets/images/car8.png';
import NinthCar from '../../assets/images/car9.png';
import LocalTaxiIcon from '@material-ui/icons/LocalTaxi';
import ViewCarouselIcon from '@material-ui/icons/ViewCarousel';
import InvertColorsIcon from '@material-ui/icons/InvertColors';
import Map from '../../images/map.png';
import CheckIcon from '@material-ui/icons/Check';
import Navbar from '../Navbar';
import Footer from '../Footer';
import '../../App.css';
import '../../assets/styles/landingPage.scss';



const App = () => (
    <i>
      <FontAwesomeIcon icon={faHome}/>
    </i>
  );
function Landing(){
        return(
            
                <div className="landing-page-container">
                    <Navbar/>
                    <div className="container-fluid heading" id="main">
                        <div className="row">
                            <div className="col-lg-12 col-xs-12 col-sm-6 col-md-8 position-relative text-center text-white w-100 img-top">
                                <div className="position-absolute transform blur mw-100 mh-100 w-100">
                                <ul className="list-unstyled">
                                    <h3 className="text-danger">Dream car rental</h3>
                                    <h1>We will make your dreams come true!</h1>
                                </ul>
                                </div>
                            </div>
                        </div>
                        <section id="section2">
                            <div className="row justify-content-center align-items-center d-flex">
                                <div className="col-lg-4 col-xl-4 col-md-4 col-sm-6 extraBorder d-flex ml-auto mr-auto ">
                                    <div className="container-fluid">
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="col-7"><h4 className="text-center">Porsche 911 Carrera 4s</h4></div>
                                            </div>
                            </div>
                            <div className="row margin-row">
                                <div className="col-xl-6 col-lg col-xs-12 margin">
                                    <img src={FirstCar} alt="firstCar" className="img-media"/>
                                </div>
                                <div className="col-6 margin w-auto media">
                                    <ul class="list-group">
                                        <li className="list-group-item border-0 list svg-media"><span><LocalTaxiIcon className="icon"/></span><span className="margin1 media-text">Coupe</span></li>
                                        <li className="list-group-item border-0 list svg-media"><span><ViewCarouselIcon className="icon"/></span><span className="margin1 media-text">3.0l Twin Turbo</span></li>
                                        <li className="list-group-item border-0 list svg-media"><span><InvertColorsIcon className="icon"/></span><span className="margin1 media-text">Red</span></li>
                                        <li className="list-group-item border-0 list svg-media"><span><App className="icon"/></span><span className="margin1 media-text">450 Hourses</span></li>
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
                                    <img src={SecondCar} alt="firstCar"/>
                                </div>
                                <div className="col-6 margin w-100 media">
                                    <ul className="list-group">
                                        <li className="list-group-item border-0 list"><span><LocalTaxiIcon className="icon"/></span><span className="margin1 media-text">Coupe</span></li>
                                        <li className="list-group-item border-0 list"><span><ViewCarouselIcon className="icon"/></span><span className="margin1 media-text">3.0l Twin Turbo</span></li>
                                        <li className="list-group-item border-0 list"><span><InvertColorsIcon className="icon"/></span><span className="margin1 media-text">Yellow</span></li>
                                        <li className="list-group-item border-0 list"><span><App className="icon"/></span><span className="margin1 media-text">300 Hourses</span></li>
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
                                    <img src={ThirdCar} alt="firstCar" className="img-media"/>
                                </div>
                                <div className="col-6 margin w-100 media">
                                    <ul className="list-group">
                                        <li className="list-group-item border-0 list"><span><LocalTaxiIcon className="icon"/></span><span className="margin1 media-text">Coupe</span></li>
                                        <li className="list-group-item border-0 list"><span><ViewCarouselIcon className="icon"/></span><span className="margin1 media-text">3.0l Twin Turbo</span></li>
                                        <li className="list-group-item border-0 list"><span><InvertColorsIcon className="icon"/></span><span className="margin1 media-text">Gold</span></li>
                                        <li className="list-group-item border-0 list"><span><App className="icon"/></span><span className="margin1">421 Hourses</span></li>
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
                                    <img src={FourthCar} alt="firstCar" className="img-media"/>
                                </div>
                                <div className="col-6 margin w-100 media">
                                    <ul className="list-group">
                                        <li className="list-group-item border-0 list"><span><LocalTaxiIcon className="icon"/></span><span className="margin1 media-text">Coupe</span></li>
                                        <li className="list-group-item border-0 list"><span><ViewCarouselIcon className="icon"/></span><span className="margin1 media-text">3.0l Twin Turbo</span></li>
                                        <li className="list-group-item border-0 list"><span><InvertColorsIcon className="icon"/></span><span className="margin1 media-text">Blue</span></li>
                                        <li className="list-group-item border-0 list"><span><App className="icon"/></span><span className="margin1 media-text">625 Hourses</span></li>
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
                                <div className="col-6 margin w-100 media">
                                    <ul class="list-group">
                                        <li className="list-group-item border-0 list"><span><LocalTaxiIcon className="icon"/></span><span className="margin1 media-text">Coupe</span></li>
                                        <li className="list-group-item border-0 list"><span><ViewCarouselIcon className="icon"/></span><span className="margin1 media-text">3.0l Twin Turbo</span></li>
                                        <li className="list-group-item border-0 list"><span><InvertColorsIcon className="icon"/></span><span className="margin1 media-text">Gold</span></li>
                                        <li className="list-group-item border-0 list"><span><App className="icon"/></span><span className="margin1 media-text">450 Hourses</span></li>
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
                                    <img src={SixthCar} alt="firstCar"/>
                                </div>
                                <div className="col-6 margin w-100 media">
                                    <ul className="list-group">
                                        <li className="list-group-item border-0 list"><span><LocalTaxiIcon className="icon"/></span><span className="margin1 media-text">Coupe</span></li>
                                        <li className="list-group-item border-0 list"><span><ViewCarouselIcon className="icon"/></span><span className="margin1 media-text">3.0l Twin Turbo</span></li>
                                        <li className="list-group-item border-0 list"><span><InvertColorsIcon className="icon"/></span><span className="margin1 media-text">Copper</span></li>
                                        <li className="list-group-item border-0 list"><span><App className="icon"/></span><span className="margin1 media-text">570 Hourses</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="section3">
                <div className="row">
                    <div className="col-4 ml-auto mr-auto margin2 border-warning d-flex justify-content-center align-items-center see-more">
                        <h3 className="text-center">See more!</h3>
                    </div>                
                </div>
            </section>
            <section id="section4">
                <div className="row d-flex align-items-center justify-content-center">
                    <div className="col-8 ">
                        <h2 className="margin3">Meet our fleet!</h2>
                    </div>
                </div>
                <div className="row justify-content-center d-flex align-items-center">
                    <div className="col-8 h-200  ">
                        <p className="text-left">SexyCars sports and luxury car rental focuses on one goal, which is your complete satisfaction with renting a sports car with us. We will guarantee you maximum joy and comfort of using sports cars in our rental. We also try to make this pleasure not too expensive.</p>
                    </div>
                </div>
                <div className="row justify-content-center d-flex align-items-center">
                    <div className="col-8 h-200">
                        <p className="text-left ml-auto">We rent our sports cars all over Poland, and most often in the following cities: Krak??w, Katowice, Wroc??aw, Warsaw without a deposit and at a good price. We rent our sports and luxury cars daily or for a longer period, i.e. long-term. When choosing a rental in the cities of Krak??w, Warsaw, Katowice, Wroc??aw, Rzesz??w, Cz??stochowa, Kielce, Cz??stochowa, Bydgoszcz, Bia??ystok, you can expect professional service from us.</p>
                    </div>
                </div>
                <div className="row justify-content-center d-flex align-items-center margin4">
                    <div className="col-8 h-200">
                        <img src={Map} alt="map" className="img-media"/>
                    </div>
                </div>
                <div className="row justify-content-center d-flex align-items-center margin4">
                    <div className="col-8 h-200">
                        <p>Sports cars are a category of cars with a greater emphasis on driving dynamics than practicality. At the same time, they are civilian cars that must comply with all technical rules for traffic on public roads.</p>
                    </div>
                    <div className="col-8 h-200">
                        <h3>They can be:</h3>
                    </div>
                    <div className="col-8 h-200 margin4">
                        <h4>Cars modified from classic bodies to sports bodies (e.g. as a result of tuning)</h4>
                    </div>
                    <div className="col-8 h-200 margin4">
                        <img src={SeventhCar} alt="car7"/>
                    </div>
                    <div className="col-8 h-200 d-flex justify-content-end" id="label7">
                        <div className="col-5"><p className="text-muted text-right">2019 Toyota Corolla Hatchback (tuningowana)</p></div>
                    </div>
                    <div className="col-8 h-200 margin4">
                        <h4>Typically sports cars produced for fun driving</h4>
                    </div>
                    <div className="col-8 h-200 margin4">
                        <img src={EighthCar} alt="car8"/>
                    </div>
                    <div className="col-8 h-200 d-flex justify-content-end" id="label7">
                        <div className="col-5"><p className="text-muted text-right">2018 Lamborghini Huracan LP580</p></div>
                    </div>
                    <div className="col-8 h-200 margin4">
                        <h4>Extreme cars, designed for competitive and racing driving</h4>
                    </div>
                    <div className="col-8 h-200 margin4">
                        <img src={NinthCar} alt="car9"/>
                    </div>
                    <div className="col-8 h-200 d-flex justify-content-end" id="label7">
                        <div className="col-5"><p className="text-muted text-right">2016 Aston Martin Vulcan</p></div>
                    </div>
                    <div className="col-8 h-200 margin4">
                        <p>So before you choose sports cars to rent or buy, find out which one is worth choosing. We, on the other hand, will provide appropriate preparation and professional service:</p>
                    </div>
                </div>
                <div className="row justify-content-center d-flex align-items-center">
                    <div className="col-6">
                        <div className="container">
                            <div className="row">
                                <div className="col-6 ml-auto">
                                    <div className="row">
                                        <div className="col-2"><CheckIcon className="icon-color"/></div>
                                        <div className="col-10"><p className="font-weight-bold">Attractive rental prices</p></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                    <div className="col-6">
                        <div className="container">
                            <div className="row">
                                <div className="col-6 mr-auto">
                                    <div className="row">
                                        <div className="col-2"><CheckIcon className="icon-color"/></div>
                                        <div className="col-10"><p className="font-weight-bold">Most cars without a deposit</p></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                <div className="col-6">
                    <div className="container">
                        <div className="row">
                            <div className="col-6 ml-auto">
                                <div className="row">
                                    <div className="col-2"><CheckIcon className="icon-color"/></div>
                                    <div className="col-10"><p className="font-weight-bold">Possible delivery of cars in Krakow</p></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <div className="container">
                        <div className="row">
                            <div className="col-6 mr-auto">
                                <div className="row">
                                    <div className="col-2"><CheckIcon className="icon-color"/></div>
                                    <div className="col-10"><p className="font-weight-bold">The best rental company in Krakow</p></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <div className="container">
                        <div className="row">
                            <div className="col-6 ml-auto">
                                <div className="row">
                                    <div className="col-2"><CheckIcon className="icon-color"/></div>
                                    <div className="col-10"><p className="font-weight-bold">Rental satisfaction guaranteed</p></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <div className="container">
                        <div className="row">
                            <div className="col-6 mr-auto">
                                <div className="row">
                                    <div className="col-2"><CheckIcon className="icon-color"/></div>
                                    <div className="col-10"><p className="font-weight-bold">We have beautiful and fast sports cars</p></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <div className="container">
                        <div className="row">
                            <div className="col-6 ml-auto">
                                <div className="row">
                                    <div className="col-2"><CheckIcon className="icon-color"/></div>
                                    <div className="col-10"><p className="font-weight-bold">Short-term and long-term rental</p></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
                <div className="col-6">
                    <div className="container">
                        <div className="row">
                            <div className="col-6 mr-auto">
                                <div className="row">
                                    <div className="col-2"><CheckIcon className="icon-color"/></div>
                                    <div className="col-10"><p className="font-weight-bold">Wypo??yczamy nasze auta do ??lubu</p></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>             
            </div>
            <div/>
            </section>
            <section className="mt-5" id="footer">
                <Footer id="footer"/>
            </section>
        </div>
            
    </div>
        )
    }

export default Landing
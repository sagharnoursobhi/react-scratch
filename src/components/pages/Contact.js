import Footer from '../Footer';
import Navbar from '../Navbar';
import mapSecond from '../../assets/images/mapContact.png'
import StarIcon from '@material-ui/icons/Star';


const ContactPage = () => {
    return (
        <>
            <Navbar />
            <div className="container">
                <div className="row mt-4">
                    <h2 className="text-bold">Contact</h2>
                </div>
                <div className="row mb-4">
                    <p className="text-danger">SexyCars Sports and Luxury Car Rental</p>
                </div>
                <div className="row">
                    <div className="col-xl-8 col-lg-8 col-md-6 col-sm-6">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-6 col-lg-6 col-md-4 col-sm-4">
                                    <h3>Address:</h3>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6">
                                    <h3>Availability:</h3>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xl-6 col-lg-6 col-md-4 col-sm-4">
                                    <p>ul. Maria and Bolesław Koniecouchów 49/6
                                    30-611 Krakow, Poland
                                    Nip: 679-297-4323</p>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6">
                                    <p>Monday - Sunday
                                    from 08:00 to 22:00</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xl-6 col-lg-6 col-md-4 col-sm-4">
                                    <h3>Telephone:</h3>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6">
                                    <h3>Mail:</h3>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xl-6 col-lg-6 col-md-4 col-sm-4">
                                    <p>+48 501 140 391</p>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6">
                                    <p>biuro@sexycars.pl</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-3 col-sm-2">
                        <img src={mapSecond} alt="map-second"/>
                    </div>
                </div>
                <div className="row bg-light-gray">
                    <div className="col-xl-8 col-lg-8 col-md-6 col-sm-6">
                        <div className="container">
                            <div className="row d-flex justify-content-center align-items-center">
                                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-2"><p className="bg-green text-dark border-0 w-4 h-auto mr-auto text-bold">B</p></div>
                                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-2"><h3>Bruno KK</h3></div>
                                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-2"><StarIcon className="bg-success"/><StarIcon className="bg-success"/><StarIcon className="bg-success"/><StarIcon className="bg-success"/><StarIcon className="bg-success"/></div>
                                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-2"><p className="text-light-gray">6 dni temu</p></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}
export default ContactPage
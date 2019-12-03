import React from 'react';

class Test extends React.Component{
    render(){
        return (
            <div>
              <title>Autoroad - Free Bootstrap 4 Template by Colorlib</title>
              <meta charSet="utf-8" />
              <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
              <link href="https://fonts.googleapis.com/css?family=Poppins:200,300,400,500,600,700,800&display=swap" rel="stylesheet" />
              <link rel="stylesheet" href="css/open-iconic-bootstrap.min.css" />
              <link rel="stylesheet" href="css/animate.css" />
              <link rel="stylesheet" href="css/owl.carousel.min.css" />
              <link rel="stylesheet" href="css/owl.theme.default.min.css" />
              <link rel="stylesheet" href="css/magnific-popup.css" />
              <link rel="stylesheet" href="css/aos.css" />
              <link rel="stylesheet" href="css/ionicons.min.css" />
              <link rel="stylesheet" href="css/bootstrap-datepicker.css" />
              <link rel="stylesheet" href="css/jquery.timepicker.css" />
              <link rel="stylesheet" href="css/flaticon.css" />
              <link rel="stylesheet" href="css/icomoon.css" />
              <link rel="stylesheet" href="css/style.css" />
              <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
                <div className="container">
                  <a className="navbar-brand" href="index.html">Auto<span>road</span></a>
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="oi oi-menu" /> Menu
                  </button>
                  <div className="collapse navbar-collapse" id="ftco-nav">
                    <ul className="navbar-nav ml-auto">
                      <li className="nav-item active"><a href="index.html" className="nav-link">Home</a></li>
                      <li className="nav-item"><a href="about.html" className="nav-link">About</a></li>
                      <li className="nav-item"><a href="pricing.html" className="nav-link">Pricing</a></li>
                      <li className="nav-item"><a href="car.html" className="nav-link">Our Car</a></li>
                      <li className="nav-item"><a href="blog.html" className="nav-link">Blog</a></li>
                      <li className="nav-item"><a href="contact.html" className="nav-link">Contact</a></li>
                    </ul>
                  </div>
                </div>
              </nav>
              {/* END nav */}
              <div className="hero-wrap" style={{backgroundImage: 'url("images/bg_1.jpg")'}} data-stellar-background-ratio="0.5">
                <div className="overlay" />
                <div className="container">
                  <div className="row no-gutters slider-text justify-content-start align-items-center">
                    <div className="col-lg-6 col-md-6 ftco-animate d-flex align-items-end">
                      <div className="text">
                        <h1 className="mb-4">Now <span>It's easy for you</span> <span>rent a car</span></h1>
                        <p style={{fontSize: '18px'}}>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts</p>
                        <a href="https://vimeo.com/45830194" className="icon-wrap popup-vimeo d-flex align-items-center mt-4">
                          <div className="icon d-flex align-items-center justify-content-center">
                            <span className="ion-ios-play" />
                          </div>
                          <div className="heading-title ml-5">
                            <span>Easy steps for renting a car</span>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-2 col" />
                    <div className="col-lg-4 col-md-6 mt-0 mt-md-5 d-flex">
                      <form action="#" className="request-form ftco-animate">
                        <h2>Make your trip</h2>
                        <div className="form-group">
                          <label htmlFor className="label">Pick-up location</label>
                          <input type="text" className="form-control" placeholder="City, Airport, Station, etc" />
                        </div>
                        <div className="form-group">
                          <label htmlFor className="label">Drop-off location</label>
                          <input type="text" className="form-control" placeholder="City, Airport, Station, etc" />
                        </div>
                        <div className="d-flex">
                          <div className="form-group mr-2">
                            <label htmlFor className="label">Pick-up date</label>
                            <input type="text" className="form-control" id="book_pick_date" placeholder="Date" />
                          </div>
                          <div className="form-group ml-2">
                            <label htmlFor className="label">Drop-off date</label>
                            <input type="text" className="form-control" id="book_off_date" placeholder="Date" />
                          </div>
                        </div>
                        <div className="form-group">
                          <label htmlFor className="label">Pick-up time</label>
                          <input type="text" className="form-control" id="time_pick" placeholder="Time" />
                        </div>
                        <div className="form-group">
                          <input type="submit" defaultValue="Search Vehicle" className="btn btn-primary py-3 px-4" />
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <section className="ftco-section ftco-no-pb ftco-no-pt">
                <div className="container">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="search-wrap-1 ftco-animate mb-5">
                        <form action="#" className="search-property-1">
                          <div className="row">
                            <div className="col-lg align-items-end">
                              <div className="form-group">
                                <label htmlFor="#">Select Model</label>
                                <div className="form-field">
                                  <div className="select-wrap">
                                    <div className="icon"><span className="ion-ios-arrow-down" /></div>
                                    <select name id className="form-control">
                                      <option value>Select Model</option>
                                      <option value>Model 1</option>
                                      <option value>Model 2</option>
                                      <option value>Model 3</option>
                                      <option value>Model 4</option>
                                      <option value>Model 5</option>
                                      <option value>Model 6</option>
                                      <option value>Model 7</option>
                                      <option value>Model 8</option>
                                      <option value>Model 9</option>
                                      <option value>Model 10</option>
                                    </select>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg align-items-end">
                              <div className="form-group">
                                <label htmlFor="#">Select Brand</label>
                                <div className="form-field">
                                  <div className="select-wrap">
                                    <div className="icon"><span className="ion-ios-arrow-down" /></div>
                                    <select name id className="form-control">
                                      <option value>Select Brand</option>
                                      <option value>Brand 1</option>
                                      <option value>Brand 2</option>
                                      <option value>Brand 3</option>
                                      <option value>Brand 4</option>
                                      <option value>Brand 5</option>
                                      <option value>Brand 6</option>
                                      <option value>Brand 7</option>
                                      <option value>Brand 8</option>
                                      <option value>Brand 9</option>
                                      <option value>Brand 10</option>
                                    </select>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg align-items-end">
                              <div className="form-group">
                                <label htmlFor="#">Year Model</label>
                                <div className="form-field">
                                  <div className="select-wrap">
                                    <div className="icon"><span className="ion-ios-arrow-down" /></div>
                                    <select name id className="form-control">
                                      <option value>Year Model</option>
                                      <option value>2019</option>
                                      <option value>2018</option>
                                      <option value>2017</option>
                                      <option value>2016</option>
                                      <option value>2015</option>
                                      <option value>2014</option>
                                    </select>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg align-items-end">
                              <div className="form-group">
                                <label htmlFor="#">Price Limit</label>
                                <div className="form-field">
                                  <div className="select-wrap">
                                    <div className="icon"><span className="ion-ios-arrow-down" /></div>
                                    <select name id className="form-control">
                                      <option value>$1</option>
                                      <option value>$50</option>
                                      <option value>$100</option>
                                      <option value>$200</option>
                                      <option value>$300</option>
                                      <option value>$400</option>
                                      <option value>$500</option>
                                      <option value>$600</option>
                                      <option value>$700</option>
                                      <option value>$800</option>
                                      <option value>$900</option>
                                      <option value>$1000</option>
                                    </select>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg align-self-end">
                              <div className="form-group">
                                <div className="form-field">
                                  <input type="submit" defaultValue="Search" className="form-control btn btn-primary" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section className="ftco-section services-section ftco-no-pt ftco-no-pb">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-md-12 heading-section text-center ftco-animate mb-5">
                      <span className="subheading">Our Services</span>
                      <h2 className="mb-2">Our Services</h2>
                    </div>
                  </div>
                  <div className="row d-flex">
                    <div className="col-md-3 d-flex align-self-stretch ftco-animate">
                      <div className="media block-6 services">
                        <div className="media-body py-md-4">
                          <div className="d-flex mb-3 align-items-center">
                            <div className="icon"><span className="flaticon-customer-support" /></div>
                            <h3 className="heading mb-0 pl-3">24/7 Car Support</h3>
                          </div>
                          <p>A small river named Duden flows by their place and supplies it with you</p>
                        </div>
                      </div>      
                    </div>
                    <div className="col-md-3 d-flex align-self-stretch ftco-animate">
                      <div className="media block-6 services">
                        <div className="media-body py-md-4">
                          <div className="d-flex mb-3 align-items-center">
                            <div className="icon"><span className="flaticon-route" /></div>
                            <h3 className="heading mb-0 pl-3">Lots of location</h3>
                          </div>
                          <p>A small river named Duden flows by their place and supplies it with you</p>
                        </div>
                      </div>      
                    </div>
                    <div className="col-md-3 d-flex align-self-stretch ftco-animate">
                      <div className="media block-6 services">
                        <div className="media-body py-md-4">
                          <div className="d-flex mb-3 align-items-center">
                            <div className="icon"><span className="flaticon-online-booking" /></div>
                            <h3 className="heading mb-0 pl-3">Reservation</h3>
                          </div>
                          <p>A small river named Duden flows by their place and supplies it with you</p>
                        </div>
                      </div>      
                    </div>
                    <div className="col-md-3 d-flex align-self-stretch ftco-animate">
                      <div className="media block-6 services">
                        <div className="media-body py-md-4">
                          <div className="d-flex mb-3 align-items-center">
                            <div className="icon"><span className="flaticon-rent" /></div>
                            <h3 className="heading mb-0 pl-3">Rental Cars</h3>
                          </div>
                          <p>A small river named Duden flows by their place and supplies it with you</p>
                        </div>
                      </div>      
                    </div>
                  </div>
                </div>
              </section>
              <section className="ftco-section">
                <div className="container-fluid px-4">
                  <div className="row justify-content-center">
                    <div className="col-md-12 heading-section text-center ftco-animate mb-5">
                      <span className="subheading">What we offer</span>
                      <h2 className="mb-2">Choose Your Car</h2>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-3">
                      <div className="car-wrap ftco-animate">
                        <div className="img d-flex align-items-end" style={{backgroundImage: 'url(images/car-1.jpg)'}}>
                          <div className="price-wrap d-flex">
                            <span className="rate">$25</span>
                            <p className="from-day">
                              <span>From</span>
                              <span>/Day</span>
                            </p>
                          </div>
                        </div>
                        <div className="text p-4 text-center">
                          <h2 className="mb-0"><a href="#">Mercedes Grand Sedan</a></h2>
                          <span>Audi</span>
                          <p className="d-flex mb-0 d-block"><a href="#" className="btn btn-black btn-outline-black mr-1">Book now</a> <a href="#" className="btn btn-black btn-outline-black ml-1">Details</a></p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="car-wrap ftco-animate">
                        <div className="img d-flex align-items-end" style={{backgroundImage: 'url(images/car-2.jpg)'}}>
                          <div className="price-wrap d-flex">
                            <span className="rate">$25</span>
                            <p className="from-day">
                              <span>From</span>
                              <span>/Day</span>
                            </p>
                          </div>
                        </div>
                        <div className="text p-4 text-center">
                          <h2 className="mb-0"><a href="#">Mercedes Grand Sedan</a></h2>
                          <span>Ford</span>
                          <p className="d-flex mb-0 d-block"><a href="#" className="btn btn-black btn-outline-black mr-1">Book now</a> <a href="#" className="btn btn-black btn-outline-black ml-1">Details</a></p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="car-wrap ftco-animate">
                        <div className="img d-flex align-items-end" style={{backgroundImage: 'url(images/car-3.jpg)'}}>
                          <div className="price-wrap d-flex">
                            <span className="rate">$25</span>
                            <p className="from-day">
                              <span>From</span>
                              <span>/Day</span>
                            </p>
                          </div>
                        </div>
                        <div className="text p-4 text-center">
                          <h2 className="mb-0"><a href="#">Mercedes Grand Sedan</a></h2>
                          <span>Cheverolet</span>
                          <p className="d-flex mb-0 d-block"><a href="#" className="btn btn-black btn-outline-black mr-1">Book now</a> <a href="#" className="btn btn-black btn-outline-black ml-1">Details</a></p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="car-wrap ftco-animate">
                        <div className="img d-flex align-items-end" style={{backgroundImage: 'url(images/car-4.jpg)'}}>
                          <div className="price-wrap d-flex">
                            <span className="rate">$25</span>
                            <p className="from-day">
                              <span>From</span>
                              <span>/Day</span>
                            </p>
                          </div>
                        </div>
                        <div className="text p-4 text-center">
                          <h2 className="mb-0"><a href="#">Mercedes Grand Sedan</a></h2>
                          <span>Mercedes</span>
                          <p className="d-flex mb-0 d-block"><a href="#" className="btn btn-black btn-outline-black mr-1">Book now</a> <a href="#" className="btn btn-black btn-outline-black ml-1">Details</a></p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="car-wrap ftco-animate">
                        <div className="img d-flex align-items-end" style={{backgroundImage: 'url(images/car-5.jpg)'}}>
                          <div className="price-wrap d-flex">
                            <span className="rate">$25</span>
                            <p className="from-day">
                              <span>From</span>
                              <span>/Day</span>
                            </p>
                          </div>
                        </div>
                        <div className="text p-4 text-center">
                          <h2 className="mb-0"><a href="#">Mercedes Grand Sedan</a></h2>
                          <span>Audi</span>
                          <p className="d-flex mb-0 d-block"><a href="#" className="btn btn-black btn-outline-black mr-1">Book now</a> <a href="#" className="btn btn-black btn-outline-black ml-1">Details</a></p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="car-wrap ftco-animate">
                        <div className="img d-flex align-items-end" style={{backgroundImage: 'url(images/car-6.jpg)'}}>
                          <div className="price-wrap d-flex">
                            <span className="rate">$25</span>
                            <p className="from-day">
                              <span>From</span>
                              <span>/Day</span>
                            </p>
                          </div>
                        </div>
                        <div className="text p-4 text-center">
                          <h2 className="mb-0"><a href="#">Mercedes Grand Sedan</a></h2>
                          <span>Ford</span>
                          <p className="d-flex mb-0 d-block"><a href="#" className="btn btn-black btn-outline-black mr-1">Book now</a> <a href="#" className="btn btn-black btn-outline-black ml-1">Details</a></p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="car-wrap ftco-animate">
                        <div className="img d-flex align-items-end" style={{backgroundImage: 'url(images/car-7.jpg)'}}>
                          <div className="price-wrap d-flex">
                            <span className="rate">$25</span>
                            <p className="from-day">
                              <span>From</span>
                              <span>/Day</span>
                            </p>
                          </div>
                        </div>
                        <div className="text p-4 text-center">
                          <h2 className="mb-0"><a href="#">Mercedes Grand Sedan</a></h2>
                          <span>Cheverolet</span>
                          <p className="d-flex mb-0 d-block"><a href="#" className="btn btn-black btn-outline-black mr-1">Book now</a> <a href="#" className="btn btn-black btn-outline-black ml-1">Details</a></p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="car-wrap ftco-animate">
                        <div className="img d-flex align-items-end" style={{backgroundImage: 'url(images/car-8.jpg)'}}>
                          <div className="price-wrap d-flex">
                            <span className="rate">$25</span>
                            <p className="from-day">
                              <span>From</span>
                              <span>/Day</span>
                            </p>
                          </div>
                        </div>
                        <div className="text p-4 text-center">
                          <h2 className="mb-0"><a href="#">Mercedes Grand Sedan</a></h2>
                          <span>Mercedes</span>
                          <p className="d-flex mb-0 d-block"><a href="#" className="btn btn-black btn-outline-black mr-1">Book now</a> <a href="#" className="btn btn-black btn-outline-black ml-1">Details</a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section className="ftco-section services-section img" style={{backgroundImage: 'url(images/bg_2.jpg)'}}>
                <div className="overlay" />
                <div className="container">
                  <div className="row justify-content-center mb-5">
                    <div className="col-md-7 text-center heading-section heading-section-white ftco-animate">
                      <span className="subheading">Work flow</span>
                      <h2 className="mb-3">How it works</h2>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-3 d-flex align-self-stretch ftco-animate">
                      <div className="media block-6 services services-2">
                        <div className="media-body py-md-4 text-center">
                          <div className="icon d-flex align-items-center justify-content-center"><span className="flaticon-route" /></div>
                          <h3>Pick Destination</h3>
                          <p>A small river named Duden flows by their place and supplies it with you</p>
                        </div>
                      </div>      
                    </div>
                    <div className="col-md-3 d-flex align-self-stretch ftco-animate">
                      <div className="media block-6 services services-2">
                        <div className="media-body py-md-4 text-center">
                          <div className="icon d-flex align-items-center justify-content-center"><span className="flaticon-select" /></div>
                          <h3>Select Term</h3>
                          <p>A small river named Duden flows by their place and supplies it with you</p>
                        </div>
                      </div>      
                    </div>
                    <div className="col-md-3 d-flex align-self-stretch ftco-animate">
                      <div className="media block-6 services services-2">
                        <div className="media-body py-md-4 text-center">
                          <div className="icon d-flex align-items-center justify-content-center"><span className="flaticon-rent" /></div>
                          <h3>Choose A Car</h3>
                          <p>A small river named Duden flows by their place and supplies it with you</p>
                        </div>
                      </div>      
                    </div>
                    <div className="col-md-3 d-flex align-self-stretch ftco-animate">
                      <div className="media block-6 services services-2">
                        <div className="media-body py-md-4 text-center">
                          <div className="icon d-flex align-items-center justify-content-center"><span className="flaticon-review" /></div>
                          <h3>Enjoy The Ride</h3>
                          <p>A small river named Duden flows by their place and supplies it with you</p>
                        </div>
                      </div>      
                    </div>
                  </div>
                </div>
              </section>
              <section className="ftco-section testimony-section">
                <div className="container">
                  <div className="row justify-content-center mb-5">
                    <div className="col-md-7 text-center heading-section ftco-animate">
                      <span className="subheading">Testimonial</span>
                      <h2 className="mb-3">Happy Clients</h2>
                    </div>
                  </div>
                  <div className="row ftco-animate">
                    <div className="col-md-12">
                      <div className="carousel-testimony owl-carousel ftco-owl">
                        <div className="item">
                          <div className="testimony-wrap text-center py-4 pb-5">
                            <div className="user-img mb-4" style={{backgroundImage: 'url(images/person_1.jpg)'}}>
                            </div>
                            <div className="text pt-4">
                              <p className="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                              <p className="name">Roger Scott</p>
                              <span className="position">Marketing Manager</span>
                            </div>
                          </div>
                        </div>
                        <div className="item">
                          <div className="testimony-wrap text-center py-4 pb-5">
                            <div className="user-img mb-4" style={{backgroundImage: 'url(images/person_2.jpg)'}}>
                            </div>
                            <div className="text pt-4">
                              <p className="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                              <p className="name">Roger Scott</p>
                              <span className="position">Interface Designer</span>
                            </div>
                          </div>
                        </div>
                        <div className="item">
                          <div className="testimony-wrap text-center py-4 pb-5">
                            <div className="user-img mb-4" style={{backgroundImage: 'url(images/person_3.jpg)'}}>
                            </div>
                            <div className="text pt-4">
                              <p className="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                              <p className="name">Roger Scott</p>
                              <span className="position">UI Designer</span>
                            </div>
                          </div>
                        </div>
                        <div className="item">
                          <div className="testimony-wrap text-center py-4 pb-5">
                            <div className="user-img mb-4" style={{backgroundImage: 'url(images/person_1.jpg)'}}>
                            </div>
                            <div className="text pt-4">
                              <p className="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                              <p className="name">Roger Scott</p>
                              <span className="position">Web Developer</span>
                            </div>
                          </div>
                        </div>
                        <div className="item">
                          <div className="testimony-wrap text-center py-4 pb-5">
                            <div className="user-img mb-4" style={{backgroundImage: 'url(images/person_1.jpg)'}}>
                            </div>
                            <div className="text pt-4">
                              <p className="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                              <p className="name">Roger Scott</p>
                              <span className="position">System Analyst</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section className="ftco-section ftco-no-pt ftco-no-pb">
                <div className="container">
                  <div className="row no-gutters">
                    <div className="col-md-6 p-md-5 img img-2 d-flex justify-content-center align-items-center" style={{backgroundImage: 'url(images/about.jpg)'}}>
                    </div>
                    <div className="col-md-6 wrap-about py-md-5 ftco-animate">
                      <div className="heading-section mb-5 pl-md-5">
                        <span className="subheading">About us</span>
                        <h2 className="mb-4">Choose A Perfect Car</h2>
                        <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                        <p>On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country. But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their agency, where they abused her for their.</p>
                        <p><a href="#" className="btn btn-primary">Search Vehicle</a></p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section className="ftco-section">
                <div className="container">
                  <div className="row justify-content-center mb-5">
                    <div className="col-md-7 heading-section text-center ftco-animate">
                      <span className="subheading">Blog</span>
                      <h2>Recent Blog</h2>
                    </div>
                  </div>
                  <div className="row d-flex">
                    <div className="col-md-4 d-flex ftco-animate">
                      <div className="blog-entry justify-content-end">
                        <a href="blog-single.html" className="block-20" style={{backgroundImage: 'url("images/image_1.jpg")'}}>
                        </a>
                        <div className="text pt-4">
                          <div className="meta mb-3">
                            <div><a href="#">July. 24, 2019</a></div>
                            <div><a href="#">Admin</a></div>
                            <div><a href="#" className="meta-chat"><span className="icon-chat" /> 3</a></div>
                          </div>
                          <h3 className="heading mt-2"><a href="#">Why Lead Generation is Key for Business Growth</a></h3>
                          <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 d-flex ftco-animate">
                      <div className="blog-entry justify-content-end">
                        <a href="blog-single.html" className="block-20" style={{backgroundImage: 'url("images/image_2.jpg")'}}>
                        </a>
                        <div className="text pt-4">
                          <div className="meta mb-3">
                            <div><a href="#">July. 24, 2019</a></div>
                            <div><a href="#">Admin</a></div>
                            <div><a href="#" className="meta-chat"><span className="icon-chat" /> 3</a></div>
                          </div>
                          <h3 className="heading mt-2"><a href="#">Why Lead Generation is Key for Business Growth</a></h3>
                          <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 d-flex ftco-animate">
                      <div className="blog-entry">
                        <a href="blog-single.html" className="block-20" style={{backgroundImage: 'url("images/image_3.jpg")'}}>
                        </a>
                        <div className="text pt-4">
                          <div className="meta mb-3">
                            <div><a href="#">July. 24, 2019</a></div>
                            <div><a href="#">Admin</a></div>
                            <div><a href="#" className="meta-chat"><span className="icon-chat" /> 3</a></div>
                          </div>
                          <h3 className="heading mt-2"><a href="#">Why Lead Generation is Key for Business Growth</a></h3>
                          <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>		
              <footer className="ftco-footer ftco-bg-dark ftco-section">
                <div className="container">
                  <div className="row mb-5">
                    <div className="col-md">
                      <div className="ftco-footer-widget mb-4">
                        <h2 className="ftco-heading-2">About Autoroad</h2>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
                          <li className="ftco-animate"><a href="#"><span className="icon-twitter" /></a></li>
                          <li className="ftco-animate"><a href="#"><span className="icon-facebook" /></a></li>
                          <li className="ftco-animate"><a href="#"><span className="icon-instagram" /></a></li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-md">
                      <div className="ftco-footer-widget mb-4 ml-md-5">
                        <h2 className="ftco-heading-2">Information</h2>
                        <ul className="list-unstyled">
                          <li><a href="#" className="py-2 d-block">About</a></li>
                          <li><a href="#" className="py-2 d-block">Services</a></li>
                          <li><a href="#" className="py-2 d-block">Term and Conditions</a></li>
                          <li><a href="#" className="py-2 d-block">Best Price Guarantee</a></li>
                          <li><a href="#" className="py-2 d-block">Privacy &amp; Cookies Policy</a></li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-md">
                      <div className="ftco-footer-widget mb-4">
                        <h2 className="ftco-heading-2">Customer Support</h2>
                        <ul className="list-unstyled">
                          <li><a href="#" className="py-2 d-block">FAQ</a></li>
                          <li><a href="#" className="py-2 d-block">Payment Option</a></li>
                          <li><a href="#" className="py-2 d-block">Booking Tips</a></li>
                          <li><a href="#" className="py-2 d-block">How it works</a></li>
                          <li><a href="#" className="py-2 d-block">Contact Us</a></li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-md">
                      <div className="ftco-footer-widget mb-4">
                        <h2 className="ftco-heading-2">Have a Questions?</h2>
                        <div className="block-23 mb-3">
                          <ul>
                            <li><span className="icon icon-map-marker" /><span className="text">203 Fake St. Mountain View, San Francisco, California, USA</span></li>
                            <li><a href="#"><span className="icon icon-phone" /><span className="text">+2 392 3929 210</span></a></li>
                            <li><a href="#"><span className="icon icon-envelope" /><span className="text">info@yourdomain.com</span></a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12 text-center">
                      <p>{/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                        Copyright © All rights reserved | This template is made with <i className="icon-heart color-danger" aria-hidden="true" /> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                        {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}</p>
                    </div>
                  </div>
                </div>
              </footer>
              {/* loader */}
              <div id="ftco-loader" className="show fullscreen"><svg className="circular" width="48px" height="48px"><circle className="path-bg" cx={24} cy={24} r={22} fill="none" strokeWidth={4} stroke="#eeeeee" /><circle className="path" cx={24} cy={24} r={22} fill="none" strokeWidth={4} strokeMiterlimit={10} stroke="#F96D00" /></svg></div>
            </div>
          );
        }
      };
    

export default Test
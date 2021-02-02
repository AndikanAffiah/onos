import {useState, useEffect} from 'react'
import Head from 'next/head'
import Link from 'next/link'

export default function Home() {

   const [styleState,setStyleState] = useState({
      backgroundColor: "#edcabd"
   })
   const [styler, setStyler] = useState(true)

   useEffect(()=> {
      setTimeout(e => {setStyleState(prev => ({...prev,opacity:"none"})); setStyler(false)}, 800)
   },[styler])

   return (
    <>
    <div data-spy="scroll" data-target=".navbar" data-offset="82">
    <Head>
      <link rel="stylesheet" href="css/main.css" type="text/css"/>
    </Head>
   
      {styler ? (<div className="site-loader" style={styleState}>
         <div className="loader-dots">
            
            <div className="circle circle-1"></div>
            <div className="circle circle-2"></div>
         </div>
      </div>) : (<div></div>)}
      <nav className="navbar" id="myNavbar">
         <div className="container ">
            <div className="navbar-header ">
               <button data-target="#navbarCollapse" data-toggle="collapse" className="navbar-toggle collapsed" type="button">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar top"></span>
                  <span className="icon-bar mid"></span>
                  <span className="icon-bar btm"></span>
               </button>
               <a href="#hero" className="site-logo navbar-brand"><img src="images/ezo.png" alt="" className="logo" /></a>
            </div>
            <div id="navbarCollapse" className="collapse navbar-collapse ">
               <ul className="nav navbar-nav navbar-right " id="nav_bar">
                  <li><a href="#about">About Cryptency</a></li>
                  <li><a href="#buy-token">Token</a></li>
                  <li><a href="#service">Services</a></li>
                  <li><a href="#roadmap">roadmap</a></li>
                  <li><a href="#faq-section">Faq</a></li>
                  <li><a href="#contact">Contact</a></li>
                  <li>
                     <Link href="/login">
                        <a className="menu-btn">Signup</a>
                     </Link>
                  </li>
               </ul>
            </div>
         </div>
      </nav>
      <section className="" id="hero">
         <div className="banner burger  align-item-center parallax">
            <div className="container">
               <div className="row align-item-center mt3">
                  <div className="col-sm-6 col-lg-6 ">
                     <div className="banner-text">
                        <h1 className="wow fadeIn" data-wow-delay="1s" data-wow-duration="2s"><strong className="template-color">Cryptency</strong> the future of virtual Money</h1>
                        <p className="big-pera">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedconsectetur adipiscing  do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <div className="mt3 banner-btn-group">
                           {/* <a href="#white-paper" className="redirect-btn btn-alpha ">WHITE PAPER </a>     */}
                           <a href="#token-distribution" className="redirect-btn btn-alpha ">TOKEN DISTRIBUTION  </a>    
                        </div>
                     </div>
                  </div>
                  <div className="col-sm-6 col-lg-5 col-lg-offset-1">
                     <div className="timer-box text-center">
                        <h2 className="mt0 ">ICO ENDS IN </h2>
                        <div className="timer">
                           <div className="days"></div>
                           <div className="hours"></div>
                           <div className="minutes"></div>
                           <div className="seconds"></div>
                        </div>
                        <div className="timer-text"> <span><em className="template-color">1 CTY</em> = 0.002 BTC</span><i></i><span>10K customer trust us</span></div>
                        <a href="#contact" className="redirect-btn btn-alpha mt3">BUY COIN</a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
      <section id="about">
         <div className="about-cryptency burger">
            <div className="container">
               <div className="row align-item-center">
                  <div className="col-sm-5 col-sm-offset-1 col-sm-push-6">
                     <img src="images/chart.png" alt="frame" className="cryptency-graph img-responsive"/>
                  </div>
                  <div className="col-sm-6 col-sm-pull-6">
                     <h2 >What is Cryptency ICO</h2>
                     <p className="big-pera">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto.</p>
                     <div className="check-list mt2">
                        <div className="media">
                           <img src="images/checked.svg" alt="cehck" width="30" className="pull-left"/>
                           <div className="media-body">
                              <h3>Bitcoin calculate.</h3>
                           </div>
                        </div>
                        <div className="media">
                           <img src="images/checked.svg" alt="cehck" width="30" className="pull-left"/>
                           <div className="media-body">
                              <h3>Money Expanding for each trade.</h3>
                           </div>
                        </div>
                        <div className="media">
                           <img src="images/checked.svg" alt="cehck" width="30" className="pull-left"/>
                           <div className="media-body">
                              <h3>Sell and  buy bitcoin, Entherem, Other crypto.</h3>
                           </div>
                        </div>
                     </div>
                     <a href="#special-about" className="redirect-btn btn mt3 btn-alpha">Know more </a>
                  </div>
               </div>
            </div>
         </div>
         <div className="pross-grid light-bg">
            <div className="container">
               <div className="row align-item-center">
                  <div className="col-sm-3">
                     <h2>Why cryptency ?</h2>
                  </div>
                  <div className="col-sm-9 right-bdr">
                     <div className="row text-center">
                        <div className="pross-item col-sm-3">
                           <img src="images/icon1.png" alt="logo" width="65" />
                           <h3>Accepted Worldwide</h3>
                        </div>
                        <div className="pross-item col-sm-3">
                           <img src="images/icon2.png" alt="logo" width="65" />
                           <h3>Decentralised Currency</h3>
                        </div>
                        <div className="pross-item col-sm-3">
                           <img src="images/icon3.png" alt="logo" width="65" />
                           <h3>Safe And Secure</h3>
                        </div>
                        <div className="pross-item col-sm-3">
                           <img src="images/icon4.png" alt="logo" width="65" />
                           <h3>Low Inflation Risk</h3>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="burger about-special" id="special-about">
            <div className="container">
               <div className="row align-item-center">
                  <div className="col-sm-12 col-lg-7">
                     <div className="gradient-bg">
                        <div className="benifit-contant">
                           <h2 className="mt0">What's special  about cryptency</h2>
                           <p className="big-pera" >Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto.</p>
                           <a href="#" className="mt2 btn-white">BUY NOW</a>
                        </div>
                     </div>
                  </div>
                  <div className="col-sm-12 col-lg-5 ">
                     <div className="benifit-box">
                        <div className="row">
                           <div className="media-item col-sm-6">
                              <div className="media mb3">
                                 <img src="images/icon1.png" alt="secure" className="pull-left" width="50"/>
                                 <div className="media-body">
                                    <h3>Accepted Worldwide</h3>
                                 </div>
                              </div>
                           </div>
                           <div className="col-sm-6 media-item">
                              <div className="media mb3">
                                 <img src="images/icon2.png" alt="secure" className="pull-left" width="50"/>
                                 <div className="media-body">
                                    <h3>Decentralised Currency</h3>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="row">
                           <div className="col-sm-6 media-item">
                              <div className="media ">
                                 <img src="images/icon3.png" alt="secure" className="pull-left" width="50"/>
                                 <div className="media-body">
                                    <h3>Safe And Secure</h3>
                                 </div>
                              </div>
                           </div>
                           <div className="col-sm-6 media-item">
                              <div className="media ">
                                 <img src="images/icon4.png" alt="secure" className="pull-left" width="50"/>
                                 <div className="media-body">
                                    <h3>Low Inflation Risk</h3>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
      <section id="buy-token">
         <div className="burger gray-light-bg">
            <div className="container">
               <div className="row">
                  <div className="col-lg-6 col-lg-offset-3  text-center mb5">
                     <h2>How to buy  cryptency token</h2>
                     <p className="big-pera">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
                  </div>
               </div>
               <div className="row guter align-item-end">
                  <div className="col-sm-5 col-xs-12">
                     <div className="buy-step">
                        <span>01</span>
                        <h3>Sign In</h3>
                     </div>
                     <div className="buy-step">
                        <span>02</span>
                        <h3>Connect</h3>
                     </div>
                     <div className="buy-step">
                        <span>03</span>
                        <h3>Buy & Sale</h3>
                     </div>
                     <div className="mt3 card-accepted">
                        <h4 >Card Accepted</h4>
                        <div className="payment-cards">
                           <i className="fa fa-cc-visa"></i>
                           <i className="fa fa-cc-mastercard"></i>   
                           <i className="fa fa-cc-paypal"></i>
                           <i className="fa fa-credit-card-alt"></i>
                        </div>
                     </div>
                  </div>
                  <div className="col-sm-7 col-xs-12">
                     <div className="timer-box text-center">
                        <h2 className="mt0">ICO ENDS IN </h2>
                        <div  className="timer">
                           <div className="days"></div>
                           <div className="hours"></div>
                           <div className="minutes"></div>
                           <div className="seconds"></div>
                        </div>
                        <a href="#" className="btn-alpha">Join & Buy Now </a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="burger " id="token-distribution">
            <div className="container">
               <div className="row align-item-center">
                  <div className="col-sm-5 ">
                     <img src="images/distribution.png" alt="distribution" className="cryptency-graph img-responsive"/>
                  </div>
                  <div className="col-sm-6 col-sm-offset-1">
                     <h2>Distribution of cryptency ?</h2>
                     <p className="big-pera">Enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                  </div>
               </div>
            </div>
         </div>
      </section>
      <section className="burger light-bg" id="service" >
         <div className="container">
            <div className="row align-item-center">
               <div className="col-sm-12 col-lg-4">
                  <h2>You can be do lots of things with creptency as we provide</h2>
                  <p className="big-pera">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto.</p>
               </div>
               <div className="col-lg-8 col-sm-12">
                  <div className="services-list">
                     <div className="service-box">
                        <img src="images/investment.svg" className="img-responsive" alt="creptency"/>
                        <span>Investments</span>
                     </div>
                     <div className="service-box">
                        <img src="images/digital-cash.svg" className="img-responsive" alt="creptency"/>
                        <span>Digital cash</span>
                     </div>
                     <div className="service-box">
                        <img src="images/fast-transaction.svg" className="img-responsive" alt="creptency"/>
                        <span>Fast trasaction</span>
                     </div>
                     <div className="service-box">
                        <img src="images/bitcoin-shopping.svg" className="img-responsive" alt="creptency"/>
                        <span>Bitcoin shopping</span>
                     </div>
                     <div className="service-box">
                        <img src="images/payment-integration.svg" className="img-responsive" alt="creptency"/>
                        <span>Payment integration</span>
                     </div>
                     <div className="service-box">
                        <img src="images/investment.svg" className="img-responsive" alt="creptency"/>
                        <span>Investments</span>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
      <section className="burger roadmap" id="roadmap">
         <div className="container">
            <div className="row">
               <h2 className="text-center mb5">Roadmap</h2>
               <div className="col-sm-12">
                  <div className="roadmap-list">
                     <div className="road-item">
                        <div className="road-content">
                           <h3>12 January, 2018</h3>
                           <p>Sed ut perspiciatis unde omnis</p>
                           <span className="road-year">1</span>
                        </div>
                     </div>
                     <div className="road-item big">
                        <div className="road-content">
                           <h3>2 March, 2018 </h3>
                           <p>Sed ut perspiciatis unde omnis</p>
                           <span className="road-year">2</span>
                        </div>
                     </div>
                     <div className="road-item">
                        <div className="road-content">
                           <h3>25 May, 2018</h3>
                           <p>Sed ut perspiciatis unde omnis</p>
                           <span className="road-year">3</span>
                        </div>
                     </div>
                     <div className="road-item big">
                        <div className="road-content">
                           <h3>1 July, 2018</h3>
                           <p>Sed ut perspiciatis unde omnis</p>
                           <span className="road-year">4</span>
                        </div>
                     </div>
                     <div className="road-item ">
                        <div className="road-content">
                           <h3>5 September, 2018</h3>
                           <p>Sed ut perspiciatis unde omnis</p>
                           <span className="road-year">5</span>
                        </div>
                     </div>
                     <div className="road-item big">
                        <div className="road-content">
                           <h3>3 January, 2019</h3>
                           <p>Sed ut perspiciatis unde omnis</p>
                           <span className="road-year">6</span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
      <section className="burger light-bg" id="reviews">
         <div className="container">
            <div className="row">
               <div className="col-lg-12 reviews">
                  <h2 className=" text-center mb5">What our clients are saying !</h2>
                  <i className="hudge-quote fa fa-quote-left "></i>
                  <div id="review-slider" className=" carousel slide" data-ride="carousel">
                     <ol className="carousel-indicators ">
                        <li data-target="#review-slider" data-slide-to="0" className="active"></li>
                        <li data-target="#review-slider" data-slide-to="1"></li>
                        <li data-target="#review-slider" data-slide-to="2"></li>
                     </ol>
                     <div className="carousel-inner">
                        <div className="item active">
                           <div className="media">
                              <div className="media-left"><img src="images/bitcoin.png"   alt="author"/></div>
                              <div className="media-body media-middle">
                                 <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto.</p>
                                 <span className="author-name text-muted"><strong>- Jany Doe</strong></span>  
                              </div>
                           </div>
                        </div>
                        <div className="item">
                           <div className="media">
                              <div className="media-left "><img  src="images/bitcoin.png" alt="author"/></div>
                              <div className="media-body media-middle">
                                 <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto.</p>
                                 <span className="author-name text-muted"><strong>- Jany Doe</strong></span>  
                              </div>
                           </div>
                        </div>
                        <div className="item">
                           <div className="media">
                              <div className="media-left "><img  src="images/bitcoin.png" alt="author"/></div>
                              <div className="media-body media-middle">
                                 <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto.</p>
                                 <span className="author-name text-muted"><strong>- Jany Doe</strong></span>  
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <i className="hudge-quote fa fa-quote-right "></i>
               </div>
            </div>
         </div>
      </section>
      <section className="burger cta gradient-bg">
         <div className="container">
            <div className="row align-item-center">
               <div className="col-md-1 col-sm-2">
                  <img src="images/clock.svg" width="70" alt="clock"/>
               </div>
               <div className="col-sm-8 col-md-9 ">
                  <h2> Sale Ends on <span className="date">21 September 2018 | 23:59 GMT</span></h2>
               </div>
               <div className="col-sm-2 col-md-2">
                  <a href="#"  className="btn-white"> Buy Now</a>
               </div>
            </div>
         </div>
      </section>
      <section className="burger our-partners gray-light-bg" id="partners" >
         <div className="container text-center">
            <h2 className="mb5">Our Partners</h2>
            <div className="row partners-list">
               <div className="col-sm-3 col-xs-6">
                  <img src="images/partner1.png" alt="BIT COin" className="img-responsive"/>
               </div>
               <div className="col-sm-3 col-xs-6">
                  <img src="images/partner2.png" alt="BIT COin" className="img-responsive"/>
               </div>
               <div className="col-sm-3 col-xs-6">
                  <img src="images/partner3.png" alt="BIT COin" className="img-responsive"/>
               </div>
               <div className="col-sm-3 col-xs-6">
                  <img src="images/partner2.png" alt="BIT COin" className="img-responsive"/>
               </div>
               <div className="col-sm-3 col-xs-6">
                  <img src="images/partner3.png" alt="BIT COin" className="img-responsive"/>
               </div>
               <div className="col-sm-3 col-xs-6">
                  <img src="images/partner1.png" alt="BIT COin" className="img-responsive"/>
               </div>
            </div>
         </div>
      </section>
      <section className="burger faq " id="faq-section" >
         <div className="container ">
            <h2 className="text-center mb5">FAQ</h2>
            <div className="row align-item-center">
               <div className="faq-box">
                  <div className="faq-icon"><img className="img-responsive" src="images/faq-icon.svg" alt="questions"/></div>
                  <div className="col-sm-12">
                     <div className=" panel-group" id="accordion">
                        <div className="panel">
                           <span>01.</span>
                           <div className="panel-heading ">
                              <div className="" data-toggle="collapse" data-parent="#accordion" data-target="#collapse1">
                                 Why is this landing page ?
                              </div>
                           </div>
                           <div id="collapse1" className="panel-collapse collapse in">
                              <div className="panel-body">Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                 sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                              </div>
                           </div>
                        </div>
                        <div className="panel">
                           <span>02.</span>
                           <div className="panel-heading ">
                              <div  className=" collapsed" data-toggle="collapse" data-parent="#accordion" data-target="#collapse2">
                                 How can you support upgrade ?
                              </div>
                           </div>
                           <div id="collapse2" className="panel-collapse collapse">
                              <div className="panel-body">Lorem ipsum dolor sit amet, consectetur adipisicing elit
                                 quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                              </div>
                           </div>
                        </div>
                        <div className="panel">
                           <span>03.</span>
                           <div className="panel-heading ">
                              <div className="margin-0 collapsed" data-toggle="collapse" data-parent="#accordion" data-target="#collapse3">
                                 Do you support upgrade ?
                              </div>
                           </div>
                           <div id="collapse3" className="panel-collapse collapse">
                              <div className="panel-body">Loren enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
      <section className=" burger light-bg" id="contact">
         <div className="container">
            <div className="row align-item-center">
               <div className="col-sm-7 col-sm-offset-1  ">
                  <div className="contact-form">
                     <h2 className="text-center mb5">Send a message </h2>
                     <form id="ajax-contact" method="post" action="https://www.pixelspeaks.com/demo/cryptency/cryptency-light/contact-mail.php" >
                        <div id="form-messages" className="notification contact"></div>
                        <div className="row">
                           <div className="col-sm-6">
                              <div className="form-group">
                                 <input  id="first_name" className="form-control" name="first_name" required="" type="text" />  
                                 <label >First Name :</label>
                              </div>
                           </div>
                           <div className="col-sm-6">
                              <div className="form-group">
                                 <input id="last_name" className="form-control" name="last_name" required="" type="text" placeholder=""/> 
                                 <label >Last Name :</label>
                              </div>
                           </div>
                        </div>
                        <div className="form-group">
                           <input id="email" className="form-control" name="email" required="" type="text" placeholder=""/>
                           <label >Email :</label>
                        </div>
                        <div className="form-group">
                           <textarea id="message" className="form-control" name="message" rows="5" required="" placeholder=""></textarea>
                           <label >Message :</label>
                        </div>
                        <button type="submit" className="btn-white"> SUBMIT</button>
                     </form>
                  </div>
               </div>
               <div className="col-sm-4 col-sm-pull-1">
                  <div className="contact-info">
                     <h3 className="text-center mb3 mt0">Contact me </h3>
                     <div className="contact-item">
                        <img src="images/phone.svg" alt="dasasdfsdf" className="pull-left" width="55"/>
                        <span>+1234 234235423 </span>
                     </div>
                     <div className="contact-item">
                        <img src="images/mail.svg" alt="dasasdfsdf" className="pull-left" width="55"/>
                        <span>jhonedoe@mail.com </span>
                     </div>
                     <div className="contact-item">
                        <img src="images/location.svg" alt="dasasdfsdf" className="pull-left" width="55"/>
                        <span>321 B, Doe houes, Country</span>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
      <footer className="footer burger ">
         <div className="container">
            <div className="row">
               <div className="subscribe-box col-sm-12 text-center">
                  <span className="circular-at"><img src="images/at.svg" alt="at" /></span>
                  <h2 className="mb5 text-capitalize">Subscribe our Newsletter for free Update & News</h2>
                  <form action="https://www.pixelspeaks.com/demo/cryptency/cryptency-light/newsletter.php" id="subscribe_now" className="subscribe-form" method="post">
                     <div id="mail-messages" className="notification subscribe"></div>
                     <i className="fa fa-envelope"></i>
                     <input type="email" name="subscribe_email" id="subscribe_email" className="subscribe-input" placeholder="Ente your email address" required/>
                     <button type="submit" className="btn-alpha" >SUBSCRIBE NOW</button>
                  </form>
               </div>
               <div className="text-center col-sm-12">
                  <ul className="social list-unstyled">
                     <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                     <li><a href="#"><i className="fa fa-dribbble"></i></a></li>
                     <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                     <li><a href="#"><i className="fa fa-behance"></i></a></li>
                  </ul>
                  <p className="copyright">All rights reserved <a href="#" className="template-color"><strong>PS Themes</strong></a> Copyright &copy; 2018</p>
               </div>
            </div>
         </div>
      </footer>
      <script src="js/jquery3.2.1.min.js"></script>
      <script src="js/bootstrap.min.js"></script> 
      <script src="js/main.js"></script>
  

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
    </>
  )
}

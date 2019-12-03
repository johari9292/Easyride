import React from 'react'


    const Contact =() =>{
        return(
           <div>
                <section id="contact" className="padd-section wow fadeInUp">
    <div className="container">
      <div className="section-title text-center">
        <h2>Contact</h2>
        <p className="separator">
          Please Contact us for your Query
        </p>
      </div>
    </div>
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-3 col-md-4">
          <div className="info">
            <div>
              <i className="fa fa-map-marker" />
              <p>
                Computer Engineering Department
                <br />
                University of Engineering &amp; Technology
                <br/>
                Lahore, Pakistan
              </p>
            </div>
            <div className="email">
              <i className="fa fa-envelope" />
              <p>joharibalti1996@gmail.com</p>
            </div>
            <div>
              <i className="fa fa-phone" />
              <p>+92 343 8160801 </p>
            </div>
          </div>
          <div className="social-links">
            <a href="!#" className="twitter">
              <i className="fa fa-twitter" />
            </a>
            <a href="!#" className="facebook">
              <i className="fa fa-facebook" />
            </a>
            <a href="!#" className="instagram">
              <i className="fa fa-instagram" />
            </a>
            <a href="!#" className="google-plus">
              <i className="fa fa-google-plus" />
            </a>
            <a href="!#" className="linkedin">
              <i className="fa fa-linkedin" />
            </a>
          </div>
        </div>
        <div className="col-lg-5 col-md-8">
          <div className="form">
            <div id="sendmessage">Your message has been sent. Thank you!</div>
            <div id="errormessage" />
            <form action method="post" role="form" className="contactForm">
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  id="name"
                  placeholder="Your Name"
                  data-rule="minlen:4"
                  data-msg="Please enter at least 4 chars"
                />
                <div className="validation" />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  id="email"
                  placeholder="Your Email"
                  data-rule="email"
                  data-msg="Please enter a valid email"
                />
                <div className="validation" />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  name="subject"
                  id="subject"
                  placeholder="Subject"
                  data-rule="minlen:4"
                  data-msg="Please enter at least 8 chars of subject"
                />
                <div className="validation" />
              </div>
              <div className="form-group">
                <textarea
                  className="form-control"
                  name="message"
                  rows={5}
                  data-rule="required"
                  data-msg="Please write something for us"
                  placeholder="Message"
                  defaultValue={""}
                />
                <div className="validation" />
              </div>
              <div className="text-center">
                <button type="submit" onSubmit ={()=><p>Thank you for messaging we will replay you soon</p>}>Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
 
           </div>
        )
    }
    



export default Contact
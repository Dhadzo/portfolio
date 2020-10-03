import React from "react";


class Contact extends React.Component {
  render() {
    return (
      <section
        className="paralax-mf footer-paralax bg-image sect-mt4 route"
        style={{ backgroundImage: "url( https://c4.wallpaperflare.com/wallpaper/344/980/911/mozilla-firefox-mozilla-night-forest-wallpaper-preview.jpg" }}
      >
        <div className="overlay-mf"></div>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="contact-mf">
                <div id="contact" className="box-shadow-full">
                  <div className="row">
                   
                    <div className="col-md-6">
                      <div className="title-box-2 pt-4 pt-md-0">
                        <h5 className="title-left">Get in Touch</h5>
                      </div>
                      <div className="more-info">
                        <p className="lead">
                        Looking for a passionate, dedicated and creative junior full stack software developer.
                        Contact me through the following social media plartforms.
                        </p>
                        <ul className="list-ico">
                                <li><span className="ion-ios-location"></span> Cape Town / South Africa</li>
                                <li><span className="ion-ios-telephone"></span> +27 62 005 5667</li>
                                <li><span className="ion-email"></span> <a href="mailto:tafamanza11@gmail.com" target="_blank" rel="noopener noreferrer">tafamanza11@gmail.com</a></li>
                                </ul> 
                      </div>
                      <div className="socials">
                        <ul>
                        
                          <li>
                            <a
                              href="https://www.linkedin.com/in/tafadzwa-manzarame-4a5113111/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <span className="ico-circle">
                                <i className="ion-social-linkedin"></i>
                              </span>
                            </a>
                          </li>
                          
                          <li>
                            <a
                              href="https://www.instagram.com/tafadzwa11/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <span className="ico-circle">
                                
                                <i className="ion-social-instagram"></i>
                              </span>
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://twitter.com/tafamanza"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <span className="ico-circle">
                                
                                <i className="ion-social-twitter"></i>
                              </span>
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://www.facebook.com/tafadzwa.manzarame/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <span className="ico-circle">
                                
                                <i className="ion-social-facebook"></i>
                              </span>
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://github.com/Dhadzo"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <span className="ico-circle">
                                <i className="ion-social-github"></i>
                              </span>
                            </a>
                          </li>

                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer>
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="copyright-box">
                   <p className="copyright">2020 &copy; <strong>TM</strong> </p> 
                </div>
              </div>
            </div>
          </div>
        </footer>
      </section>
    );
  }
}

export default Contact;

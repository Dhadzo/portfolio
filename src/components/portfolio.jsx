import React from "react";

import Dice from '../img/dice.png';
import Calculator from '../img/calculator.png';
import Responsive from '../img/responsive.png';
import PortfolioImg from '../img/portfolio.PNG';
import Bev from  '../img/bev.png';
import Weather from '../img/weather.png';
import Notes from '../img/notes.png';
import Budget from '../img/budget.png';
import Forkify from '../img/forkify.png';
import StudyMate from '../img/studymate.PNG'
import Clothing from '../img/clothing.PNG'





class Portfolio extends React.Component {
  render() {
    return (
      <section id="work" className="portfolio-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">Portfolio</h3>
                <p className="subtitle-a">
                  My Projects <br / >

                </p>
                <div className="line-mf"></div>
              </div>
            </div>
          </div>

           {/* Project 1 */}
          <div className="row">
            <div className="col-md-4">
              <div className="work-box">
                
                  <div className="work-img">
                    <a href="https://tafadzwa-study-mate.herokuapp.com/">  
                    <img src={StudyMate} 
                        alt="dice-game"  
                        className="img-fluid">
                    </img>   
                    </a>
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">StudyMate</h2>
                        <p class="box-info">A social platform for students created using Reactjs and Nodejs </p>
                        <iconify-icon data-icon="dashicons:html"></iconify-icon>
                        <iconify-icon data-icon="bx:bxs-file-css"></iconify-icon>
                        <iconify-icon data-icon="mdi:language-javascript"></iconify-icon>                       
                    

                      </div>
                      <div className="col-sm-4">
                        <div className="socials">
                        <a href="https://github.com/Dhadzo/study-mate" target="_blank" rel="noopener noreferrer">
                              <span className="ico-circle">
                                <i className="ion-social-github"></i>
                              </span>
                            </a>
                        </div>
                      </div>
                    </div>
                  </div>
 

           {/* Project 2  */}
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
              
                  <div className="work-img">
                    <a href="https://tafadzwa-clothing.herokuapp.com">
                       <img src={Clothing} alt="Calculator" className="img-fluid"></img> 
                    </a>
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Crwn Clothing</h2>
                        <p class="box-info">An ecommerce website created using Reactjs, Redux, and firebase.</p>
                        <iconify-icon data-icon="dashicons:html"></iconify-icon>
                        <iconify-icon data-icon="bx:bxs-file-css"></iconify-icon>
                        <iconify-icon data-icon="mdi:language-javascript"></iconify-icon>  
                        

                      </div>
                      <div className="col-sm-4">
                        <div className="socials">
                        <a href="https://github.com/Dhadzo/crwn-clothing" target="_blank" rel="noopener noreferrer">
                              <span className="ico-circle">
                                <i className="ion-social-github"></i>
                              </span>
                            </a>
                        </div>
                      </div>
                    </div>
                  </div>
             

             {/* Project 3 */}
              </div>
            </div>
              <div className="col-md-4">
              <div className="work-box">
               
                  <div className="work-img">
                  <img src={PortfolioImg} alt="Responsive-webpage" className="img-fluid"></img>
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">My Portfolio</h2>
                        <p class="box-info">This portfolio was created using React.js </p> 
                        <iconify-icon data-icon="dashicons:html"></iconify-icon>
                        <iconify-icon data-icon="bx:bxs-file-css"></iconify-icon>
                        <iconify-icon data-icon="mdi:language-javascript"></iconify-icon>  
                        
                      </div>
                      <div className="col-sm-4">
                      <div className="socials">
                        <a href="https://github.com/AD757/Responsive-website" target="_blank" rel="noopener noreferrer">
                              <span className="ico-circle">
                                <i className="ion-social-github"></i>
                              </span>
                            </a>
                            </div>
                      </div>
                    </div>
                  </div>
              {/* Project 4 */}
              </div>
            </div>
          
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;

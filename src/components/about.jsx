import React from "react";
import male1 from "../img/male1.png";

class About extends React.Component {
  constructor() {
    super();
    this.state = {

      about_me: [
        {
          id: "first-p-about",
          content:
            "My name is Tafadzwa. I am a passionate junior software developer with a strong background in maths. I am very enthusiastic about the MEAN stack and I enjoy working on complex backend systems that challenge me to think outside my comfort set."
        },
        {
          id: "second-p-about",
          content:
            ""
        },
        {
          id: "third-p-about",
          content:
            "When not coding, I usually indulge myself into books, specifically biographies. I also enjoy watching documentaries."
        },
      ]
    };
  }

  render() {
    return (
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="row">
                      <div
                        className="col-sm-6 col-md-5"
                        style={{ margin: "0 auto" }}
                      >
                        <div
                          className="about-img"
                          style={{ textAlign: "center" }}
                        >
						          {/* <img src={male1} alt="profile pic"
							        style={{height: 250 + "px", width: 250 + "px"}} /> */}
                        </div>
                      </div>
                    </div>
                    
                    <div className="col-md-6">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">Skills</h5>
                      </div>

                          <div className="skills-text">
                          <p>
                          <iconify-icon data-icon="logos:javascript"></iconify-icon> Javascript <br/> <br/>
                          <iconify-icon data-icon="logos:typescript"></iconify-icon> Typescript  <br/> <br/>
                          <iconify-icon data-icon="logos:react"></iconify-icon>  React JS  <br/> <br/>
                          <iconify-icon data-icon="logos:redux"></iconify-icon> Redux  <br/> <br/>
                          <iconify-icon data-icon="logos:nodejs"></iconify-icon> Node JS  <br/> <br/>
                          <iconify-icon data-icon="logos:mongodb"></iconify-icon> Mongodb  <br/> <br/>
                          <iconify-icon data-icon="logos:css-3"></iconify-icon> CSS / CSS3  <br/> <br/>
                          {/* <iconify-icon data-icon="logos:sass"></iconify-icon> SASS <br/> <br/> */}
                          <iconify-icon data-icon="logos:html-5"></iconify-icon>  HTML / HTML5 <br/> <br/>
                          <iconify-icon data-icon="logos:docker"></iconify-icon> Docker  <br/> <br/>


                          </p>
                          </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">About Me</h5>
                      </div>
                      {this.state.about_me.map(content => {
                        return (
                          <p className="lead" key={content.id}>
                            {content.content}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;

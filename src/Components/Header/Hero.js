import { useEffect } from "react";
import $ from "jquery";
import Typed from "typed.js";
import ResumeDownloadBtn from "../ResumeDownloadBtn";
import heroimg from "../../Assets/jeroimg.png";
export default function Hero() {
  useEffect(() => {
    // Ensure jQuery and Typed.js are loaded and DOM is ready
    if ($(".hero .hero-text h2").length === 1) {
      var typed_strings = $(".hero .hero-text .typed-text").text();
      var typed = new Typed(".hero .hero-text h2", {
        strings: typed_strings.split(", "),
        typeSpeed: 100,
        backSpeed: 20,
        smartBackspace: false,
        loop: true,
      });

      // Cleanup function to destroy the Typed instance
      return () => {
        typed.destroy();
      };
    }
  }, []);

  return (
    <>
      <div className="hero" id="home">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-sm-12 col-md-6">
              <div className="hero-content">
                <div className="hero-text">
                  <p>I'm</p>
                  <h1>Tanisha Hegde</h1>
                  <h2></h2>
                  <div className="typed-text">
                    Software Developer, Cloud Engineer,
                  </div>
                </div>
                <div className="hero-btn">
                  <ResumeDownloadBtn />
                  <a className="btn" href="">
                    Contact Me
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 d-none d-md-block">
              <div className="hero-image">
                <img src={heroimg} alt="Hero Image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

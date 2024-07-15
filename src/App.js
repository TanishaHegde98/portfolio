import "./App.css";
import React from "react";
import Header from "./Components/Header/Header";
import { useState, useEffect } from "react";
import About from "./Components/About/About";
import Projects from "./Components/Projects/Projects";
import $ from "jquery";
import WOW from "wowjs";
import "wowjs/css/libs/animate.css";
import "jquery.easing";
import Contact from "./Components/Contact";
import Skills from "./Components/Skills/Skills";
import Footer from "./Components/Header/Footer";
import Work from "./Components/Experience/Work";
import Education from "./Components/Experience/Education";
import Testimonials from "./Components/Testimonials/Testimonials";
import Certificates from "./Components/Certificates";
function App() {
  const [showAbout, setShowAbout] = useState(false);
  const [showProjects, setShowPrograms] = useState(true);
  useEffect(() => {
    // loader
    const loader = () => {
      setTimeout(() => {
        if ($("#loader").length > 0) {
          $("#loader").removeClass("show");
        }
      }, 1);
    };
    loader();

    // Initiate the wowjs
    new WOW.WOW().init();

    // Back to top button
    $(window).scroll(function () {
      if ($(this).scrollTop() > 200) {
        $(".back-to-top").fadeIn("slow");
      } else {
        $(".back-to-top").fadeOut("slow");
      }
    });

    $(".back-to-top").click(function () {
      $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
      return false;
    });
  }, []);
  return (
    <div className="App">
      <Header
        setShowAbout={setShowAbout}
        showAbout={showAbout}
        showPrograms={showProjects}
        setShowPrograms={setShowPrograms}
      ></Header>
      <div className="mt-24">
        <About></About>
      </div>
      <Projects></Projects>
      <Skills></Skills>
      <Testimonials></Testimonials>
      <Work></Work>
      <Certificates></Certificates>
      <Education></Education>
      <Contact></Contact>;<Footer></Footer>
    </div>
  );
}

export default App;

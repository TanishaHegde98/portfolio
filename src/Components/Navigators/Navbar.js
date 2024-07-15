import { useEffect } from "react";
import $ from "jquery";

export default function NavBar({}) {
  useEffect(() => {
    // Sticky Navbar
    $(window).scroll(function () {
      if ($(this).scrollTop() > 0) {
        $(".navbar").addClass("nav-sticky");
      } else {
        $(".navbar").removeClass("nav-sticky");
      }
    });

    // Smooth scrolling on the navbar links
    $(".navbar-nav a").on("click", function (event) {
      if (this.hash !== "") {
        event.preventDefault();

        $("html, body").animate(
          {
            scrollTop: $(this.hash).offset().top - 45,
          },
          1500,
          "easeInOutExpo"
        );

        if ($(this).parents(".navbar-nav").length) {
          $(".navbar-nav .active").removeClass("active");
          $(this).closest("a").addClass("active");
        }
      }
    });

    // Cleanup function to remove event listeners
    return () => {
      $(window).off("scroll");
      $(".navbar-nav a").off("click");
    };
  }, []);

  return (
    <div className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <a href="index.html" className="navbar-brand">
          Cloud Symphony
        </a>
        <button
          type="button"
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-between"
          id="navbarCollapse"
        >
          <div className="navbar-nav ml-auto  text-white">
            <a href="#home" className="nav-item nav-link active">
              Home
            </a>
            <a href="#about" className="nav-item nav-link">
              About
            </a>
            <a href="#service" className="nav-item nav-link">
              Service
            </a>
            <a href="#experience" className="nav-item nav-link">
              Experience
            </a>
            <a href="#portfolio" className="nav-item nav-link">
              Portfolio
            </a>
            <a href="#price" className="nav-item nav-link">
              Price
            </a>
            <a href="#review" className="nav-item nav-link">
              Review
            </a>
            <a href="#team" className="nav-item nav-link">
              Team
            </a>
            <a href="#blog" className="nav-item nav-link">
              Blog
            </a>
            <a href="#contact" className="nav-item nav-link">
              Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

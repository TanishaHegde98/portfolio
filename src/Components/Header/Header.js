import NavBar from "../Navigators/Navbar";
import myimg from "../../Assets/myimg.jpg";
import Hero from "./Hero.js";

export default function Header({
  setShowAbout,
  showAbout,
  showPrograms,
  setShowPrograms,
}) {
  return (
    <div className="">
      {/* <NavBar></NavBar> */}
      <Hero></Hero>
    </div>
  );
}

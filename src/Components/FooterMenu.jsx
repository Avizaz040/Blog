import { useContext } from "react";
import { ThemeContext } from "../Context-Api/ThemeContext";

function FooterMenu() {
 const {theme} = useContext(ThemeContext);
  return (
    <div className="w-[80%] grid grid-cols-1 lg:grid-cols-4 gap-16">
          <div className="text-center lg:text-left">
            <h5 className="font-[Inter] text-[19px] font-semibold pb-6">
              Discover
            </h5>
            <div className={`flex flex-col gap-2 font-[Roboto] lg:text-[15px] ${ theme === "dark" ? "text-white/50" : "text-[#333333]" }`}>
              <a href="#">Miami</a>
              <a href="#">New York</a>
              <a href="#">Chicago</a>
              <a href="#">Florida</a>
              <a href="#">Los Angeles</a>
              <a href="#">San Diego</a>
            </div>
          </div>
          <div className="text-center lg:text-left">
            <h5 className="font-[Inter] text-[19px] font-semibold pb-6">
              Quick Links
            </h5>
            <div className={`flex flex-col gap-2 font-[Roboto] lg:text-[15px] ${ theme === "dark" ? "text-white/50" : "text-[#333333]" }`}>
              <a href="#">About</a>
              <a href="#">Contact</a>
              <a href="#">FAQ&apos;s</a>
              <a href="#">Blog</a>
              <a href="#">Pricing Plans</a>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms & Conditions</a>
            </div>
          </div>
          <div className="text-center lg:text-left">
            <h5 className="font-[Inter] text-[19px] font-semibold pb-6">
              Discover
            </h5>
            <div className={`flex flex-col gap-2 font-[Roboto] lg:text-[15px] ${ theme === "dark" ? "text-white/50" : "text-[#333333]" }`}>
              <a href="#">Miami</a>
              <a href="#">New York</a>
              <a href="#">Chicago</a>
              <a href="#">Florida</a>
              <a href="#">Los Angeles</a>
              <a href="#">San Diego</a>
            </div>
          </div>
          <div className="text-center lg:text-left">
            <h5 className="font-[Inter] text-[19px] font-semibold pb-6">
              Quick Links
            </h5>
            <div className={`flex flex-col gap-2 font-[Roboto] lg:text-[15px] ${ theme === "dark" ? "text-white/50" : "text-[#333333]" }`}>
              <a href="#">About</a>
              <a href="#">Contact</a>
              <a href="#">FAQ&apos;s</a>
              <a href="#">Blog</a>
              <a href="#">Pricing Plans</a>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms & Conditions</a>
            </div>
          </div>
    </div>
  );
}

export default FooterMenu;

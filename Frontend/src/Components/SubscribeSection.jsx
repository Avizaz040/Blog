import { useContext } from "react";
import OfferIcon from "../assets/Icons/OfferIcon.png";
import { AuthContext } from "../Context-Api/AuthContext";
function SubscribeSection() {
  const { theme } = useContext(AuthContext);
  return (
    <>
    <themeProvider>
      <div className={`flex flex-col justify-center items-center gap-[16px] lg:py-6 ${ theme === "dark" ? "text-white bg-gray-800" : "text-black bg-white"}`}>
        <div className="flex justify-center items-center gap-2">
          <img
            src={OfferIcon}
            alt="offerIcon"
            className="transform rotate-180 scale-y-[-1] h-8"
          />
          <h1 className="text-md lg:text-3xl font-bold font-[DM]">Limited Offer</h1>
          <img src={OfferIcon} alt="offerIcon" className="h-8" />
        </div>
        <p className={`text-sm text-center font-[Poppins] text-[#666666] ${ theme === "dark" ? "text-white bg-gray-800" : "text-black bg-white" }`}>
          Subscribe today and get exclusive access to premium content!
        </p>

        <div className="h-[38px] w-full lg:h-[78px] lg:w-[778px] border-[1px] border-[#1067CB] flex flex-col items-center lg:flex-row justify-between  py-[6px] lg:pl-[28px] lg:pr-[6px] rounded-[19px] gap-4 lg:gap-2">
          <input
            type="text"
            placeholder="Enter your e-mail to subscribe"
            className={`w-4/5 lg:w-2/3 font-[Inter] font-[400] outline-none placeholder:text-[16px] text-center lg:text-left ${ theme === "dark" ? "text-white bg-gray-800" : "text-black bg-white"}`}
          />
          <button className="py-[10px] px-[42px] lg:py-[18px] lg:px-[54px] rounded-[13px] bg-[#1067CB] text-white font-[Inter] text-[16px] lg:text-[24px] leading-[29.05px]">
            Subscribe
          </button>
        </div>
      </div>
      </themeProvider>
    </>
  );
}

export default SubscribeSection;

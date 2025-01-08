import React from "react";
import OfferIcon from "../assets/Icons/OfferIcon.png";
function SubscribeSection() {
  return (
    <div className="py-6">
    <div className="flex flex-col justify-center items-center gap-[16px]">
      <div className="flex justify-center items-center gap-2">
        <img
          src={OfferIcon}
          alt="offerIcon"
          className="transform rotate-180 scale-y-[-1] h-8"
        />
        <h1 className="text-3xl font-bold font-[DM]">Limited Offer</h1>
        <img src={OfferIcon} alt="offerIcon" className="h-8" />
      </div>
      <p className="font-[Poppins] text-[#666666]">
        Subscribe today and get exclusive access to premium content!
      </p>

      <div className="h-[78px] w-[778px] border-[1px] border-[#1067CB] flex justify-between py-[6px] pl-[28px] pr-[6px] rounded-[19px] gap-2">
        <input
          type="text"
          placeholder="Enter your E-mail to subscribe"
          className="w-2/3 font-[Inter] font-[400] outline-none placeholder:text-[16px]"
        />
        <button className="py-[18px] px-[54px] rounded-[13px] bg-[#1067CB] text-white font-[Inter] text-[24px] leading-[29.05px]">
          Subscribe
        </button>
      </div>
    </div>
    </div>
  );
}

export default SubscribeSection;

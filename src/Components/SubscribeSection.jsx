import OfferIcon from "../assets/Icons/OfferIcon.png";
function SubscribeSection() {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-[16px] lg:py-6">
        <div className="flex justify-center items-center gap-2">
          <img
            src={OfferIcon}
            alt="offerIcon"
            className="transform rotate-180 scale-y-[-1] h-8"
          />
          <h1 className="text-md lg:text-3xl font-bold font-[DM]">Limited Offer</h1>
          <img src={OfferIcon} alt="offerIcon" className="h-8" />
        </div>
        <p className="text-sm text-center font-[Poppins] text-[#666666]">
          Subscribe today and get exclusive access to premium content!
        </p>

        <div className="h-[38px] w-[280px] lg:h-[78px] lg:w-[778px] border-[1px] border-[#1067CB] flex flex-col items-center lg:flex-row justify-between  py-[6px] lg:pl-[28px] pr-[6px] rounded-[19px] gap-4 lg:gap-2">
          <input
            type="text"
            placeholder="Enter your E-mail to subscribe"
            className="w-2/3 font-[Inter] font-[400] outline-none placeholder:text-[16px]"
          />
          <button className="py-[10px] px-[42px] lg:py-[18px] lg:px-[54px] rounded-[13px] bg-[#1067CB] text-white font-[Inter] text-[16px] lg:text-[24px] leading-[29.05px]">
            Subscribe
          </button>
        </div>
      </div>
    </>
  );
}

export default SubscribeSection;

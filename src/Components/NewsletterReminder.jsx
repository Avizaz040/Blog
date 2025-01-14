import React from "react";

function NewsletterReminder() {
  return (
    <div className="w-full py-8">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-[20px] py-10">
        <div className="flex flex-col justify-center items-start gap-2 ">
          <h1 className="text-[20px] lg:text-3xl font-bold font-[DM]">Newsletter Reminder</h1>
          <p className="font-[Poppins] text-[#666666]">
            Subscribe today and get exclusive access to premium content!
          </p>
        </div>
        <div className="h-[38px] w-full lg:h-[78px] lg:w-[778px] border-[1px] border-[#1067CB] flex flex-col items-center lg:flex-row justify-between  py-[6px] lg:pl-[28px] lg:pr-[6px] rounded-[19px] gap-4 lg:gap-2">
          <input
            type="text"
            placeholder="Enter your e-mail to subscribe"
            className="w-4/5 lg:w-2/3 font-[Inter] font-[400] outline-none placeholder:text-[16px] text-center"
          />
          <button className="py-[10px] px-[42px] lg:py-[18px] lg:px-[54px] rounded-[13px] bg-[#1067CB] text-white font-[Inter] text-[16px] lg:text-[20px] lg:leading-[18px]">
            Subscribe
          </button>
        </div>
      </div>
      <div className="w-[85%] h-[1px] bg-[#0075FA] opacity-[40%] my-12 mx-auto "></div>
    </div>
  );
}

export default NewsletterReminder;

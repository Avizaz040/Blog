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
        <div className="h-[45px] w-[280px] lg:h-[66px] lg:w-[570px] border-[1px] border-[#1067CB] flex flex-col lg:flex-row justify-between  py-[8px] lg:py-[6px] px-4 lg:pl-[28px] pr-[16px] lg:pr-[6px] rounded-[19px] gap-6 lg:gap-2">
          <input
            type="text"
            placeholder="Enter your E-mail to subscribe"
            className="w-full lg:w-2/3 font-[Inter] font-[400] outline-none placeholder:text-[16px]"
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

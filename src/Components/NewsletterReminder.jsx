import React from "react";

function NewsletterReminder() {
  return (
    <div className="py-8">
      <div className="flex justify-between items-center gap-[16px] py-10">
        <div className="flex flex-col justify-center items-start gap-2 ">
          <h1 className="text-3xl font-bold font-[DM]">Newsletter Reminder</h1>
          <p className="font-[Poppins] text-[#666666]">
            Subscribe today and get exclusive access to premium content!
          </p>
        </div>
        <div className="h-[66px] w-[570px] border-[1px] border-[#1067CB] flex justify-between py-[6px] pl-[28px] pr-[6px] rounded-[19px] gap-2">
          <input
            type="text"
            placeholder="Enter your E-mail to subscribe"
            className="w-2/3 font-[Inter] font-[400] outline-none placeholder:text-[16px]"
          />
          <button className="py-[18px] px-[54px] rounded-[13px] bg-[#1067CB] text-white font-[Inter] text-[20px] leading-[18px]">
            Subscribe
          </button>
        </div>
      </div>
      <div className="w-[95%] h-[1px] bg-[#0075FA] opacity-[40%] my-12 mx-auto "></div>
    </div>
  );
}

export default NewsletterReminder;

import React from "react";

function Section5() {
  return (
    <div className="min-h-50 flex flex-col justify-center items-center ">
      <div className="h-full w-98 flex justify-center items-center  ">
        <div className="h-full w-81  flex flex-col justify-start items-center gap-2 mt-10">
            <h1 className="font-bold text-md lg:text-2xl">Know What <span className="text-newpurple font-Inter">Guruconnect</span> Offers you</h1>
            <p className="font-semibold text-xs text-center lg:text-md">Discover Your Path to Success with GuruConnect's Tailored Solutions</p>
            <div className="flex flex-col lg:flex-row items-center w-full min-h-50  gap-4">
                    <div className=" w-full lg:w-25 bg-card flex flex-col justify-around items-center h-5/6 min-h-35 rounded-lg mt-2">
                        <img src="call.png" alt="" />
                        <p className="text-center text-sm text-card-text font-semibold"> <span className="font-Inter text-2xl">Calls</span><br/>Have free Phone calls <br/>with your mentors</p>
                    </div>
                    <div className="w-full lg:w-25 bg-card flex flex-col justify-evenly items-center h-5/6   min-h-35 rounded-lg mt-2">
                        <img src="text.png" alt="" />
                        <p className="text-center text-sm text-card-text font-semibold"> <span className="font-Inter text-2xl">Free Chat</span><br/> Chat with your mentors</p>
                    </div>
                    <div className="w-full lg:w-25 bg-card flex flex-col justify-evenly items-center h-5/6  min-h-35 rounded-lg mt-2">
                        <img src="meeting.png" alt="" />
                        <p className="text-center text-sm text-card-text font-semibold"> <span className="font-Inter text-2xl">1:1 sessions</span><br/>Take 1 on 1 sessions </p>
                    </div>
                    <div className="w-full lg:w-25 bg-card flex flex-col justify-evenly items-center h-5/6 min-h-35 rounded-lg mt-2">
                        <img src="referal.png" alt="" />
                        <p className="text-center text-sm text-card-text font-semibold"> <span className="font-Inter text-2xl">Job Referal</span><br/>Something which is<br/> related to referal</p>
                    </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Section5;

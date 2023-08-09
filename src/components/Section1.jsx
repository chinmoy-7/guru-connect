import React from "react";

function Section1() {
  return (
    <>
      <div className="h-65 flex justify-center items-center ">
        <div className="h-full w-98 flex justify-center items-center  bg-gradient-to-r from-rgba-purple to-white">
          <div className="  h-5/6 w-81 flex lg:bg-section1 bg-contain bg-no-repeat lg:bg-section-right">
            <div className=" h-full w-1/2 flex justify-center items-start flex-col gap-5">
              <h1 className="text-5xl font-Inter">
                Why <br />
                <span className="text-newpurple ">Guru Connect</span>
              </h1>
              <p className="text-2xl font-Inter">
                Using Mentors and Mentees in a thriving Community
              </p>
              <div className="flex mt-10 justify-between w-5/6 items-center">
                <button
                  className="button lg:h-12 rounded-lg lg:w-40 border bg-gradient-to-r 
                    text-lg font-Inter hover:text-xl hover:border-4 hover:ease-in-out duration-500 text-newpurple from-rgba-purple-btn to-white border-black"
                >
                  Free Chat
                </button>
                <p className="text-sm">
                  Have a first chat with a guru for{" "}
                  <span className="font-Inter">FREE</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section1;

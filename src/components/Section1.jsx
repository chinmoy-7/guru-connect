import React from "react";
import { Link } from "react-router-dom";
function Section1() {
  return (
    <>
      <div className="min-h-45   lg:h-65 flex justify-center items-center ">
        <div className="min-h-45 lg:h-full w-98 flex justify-center items-center   bg-gradient-to-r from-rgba-purple to-white">
          <div className="  h-5/6 w-81 flex lg:bg-section1 bg-contain bg-no-repeat lg:bg-section-right">
            <div className=" h-full w-full lg:w-1/2 flex justify-center  items-center lg:items-start  flex-col gap-5">
              <h1 className=" text-3xl  md:text-4xl lg:text-5xl font-Inter">
                Why <br className=" hidden md:hidden lg:flex" />
                <span className="text-newpurple ">Guru Connect</span>
              </h1>
              <p className="lg:text-2xl md:text-3xl text-center lg:text-left text-xs font-Inter">
                Using Mentors and Mentees in a thriving Community
              </p>
              <div className="flex mt-10 justify-between w-full lg:w-5/6 items-center gap-4">
                <Link
                  to="/contact"
                  className="button flex justify-center  md:w-38 lg:h-12 rounded-lg h-10 w-1/2 lg:w-40 border bg-gradient-to-r 
                    text-lg font-Inter hover:text-xl hover:border-4 hover:ease-in-out duration-500 text-newpurple from-rgba-purple-btn to-white border-black"
                >
                  <button className="">Free Chat</button>
                </Link>
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

import React from "react";

function Section4() {
  return (
    <div className="min-h-35 flex flex-col justify-center items-center ">
      <div className="min-h-20 w-98 flex justify-center items-center">
        <div className="min-h-20 w-81  flex flex-col">
          <div className="w-full min-h-35   mt-6">
            <h1 className="font-Inter text-xl lg:text-3xl mb-10 text-center">
              Become a Guru Just 3 Easy Steps
            </h1>
            <div className="flex min-h-20 w-full flex-col gap-6 md:flex-row items-center justify-center ">
              <div className="min-h-20 w-full lg:w-1/3 flex flex-col items-center justify-start">
                <div className="flex  w-full h-4/6 items-center justify-center gap-5">
                  <img src="enroll.png" alt="" />
                  <h1 className="text-4xl font-Inter text-black/30 hidden lg:flex"> &gt; </h1>
                </div>
                <div className="text-center w-4/5 flex flex-col gap-3">
                  <h1 className="font-Inter text-xl">Enroll</h1>
                  <p className="text-center">
                    It is long established fact that a reader 
                    will be distracted by readable
                    
                    content
                  </p>
                </div>
              </div>
              <div className="min-h-20 w-full lg:w-1/3 flex flex-col items-center justify-start">
                <div className="flex  w-full h-4/6 items-center justify-center gap-5">
                  <img src="decide.png" alt="" />
                  <h1 className="text-4xl font-Inter text-black/30 hidden lg:flex"> &gt; </h1>
                </div>
                <div className="text-center w-4/5 flex flex-col gap-3">
                  <h1 className="font-Inter text-xl">Decide How</h1>
                  <p className="text-center">
                    It is long established fact that a reader 
                    will be distracted by readable
                    
                    content
                  </p>
                </div>
              </div>
              <div className="min-h-20 w-full lg:w-1/3 flex flex-col items-center justify-start">
                <div className="flex  w-full h-4/6 items-center justify-center gap-5">
                  <img src="welcome.png" alt="" />
                  <h1 className="text-4xl font-Inter text-black/30 hidden lg:flex"> &gt; </h1>
                </div>
                <div className="text-center w-4/5 flex flex-col gap-3">
                  <h1 className="font-Inter text-xl">Welcome</h1>
                  <p className="text-center">
                    It is long established fact that a reader 
                    will be distracted by readable
                    
                    content
                  </p>
                </div>
              </div>

            </div>
          </div>
          <div className="w-full min-h-10 flex justify-center items-center">
            <button className="bg-newpurple w-4/6  lg:w-1/5 rounded-2xl  h-10 text-white font-2xl font-Inter">
              Start Mentoring Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section4;

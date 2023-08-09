import React from "react";

function Section4() {
  return (
    <div className="h-60 flex flex-col justify-center items-center ">
      <div className="h-full w-98 flex justify-center items-center">
        <div className="h-full w-81  flex flex-col">
          <div className="w-full h-90 -500 mt-6">
            <h1 className="font-Inter text-3xl text-center">
              Become a Guru Just 3 Easy Steps
            </h1>
            <div className="flex h-full w-full items-center justify-center ">
              <div className="h-full w-1/3 flex flex-col items-center justify-start">
                <div className="flex  w-full h-4/6 items-center justify-center gap-5">
                  <img src="enroll.png" alt="" />
                  <h1 className="text-4xl font-Inter text-black/30"> &gt; </h1>
                </div>
                <div className="text-center w-4/5 flex flex-col gap-3">
                  <h1 className="font-Inter text-xl">Enroll</h1>
                  <p className="text-center">
                    It is long established fact that a reader <br />
                    will be distracted by readable
                    <br />
                    content
                  </p>
                </div>
              </div>
              <div className="h-full w-1/3 flex flex-col items-center justify-start">
                <div className="flex  w-full h-4/6 items-center justify-center gap-5">
                  <img src="decide.png" alt="" />
                  <h1 className="text-4xl font-Inter text-black/30"> &gt; </h1>
                </div>
                <div className="text-center w-4/5 flex flex-col gap-3">
                  <h1 className="font-Inter text-xl">Decide How</h1>
                  <p className="text-center">
                    It is long established fact that a reader <br />
                    will be distracted by readable
                    <br />
                    content
                  </p>
                </div>
              </div>
              <div className="h-full w-1/3 flex flex-col items-center justify-start">
                <div className="flex  w-full h-4/6 items-center justify-center gap-5">
                  <img src="welcome.png" alt="" className="pr-10" />
                </div>
                <div className="text-center w-4/5 flex flex-col gap-3">
                  <h1 className="font-Inter text-xl ">Enroll</h1>
                  <p className="text-center">
                    It is long established fact that a reader <br />
                    will be distracted by readable
                    <br />
                    content
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-1/6 flex justify-center items-center">
            <button className="bg-newpurple w-1/5 rounded-2xl  h-4/6 text-white font-2xl font-Inter">
              Start Mentoring Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section4;

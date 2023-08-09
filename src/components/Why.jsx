import React from "react";

function Why() {
  return (
    <>
      <div className="h-75 flex flex-col justify-center items-center ">
        <h1 className="font-Inter text-3xl mt-6  mb-4">Why do we need guru?</h1>
        <div className="h-full w-98 flex justify-center items-center ">
          <div className="h-full w-81  flex ">
            <div className="w-1/3 h-full bg-section2 bg-no-repeat"></div>
            <div className=" w-2/3 flex flex-wrap justify-start items-start gap-2">
              {/* <div className='w-40 h-1/2  flex  items-center justify-around'> */}
              <img src="gain.png" alt="" className=" bg-contain" />
              <img src="build.png" alt="" className=" bg-contain" />
              <img src="confidence.png" alt="" className=" bg-contain" />
              <img src="expand.png" alt="" className=" bg-contain" />
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Why;
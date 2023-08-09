import React, { useState } from "react";

function Section6() {
  const [show, setShow] = useState({one:false,two:false,three:false,four:false,five:false});
  const showLessMore=(field)=>{
    if(field=="1")
    setShow({...show,one:!show.one})
    if(field=="2")
    setShow({...show,two:!show.two})
    if(field=="3")
    setShow({...show,three:!show.three})
    if(field=="4")
    setShow({...show,four:!show.four})
    if(field=="5")
    setShow({...show,five:!show.five})
  }
  console.log(show)
  console.log(show)
  return (
    <div className=" min-h-65 flex flex-col justify-center items-center bg-gradient-to-l from-rgba-purple to-white ">
      <div className="h-full w-98 flex justify-center items-center   ">
        <div className="h-full w-81  flex flex-col  justify-start  items-center gap-6">
          <h1 className="text-newpurple font-Inter text-3xl">
              Got Stuck Somewhere?{" "}
          </h1>
          <p className="font-semibold text-3xl">
          No Worries, Find Your Answer Below!
          </p>
          <div className="flex justify-start w-full h-full ">
            <div className="w-1/2 h-4/6 flex justify-center">
              <img src="confused.png" alt="" />
            </div>
            <div className="w-2/3 h-5/6 flex items-center flex-col gap-4">
              <h1 className="text-center font-Inter text-3xl">FAQs</h1>


              <div className="flex gap-4 ">
                <h2 className="text-2xl text-newpurple font-Inter">01</h2>
                <div>
                  <p className="font-Inter text-lg">
                    How does the mentorship program work?
                    <br />
                  </p>
                  <p
                    className={`${
                      show.one==true ? " max-h-52 opacity-100" : "max-h-0 opacity-0"
                    } max-h-0 opacity-0 overflow-hidden transition-max-height transition-opacity duration-600 ease-in-out`}
                  >
                    The mentorship program connects mentors with mentees based
                    on shared interests and goals. Mentors offer guidance,
                    support, and knowledge to help mentees upskill and achieve
                    their objectives.
                  </p>
                </div>
                <button onClick={(e)=>showLessMore("1")} className=" flex font-Inter justify-center items-center text-xl border-2  border-black rounded-full h-7 w-14 ">
                  {show.one?"-":"+"}
                </button>
              </div>
              <hr className="w-full  bg-black" />

              
              <div className="flex gap-4">
                <h2 className="text-2xl text-newpurple font-Inter">02</h2>
                <div>
                  <p className="font-Inter text-lg">
                  What are the benefits of becoming a mentor?
                    <br />
                  </p>
                  <p
                    className={`${
                      show.two==true ? " max-h-52 opacity-100" : "max-h-0 opacity-0"
                    } max-h-0 opacity-0 overflow-hidden transition-max-height transition-opacity duration-600 ease-in-out`}
                  >
                    The mentorship program connects mentors with mentees based
                    on shared interests and goals. Mentors offer guidance,
                    support, and knowledge to help mentees upskill and achieve
                    their objectives.
                  </p>
                </div>
                <button onClick={(e)=>showLessMore("2")} className=" flex font-Inter justify-center items-center text-xl border-2  border-black rounded-full h-7 w-14 ">
                  {show.two?"-":"+"}
                </button>
              </div>
              <hr className="w-full  bg-black" />


              <div className="flex gap-4">
                <h2 className="text-2xl text-newpurple font-Inter">03</h2>
                <div>
                  <p className="font-Inter text-lg">
                  How can I sign up as a mentee?
                    <br />
                  </p>
                  <p
                    className={`${
                      show.three==true ? " max-h-52 opacity-100" : "max-h-0 opacity-0"
                    } max-h-0 opacity-0 overflow-hidden transition-max-height transition-opacity duration-600 ease-in-out`}
                  >
                    The mentorship program connects mentors with mentees based
                    on shared interests and goals. Mentors offer guidance,
                    support, and knowledge to help mentees upskill and achieve
                    their objectives.
                  </p>
                </div>
                <button onClick={(e)=>showLessMore("3")} className=" flex font-Inter justify-center items-center text-xl border-2  border-black rounded-full h-7 w-14 ">
                  {show.three?"-":"+"}
                </button>
              </div>
              <hr className="w-full bg-black" />

              
              <div className="flex gap-4">
                <h2 className="text-2xl text-newpurple font-Inter">04</h2>
                <div>
                  <p className="font-Inter text-lg">
                  Is there any cost associated with using the platform?
                    <br />
                  </p>
                  <p
                    className={`${
                      show.four==true ? " max-h-52 opacity-100" : "max-h-0 opacity-0"
                    } max-h-0 opacity-0 overflow-hidden transition-max-height transition-opacity duration-600 ease-in-out`}
                  >
                    The mentorship program connects mentors with mentees based
                    on shared interests and goals. Mentors offer guidance,
                    support, and knowledge to help mentees upskill and achieve
                    their objectives.
                  </p>
                </div>
                <button onClick={(e)=>showLessMore("4")} className=" flex font-Inter justify-center items-center text-xl border-2  border-black rounded-full h-7 w-14 ">
                  {show.four?"-":"+"}
                </button>
              </div>
              <hr className="w-full  bg-black" />

              <div className="flex gap-4">
                <h2 className="text-2xl text-newpurple font-Inter">05</h2>
                <div>
                  <p className="font-Inter text-lg">
                  How are mentors matched with mentees?
                    <br />
                  </p>
                  <p
                    className={`${
                      show.five==true ? " max-h-52 opacity-100" : "max-h-0 opacity-0"
                    } max-h-0 opacity-0 overflow-hidden transition-max-height transition-opacity duration-600 ease-in-out`}
                  >
                    The mentorship program connects mentors with mentees based
                    on shared interests and goals. Mentors offer guidance,
                    support, and knowledge to help mentees upskill and achieve
                    their objectives.
                  </p>
                </div>
                <button onClick={(e)=>showLessMore("5")} className=" flex font-Inter justify-center items-center text-xl border-2  border-black rounded-full h-7 w-14 ">
                  {show.five?"-":"+"}
                </button>
              </div>
              <hr className="w-full  bg-black" />



            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section6;

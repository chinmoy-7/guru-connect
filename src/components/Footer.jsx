import React from "react";

function Footer() {
  return (
    <div className="min-h-50  flex flex-col justify-center items-center bg-black/90">
      <div className="h-full w-98 flex  justify-center items-center  ">
        <div className="h-full w-81  flex  ">
            <div className="w-1/2 h-full text-white  flex flex-col justify-start items-center">
                <img src="guruconnect.png" alt="" className=""/>
                <div className="flex flex-col gap-5 w-full lg:w-1/3">
                <p className="  " >Add adress Here</p>
                <p>&#169;2023 GuruConnect</p>
                </div>
            </div>
            <div className="w-1/2 h-full   flex justify-center items-center flex-col">
                    <div className="lg:w-1/2   flex  flex-col">
                        <ul className="flex lg:flex-wrap  gap-3  min-h-35 w-full text-white">
                          <div className="flex flex-col justify-evenly items-start">
                            <li>About</li>
                            <li>Blog</li>
                            <li>Terms of Service</li>
                            <li>Faq's</li>
                            </div>
                            <div className="flex flex-col justify-evenly items-start">
                            <li>Contact Us</li>
                            <li>Mentees</li>
                            <li>Privacy</li>
                            <li>Mentors</li>
                            </div>
                        </ul>
                    </div>
                <div className="flex flex-start w-1/2  h-1/6 justify-start gap-5 items-end">
                    <img src="insta.png" alt="" />
                    <img src="twitter.png" alt="" />
                    <img src="linkedin.png" alt="" />
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

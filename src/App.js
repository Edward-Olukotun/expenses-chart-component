import React from "react";
// import Bar from "./Bar";
import Div from "./Div";
import Logo from "./images/logo.svg";

function App() {
  return (
    <>
      <div className=" flex flex-col content-center bg-Cream">
        <div className="flex justify-between px-5 bg-new h-28 mx-10 pt-5 text-white border rounded-xl my-5">
          <div className="flex flex-col">
            <p>My balance</p>
            <h1 className="font-bold text-2xl">$921.48</h1>
          </div>
          <div>
            <img src={Logo} alt="/" />
          </div>
        </div>

        <div className="flex flex-col mx-8 md:ml-32 w-[80%] bg-white border rounded-xl mt-10 mb-40">
          <div className="">
            <p className="text-xl font-bold text-center mt-3">
              Spending-last 7 Days
            </p>
          </div>
          <div className="my-5">
            <Div />
          </div>
          <div className="h-1 w-[80%] bg-brown my-1 ml-7  md:ml-32"></div>
          <div className="flex justify-between mx-3 my-5 px-5">
            <div>
              <div>
                <p className="text-Mbrown">Total this month</p>
              </div>
              <div>
                <h2 className="font-bold text-2xl text-Dbrown">$478.33</h2>
              </div>
            </div>
            <div>
              <div className="font-bold text-xl text-Dbrown flex justify-end pt-1">
                +2.4%
              </div>
              <div className="text-Mbrown">from last month</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

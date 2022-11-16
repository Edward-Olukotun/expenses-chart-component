import React from "react";

function Div() {
  return (
    <>
      <div className="flex my-5 justify-center ">
        <div className="flex flex-col justify-end  ">
          {/* <div className="bg-Dbrown text-white font-bold rounded-lg my-5 px-1">
            $52.36
          </div> */}
          <div className="w-10 h-10 rounded-md bg-new mx-2 md:mx-5 hover:bg-teal cursor-pointer"></div>
          <p className="text-center my-3">mon</p>
        </div>
        <div className=" flex flex-col justify-end ">
          <div className="w-10 rounded-md h-20 bg-new mx-2 md:mx-4 hover:bg-teal cursor-pointer">
            <p></p>
          </div>
          <p className="text-center my-3">tue</p>
        </div>
        <div className="flex flex-col justify-end">
          <div className="w-10 rounded-md h-32 bg-new mx-2 md:mx-4 hover:bg-teal cursor-pointer"></div>
          <p className="text-center my-3">wed</p>
        </div>
        <div className="flex flex-col justify-end">
          <div className="w-10 rounded-md h-16 bg-new mx-2 md:mx-4 hover:bg-teal cursor-pointer"></div>
          <p className="text-center my-3">thu</p>
        </div>
        <div className="flex flex-col justify-end">
          <div className="w-10 rounded-md h-12 bg-new mx-2 md:mx-4 hover:bg-teal cursor-pointer"></div>
          <p className="text-center my-3">fri</p>
        </div>
        <div className="flex flex-col justify-end">
          <div className="w-10 rounded-md h-28 bg-new mx-2 md:mx-4 hover:bg-teal cursor-pointer"></div>
          <p className="text-center my-3">sat</p>
        </div>
        <div className="flex flex-col justify-end">
          <div className="w-10 rounded-md h-12 bg-new mx-2 md:mx-4 hover:bg-teal cursor-pointer"></div>
          <p className="text-center my-3">sun</p>
        </div>
      </div>
    </>
  );
}

export default Div;

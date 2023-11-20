import React, { useState } from "react";
import { RxCrossCircled } from "react-icons/rx";
import { FaSearch } from "react-icons/fa";
import CloseAccountModal from "./CloseAccountModal";

const Navbar = () => {
  const active = "border-b-violet-900 border-b-2  text-violet-900 ";
  const inactive = "text-grey-500";

  const [activeComponent, setActiveComponent] = useState("Completed");
  const [closeAccountModal, setCloseAccountModal] = useState(false);
  const triggerReason = ["IP Change", "FIFO"];
  const riskLevel = ['Low','Medium','High'];
  
  const [isTrigger, setIsTrigger] = useState(false);
  const [isRisk,setIsRisk] = useState(false);

  return (
    <>
    <div className="px-5 w-full flex flex-col gap-5">
      <h1 className="font-semibold text-3xl my-2">Monitoring</h1>
      <div className="flex justify-between border-b-grey-500 border-b-2 text-grey-500 mb-5">
        <div className="flex items-end">
          <a
            className={`mx-2 pb-2 px-2 ${
              activeComponent === "Pending" ? active : inactive
            } cursor-pointer`}
            onClick={() => setActiveComponent("Pending")}
          >
            Pending
          </a>
          <a
            className={`mx-2 pb-2 px-2 ${
              activeComponent === "Completed" ? active : inactive
            } cursor-pointer`}
            onClick={() => setActiveComponent("Completed")}
          >
            Completed
          </a>
        </div>
        <div onClick={()=>setCloseAccountModal(true)}  className="text-red-500 flex items-center px-3 py-1 mb-2 rounded-lg cursor-pointer bg-red-100">
          <span className="mr-1">
            <RxCrossCircled />
          </span>
          Close Account
        </div>
      </div>
      <div className="flex items-center">
        <div className="inline-block p-1 border-2 border-grey-500 rounded-md w-[25%] min-w-[250px]">
          <div className="flex items-center">
            <span className="mr-1">
              <FaSearch color="grey" />
            </span>
            <input
              type="text"
              placeholder="Search"
              className="border-white focus:border-none text-grey-500 focus:outline-none"
            />
          </div>
        </div>
        <div className="inline-flex bg-gray-200 rounded-md m-2">
          <a
            href="#"
            className="px-4 py-1.5 text-sm text-gray-700  rounded-l-md"
          >
            Trigger Reason
          </a>
          <div className="relative">
            <button
                onClick={()=>setIsTrigger(!isTrigger)}
              type="button"
              className="inline-flex items-center justify-center h-full px-2 text-gray-600 border-l border-gray-100 hover:text-gray-700 rounded-r-md hover:bg-gray-50"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            <div className={`absolute  right-0 z-10 w-32  mt-4 origin-top-right bg-white border border-gray-100 rounded-md shadow-lg ${isTrigger?null:"hidden"}`}>
              <div className="p-2">
                {triggerReason.map((item, index) => (
                  <a
                    key={index}
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="inline-flex bg-gray-200 rounded-md m-2">
          <a
            href="#"
            className="px-4 py-1.5 text-sm text-gray-700  rounded-l-md"
          >
            Risk Level
          </a>
          <div className="relative">
            <button
                onClick={()=>setIsRisk(!isRisk)}
              type="button"
              className="inline-flex items-center justify-center h-full px-2 text-gray-600 border-l hover:text-gray-700 rounded-r-md hover:bg-gray-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            <div className={`absolute  right-0 z-10 w-32  mt-4 origin-top-right bg-white border border-gray-100 rounded-md shadow-lg ${isRisk?null:"hidden"}`}>
              <div className="p-2">
                {riskLevel.map((item, index) => (
                  <a
                    key={index}
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {closeAccountModal && <CloseAccountModal  onClose={()=>setCloseAccountModal(false)} />}
    </>
  );
};

export default Navbar;
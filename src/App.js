import "./App.css";
import Sidebar from "./components/sidebar";
import PendingUserTable from "./components/pendingUsertable";
import Navbar from "./components/navbar";
import { useState } from "react";
import { RxCrossCircled } from "react-icons/rx";
import CloseAccountModal from "./components/CloseAccountModal";
import CompletedUserTable from "./components/completedUserTable";

function App() {

  const active = "border-b-violet-900 border-b-2  text-violet-900 ";
  const inactive = "text-grey-500";

  const [activeComponent, setActiveComponent] = useState("Pending");
  const [closeAccountModal, setCloseAccountModal] = useState(false);
  
  return (
    <div className="flex w-screen h-screen">
      <Sidebar/>
      <div className="md:mx-8 gap-4 md:flex flex-col items-start justify-start mx-3 ">
        <>
          <div className=" w-full flex flex-col gap-5">
            <h1 className="font-semibold text-3xl my-2 text-center md:text-start">Monitoring</h1>
            <div className="flex md:justify-between justify-center border-b-grey-500 border-b-2 text-grey-500 mb-5">
              <div className="flex items-end">
                <a
                  className={`mx-2 pb-2 px-2 ${activeComponent === "Pending" ? active : inactive
                    } cursor-pointer`}
                  onClick={() => setActiveComponent("Pending")}
                >
                  Pending
                </a>
                <a
                  className={`mx-2 pb-2 px-2 ${activeComponent === "Completed" ? active : inactive
                    } cursor-pointer`}
                  onClick={() => setActiveComponent("Completed")}
                >
                  Completed
                </a>
              </div>
              <div onClick={() => setCloseAccountModal(true)} className="text-red-500 md:flex hidden items-center px-3 py-1 mb-2 rounded-lg cursor-pointer bg-red-100">
                <span className="mr-1">
                  <RxCrossCircled />
                </span>
                Close Account
              </div>
            </div>
          </div>
          {closeAccountModal && <CloseAccountModal onClose={() => setCloseAccountModal(false)} />}
        </>
        {
          activeComponent==='Pending'?<PendingUserTable onOpen={() => setCloseAccountModal(true)}/>:<CompletedUserTable onOpen={() => setCloseAccountModal(true)}/>
        }
      </div>
    </div>
  );
}

export default App;

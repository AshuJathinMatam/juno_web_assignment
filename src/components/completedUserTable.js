import React, { useState } from 'react'
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import TableData from '../data/data.json'
import { FiExternalLink } from "react-icons/fi";
import { FaSearch } from "react-icons/fa";

const CompletedUserTable = () => {


  const [data, setData] = useState(TableData.completedUsers)

  const [searchValue, setSearchValue] = useState('')
  const triggerReason = ['All', "Flagged", "Cleared", "Closed", "SOI requested"];
  const riskLevel = ['All', 'Low', 'Medium', 'High'];

  const [isTrigger, setIsTrigger] = useState(false);
  const [isRisk, setIsRisk] = useState(false);

  const handleTriggerFunction = (trigger) => {
    let newdata = [];
    if (trigger === 'All') {
      newdata = TableData.completedUsers
    } else {
      for (let i = 0; i < TableData.completedUsers.length; i++) {
        if (trigger === TableData.completedUsers[i].actionReason) {
          newdata.push(TableData.completedUsers[i]);
        }
      }
    }
    setData(newdata);
    setIsTrigger(!isTrigger)
  }

  const handleRiskFunction = (risk) => {
    let newdata = [];
    if (risk === 'All') {
      newdata = TableData.completedUsers
    } else {
      for (let i = 0; i < TableData.completedUsers.length; i++) {
        if (risk === TableData.completedUsers[i].riskLevel) {
          newdata.push(TableData.completedUsers[i]);
        }
      }
    }
    setData(newdata);
    setIsRisk(!isRisk)
  }

  const handleSearch = (e) => {
    setSearchValue(e.target.value)
    let searchItem = e.target.value;
    let newdata = [];
    for (let i = 0; i < TableData.completedUsers.length; i++) {
      if (TableData.completedUsers[i].userName.toLowerCase().includes(searchItem.toLowerCase())) {
        newdata.push(TableData.completedUsers[i])
      } else {
        continue;
      }
    }
    setData(newdata);
  }

  return (
    <>
      <div className="flex items-center">
        <div className="inline-block p-1 border-2 border-grey-500 rounded-md w-[25%] min-w-[250px]">
          <div className="flex items-center">
            <span className="mr-1">
              <FaSearch color="grey" />
            </span>
            <input
              type="text"
              value={searchValue}
              onChange={handleSearch}
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
            Action Reason
          </a>
          <div className="relative">
            <button
              onClick={() => setIsTrigger(!isTrigger)}
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

            <div className={`absolute  right-0 z-10 w-32  mt-4 origin-top-right bg-white border border-gray-100 rounded-md shadow-lg ${isTrigger ? null : "hidden"}`}>
              <div className="p-2">
                {triggerReason.map((item, index) => (
                  <a
                    key={index}
                    href="#"
                    onClick={() => handleTriggerFunction(item)}
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
              onClick={() => setIsRisk(!isRisk)}
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

            <div className={`absolute  right-0 z-10 w-32  mt-4 origin-top-right bg-white border border-gray-100 rounded-md shadow-lg ${isRisk ? null : "hidden"}`}>
              <div className="p-2">
                {riskLevel.map((item, index) => (
                  <a
                    onClick={() => handleRiskFunction(item)}
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
      <div className='overflow-x-auto'>
        <Table className="text-sm w-full text-gray-500 rounded-t-lg">
          <Thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <Tr>
              <Th className="py-3 px-6 text-center">User</Th>
              <Th className="py-3 px-6 text-center">Risk level</Th>
              <Th className="py-3 px-6 text-center">Action reason</Th>
              <Th className="py-3 px-6 text-center">Time to Close</Th>
              <Th className="py-3 px-6 text-center">Date added on</Th>
              <Th className="py-3 px-6 text-center">Action taken by</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.length && data.map((item, index) => (
              <Tr className="bg-white border text-center border-b-2" key={index}>
                <Td className="py-4 px-4 flex justify-between items-center">
                  <div className="flex flex-col items-start">
                    <div>{item.userName}</div>
                    <div className="text-xs text-gray-400">{item.email}</div>
                  </div>
                  <div>
                    <a className="cursor-pointer">
                      <FiExternalLink color="blue" />
                    </a>
                  </div>
                </Td>
                <Td className={`py-4 px-6 text-left font-semibold ${item.riskLevel === 'Medium' ? 'text-yellow-500' : null} ${item.riskLevel === 'Low' ? 'text-green-400' : null} ${item.riskLevel === 'High' ? 'text-red-400' : null}`}>{`• ${item.riskLevel}`}</Td>
                <Td className="py-4 px-6 text-left font-semibold">{item.actionReason}</Td>
                <Td className="py-4 px-6 ">{`${item.timeToClose} days`}</Td>
                <Td className="py-4 px-6 ">{item.dateAdded}</Td>
                <Td className="py-4 px-6 text-left">
                  <p className='font-semibold'>{item.reviewer}
                  </p>
                  <div>{item.reviewerEmail}</div>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </div>
      <div className="flex justify-center items-center w-full">
        {
          data.length === 0 && <div className='text-black  text-center'>No Data Found</div>
        }
      </div>
    </>
  )
}

export default CompletedUserTable
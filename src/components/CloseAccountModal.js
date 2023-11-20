import React, { useState } from 'react';
import { ImCross } from "react-icons/im";

const CloseAccountModal = ({onClose}) => {
  const [email, setEmail] = useState('');
  const [wantToUAR, setWantToUAR] = useState('no');
  const [reason, setReason] = useState('');
  const [note, setNote] = useState('');
  const [chargeClosureFee, setChargeClosureFee] = useState(false);
  

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, wantToUAR, reason, note, chargeClosureFee });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 overflow-y-auto h-full w-full flex items-center justify-center">
      <div className="bg-white p-5 rounded-lg w-4/12">
        <div className='flex justify-between items-center'>
          <h2 className="text-xl  font-bold">Close account</h2>
          <ImCross onClick={onClose} className='cursor-pointer'/>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-400 text-sm font-bold mt-2 mb-2">Email</label>
            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-600 leading-tight focus:outline-none focus:shadow-outline" />
          </div>
          <div className="mb-4 flex">
            <span className="block text-gray-400 text-sm font-bold mt-2 mb-2">Want to file UAR</span>
            <label className="inline-flex items-center ml-14 text-gray-400 ">
              <input type="radio" name="uar" value="yes" checked={wantToUAR === 'yes'} onChange={() => setWantToUAR('yes')} className="form-radio" />
              <span className="ml-2">Yes</span>
            </label>
            <label className="inline-flex items-center ml-10 text-gray-400 ">
              <input type="radio" name="uar" value="no" checked={wantToUAR === 'no'} onChange={() => setWantToUAR('no')} className="form-radio" />
              <span className="ml-2">No</span>
            </label>
          </div>
          <div className="mb-4">
            <label htmlFor="reason" className="block text-gray-400 text-sm font-bold mb-2">Reason</label>
            <select id="reason" value={reason} onChange={(e) => setReason(e.target.value)} className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
              <option value="">Select a reason</option>
              <option value="reason1">Reason 1</option>
              <option value="reason2">Reason 2</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="note" className="block text-gray-400 text-sm font-bold mb-2">Note</label>
            <textarea id="note" value={note} onChange={(e) => setNote(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" rows="3"></textarea>
          </div>
          <div className="mb-4">
            <label className="flex items-center justify-between">
              <div>
                <input type="checkbox" checked={chargeClosureFee} onChange={(e) => setChargeClosureFee(e.target.checked)} className="form-checkbox" />
                <span className="ml-1 text-gray-400">Charge closure fee</span>
              </div>
              <div className="flex items-center justify-between">
                <button type="submit" className=" bg-gray-200 hover:bg-violet-700 hover:text-white text-gray-400 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Close Account</button>
              </div>
            </label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CloseAccountModal;
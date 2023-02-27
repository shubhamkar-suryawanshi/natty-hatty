import React from 'react';
import activity from '../assets/activity.svg';

const Activeity = () => {
  return (
    <div>
      <div className="flex  items-center space-x-4">
        <div className="w-7 h-7 p-[5px] border rounded-full bg-[#DEE8FF]">
          <img className="w-4 h-4 " src={activity} alt="logo" />
        </div>
        <div>
          <h1 className="font-medium">
            Leslie Alexander updated her{' '}
            <span className="text-[#F8991F] inline">Account Type</span>
          </h1>
          <h2 className="text-[#C7C7C7] text-xs">5 October 11:46 AM</h2>
        </div>
      </div>
      <div className="flex  items-center space-x-4">
        <div className="w-7 h-7 p-[5px] border rounded-full bg-[#DEE8FF]">
          <img className="w-4 h-4 " src={activity} alt="logo" />
        </div>
        <div>
          <h1 className="font-medium">
            John Smith removed Mark Fleix from{' '}
            <span className="text-[#F8991F]">Family member</span>
          </h1>
          <h2 className="text-[#C7C7C7] text-sm">3 October 2:45 PM</h2>
        </div>
      </div>
    </div>
  );
};

export default Activeity;

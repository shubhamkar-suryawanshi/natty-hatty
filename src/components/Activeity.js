import React from 'react';
import activity from '../assets/activity.png';

const Activeity = () => {
  return (
    <div>
      <div className="flex  items-center space-x-4">
        <img className="w-5 h-5" src={activity} alt="logo" />
        <div>
          <h1 className="font-bold">
            Leslie Alexander updated her{' '}
            <span className="text-[#F8991F] inline">Account Type</span>
          </h1>
          <h2 className="text-[#C7C7C7] text-sm">5 October 11:46 AM</h2>
        </div>
      </div>
      <div className="flex  items-center space-x-4">
        <img className="w-5 h-5" src={activity} alt="logo" />
        <div>
          <h1 className="font-bold">
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

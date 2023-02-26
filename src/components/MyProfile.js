import React from 'react';
import Family from './Family';
import Profile from './Profile';

const MyProfile = () => {
  return (
    <div>
      <div className="h-[400px] overflow-auto overflow-y-scroll my-2">
        <Family />
      </div>
      <div className="h-[400] overflow-auto overflow-y-scroll">
        <Profile />
      </div>
    </div>
  );
};

export default MyProfile;

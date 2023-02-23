import Account from './Account';
import Activities from './Activities';
import Address from './Address';
import Family from './Family';
import Invites from './Invites';
import Profile from './Profile';

const Body = () => {
  return (
    <div className="grid grid-cols-12 grid-rows-4 md:grid-rows-6 sm:grid-cols-1 sm:grid-rows-2">
      <div className="col-span-9 md:col-span-7 md:row-span-2 sm:row-span-2 sm:col-span-1">
        <Profile />
      </div>
      <div className="col-span-3 row-span-2 md:col-span-5 md:row-span-2 sm:row-span-1 sm:col-span-1">
        <Family />
      </div>
      <div className="col-span-5 md:col-span-6 md:row-span-2 sm:hidden">
        <Account />
      </div>
      <div className="col-span-4 row-span-3 md:col-span-6 md:row-span-2 sm:hidden">
        <Activities />
      </div>
      <div className="col-span-5 row-span-2 md:col-span-6 md:row-span-2 sm:hidden">
        <Address />
      </div>
      <div className="row-span-2 col-span-3 md:col-span-6 md:row-span-2 sm:hidden">
        <Invites />
      </div>
    </div>
  );
};

export default Body;

import Account from './Account';
import Activities from './Activities';
import Address from './Address';
import Family from './Family';
import Invites from './Invites';
import Profile from './Profile';

const Body = () => {
  return (
    <div className="grid grid-cols-12 pt-5">
      <div className="col-start-1 col-end-10">
        <Profile />
      </div>
      <div className="col-start-10 col-end-13">
        <Family />
      </div>
      <div className="col-start-1 col-end-6">
        <Account />
      </div>
      <div className="col-start-6 col-end-10">
        <Activities />
      </div>
      <div className="col-start-1 col-end-6">
        <Address />
      </div>
      <div className="col-start-10 col-end-13">
        <Invites />
      </div>
    </div>
  );
};

export default Body;

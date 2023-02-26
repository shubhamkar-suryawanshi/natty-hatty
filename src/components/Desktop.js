import Account from './Account';
import Family from './Family';
import Profile from './Profile';
import Address from './Address';
import Activities from './Activities';
import Invites from './Invites';

const Desktop = () => {
  return (
    <div>
      <div class="grid grid-cols-12 gap-3 grid-rows-4">
        <div class=" rounded-md ml-3 mt-5 mb-0 bg-[#F5F6F8] col-span-9 row-span-1 row-start-1 lg:max-h-[250px]">
          <Profile />
        </div>
        <div class=" rounded-md  mr-3 mt-5  mb-0 bg-[#F5F6F8] col-span-3 row-span-2 row-start-1">
          <Family />
        </div>
        <div class=" rounded-md  ml-3  mb-0 bg-[#F5F6F8] col-span-6 row-span-1 row-start-2">
          <Account />
        </div>
        <div class=" rounded-md   ml-3 mb-0 bg-[#F5F6F8] col-span-6 row-span-2 row-start-3 lg:max-h-[400px]">
          <Address />
        </div>
        <div class=" rounded-md     my-0 bg-[#F5F6F8] col-span-3 row-span-3 row-start-2">
          <Activities />
        </div>
        <div class=" rounded-md   mr-3 my-0 bg-[#F5F6F8] col-span-3 row-span-2 row-start-3">
          <Invites />
        </div>
      </div>
    </div>
  );
};

export default Desktop;

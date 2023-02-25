import Account from './Account';
import Family from './Family';
import Profile from './Profile';
import Address from './Address';
import Activities from './Activities';
import Invites from './Invites';

const Tablet = () => {
  return (
    <div>
      <div class="grid grid-cols-12 gap-3 grid-rows-6">
        <div class=" rounded-md h-[425px] ml-3  mb-0 bg-[#F5F6F8] col-span-7 row-span-2 mt-16">
          <Profile />
        </div>
        <div class=" rounded-md  h-[425px] mr-3  mb-0 bg-[#F5F6F8] col-span-5 row-span-2 mt-16">
          <Family />
        </div>
        <div class=" rounded-md  h-[425px] ml-3  mb-0 bg-[#F5F6F8] col-span-6 row-span-2">
          <Account />
        </div>
        <div class=" rounded-md  h-[425px]  mr-3 mb-0 bg-[#F5F6F8] col-span-6 row-span-2">
          <Address />
        </div>
        <div class=" rounded-md   h-[425px] ml-3  my-0 bg-[#F5F6F8] col-span-6 row-span-2">
          <Activities />
        </div>
        <div class=" rounded-md  h-[425px]  mr-3 my-0 bg-[#F5F6F8] col-span-6 row-span-2">
          <Invites />
        </div>
      </div>
    </div>
  );
};

export default Tablet;

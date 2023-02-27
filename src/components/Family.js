import { users, admin } from '../constants';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import file from '../assets/admin.png';

import prof from '../assets/profile.png';
import prof1 from '../assets/profile1.png';

const Family = () => {
  return (
    <div className=" bg-gray-100 p-5 my-2 mx-5 rounded-md md:py-5 md:px-3  md:m-0 md:h-[400px] lg:h-[500px] overflow-auto hover:overflow-y-scroll">
      <div className="flex justify-between">
        <h1 className="left font-bold">Family</h1>
        <div className="right flex space-x-1">
          <IconButton className="">
            <SearchIcon />
          </IconButton>
          <button className="text-white my-1 bg-[#0C611A] font-button px-2 py-1 rounded-md">
            Add New
          </button>
        </div>
      </div>
      <div className="flex items-center bg-[#F8991F] rounded-md justify-between my-2">
        <div className="flex items-center  ">
          <img className="w-8 m-2" src={prof} alt="img" />
          <p className="font-medium text-white">
            {admin.firstName} {admin.lastName}
          </p>
        </div>

        <div className="flex items-center mr-2 space-x-1 ">
          <button className="my-1 h-6 w-20  text-center font-[Work_Sans] font-semibold text-sm px-2  rounded-sm  align-middle bg-white">
            ADMIN
          </button>
          <div className="bg-white w-6 h-6 align-middle pt-2 pl-1 rounded-sm">
            <img className="flex items-center " src={file} alt="admin" />
          </div>
        </div>
      </div>
      <div>
        {users.map((user, index) => (
          <div
            key={index}
            className="flex items-center justify-between bg-[#DEE8FF] my-2 rounded-md"
          >
            <div key={index} className="flex items-center ">
              <img className="w-8 m-2" key={index} src={prof1} alt="img" />
              <p key={index} className="font-medium">
                {user.firstName} {user.lastName}
              </p>
            </div>
            <button
              key={index}
              className="my-1 mr-2 w-20 font-[Work_Sans] font-semibold text-sm px-2 py-1 rounded-sm bg-[#CAD7F5]"
            >
              MEMBER
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Family;

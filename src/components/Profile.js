import profile1 from '../assets/profile1.png';
import { useState } from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import IconButton from '@mui/material/IconButton';

const Profile = () => {
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    gradYear: '',
    DOB: '',
  });

  return (
    <div>
      <div className="flex flex-col lg:flex-row bg-gray-100 p-5 mx-5 md:py-5 md:px-3 md:h-[405px] md:m-0 lg:items-center  rounded-t-md items-center md:flex-col md:items-start lg:h-[200px] lg:py-0 lg:space-y-0">
        <section className="flex items-center ">
          <img className="w-24 my-2 mr-2" src={profile1} alt="profile" />

          <div className="m-2 ">
            <h1 className="font-bold text-xl">Shub Surya</h1>
            <div className="flex items-center">
              <IconButton className="m-0 p-0">
                <LocationOnIcon />
              </IconButton>
              <h2 className="text-[#818181] text-sm">Kolhapur, Maharashtra</h2>
            </div>
          </div>
        </section>
        <section className="flex justify-between space-x-4 md:pt-5 lg:flex-col lg:space-y-3">
          <div className="flex justify-between py-1 flex-col lg:flex-row">
            <p className="pr-2 lg:pl-4">First Name:</p>
            <input
              value={user.firstName}
              onChange={(e) => setUser(e.target.value)}
              className="lg:w-44 lg:px-2 lg:h-8 w-36 rounded-sm"
              type="text"
              placeholder="Shub"
            />
          </div>

          <div className="flex justify-between py-1 flex-col lg:flex-row">
            <p className="pr-2">Last Name:</p>
            <input
              value={user.lastName}
              onChange={(e) => setUser(e.target.value)}
              className="lg:w-44 lg:px-2 lg:h-8 w-36 rounded-sm"
              type="text"
              placeholder="Surya"
            />
          </div>

          <div className="md:flex md:flex-col justify-between py-1 mb:hidden sm:hidden lg:hidden">
            <p className="pr-2">DOB:</p>
            <input
              value={user.DOB}
              onChange={(e) => setUser(e.target.value)}
              className="lg:w-44 lg:px-2 lg:h-8 w-36 rounded-sm"
              type="text"
              placeholder="10/09/1994"
            />
          </div>

          <div className="lg:flex justify-between py-1 mb:hidden sm:hidden md:hidden">
            <p className="pr-2">Email :</p>
            <input
              value={user.email}
              onChange={(e) => setUser(e.target.value)}
              className="lg:w-44 lg:px-2 lg:h-8 w-36 rounded-sm"
              type="email"
              placeholder="surya@nattyhatty.com"
            />
          </div>
        </section>

        <section className=" flex justify-between space-x-4 lg:flex-col lg:space-y-3">
          <div className="flex justify-between py-1 lg:pt-5 flex-col lg:flex-row">
            <p className="pr-2 lg:pl-4">Phone:</p>
            <input
              value={user.phone}
              onChange={(e) => setUser(e.target.value)}
              className="lg:w-44 lg:px-2 lg:h-8 w-36 rounded-sm"
              type="text"
              placeholder="8485060708"
            />
          </div>

          <div className="flex justify-between py-1 flex-col lg:flex-row">
            <p className="pr-2">Graduation Year:</p>
            <input
              value={user.gradYear}
              onChange={(e) => setUser(e.target.value)}
              className="lg:w-44 lg:px-2 lg:h-8 w-36 rounded-sm"
              type="text"
              placeholder="2020"
            />
          </div>
          <div className="lg:flex justify-between py-1 mb:hidden sm:hidden">
            <p className="pr-2">DOB:</p>
            <input
              value={user.DOB}
              onChange={(e) => setUser(e.target.value)}
              className="lg:w-44 lg:px-2 lg:h-8 w-36 rounded-sm"
              type="text"
              placeholder="10/09/1994"
            />
          </div>
        </section>
        <section className=" mx-2 mt-10 md:flex space-x-5 py-5 mb:hidden sm:hidden lg:flex-col lg:space-y-3 lg:pt-10 lg:pl-2">
          <button className="text-white lg:ml-5 my-1 bg-[#0C611A] px-2 py-1 lg:mt-0 rounded-md">
            Save Change
          </button>
          <button className="text-white my-1 bg-[#232E3E] px-2 py-1 rounded-md">
            Change Password
          </button>
          <button className="text-white my-1 bg-[#FF3A3A] px-2 py-1 rounded-md">
            Leave Family
          </button>
        </section>
      </div>
      <div className=" bg-gray-100 pl-10 mx-5 mb-10 rounded-b-md items-center md:flex-col">
        <button className="text-white font-semibold my-2 ml-0 bg-[#232E3E] px-6 py-1 rounded-md md:hidden">
          Edit Profile
        </button>
      </div>
    </div>
  );
};

export default Profile;

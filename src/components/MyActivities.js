import dots from '../assets/dots.svg';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Activities from './Activities';

const MyActivities = () => {
  const [isSuccessful, setIsSuccessful] = useState(true);
  return (
    <div>
      <div className="heading flex items-center justify-between p-2">
        <h1 className=" font-bold text-xl md:hidden lg:block">My Account</h1>
        {isSuccessful ? (
          <button
            className="mb:hidden sm:hidden md:hidden lg:block my-1 text-green-700  bg-green-100 font-semibold w-72 py-1 rounded-md"
            onClick={() => {
              setIsSuccessful(false);
            }}
          >
            Success Message Here
          </button>
        ) : (
          <button
            className="mb:hidden sm:hidden md:hidden lg:block my-1 text-red-700  bg-red-100 font-semibold w-72 py-1 rounded-md"
            onClick={() => {
              setIsSuccessful(true);
            }}
          >
            Warning Message Here
          </button>
        )}
        <img className=" md:hidden lg:hidden" src={dots} alt="dots" />
        <button className="mb:hidden sm:hidden md:hidden lg:block text-white my-1 bg-gray-700 px-2 py-1 rounded-md">
          View Button
        </button>
      </div>
      <ul className="flex justify-between p-2 md:hidden">
        <Link
          to={'/'}
          className="text-[#7D7D7D] font-bold focus:text-[#F8991F] focus:underline"
        >
          Profile
        </Link>
        <Link
          to={'/wallet'}
          className="text-[#7D7D7D] font-bold focus:text-[#F8991F] focus:underline"
        >
          Wallet
        </Link>
        <Link
          to={'/activity'}
          className="text-[#7D7D7D] font-bold focus:text-[#F8991F] focus:underline"
        >
          Activities
        </Link>
        <Link
          to={'/invities'}
          className="text-[#7D7D7D] font-bold focus:text-[#F8991F] focus:underline"
        >
          Invitations
        </Link>
      </ul>

      <Activities />
    </div>
  );
};

export default MyActivities;

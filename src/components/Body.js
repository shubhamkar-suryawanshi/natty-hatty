import dots from '../assets/dots.svg';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import MyProfile from './MyProfile';
import Tablet from './Tablet';
import Desktop from './Desktop';

const Body = () => {
  const [isSuccessful, setIsSuccessful] = useState('');
  const [active, setActive] = useState(false);

  useEffect(() => {
    document.getElementById('btn1').style.color = '#F8991F';
    document.getElementById('btn1').style.textDecoration = 'underline';
  }, [active]);

  return (
    <div className="mb:m-2 lg:m-5">
      <div className="md:hidden lg:block">
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
        <ul className="flex justify-between p-2 md:hidden lg:hidden">
          <Link
            onClick={() => setActive('pro')}
            id="btn1"
            to={'/'}
            className="text-[#7D7D7D] active:text-[#F8991F] hover:text-[#F8991F] focus:text-[#F8991F] active:underline hover:underline focus:underline font-bold"
          >
            Profile
          </Link>
          <Link
            onClick={() => setActive('wall')}
            id="btn2"
            to={'/wallet'}
            className="text-[#7D7D7D] active:text-[#F8991F] hover:text-[#F8991F] focus:text-[#F8991F] active:underline hover:underline focus:underline font-bold"
          >
            Wallet
          </Link>
          <Link
            onClick={() => setActive('act')}
            id="btn3"
            to={'/activity'}
            className="text-[#7D7D7D] active:text-[#F8991F] hover:text-[#F8991F] focus:text-[#F8991F] active:underline hover:underline focus:underline font-bold"
          >
            Activities
          </Link>
          <Link
            onClick={() => setActive('in')}
            id="btn4"
            to={'/invities'}
            className="text-[#7D7D7D] active:text-[#F8991F] hover:text-[#F8991F] focus:text-[#F8991F] active:underline hover:underline focus:underline font-bold"
          >
            Invitations
          </Link>
        </ul>
        <div className="lg:hidden">
          <MyProfile />
        </div>
      </div>
      <div className="mb:hidden sm:hidden md:grid lg:hidden">
        <Tablet />
      </div>
      <div className="mb:hidden sm:hidden md:hidden lg:grid">
        <Desktop />
      </div>
    </div>
  );
};

export default Body;

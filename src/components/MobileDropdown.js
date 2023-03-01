import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import menu1 from '../assets/menu1.svg';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import IconButton from '@mui/material/IconButton';
import line2 from '../assets/line2.png';

const MobileDropdown = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      <div className="w-full">
        <div
          className="flex space-x-2 items-center w-full"
          onClick={() => setIsVisible(!isVisible)}
        >
          <img className="" alt="menu 1" src={menu1} />
          <button
            type="button"
            className="cursor-pointer text-[#F8991F] w-full flex justify-between items-start"
          >
            Menu 1
          </button>
          <IconButton className=" text-white pl-0 ">
            {isVisible ? (
              <KeyboardArrowUpIcon className="w-6 h-6" />
            ) : (
              <KeyboardArrowDownIcon className="w-6 h-6" />
            )}
          </IconButton>
        </div>

        {isVisible ? (
          <div
            className=" text-white flex mt-[-6px]"
            role="menu"
            onMouseLeave={() => setIsVisible(false)}
          >
            <img className="w-8 h-28" alt="line" src={line2} />
            <div className=" space-y-4 flex flex-col" role="none">
              <Link
                to={'/'}
                className=" hover:text-[#F8991F] text-sm mt-[19px]"
                role="menuitem"
                id="menu-item-0"
              >
                Sub Menu 1
              </Link>
              <Link
                to={'/'}
                className=" hover:text-[#F8991F] text-sm"
                role="menuitem"
                id="menu-item-1"
              >
                Sub Menu 2
              </Link>
              <Link
                to={'/'}
                className=" hover:text-[#F8991F] text-sm"
                role="menuitem"
                id="menu-item-2"
              >
                Sub Menu 3
              </Link>
            </div>
          </div>
        ) : (
          <div className="pl-6 hidden text-white" role="menu"></div>
        )}
      </div>
    </div>
  );
};

export default MobileDropdown;

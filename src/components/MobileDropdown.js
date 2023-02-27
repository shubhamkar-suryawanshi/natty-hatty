import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import menu1 from '../assets/menu1.svg';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import IconButton from '@mui/material/IconButton';

const MobileDropdown = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      <div className="">
        <div className="flex space-x-2 items-center">
          <img
            className=""
            alt="menu 1"
            src={menu1}
            onClick={() => setIsVisible(false)}
          />
          <button
            type="button"
            className="cursor-pointer text-[#F8991F]"
            onClick={() => setIsVisible(true)}
          >
            Menu 1
          </button>
          <IconButton
            className="w-4 h-4 text-white pl-20"
            onClick={() => setIsVisible(false)}
          >
            {isVisible ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </div>

        {isVisible ? (
          <div
            className="pl-6 text-white"
            role="menu"
            onMouseLeave={() => setIsVisible(false)}
          >
            <div className="py-1 space-y-2 flex flex-col" role="none">
              <Link
                to={'/'}
                className=" hover:text-[#F8991F] text-sm"
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

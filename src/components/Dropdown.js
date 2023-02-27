import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Dropdown = () => {
  const [isVisible, setISVisible] = useState(false);

  return (
    <div>
      <div className="relative inline-block text-left">
        <div>
          <button
            type="button"
            className="inline-flex w-full justify-center text-white hover:text-[#F8991F]"
            id="menu-button"
            aria-expanded="true"
            aria-haspopup="true"
            onClick={() => setISVisible(!isVisible)}
          >
            Menu 1
          </button>
        </div>

        {isVisible ? (
          <div
            className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            role="menu"
            aria-labelledby="menu-button"
            tabindex="-1"
            onMouseLeave={() => setISVisible(!isVisible)}
          >
            <div className="py-1" role="none">
              <Link
                to={'/'}
                className="text-black hover:bg-[#F8991F] block px-4 py-2 text-sm"
                role="menuitem"
                tabindex="-1"
                id="menu-item-0"
              >
                My Programs
              </Link>
              <Link
                to={'/'}
                className="text-black hover:bg-[#F8991F] block px-4 py-2 text-sm"
                role="menuitem"
                tabindex="-1"
                id="menu-item-1"
              >
                New Programs
              </Link>
              <Link
                to={'/invities'}
                className="text-black hover:bg-[#F8991F] block px-4 py-2 text-sm"
                role="menuitem"
                tabindex="-1"
                id="menu-item-2"
              >
                Program Invities
              </Link>
              <Link
                to={'/activity'}
                className="text-black hover:bg-[#F8991F] block px-4 py-2 text-sm"
                role="menuitem"
                tabindex="-1"
                id="menu-item-2"
              >
                Program Requests
              </Link>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Dropdown;

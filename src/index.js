import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import '../style.css';

import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  Link,
} from 'react-router-dom';

import Header from './components/Header';
import Body from './components/Body';
import Error from './components/Error';

import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { StyledEngineProvider } from '@mui/material';
import MyWallet from './components/MyWallet';
import MyActivities from './components/MyActivities';
import MyInvities from './components/MyInvities';
import MobileProfile from './components/MobileProfile';

import profile from './assets/profile.png';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Dropdown from './components/Dropdown';

const AppLayout = () => {
  const [isVisible, setIsVisible] = useState(true);
  return isVisible ? (
    <div>
      <StyledEngineProvider injectFirst>
        <div className="flex items-center p-2 justify-between bg-[#232E3E] text-white md:p-3">
          <div className="left flex items-center">
            <IconButton className="lg:hidden">
              <MenuIcon className="text-[#F8991F]" />
            </IconButton>

            <div className="px-1 font-bold">
              <Link to={'/'}>LOGO</Link>
            </div>

            <ul className="hidden  lg:flex lg: pl-28 lg:space-x-20">
              <li className="dropdown relative inline-block">
                <Dropdown />
              </li>
              <li className="">
                <Link to={'/'}>Menu 2</Link>
              </li>
              <li className="">
                <Link to={'/'}>Menu 3</Link>
              </li>
            </ul>
          </div>

          <div className="right flex items-center">
            <IconButton>
              <NotificationsNoneIcon className="text-white" />
            </IconButton>
            <img
              className="w-8 mr-5"
              src={profile}
              alt="profile"
              onClick={() => setIsVisible(false)}
            />
          </div>
        </div>
        <Outlet />
      </StyledEngineProvider>
    </div>
  ) : (
    <div className="bg-[#232E3E] p-5 h-[100vh] space-y-4">
      <section className="flex justify-between  items-center">
        <div className="px-1 font-bold text-white">
          <Link to={'/'}>LOGO</Link>
        </div>
        <IconButton className="w-5 h-5 bg-white rounded-sm">
          <CloseIcon onClick={() => setIsVisible(true)} />
        </IconButton>
      </section>
      <MobileProfile />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Body />,
      },
      {
        path: '/wallet',
        element: <MyWallet />,
      },
      {
        path: '/activity',
        element: <MyActivities />,
      },
      {
        path: '/invities',
        element: <MyInvities />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<RouterProvider router={appRouter} />);

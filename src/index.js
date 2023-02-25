import React from 'react';
import ReactDOM from 'react-dom/client';
import '../style.css';

import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';

import Header from './components/Header';
import Body from './components/Body';
import Error from './components/Error';

import ABC from './components/Tablet';
import { StyledEngineProvider } from '@mui/material';
import MyWallet from './components/MyWallet';
import MyActivities from './components/MyActivities';
import MyInvities from './components/MyInvities';

const AppLayout = () => {
  return (
    <div>
      <StyledEngineProvider injectFirst>
        <Header />
        <Outlet />
        {/** <div className="flex justify-between p-2 m-2">
          <h1 className="font-bold text-xl">My Account</h1>
          <button className="text-white bg-gray-700 px-2 py-1 rounded-sm">
            View Button
          </button>
        </div>
        <Outlet /> 
       <ABC /> */}
      </StyledEngineProvider>
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

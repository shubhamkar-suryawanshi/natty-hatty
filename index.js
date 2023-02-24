import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  Link,
  Outlet,
  RouterProvider,
} from 'react-router-dom';

import Header from './src/components/Header';
import Body from './src/components/Body';
import Footer from './src/components/Footer';
import Contact from './src/components/Contact';
import Error from './src/components/Error';
import About from './src/components/About';
import { Provider } from 'react-redux';
import store from './src/shared/store';
import ABC from './src/components/ABC';

const AppLayout = () => {
  return (
    <Provider store={store}>
      <Header />
      <div className="flex justify-between p-2 m-2">
        <h1 className="font-bold text-xl">My Account</h1>
        <button className="text-white bg-gray-700 px-2 py-1 rounded-sm">
          View Button
        </button>
      </div>

      <Outlet />
      <Footer />

      {/**<ABC /> */}
    </Provider>
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
        path: '/about',
        element: <About />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<RouterProvider router={appRouter} />);

import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';

import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Error from './components/Error';
import About from './components/About';
import { Provider } from 'react-redux';
import store from './shared/store';

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

import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css';

// 1. Corrected path: layouts (plural) and MainLayout
import MainLayout from './layout/Mainlayout/MainLayout'; 

import Home from './pages/Home';
import FriendDetails from './pages/FriendDetails';
import Timeline from './pages/Timeline';
import Stats from './pages/Stats';

// 2. Import the Provider, not just the Context
import { TimelineProvider } from './context/TimelineProvider'; 
import { Toaster } from 'react-hot-toast';
import ErrorPage from './pages/Errorpage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/friend/:id",
        element: <FriendDetails />,
      },
      {
        path: "/timeline",
        element: <Timeline />,
      },
      {
        path: "/stats",
        element: <Stats />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* 3. Wrap with TimelineProvider */}
    <TimelineProvider>
      <RouterProvider router={router} />
      <Toaster />
    </TimelineProvider>
  </React.StrictMode>
);
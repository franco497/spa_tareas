import { createBrowserRouter, RouterProvider } from 'react-router-dom';
//import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from './MainLayout';
import HomePage from './pages/HomePage';
import RegisterPage from "./components/RegisterPage";
import LoginPage from "./pages/LoginPage";
import TasksPage from './pages/TasksPage';
import ProfilePage from './pages/ProfilePage';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
      <MainLayout>
      <ProfilePage />
      <HomePage />
    </MainLayout>
      ),
      errorElement: <Error />
    },
    {
      path: "/login",
      element: <LoginPage />,
      errorElement: <Error />
    },
    {
      path: "/register",
      element: <RegisterPage />,
      errorElement: <Error />
    },
    {
      path: "/tasks",
      element: (
      <MainLayout>
      <TasksPage />
    </MainLayout>
      ),
      errorElement: <Error />
    },
    /*{
     element: <ProtectedRoutes />,
     children: []
    }*/
  ]);
  return (
    <RouterProvider router={router} />
  );
}

export default App;

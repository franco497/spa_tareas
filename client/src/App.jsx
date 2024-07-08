import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import MainLayout from './MainLayout';
import HomePage from './pages/HomePage';
import RegisterPage from "./components/RegisterPage";
import Login from "./components/Login";
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
      element: <Login />,
      errorElement: <Error />
    },
    {
      path: "/register",
      element: (
      <MainLayout>
      <RegisterPage />
      </MainLayout>
      ),
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

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
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>HomePage page</h1>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/tasks" element={<h1>Tasks page</h1>} />
        <Route path="/add-tasks" element={<h1>new tasks</h1>} />
        <Route path="/tasks/:id" element={<h1>update task</h1>} />
        <Route path="/profile" element={<h1>Profile</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

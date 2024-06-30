import { createBrowserRouter, RouterProvider } from 'react-router-dom';
//import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from './MainLayout';
import Home from './pages/Home';
import RegisterPage from "./components/RegisterPage";
import LoginPage from "./pages/LoginPage";
import Tasks from './pages/Tasks';
import Profile from './pages/Profile';


/*
import Login from './views/Login';
import Register from './views/Register';
*/



function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
      <MainLayout>
      <Profile />
      <Home />
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
      element: <Register />,
      errorElement: <Error />
    },
    {
      path: "/tasks",
      element: (
      <MainLayout>
      <Tasks />
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
        <Route path="/" element={<h1>Home page</h1>} />
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

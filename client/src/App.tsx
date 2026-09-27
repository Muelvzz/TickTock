import "./App.css"
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import LandingPage from "./pages/LandingPage";
import NotFound from "./pages/NotFound";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

import { AuthProvider } from "./components/auth/AuthProvider";
import { ProtectedRoute } from "./components/auth/ProtectedRoute";

const router = createBrowserRouter([
  {
    Component: AuthProvider,
    children: [
      { index: true, path: "/", Component: LandingPage },
      { index: true, path: "/sign-up", Component: Register },
      { index: true, path: "/sign-in", Component: Login },
      { index: true, path: "*", Component: NotFound },
      {
        path: "/home",
        Component: ProtectedRoute,
        children: [{ index: true, Component: Dashboard }]
      }
    ]
  }
])

const App = () => <RouterProvider router={ router }/>
export default App

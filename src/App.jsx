import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./layout/RootLayout";
import Home from "./pages/Home"; 
import Contact from "./pages/Contact"; 
import About from "./pages/About"; 
import NotFound from "./pages/NotFound"; 
import User from "./pages/User"; 

const router = createBrowserRouter ([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {index: true, element: <Home />},
      {path: "about" , element: <About /> },
      {path: "contact" , element: <Contact />},
      {path: "user/:userId" , element: <User />},
      {path: "*" , element: <NotFound />},
    ]
  }
]);

export default function App() {
  return <RouterProvider router={router} />;
}
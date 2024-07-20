import "./index.css";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./Pages/About";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Error from "./Pages/Error";
import Solutions from "./Pages/Solutions";
import IndoorSignage from "./Pages/IndoorSignage";
import OutdoorSignage from "./Pages/OutdoorSignage";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
AOS.init();

const Outletext = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Outletext />,
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/solutions",
          element: <Solutions />,
        },
        {
          path: "/indoorsignage",
          element: <IndoorSignage />,
        },
        {
          path: "/outdoorsignage",
          element: <OutdoorSignage />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

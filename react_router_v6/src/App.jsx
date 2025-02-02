import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Movie } from "./pages/Movie";
import { Contact, contactData } from "./pages/Contact";
import { AppLayout } from "./components/layout/AppLayout";
import "./App.css";
import { ErrorPage } from "./pages/ErrorPage";
import { NotFound } from "./pages/NotFound";
import { getMoviesData } from "./api/GetApiData";
import { MovieDetails } from "./components/UI/MovieDetails";
import { getMovieDetails } from "./api/GetMovieDetails";

const App = () =>{

  const router = createBrowserRouter([
    {
      path:"/",
      element:<AppLayout/>,
      errorElement:<ErrorPage/>,
      children:[
        {
          path: "/",
          element:<Home />
        },
        {
          path:"/about",
          element:<About />
        },
        {
          path:"/movies",
          element:<Movie />,
          loader: getMoviesData
        },
        {
          path:"/movies/:movieID",
          element:<MovieDetails />,
          loader: getMovieDetails,
        },
        {
          path:"/contact",
          element:<Contact/>,
          action:contactData,
        },
        // {
        //   path: "*",
        //   element:<NotFound/>
        // }
      ]
    },
   
  ])


  // const router = createBrowserRouter(
  //   createRoutesFromElements(
  //     <>
  //       <Route path="/" element={<Home />} />
  //       <Route path="/about" element={<About />} />
  //       <Route path="/movie" element={<Movie />} />
  //       <Route path="/contact" element={<Contact />} />
  //     </>
  //   )
  // )
  return <RouterProvider router={router}/>
}

export default App;
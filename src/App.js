import {  RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import RootElement from "./components/RootElement/RootElement";
import Home from "./components/Home/Home";
import Movie from "./components/Movie/Movie";
import MovieList from "./components/MovieList/MovieList";
import ErrorElement from "./ErrorElement/ErrorElement";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootElement />,
      errorElement:<ErrorElement/>,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/movie/:id",
          element: <Movie />,
        },
        {
          path: "/movieList/:type",
          element: <MovieList />,
        }
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

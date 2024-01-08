import Layout from "./components/Layout";
import Main from "./components/2 Main/Main";
import Home from "./components/2 Main/Home";
import About from "./components/2 Main/About";
import Portfolio from "./components/2 Main/Portfolio/Portfolio";
import Error from "./components/Error";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom';

function App() {

  const router = createBrowserRouter (
    createRoutesFromElements (
      <Route path="/" element={<Layout/>}>
        <Route path="/" element={<Main/>}>
          <Route path="home" element={<Home/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="portfolio" element={<Portfolio/>}/>
        </Route>

        <Route path="*" element={<Error/>}/>
      </Route>
    )
  )
  return (
    <RouterProvider router={router}/>
  );
}

export default App;

import HomeLayout from "./pages/HomeLayout";
import Home from "./pages/Home";
import Hero from "./components/Hero";
import About from "./components/About";
import Portfolio from "./components/Portfolio/Portfolio";
import Project from "./components/Portfolio/Project";
import Error from "./components/Error";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom';
import ContactForm from "./components/ContactForm";
import "./App.css";

function App() {

  const router = createBrowserRouter (
    createRoutesFromElements (
      <Route path="/" element={<HomeLayout/>}>

        <Route index element={<Home/>}/>

        <Route path="hero" element={<Hero/>}/>
        <Route path="about" element={<About/>}/>

        <Route path="portfolio" element={<Portfolio/>}/>
        <Route path="project" element={<Project/>}/>

        <Route path="contact" element={<ContactForm/>}/>
        <Route path="*" element={<Error/>}/>
      </Route>
    )
  )
  return (
    <RouterProvider router={router}/>
  );
}

export default App;

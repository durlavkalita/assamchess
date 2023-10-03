import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import AACA from "./pages/AACA";
import Events from "./pages/Events";
import Contact from "./pages/Contact";
import Post from "./pages/Post";
import Event from "./pages/Event";

const Router = () => {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" Component={Home}></Route>
        <Route path="/blog" Component={Blog}></Route>
        <Route path="/blog/:id" Component={Post}></Route>
        <Route path="/events" Component={Events}></Route>
        <Route path="/events/:id" Component={Event}></Route>
        <Route path="/aaca" Component={AACA}></Route>
        <Route path="/contact" Component={Contact}></Route>
        {/* <Route component={NotFound} /> */}
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
};

export default Router;

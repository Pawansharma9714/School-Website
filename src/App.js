import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./components/Pages/Home";
import Feature from "./components/Pages/Feature";
import About from "./components/Pages/About";
import Team from "./components/Pages/Team";
import Courses from "./components/Pages/Courses";
import Testimonial from "./components/Pages/Testimonial";
import Contact from "./components/Pages/Contact";
import { useEffect, useState } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  function fakeRequest() {
    return new Promise(resolve => setTimeout(() => resolve(), 900));
  }

  useEffect(() => {
    fakeRequest().then(() => {
      const el = document.querySelector(".loader-container");
      if (el) {
        el.remove();
        setIsLoading(!isLoading);
      }
    });
  }, []);
  if (isLoading) {
    return null;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/feature" element={<Feature />} />
          <Route exact path="/about" element={<About />} />
          {/* <Route exact path="/team" element={<Team />} /> */}
          <Route exact path="/courses" element={<Courses />} />
          <Route exact path="/testimonial" element={<Testimonial />} />
          <Route exact path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

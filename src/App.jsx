// import React from 'react'

// const App = () => {
//   return (
//     <div></div>
//   )
// }

// export default App

import React from 'react'; 
import Navbar from "./components/navbar";
import About from "./components/about";
import Skill from "./components/skill";
import Project from "./components/project";
import Footer from "./components/footer";
import Contact from "./components/contact";

const App = () => {
  return (
    <div>
        <Navbar />
      <About />
      <Skill />
      <Project />
      <Contact />
      <Footer />
     
      </div>
  );
};

export default App;


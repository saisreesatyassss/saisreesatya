// import { ThemeProvider } from "styled-components";
// import { useState, useEffect } from "react";
// import { darkTheme, lightTheme } from './utils/Themes.js'
// import Navbar from "./components/Navbar";
// import './App.css';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import HeroSection from "./components/HeroSection";
// import About from "./components/About";
// import Skills from "./components/Skills";
// import Projects from "./components/Projects";
// import Contact from "./components/Contact";
// import Birthday from "./components/Birthday";
// import Footer from "./components/Footer";
// import Experience from "./components/Experience";
// import Education from "./components/Education";
// import ProjectDetails from "./components/ProjectDetails";
// import styled from "styled-components";
// // import Blog from './components/Blog'; // Import the new Blog.js file

// const Body = styled.div`
//   background-color: ${({ theme }) => theme.bg};
//   width: 100%;
//   overflow-x: hidden;
// `

// const Wrapper = styled.div`
//   background: linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
//   width: 100%;
//   clip-path: polygon(0 0, 100% 0, 100% 100%,30% 98%, 0 100%);
// `
// function App() {
//   const [darkMode, setDarkMode] = useState(true);
//   const [openModal, setOpenModal] = useState({ state: false, project: null });
//   console.log(openModal)
//   return (
//     <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
     
//       <Router >
//        <Routes>
//             <Route path="/Birthday" element={<Birthday />} />
//           </Routes>
//         <Navbar />
//         <Body>
//           <HeroSection />
//           <Wrapper>
//             <Skills />
//             <Experience />
//           </Wrapper>
//           <Projects openModal={openModal} setOpenModal={setOpenModal} />
//           <Wrapper>
//             <Education />
//             <Contact />
//             {/* <Blog /> */}
//           </Wrapper>
          
        
//           <Footer />
//           {openModal.state &&
//             <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
//           }
//         </Body>
//       </Router>
//     </ThemeProvider>
//   );
// }

// export default App;

import { ThemeProvider } from "styled-components";
import { useState } from "react";
import { darkTheme, lightTheme } from './utils/Themes.js';
import Navbar from "./components/Navbar";
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HeroSection from "./components/HeroSection";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Birthday from "./components/Birthday";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import Education from "./components/Education";
import ProjectDetails from "./components/ProjectDetails";
import styled from "styled-components";
import DevCard from "./components/DevCard";
// import Blog from './components/Blog'; // Uncomment if needed

// Styled components for Body and Wrapper
const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
`;

const Wrapper = styled.div`
  background: linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), 
              linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`;

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [openModal, setOpenModal] = useState({ state: false, project: null });

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Router>
        {/* <Body> */}
          <Routes>
            <Route 
              path="/" 
              element={
                 <Body>
                <> <Navbar />
                  <HeroSection />
                  <Wrapper>
                    <Skills />
                    <Experience />
                  </Wrapper>
                  <Projects openModal={openModal} setOpenModal={setOpenModal} />
                  <Wrapper>
                    <Education />
                    <Contact />
                    {/* <Blog /> */} {/* Uncomment if you decide to use Blog component */}
                  </Wrapper>
                  <Footer />
                  {openModal.state && (
                    <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
                  )}
                </>
              </Body>
              } 
            />
            {/* Birthday page route */}
            <Route path="/Birthday" element={<Birthday />} />
            <Route path="/devcard" element={<DevCard />} />
          </Routes>
        {/* </Body> */}
      </Router>
    </ThemeProvider>
  );
}

export default App;

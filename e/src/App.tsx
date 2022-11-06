import React from "react";
import { ThemeProvider, createTheme } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Portfolio from "./pages/Portfolio";
import PortfolioDetail from "./pages/PortfolioDetail";
import About from "./pages/About";
import Contact from "./pages/Contact";

const theme = createTheme({
  mode: "dark",
  palette: {
    primary: {
      main: "#0048ff",
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: "contained",
      },
    },
    MuiContainer: {
      defaultProps: {
        fixed: true,
        maxWidth: "lg",
      },
    },
  },
  typography: {
    fontFamily: "Readex Pro",
    fontSize: 18,
    h1: {
      fontWeight: 900,
    },
  },
});

const App: React.FC = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/portfolio' element={<Portfolio />} />
            <Route path='/portfolio/:id' element={<PortfolioDetail />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/about' element={<About />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
};

export default App;

import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import Banner from "./components/Banner";
import { Reports } from "./components/Reports";
import { Footer } from "./components/Footer";
import { CrimeStatistics } from "./components/CrimeStatistics";
import { ReportDetails } from "./components/ReportDetails";
import Home from "./components/Home";
import AllRoutes from "./Router/AllRoutes";

function App() {
  return (
    <>
      <Navbar />
      <AllRoutes/>
      <Footer />
    </>
  );
}

export default App;

import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Roadmaps from "./pages/Roadmaps";
import Practice from "./pages/Practice";
import DSADetail from "./pages/DSADetail";
import DSATopics from "./pages/DSATopics";
import DSATopic from "./pages/DSATopic";
import Algorithms from "./pages/Algorithms";
import AlgorithmDetail from "./pages/AlgorithmDetail";
import Aptitude from "./pages/Aptitude";
import AptitudeDetail from "./pages/AptitudeDetail";
import ProgrammingLanguages from "./pages/ProgrammingLanguages";
import Resources from "./pages/Resources";
import About from "./pages/About";
import Contact from "./pages/Contact";
import InterviewPrep from "./pages/InterviewPrep";
import CompanyInterview from "./pages/CompanyInterview";

function App() {
  return (
    <div className="min-h-screen bg-dark">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/roadmaps" element={<Roadmaps />} />
        <Route path="/practice" element={<Practice />} />
        <Route path="/practice/dsa" element={<DSATopics />} />
        <Route path="/practice/dsa/:topic" element={<DSATopic />} />
        <Route path="/practice/algorithms" element={<Algorithms />} />
        <Route path="/practice/algorithms/:category" element={<AlgorithmDetail />} />
        <Route path="/practice/aptitude" element={<Aptitude />} />
        <Route path="/practice/aptitude/:section" element={<AptitudeDetail />} />
        <Route path="/dsa" element={<DSADetail />} />
        <Route path="/programming-languages" element={<ProgrammingLanguages />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/interview-prep" element={<InterviewPrep />} />
        <Route path="/interview-prep/:company" element={<CompanyInterview />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

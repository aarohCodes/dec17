// Example: in src/App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EnvelopeIntro from "./EnvelopeIntro";
import LoveLetter from "./LoveLetter";
import PhotoReveal from "./PhotoReveal";
import Gallery from "./Gallery";
import Contract from "./Contract";
import ActualContract from "./ActualContract";
import Polaroids from "./Polaroids";
import AreYouReady from "./AreYouReady";
import NoTurningBack from "./NoTurningBack";
import YoureSoKutie from "./YoureSoKutie";
import GFReveal from "./GFReveal";
// ... other imports

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<EnvelopeIntro />} />
        <Route path="/love-letter" element={<LoveLetter />} />
        <Route path="/photo-reveal" element={<PhotoReveal />} />
        <Route path="/memories" element={<Gallery />} />
        <Route path="/contract" element={<Contract />} />
        <Route path="/actual-contract" element={<ActualContract />} />
        <Route path="/polaroids" element={<Polaroids />} />
        <Route path="/are-you-ready" element={<AreYouReady />} />
        <Route path="/no-turning-back" element={<NoTurningBack />} />
        <Route path="/youre-so-kutie" element={<YoureSoKutie />} />
        <Route path="/gf-reveal" element={<GFReveal />} />
        {/* Add other routes as you implement them */}
      </Routes>
    </Router>
  );
}

export default App;

import Homepage from "./Homepage";
import History from "./History";
import Settings from "./Settings";
import Navbar from "./Navbar";
import User from "./User";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/history" element={<History />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/user" element={<User/>}/>
        </Routes>
      
    </Router>
  );
}

export default App;

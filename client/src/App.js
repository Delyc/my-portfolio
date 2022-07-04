import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Admin } from './components/admin/Admin';
import Landing from './components/Landing';
function App() {
  return (
   
    <div className="App">
   

      <Router>
        <Routes>
          
        <Route path="/admin/*" element={<Admin />} />
        <Route path="/*" element={<Landing />} />
        </Routes>
      
      
      </Router>

    </div>
  );
}

export default App;

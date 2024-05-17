import "./App.css";
import Form from "./components/form";
import DashBoard from "./components/dashboard";
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
function App() {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Form />}/> 
        <Route path="/dashboard" element={<DashBoard />}/>         
        </Routes>
      </Router>
  );
}

export default App;


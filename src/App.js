import logo from './logo.svg';
// import './App.css';
import GraphCms from './GraphCms';
import Employee from './Employee';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import EmployesDetailes from './EmployesDetailes';


function App() {



  return (
    <div className="App">

      {/* <GraphCms/> */}

      <BrowserRouter>

      <Routes>

      <Route path="/" element={<Employee/>} />
      <Route path="/employe/:slug" element={<EmployesDetailes/>} />


      </Routes>
      
      </BrowserRouter>

      
   
    </div>
  );
}

export default App;

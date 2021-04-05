import './index.css';
import Navbar from './components/navbar';
import MainContent from './components/maincontent';
import Singup from './components/singup';
import Login from './components/login';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";

import jwt_decode from "jwt-decode";



function App() {
  if(localStorage.jwtToken){
    return(
      <div>
        <h1>Success</h1>
      </div>
    )
  }
  console.log(localStorage);
  return (
    
      <Router>
        <div className="App">
            
            <Navbar/>
            <Route path="/" exact><MainContent/></Route>
            <Route path="/register" exact><Singup/></Route>
            <Route path="/login" exact><Login/></Route>
        </div>
        </Router>
      
  );
}

export default App;

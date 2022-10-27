// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Navigbar from './Components/navbar';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import SignUp from './Components/Users/signup';
import Home from './Components/Users/home';
import AllUsers from './Components/Users/allUsers';
function App() {
  const user = localStorage.getItem("token");
  return (
   
    
    <Router>
       <div className="App">
   
    <Routes>
    {user && <Route path="/" exact element={<Home />} />}
    <Route exact path="/signup" element={<SignUp/>}/>
    
    <Route exact path="/allUsers" element={<AllUsers/>}/>

    </Routes>
    </div>
    </Router>






    
    
  );
}

export default App;

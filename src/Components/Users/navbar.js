import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import {Link} from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
// import { useNavigate } from 'react-router-dom';

function NavBar() {

  // const navigate= useNavigate();


  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        
        
        <h3 style={{color: "#0072b1",fontWeight: "900","paddingLeft": "10px"}}>GO MOBIT</h3>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
         
            <div className="nav-right">
            <Link to="/signup">
            <Button variant="outline-primary" style={{"fontWeight": "600","borderRadius": " 24px","marginLeft": "10px"}}> Add User </Button>
            </Link>
            
            <Link to="/allUsers">
            <Button variant="outline-primary" style={{"fontWeight": "600","borderRadius": " 24px","marginLeft": "10px"}}> Users </Button>
            </Link>
            </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
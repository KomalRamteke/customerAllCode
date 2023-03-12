import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function NavHeader() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand >Customer Information</Navbar.Brand>
          <Nav className="me-auto">
           
            <Link to="/" className='btn btn-success mx-3'>List</Link>
            <Link to="/add" className='btn btn-success mx-3'>Add</Link>
            <Link to="/filter" className='btn btn-success mx-3'>Filter</Link>
          </Nav>
        </Container>
      </Navbar>
     
    </>
  );
}

export default NavHeader;
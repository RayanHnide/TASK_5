import { Link } from "react-router-dom"

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Offcanvas from 'react-bootstrap/Offcanvas';
import {useState} from "react";
const HomeNavBar =()=>{

        const [colorChange, setColorchange] = useState(false);
        const changeNavbarColor = () => {
            if (window.scrollY >= 10) {
                setColorchange(true);
            } else {
                setColorchange(false);
            }
        };

        window.addEventListener('scroll', changeNavbarColor);
    return(
        <>
        
   

            {[ 'sm'].map((expand) => (

                  <Navbar key={expand} expand={expand} className={colorChange ? 'navbar colorChange p-4 mb-3 fixed-top ' : 'p-4 mb-3 fixed-top  navbar'}   style={{borderRadius:'0px 0px 20px 20px '}}>
                      <Container fluid>
                          <Navbar.Brand href="#" style={{fontWeight:'bold'}} className="text-black fw-bold">Learner</Navbar.Brand>
                          <Navbar.Toggle   />
                          <Navbar.Offcanvas
                              id={`offcanvasNavbar-expand-${expand}`}
                              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                              placement="end"
                              className='bg-dark'
                          >
                              <Offcanvas.Header className="bg-light" closeButton>

                              </Offcanvas.Header>
                              <Offcanvas.Body>
                                  <Nav className="justify-content-center  flex-grow-1 pe-2 pt-2">
                                      <Link style={{textDecoration:'none'}} to='/'>
                                          <Nav.Link className="text-black fw-bold pe-5" href="#action1">Home</Nav.Link>
                                      </Link>
                                      <Link style={{textDecoration:'none'}} to='courses'>
                                          <Nav.Link href="#action1" className="fw-bold text-black pe-5">Courses</Nav.Link>
                                      </Link>
                                      <Link style={{textDecoration:'none'}} to='teachers'><Nav.Link href="#action1" className="text-black pe-5 fw-bold"> Teacher  </Nav.Link></Link>
                                      <Link style={{textDecoration:'none'}} to='students'><Nav.Link href="#action1" className="text-black pe-5 fw-bold"> Students  </Nav.Link></Link>

                                  </Nav>
                                  <Form className="d-flex">
                                      <Button variant="primary text-white">ENROLL NOW</Button>
                                  </Form>
                              </Offcanvas.Body>
                          </Navbar.Offcanvas>
                      </Container>
                      <hr/>
                  </Navbar>


            ))}

        </>
    )
}

export default HomeNavBar
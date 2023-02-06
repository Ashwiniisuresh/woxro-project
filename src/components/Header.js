import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css'


function Header() {
  return (
    <>
       <Navbar bg="light" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <h1 className='head'> xentice       
             <a  id='first'><i class="fa-solid fa-bullhorn"></i>Post ad</a> 
            <a><i class="fa-solid fa-location-dot"></i>Near Me</a>
            <a id='line' href='login'><i class="fa-solid fa-arrow-right-to-bracket"></i>Login/Sign Up</a>
            </h1> 

           
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  )
}

export default Header
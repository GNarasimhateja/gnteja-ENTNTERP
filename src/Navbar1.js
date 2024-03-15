import React from "react";
import {Link} from "react-router-dom";
import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navbar1(){
    return (
    <div Classname="App">
      <center>
      <b><h1 class="text-dark">ERP-SYSTEM</h1></b>
      </center>
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">Admin</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/Dashboard">Dashboard</Nav.Link>
            <Nav.Link as={Link} to="/ProductManagement">Product Management</Nav.Link>
            <Nav.Link as={Link} to="/Ordermanament">Order management</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <p class="text-justify">The ERP system is a web application designed to facilitate the management of business activities such as product and order management, utilizing administrator credentials for access. Its primary function involves retrieving data from the server in JSON format and presenting it on a web server, typically accessed via Chrome browser, utilizing technologies such as HTML, CSS, JavaScript, and React JavaScript.
       This web application deploys dynamic data, meaning that information displayed can change based on the requirements set by the administrator. This is achieved through the use of APIs, which enable the application to interact with external systems and services to fetch or update data as needed.

       In this setup, two servers are utilized: http://localhost:3000 and http://localhost:4000.
       The first server, hosted at http://localhost:3000, is responsible for fetching data from a JSON server and presenting it attractively to the administrator.
       Meanwhile, the second server, located at http://localhost:4000, handles the dynamic manipulation of data within the web application.
       To facilitate communication between these two servers, APIs have been implemented to serve as a bridge, enabling seamless interaction between the web server and the JSON server.
      </p>
    </>
    </div>
    )
}
export default Navbar1(); 



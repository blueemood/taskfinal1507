import React, {useState, useEffect, useContext} from 'react'
import { useNavigate, NavLink } from 'react-router-dom'
import '../stylesheets/home.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col,Container, Fade, Button, ListGroup, Badge } from 'react-bootstrap';
import { UserContext } from '../App';
import MainNavbar from './MainNavbar';
import Signup from './Signup';


const Home = () => {

    const {state, dispatch} = useContext(UserContext);   
    // const [selectedProject, setSelectedProject] = useState();
    
  return (
    <>
        {state
        ?
        <Container  className='background ' fluid>
          <MainNavbar />
          <div className='bgg'>
          <h3>Welcome to TaskHive</h3>
          <p className='bgtext'>TaskHive is a cutting-edge task and project management website designed to streamline your workflow and boost productivity. With its intuitive interface and robust features, TaskHive empowers individuals and teams to effortlessly organize, prioritize, and track tasks, ensuring deadlines are met and projects are completed with efficiency and precision.</p>
            </div>
        </Container>
        :
        <Container className='background2 ' fluid>
          <Signup/>
          {/* <h1>For creating / managing teams please<NavLink to="/login" >Login</NavLink></h1> */}
        </Container>
        }
    </>
  )
}

export default Home
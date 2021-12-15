import { Outlet, NavLink } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import Welcome from './welcome';

export default function Home() {
  console.log("inside home" + window.localStorage.getItem('user'));
  let loggedinUser =  JSON.parse(window.localStorage.getItem('user'));
  if(!loggedinUser) return <Welcome />
  
  return (
    <div>
      <p>Welcome {loggedinUser.username} ! </p>
      <Nav className='navbar navbar-default'>
        <div className='navbar-header'>My Flix
          <ul className='nav navbar-nav'>
            <NavLink to="/home/movies" 
              style={isActive => ({
              color: isActive ? "green" : "blue"
              })}
            >Movies</NavLink>
            <NavLink to="/home/user">Profile</NavLink>
            <NavLink to="/home/logout">Logout</NavLink>
          </ul>
        </div>
      </Nav>
      <hr></hr>
      <Outlet />
    </div>
  );
}
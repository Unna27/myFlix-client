import { Outlet, NavLink } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

export default function Home() {
  return (
    <div>
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
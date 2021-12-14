import { Outlet, NavLink } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

export default function Home() {
  return (
    <div>
      <Nav className='navbar navbar-default'>
        <div className='navbar-header'>My Flix
          <ul className='nav navbar-nav'>
            <NavLink to="/movies" 
              style={isActive => ({
              color: isActive ? "green" : "blue"
              })}
            >Movies</NavLink>
            <NavLink to="/user">Profile</NavLink>
            <NavLink to="/logout">Logout</NavLink>
          </ul>
        </div>
      </Nav>
      <hr></hr>
      <Outlet />
    </div>
  );
}
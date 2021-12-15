import { Outlet, NavLink } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

export default function Welcome() {
   return (
    <div>
      <Nav className='navbar navbar-default'>
        <div className='navbar-header'>My Flix
          <ul className='nav navbar-nav'>
            <NavLink to="/login" 
              style={isActive => ({
              color: isActive ? "green" : "blue"
              })}
            >Login</NavLink>
            <NavLink to="/register">Sign-up</NavLink>
           </ul>
        </div>
      </Nav>
      <hr></hr>
      <Outlet />
    </div>
  );
}
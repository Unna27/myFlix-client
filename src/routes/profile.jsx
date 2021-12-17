import { Outlet } from 'react-router-dom';
import ProfileView from '../components/profile-view/profile-view';

export default function Profile() {

  return (
   <>
    <ProfileView />

    <hr></hr>

    <Outlet />
   </>
     
  );
}
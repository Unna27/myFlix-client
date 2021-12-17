import { Outlet } from 'react-router-dom';
import { Menubar } from './navbar/navbar';

export default function Home() {

  return (
   <>
    <Menubar />

    <hr></hr>

    <Outlet />
   </>
     
  );
}
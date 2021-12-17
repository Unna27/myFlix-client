import { useNavigate } from "react-router-dom";

export default function Logout({onLoggedOut}) {
  const navigate = useNavigate();
  localStorage.clear();
  onLoggedOut();
  window.open('/','_self');
 
}
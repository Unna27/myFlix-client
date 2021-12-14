export default function Logout(props) {
  //props.onLoggedOut();
  window.localStorage.clear();
   window.alert("Logged Out");
   window.open('/login','_self');
  return null;
 
}
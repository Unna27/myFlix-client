export default function Logout() {
  window.localStorage.clear();
   window.alert("Logged Out");
   window.open('/','_self');
  return null;
 
}
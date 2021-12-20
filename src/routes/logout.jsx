
export default function Logout() {
  window.localStorage.clear();
  console.log("Logged Out");
  window.open('/','_self');
}
import Navbar from "../components/Navbar/navbar"; 
import React from 'react'
import LightTheme from "../layouts/Light";

const Admin = () => {
    const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);
  React.useEffect(() => {
    var navbar = navbarRef.current,
      logo = logoRef.current;
    if (window.pageYOffset > 300) {
      navbar.classList.add("nav-scroll");
    } else {
      navbar.classList.remove("nav-scroll");
    }
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
      } else {
        navbar.classList.remove("nav-scroll");
      }
    });
  }, [navbarRef]);
  return (
    <div>  
        <LightTheme>

            <Navbar nr={navbarRef} lr={logoRef} />
        </LightTheme>
    </div>

  )
}

export default Admin
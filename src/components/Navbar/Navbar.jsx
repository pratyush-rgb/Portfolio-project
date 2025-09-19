import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/lo.png";
import underline from "../../assets/underline.png";
import { Link } from "react-scroll";
import menu_o from "../../assets/menu.png";
import menu_c from "../../assets/no.png";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [isOpen, setIsOpen] = useState(false); // ✅ track sidebar open/close

  return (
    <div className="navbar">
      <img src={logo} alt="logo" className="hola" />

      {/* Hamburger (only show if menu closed) */}
      {!isOpen && (
        <img
          src={menu_o}
          onClick={() => setIsOpen(true)}
          alt="open menu"
          className="hola nav-mob-o"
        />
      )}

      {/* Sidebar */}
      <ul className={`navmenu ${isOpen ? "active" : ""}`}>
        {/* Close button */}
        <img
          src={menu_c}
          alt="close menu"
          onClick={() => setIsOpen(false)}
          className="hola nav-mob-c"
        />

        <li>
          <Link
            to="home"
            smooth={true}
            duration={600}
            offset={-70}
            onClick={() => {
              setMenu("home");
              setIsOpen(false); // close sidebar on click
            }}
          >
            Home
          </Link>
          {menu === "home" ? <img src={underline} alt="" /> : null}
        </li>

        <li>
          <Link
            to="about"
            smooth={true}
            duration={600}
            offset={-70}
            onClick={() => {
              setMenu("about");
              setIsOpen(false);
            }}
          >
            About me
          </Link>
          {menu === "about" ? <img src={underline} alt="" /> : null}
        </li>

        <li>
          <Link
            to="services"
            smooth={true}
            duration={600}
            offset={-70}
            onClick={() => {
              setMenu("services");
              setIsOpen(false);
            }}
          >
            Services
          </Link>
          {menu === "services" ? <img src={underline} alt="" /> : null}
        </li>

        <li>
          <Link
            to="contact"
            smooth={true}
            duration={600}
            offset={-70}
            onClick={() => {
              setMenu("contact");
              setIsOpen(false);
            }}
          >
            Contact me
          </Link>
          {menu === "contact" ? <img src={underline} alt="" /> : null}
        </li>
      </ul>

      {/* Connect button (hidden on mobile via CSS) */}
      <div className="navConnect">
        <Link
          to="contact"
          smooth={true}
          duration={600}
          offset={-70}
          onClick={() => setMenu("contact")}
        >
          Connect with me
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { ImHome3, ImCogs, ImSwitch } from "react-icons/im";
import "@/components/navbar.scss";

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const menuItem = [
    {
      path: "/home",
      name: "Home",
      icon: <ImHome3 style={{ color: "#f5ffff" }} />,
    },
    {
      path: "/tools",
      name: "Tools",
      icon: <ImCogs style={{ color: "#f5ffff" }} />,
    },
  ];

  return (
    <nav
      style={{ width: isOpen ? "150px" : "50px" }}
      className='sidebar d-flex flex-column  bg-info h-100 '>
      <div className='top_section d-flex align-items-center p-3'>
        <div
          style={{
            color: "#f5ffff",
            fontSize: "20px",
          }}
          className='bars d-flex justify-content-center'>
          {isOpen ? <FaTimes onClick={toggle} /> : <FaBars onClick={toggle} />}
        </div>
        {/* <span
          className='text-light'
          style={{ display: isOpen ? "block" : "none" }}>
          Close
        </span> */}
      </div>

      {menuItem.map((item, index) => (
        <NavLink
          to={item.path}
          key={index}
          className='link d-flex align-items-center py-2 '
          activeClassName='active'>
          <div className='link_icon ps-3 fs-5'>{item.icon}</div>
          <div
            style={{ display: isOpen ? "block" : "none" }}
            className='link_text text-light fs-5'>
            {item.name}
          </div>{" "}
        </NavLink>
      ))}
      <div className='bottom_section d-flex align-items-center mt-auto p-3'>
        <div className='bars d-flex justify-content-center'>
          <ImSwitch style={{ color: "#f5ffff", fontSize: "20px" }} />
        </div>
      </div>
    </nav>
  );
};

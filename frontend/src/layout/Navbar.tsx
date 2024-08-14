import { NavLink } from "react-router-dom";
import { NavbarProps } from "@/modules/Types";
import { FaBars, FaTimes } from "react-icons/fa";
import { ImHome3, ImCogs, ImSwitch } from "react-icons/im";

export const Navbar: React.FC<NavbarProps> = ({ isOpen, toggleNavbar }) => {
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
    {
      path: "/tools/DSR",
      name: "DSR",
      icon: <ImCogs style={{ color: "#f5ffff" }} />,
    },
  ];

  return (
    <nav
      style={{ width: isOpen ? "150px" : "50px" }}
      className='sidebar d-flex flex-column  bg-info'>
      <div className='top_section d-flex align-items-center p-3'>
        <div
          style={{
            color: "#f5ffff",
            fontSize: "20px",
          }}
          className='bars d-flex justify-content-center'>
          {isOpen ? (
            <FaTimes onClick={toggleNavbar} />
          ) : (
            <FaBars onClick={toggleNavbar} />
          )}
        </div>
      </div>

      {menuItem.map((item, index) => (
        <NavLink
          to={item.path}
          key={index}
          className={({ isActive }) =>
            `link d-flex align-items-center py-2 ${
              isActive ? "activeLink" : ""
            } `
          }>
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
        <span
          className='text-light fs-5 ps-3'
          style={{ display: isOpen ? "block" : "none" }}>
          Logout
        </span>
      </div>
    </nav>
  );
};

import { NavLink } from "react-router-dom";
import { NavbarProps } from "@/modules/Types";
import { FaBars, FaTimes } from "react-icons/fa";
import { ImHome3, ImCogs, ImSwitch } from "react-icons/im";
import { FaServer, FaRobot, FaNetworkWired } from "react-icons/fa";
import { MdVpnLock } from "react-icons/md";

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
      path: "/tools/Manage C4",
      name: "Manage C4",
      icon: <MdVpnLock style={{ color: "#acccdd", height: "0.8em" }} />,
    },
    {
      path: "/tools/DSR",
      name: "DSR",
      icon: <FaNetworkWired style={{ color: "#acccdd", height: "0.8em" }} />,
    },
    {
      path: "/tools/Automation",
      name: "Automation",
      icon: <FaRobot style={{ color: "#acccdd", height: "0.8em" }} />,
    },
    {
      path: "/tools/C4 VM & Servers",
      name: "C4 VM & Servers",
      icon: <FaServer style={{ color: "#acccdd", height: "0.8em" }} />,
    },
  ];

  return (
    <nav
      style={{ width: isOpen ? "170px" : "50px" }}
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

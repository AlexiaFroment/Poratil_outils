import { useState } from "react";
import { Navbar } from "@/layout/Navbar";
import { Outlet } from "react-router-dom";
import { Footer } from "@/layout/Footer";

export const Layout: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => setIsOpen((prevIsOpen) => !prevIsOpen);

  return (
    <div className='layout_container d-flex flex-column h-100'>
      <div className='main_layout_container d-flex'>
        <Navbar isOpen={isOpen} toggleNavbar={toggleNavbar} />
        <section className='outlet_container'>
          <Outlet context={{ isOpen, toggleNavbar }} />
        </section>
      </div>
      <Footer />
    </div>
  );
};

import './navbar.scss';
import styled from "@emotion/styled";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Nav = styled.div`
`;

export const Navbar = () => {
  const [displayMenu, setDisplayMenu] = useState<boolean>(false);

  return (
    <Nav className='bg-cyan-950'>
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-14 items-center justify-between">

          {/* <!-- navbar dropdown --> */}
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="absolute inset-y-0 left-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <div className="relative ml-3">
                <button type="button" className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                  <span className="absolute -inset-1.5"></span>
                  <span className="sr-only">Open user menu</span>
                  <img className="h-8 w-8 rounded-full" src="portrait.png" alt="" />
                </button>
              </div>
            </div>
          </div>
          
          <div className="hidden sm:ml-6 sm:block">
            <div className="flex space-x-4">
              <Links />
            </div>
          </div>
          
          {/* <!-- Mobile menu button--> */}
          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
            <button 
            className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            type="button"
            onClick={() => setDisplayMenu(menu => !menu)}
            >
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>
              <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
              <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* <!-- Mobile menu, show/hide based on menu state. --> */}
      <div className="sm:hidden" id="mobile-menu">
        <div className="px-2">
          <Links displayMenu={displayMenu} mobile={true} />
        </div>
      </div>
    </Nav>
  );
}

const MobileLink = styled(Link)`
  display: block;
`;

const Links = ({ displayMenu = true, mobile = false }: { displayMenu?: boolean, mobile?: boolean }) => {
  let styles = 'link text-slate-400 hover:bg-gray-700 hover:text-slate-100 rounded-md px-3 text-sm font-medium flex justify-center items-center transition duration-200 ease-in-out'
  const resumeLink = /* process.env.RESUME_LINK || */ 'https://docs.google.com/document/d/1_hb58UX5Ie8tc-1RylFbDdrxiWmGzYSExV4oR03U5Xs/edit?usp=sharing';

  const openResume = () => {
    window.open(resumeLink);
  }

  if (!mobile) {
    return (
      <>
        <Link to="/" className={styles}>Home</Link>
        <Link to="#" onClick={openResume} className={styles}>Resume</Link>
        <Link to="/projects" className={styles}>Projects</Link>
        <Link to="/contact" className={styles}>Contact</Link>
      </>
    );
  }

  if (!displayMenu) {
    styles += ' link-hidden';
  }

  return (
    <>
      <MobileLink to="/" className={styles}>Home</MobileLink>
      <MobileLink to="#" onClick={openResume} className={styles}>Resume</MobileLink>
      <MobileLink to="/projects" className={styles}>Projects</MobileLink>
      <MobileLink to="/contact" className={styles}>Contact</MobileLink>
    </>
  );
}
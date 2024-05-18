import React, { useState } from 'react';
import { logo, close, menu } from '../assets';
import { navlinks } from '../constants';

const Navbar = () => {
  const [active, setActive] = useState(null);
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
    setActive(null); // Réinitialisez également l'élément actif lorsque vous ouvrez/fermez le menu
  };

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <a href="/">
        <img
          src={logo}
          alt="squied"
          className="w-[124px] h-[32px] pointer-events-auto cursor-pointer"
        />
      </a>

      <ul className="list-none sm:flex hidden justify-end items-center flex-1 z-0">
        {navlinks.map((nav, index) => (
          <li
            key={nav.link}
            className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${
              active === nav.name ? 'text-purple-400' : 'text-dimWhite'
            } ${index === navlinks.length - 1 ? 'mr-0 p-3 bg-gradient-to-r from-fuchsia-400 to-violet-500 rounded-lg' : 'mr-10'}`}
            onClick={() => setActive(nav.name)}
          >
            <a href={`${nav.link}`}>{nav.name}</a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt=""
          className="w-[28px] h-[28px] object-contain"
          onClick={handleToggle}
        />
        <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar z-10`}>
          <ul className="list-none flex justify-end items-start flex-1 flex-col z-10">
            {navlinks.map((nav, index) => (
              <li
                key={nav.link}
                className={`font-poppins font-medium cursor-pointer text-white text-[16px] ${active === nav.name ? 'text-purple-400' : 'text-dimWhite'
                  } ${index === navlinks.length - 1 ? 'mb-0 p-3 bg-gradient-to-r from-fuchsia-400 to-violet-500 rounded-lg' : 'mb-4'}`}
                onClick={() => {
                  setActive(nav.name);
                  setToggle(false); // Fermez le menu lorsque vous cliquez sur un lien
                }}
              >
                <a href={`${nav.link}`}>{nav.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

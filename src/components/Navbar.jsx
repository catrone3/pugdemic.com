import React, {useEffect, useState} from 'react';

import { styles } from '../styles';
import { navLinks } from '../constants';
import { menu, close } from '../assets';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="sticky top-5 w-full flex max-w-7xl items-center py-5 mx-auto bg-primary">
      <div className="w-full flex justify-center items-center mx-auto">
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li 
              key={link.id} 
              className={`${
                active === link.title 
                ? "text-black" 
                : "text-secondary"
              } hover:text-tertiary text-[24px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}>
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img 
          src={toggle ? close : menu} 
          alt="menu" 
          className="w-[28px] h-[28px] cursor-pointer object-containt" 
          onClick={() => setToggle(!toggle)} />
          <div className={`${!toggle ? 'hidden' :'flex' } p-6 black-gradien absolute top-20 right-0 mx-4 my-2 min-w[140px] z-10 rounded-xl`}>
          <ul className="list-none flex justify-end items-start flex-col gap-4">
          {navLinks.map((link) => (
            <li 
              key={link.id} 
              className={`${
                active === link.title 
                ? "text-black" 
                : "text-secondary"
              } font-poppins font-medium cursor-pointer text-[16px]`}
              onClick={() => {
                setToggle(!toggle)
                setActive(link.title)
              }}>
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
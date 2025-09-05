"use client";

import React, { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const desktopMenuRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const isActive = (path: string) => {
    return pathname === path ? 'text-red-500' : '';
  };

  return (
    <>
      {/* Desktop Header */}
      <header className="header-desktop group hidden md:flex flex-col fixed top-5 left-0 z-40 transition-all duration-300 h-screen w-[210px] p-8 pt-1 bg-black/20 backdrop-blur-sm">
        {/* Logo */}
        <div id="boneca" className="logo shrink-0">
          <Link href="/" title="MQ Home">
            <Image 
              src="/logo.png" 
              alt="MQ Home"
              width={150}
              height={50}
            />
          </Link>
        </div>

        <div ref={desktopMenuRef} className="menu-main-menu-container flex-1 overflow-y-auto mt-5 relative [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
          <ul id="menu-main-menu" className="menu flex flex-col space-y-5 text-xl text-white">
            <li className={`menu-item hover:text-red-500 [&>a]:text-current ${isActive('/houses')}`}>
              <Link href="/houses" title="Houses">Houses</Link>
            </li>
            <li className={`menu-item hover:text-red-500 [&>a]:text-current ${isActive('/apartment')}`}>
              <Link href="/apartment" title="Apartment">Apartment</Link>
            </li>
            <li className={`menu-item hover:text-red-500 [&>a]:text-current ${isActive('/buildings')}`}>
              <Link href="/buildings" title="Buildings">Buildings</Link>
            </li>
            <li className={`menu-item hover:text-red-500 [&>a]:text-current ${isActive('/f-b')}`}>
              <Link href="/f-b" title="F&B">F&B</Link>
            </li>
            <li className={`menu-item hover:text-red-500 [&>a]:text-current ${isActive('/commercial')}`}>
              <Link href="/commercial" title="Commercial">Commercial</Link>
            </li>
            <li className={`menu-item hover:text-red-500 [&>a]:text-current ${isActive('/construction')}`}>
              <Link href="/construction" title="Construction">Construction</Link>
            </li>
            <li className={`menu-item hover:text-red-500 [&>a]:text-current ${isActive('/design')}`}>
              <Link href="/design" title="Design">Design</Link>
            </li>
            <li className={`menu-item hover:text-red-500 [&>a]:text-current ${isActive('/about-us')}`}>
              <Link href="/about-us" title="About us">About us</Link>
            </li>
            <li className={`menu-item hover:text-red-500 [&>a]:text-current ${isActive('/contacts')}`}>
              <Link href="/contacts" title="CONTACTS">CONTACTS</Link>
            </li>
          </ul>
        </div>

        {/* Language Menu and Social - Desktop */}
        <div className="mt-auto">
          <div className="social-wrapper flex space-x-3 mb-3">
            <a className="" href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" title="Facebook">
              <Image src="https://drive.google.com/uc?export=view&id=1wMHMH3hFrmpOStzQjuUd_TGHPXn2MhBv" alt="Facebook" width={24} height={24} />
            </a>
            {/* <a className="" href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer" title="Tiktok">
              <Image src="https://drive.google.com/uc?export=view&id=1XZ24y_bGLjP2Sgw2tlKPyOUBOVnRx70s" alt="Tiktok" width={24} height={24} />
            </a> */}
            <a className="" href="https://zalo.me/0354238871" target="_blank" rel="noopener noreferrer" title="Zalo">
              <Image src="https://drive.google.com/uc?export=view&id=13pnJPHSIhNhF31pAtWrxjf4z3rvBN_m_"  alt="Zalo" width={24} height={24} />
            </a>
            {/* <a className="" href="https://www.pinterest.com/" target="_blank" rel="noopener noreferrer" title="Pinterest">
              <Image src="https://drive.google.com/uc?export=view&id=181eAMX9QHfkfIVP-VUc5GOdxpk8-U2fd" alt="Pinterest" width={24} height={24} />
            </a> */}
          </div>
          {/* <ul className="language-chooser flex space-x-2">
            <li className="lang-pb">
              <a href="" title="ENG">
                <span>ENG</span>
              </a>
            </li>
            <li className="line">|</li>
            <li className="lang-en active">
              <a href="" title="VN">
                <span>*VN</span>
              </a>
            </li>
          </ul> */}
        </div>
      </header>

      {/* Mobile Header */}
      <div className="header-mobile md:hidden fixed top-5 right-5 z-50">
        <button 
          className={`btn-menu hamburger hamburger--spin ${mobileMenuOpen ? 'is-active' : ''} text-black hover:text-gray-600 transition-colors duration-200`} 
          type="button"
          onClick={toggleMobileMenu}
        >
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu lg:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-40 transform-gpu transition-all duration-500 ease-in-out ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div ref={mobileMenuRef} className="menu-main-menu-container pt-20 px-6 md:px-10 h-[calc(100vh-180px)] overflow-y-auto relative [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
          <ul id="menu-main-menu-1" className="menu flex flex-col space-y-3 md:space-y-6 text-xl md:text-2xl text-white">
            <li className="menu-item hover:text-red-500 [&>a]:text-current">
              <Link href="/houses" title="Houses" onClick={toggleMobileMenu}>Houses</Link>
            </li>
            <li className="menu-item hover:text-red-500 [&>a]:text-current">
              <Link href="/apartment" title="Apartment" onClick={toggleMobileMenu}>Apartment</Link>
            </li>
            <li className="menu-item hover:text-red-500 [&>a]:text-current">
              <Link href="/buildings" title="Buildings" onClick={toggleMobileMenu}>Buildings</Link>
            </li>
            <li className="menu-item hover:text-red-500 [&>a]:text-current">
              <Link href="/f-b" title="F&B" onClick={toggleMobileMenu}>F&B</Link>
            </li>
            <li className="menu-item hover:text-red-500 [&>a]:text-current">
              <Link href="/commercial" title="Commercial" onClick={toggleMobileMenu}>Commercial</Link>
            </li>
            <li className="menu-item hover:text-red-500 [&>a]:text-current">
              <Link href="/construction" title="Construction" onClick={toggleMobileMenu}>Construction</Link>
            </li>
            <li className="menu-item hover:text-red-500 [&>a]:text-current">
              <Link href="/design" title="Design" onClick={toggleMobileMenu}>Design</Link>
            </li>
            <li className="menu-item hover:text-red-500 [&>a]:text-current">
              <Link href="/about-us" title="About us" onClick={toggleMobileMenu}>About us</Link>
            </li>
            <li className="menu-item hover:text-red-500 [&>a]:text-current">
              <Link href="/contacts" title="CONTACTS" onClick={toggleMobileMenu}>CONTACTS</Link>
            </li>
          </ul>
        </div>
        <div className="lang-menu p-10 flex flex-col items-center">
          {/* <ul className="language-chooser flex space-x-2">
            <li className="lang-pb">
              <a href="" title="ENG">
                <span>ENG</span>
              </a>
            </li>
            <li className="lang-en active">
              <a href="" title="VN">
                <span>VN</span>
              </a>
            </li>
          </ul> */}
          <div className="social-wrapper flex gap-4 mt-8">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" title="Facebook">
              <Image src="https://drive.google.com/uc?export=view&id=1wMHMH3hFrmpOStzQjuUd_TGHPXn2MhBv" alt="Facebook" width={24} height={24} />
            </a>
            <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer" title="Tiktok">
              <Image src="https://drive.google.com/uc?export=view&id=1XZ24y_bGLjP2Sgw2tlKPyOUBOVnRx70s" alt="Tiktok" width={24} height={24} />
            </a>
            <a href="https://zalo.me" target="_blank" rel="noopener noreferrer" title="Zalo">
              <Image src="https://drive.google.com/uc?export=view&id=13pnJPHSIhNhF31pAtWrxjf4z3rvBN_m_" alt="Zalo" width={24} height={24} />
            </a>
            <a href="https://www.pinterest.com/" target="_blank" rel="noopener noreferrer" title="Pinterest">
              <Image src="https://drive.google.com/uc?export=view&id=181eAMX9QHfkfIVP-VUc5GOdxpk8-U2fd" alt="Pinterest" width={24} height={24} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

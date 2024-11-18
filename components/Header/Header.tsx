'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);
  const [stickyMenu, setStickyMenu] = useState(false);
  const [navigationOpen, setNavigationOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
 
  useEffect(() => {
    
    const handleScroll = () => {
      setStickyMenu(window.pageYOffset > 20);
    };
    

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <header className={`g s r vd ya cj ${stickyMenu ? 'hh sm _k dj bl ll' : ''}`}>
      <div className="bb ze ki xn 2xl:ud-px-0 oo wf yf i">
        <div className="vd to/4 tc wf yf">
          <Link href="/">
            <Image className="om" src="/images/MbtechLogo.png" alt="Logo Light" width={200} height={50} />
            <Image className="xc nm" src="/images/MbtechLogo.png" alt="Logo Dark" width={200} height={50} />
          </Link>
          {/* Hamburger Toggle Button */}
          <button className="po rc" onClick={() => setNavigationOpen(!navigationOpen)}>
            <span className="rc i pf re pd">
              <span className="du-block h q vd yc">
                <span className={`rc i r s eh um tg te rd eb ml jl dl ${!navigationOpen ? 'ue el' : ''}`}></span>
                <span className={`rc i r s eh um tg te rd eb ml jl fl ${!navigationOpen ? 'ue qr' : ''}`}></span>
                <span className={`rc i r s eh um tg te rd eb ml jl gl ${!navigationOpen ? 'ue hl' : ''}`}></span>
              </span>
            </span>
          </button>
        </div>

        <div className={`vd wo/4 sd qo f ho oo wf yf ${navigationOpen ? 'd hh rm sr td ud qg ug jc yh' : ''}`}>
          <nav>
            <ul className="tc _o sf yo cg ep">
              <li><Link href="/" className={`xl ${stickyMenu ? 'mk' : ''}`}>Home</Link></li>
              <li><Link href="/mb-project" className="xl">Projects</Link></li>
              <li className="c i" onClick={() => setDropdownOpen(!dropdownOpen)}>
                <Link href="/" className={`xl tc wf yf bg ${dropdownOpen ? 'mk' : ''}`}>
                  Pages
                  <svg className={`th mm we fd pf ${dropdownOpen ? 'wh' : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                  </svg>
                </Link>
                {/* Dropdown Start */}
                <ul className={`a ${dropdownOpen ? 'tc' : ''}`}>
                  <li><Link href="/mb-project" className="xl">Project</Link></li>
                  <li><Link href="/contact" className="xl">Contact us</Link></li>
                </ul>
                {/* Dropdown End */}
              </li>
              <li><Link href="/contact" className="xl">Contact us</Link></li>
            </ul>
          </nav>

          <div className="tc wf ig pb no">
            <label className="rc ab i">
              <input type="checkbox" checked={darkMode} onChange={() => setDarkMode(!darkMode)} className="pf vd yc uk h r za ab" />
              <svg className="th om" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="..." fill="" />
              </svg>
              <Image className="xc nm" src="/images/icon-moon.svg" alt="Moon" width={25} height={25} />
            </label>
            <Link href="/contact" className="lk gh dk rg tc wf xf _l gi hi">Contact Us</Link>
          </div>
        </div>
      </div>
    </header>
  );
}

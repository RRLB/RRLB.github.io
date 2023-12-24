import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { useRouter } from "next/router";


const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState('#131f29')
  const [linkColor, setLinkColor] = useState('#cbd9ec')
  const router = useRouter()
//use effect runs one time when the route changes
  useEffect(() => {
    if(
      router.asPath === '/shg' ||
      router.asPath === '/docform' ||
      router.asPath === '/netflix' ||
      router.asPath === '/crypto'
    ) {
      setNavBg('transparent')
      setLinkColor('#cbd9ec')
    } else {
      setNavBg('#131f29')
      setLinkColor('#cbd9ec')
    }
  }, [router])

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if(window.scrollY >= 90) {
        setShadow(true)
      } else {
        setShadow(false)
      }
    }
    window.addEventListener('scroll', handleShadow);
    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleShadow);
    };
  }, []);

  return (
    
    
      <div  style={{backgroundColor:`${navBg}`}} id='navbar' className={`navbar ${shadow ? 'fixed w-full h-20 shadow-xl shadow-gray-950 ' : 'fixed w-full h-20'}`}>

      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Link href='/'>
            <Image
            src="/assets/RB-White.png"
            alt="/"
            className="logo "
            width="100"
            height="40"
          />  
        </Link>
        
        <div>
          <ul style={{color:`${linkColor}`}} className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
            </Link>
            <Link href="/#about">
              <li className="ml-10 text-sm uppercase hover:border-b">About</li>
            </Link>
            <Link href="/#skills">
              <li className="ml-10 text-sm uppercase hover:border-b">Skills</li>
            </Link>
            <Link href="/#projects">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Project
              </li>
            </Link>
            <Link href="/#contact">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Contact
              </li>
            </Link>
          </ul>
          <div onClick={handleNav} className="md:hidden cursor-pointer">
            <AiOutlineMenu size="25" />
          </div>
        </div>
      </div>
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[65%] md:w-[45%] h-screen bg-[#c7ced3] p-10 easi-in duration-500"
              : "fixed left-[-100%] top-0 p-10 easi-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Link href='/'>
                <Image src="/assets/2.png" alt="/" width="100" height="40" />
              </Link>
              
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer text-gray-700"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-[#8f6e5d] my-4 text-gray-600">
              <p className="w-[85%] md:w-[90%] py-4">
                Let's build something great together
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col ">
            <ul className="uppercase  text-gray-600">
              <Link href="/">
                <li onClick={() => setNav (false)} id="liNavBar" className="py-4 text-sm">Home</li>
              </Link>
              <Link href="/#about">
                <li onClick={() => setNav (false)} id="liNavBar" className="py-4 text-sm">About</li>
              </Link>
              <Link href="/#skills">
                <li onClick={() => setNav (false)} id="liNavBar" className="py-4 text-sm">Skills</li>
              </Link>
              <Link href="/#projects">
                <li onClick={() => setNav (false)} id="liNavBar" className="py-4 text-sm">Projects</li>
              </Link>
              <Link href="/#contact">
                <li onClick={() => setNav (false)} id="liNavBar" className="py-4 text-sm">Contact</li>
              </Link>
            </ul>
            <div className="pt-40">
              <p id="pConnect" className="uppercase tracking-widest  text-gray-600">
                Let's connect
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[8-%]  text-[#8f6e5d]">
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:shadow-gray-800 hover:scale-105 ease-in duration-300">
                  <FaLinkedinIn />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:shadow-gray-800 hover:scale-105 ease-in duration-300">
                  <FaGithub />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:shadow-gray-800 hover:scale-105 ease-in duration-300">
                  <AiOutlineMail />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:shadow-gray-800 hover:scale-105 ease-in duration-300">
                  <BsFillPersonLinesFill />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

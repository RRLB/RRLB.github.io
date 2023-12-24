import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi"

function Contact() {
  return (
    <div  id='contact' className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="text-xl tracking-widest uppercase">Contact</p>
        <h2>Get in touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* left */}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-black hover:shadow-grey-400 rounded-xl p-4">
            <div className="lg:p-4 h-full">
              <div>
                <Image
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  src="/assets/damian-zaleski-RYyr-k3Ysqg-unsplash.jpg"
                  alt="/"
                  width="400"
                  height="300"
                />
                {/* <img className='rounded-xl hover:scale-105 ease-in duration-300'  width ="400" height="300" src="/assets/damian-zaleski-RYyr-k3Ysqg-unsplash.jpg" alt="/" /> */}
              </div>
              <div>
                <h2 className="py-2">Raphael Liegeois-Barbey</h2>
                <h3 className="tracking-widest text-xl">
                  Full-Stack Developer
                </h3>
                <p className="py-4">
                  I am available for freelance of full-time positions. Contact
                  me and let&apos;s talk.
                </p>
              </div>
              <div>
                <p className="uppercase pt-8">Connect with me</p>
                <div className="flex items-center justify-start space-between py-6">
                  <div className="rounded-full shadow-lg shadow-black hover:shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300">
                    <FaLinkedinIn />
                  </div>
                  <div className="rounded-full shadow-lg shadow-black hover:shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300">
                    <FaGithub />
                  </div>
                  <div className="rounded-full shadow-lg shadow-black hover:shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300">
                    <AiOutlineMail />
                  </div>
                  <div className="rounded-full shadow-lg shadow-black hover:shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300">
                    <BsFillPersonLinesFill />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* right */}
          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-950 hover:shadow-grey-400 rounded-xl lg:p-4">
            <div className="p-4">
              <form>
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Name</label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-950"
                      type="text"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">
                      Phone Number
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-950"
                      type="number"
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Email</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-950"
                    type="email"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Subject</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-950"
                    type="text"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Message</label>
                  <textarea
                    className="border-2 rounded-lg p-3  border-gray-950"
                    rows="10"
                    type="text"
                  />
                </div>
                <button className="w-full p-4 text--[#8f6e5d] mt-4">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
            <Link href='/'>
                <div className="rounded-full shadow-lg shadow-black hover:shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                    <HiOutlineChevronDoubleUp className="text-gray-400" size={30}/>
                </div>
            </Link>
        </div>
      </div>
    </div>
  );
}

export default Contact;

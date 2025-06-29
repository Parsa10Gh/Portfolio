import React from 'react'
import { FiServer } from 'react-icons/fi';
import { HiOutlineDocumentText } from 'react-icons/hi';
import { IoImagesOutline } from 'react-icons/io5';

import { LiaTelegramPlane , LiaLinkedin, LiaInstagram, LiaGithub, LiaWhatsapp } from 'react-icons/lia';
import { MdOutlinePersonOutline } from 'react-icons/md';
import { RiHome2Line } from 'react-icons/ri';
import { TfiEmail } from 'react-icons/tfi';

const NavMenu = () => (
    <div id='navSidebar' className='bg-[#040B14] hidden 2xl:block 2xl:fixed left-0 h-full w-[400px] font-(family-name:poppins)'>
        <div id="myInfo" className='py-6 px-10 b-amber-400'>
            <img src="me.jpeg" className='w-1/2 mx-auto border-gray-800 border-12 rounded-full' alt="" />
            <h1 className='text-white text-3xl font-semibold text-center w-fit my-6 mx-auto'>Parsa Ghorbani</h1>
            <ul id="socials" className='flex justify-between text-white'>
                <li className='bg-[#1D232B] p-2 text-4xl rounded-full'><LiaLinkedin /></li>
                <li className='bg-[#1D232B] p-2 text-4xl rounded-full'><LiaWhatsapp /></li>
                <li className='bg-[#1D232B] p-2 text-4xl rounded-full'><LiaGithub /></li>
                <li className='bg-[#1D232B] p-2 text-4xl rounded-full'><LiaInstagram /></li>
                <li className='bg-[#1D232B] p-2 text-4xl rounded-full'><LiaTelegramPlane /></li>
            </ul>
        </div>
        <ul id="navMenu" className='py-8 px-10'>
            <li className='group w-fit text-gray-400 text-2xl pb-12'><a href="#hero" className='flex items-center'><RiHome2Line className='group-hover:text-sky-500 mb-1 mr-4'></RiHome2Line><span className='group-hover:text-white'>Home</span></a></li>
            <li className='group w-fit text-gray-400 text-2xl pb-12'><a href="#about" className='flex items-center'><MdOutlinePersonOutline className='group-hover:text-sky-500 mb-1 mr-4'></MdOutlinePersonOutline><span className='group-hover:text-white'>About</span></a></li>
            <li className='group w-fit text-gray-400 text-2xl pb-12'><a href="#resume" className='flex items-center'><HiOutlineDocumentText className='group-hover:text-sky-500 mb-1 mr-4'></HiOutlineDocumentText><span className='group-hover:text-white'>Resume</span></a></li>
            <li className='group w-fit text-gray-400 text-2xl pb-12'><a href="#portfolio" className='flex items-center'><IoImagesOutline className='group-hover:text-sky-500 mb-1 mr-4'></IoImagesOutline><span className='group-hover:text-white'>Portfolio</span></a></li>
            <li className='group w-fit text-gray-400 text-2xl pb-12'><a href="#services" className='flex items-center'><FiServer className='group-hover:text-sky-500 mb-1 mr-4'></FiServer><span className='group-hover:text-white'>Services</span></a></li>
            <li className='group w-fit text-gray-400 text-2xl pb-12'>
                <a href="contact" className='flex items-center'>
                    <TfiEmail className='group-hover:text-sky-500 mb-1 mr-4'/>
                    <span className='group-hover:text-white'>Contact</span>
                </a>
            </li>
        </ul>
    </div>
)

export default NavMenu
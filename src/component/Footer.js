import React from 'react'
import people from "../assets/people.png"
import Boy2 from  "../assets/BOY2.png"
import logo from  "../assets/LOGO_PNG3.png"
import { VscFeedback } from "react-icons/vsc";
import gdg from "../assets/gdsc.png"
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Footer() {
  
  return (
    <div>
        <div className='flex flex-col'>
            <div className='flex justify-center'>
                <img alt='happy people' src={people} className='min-lg:w-[50%]'/>
            </div>
            <footer className="w-full bg-white bg-opacity-[0.03] p-20 flex justify-center">
  <div className="flex justify-center items-center w-full  px-8">

    <div className=" hidden min-lg:flex min-lg:items-center min-lg:justify-center min-lg:w-1/3 min-lg:p-12">
      <img src={Boy2} className="w-[75%]" alt='logoimg'/>
    </div>

  
    <div className="flex flex-col items-center justify-center min-lg:w-1/3">
      <h1 className="text-gray-300 text-3xl font-primaryFont font-bold mb-4">
        CONTRIBUTE
      </h1>
      <a href='https://docs.google.com/forms/d/1skmLNMhCUQWc75HtKP1EgzbcMFe_I4jSQ6ZSwyhz-v8/viewform?edit_requested=true' target='_blank'>
      <button onClick={(e)=>{e.currentTarget.blur()}} className="my-12 h-20 flex items-center justify-center text-2xl text-white font-primaryFont bg-contributeColor px-4 py-2 rounded-xl min-lg:hover:bg-welcome2 duration-100 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 ">
        Submit a Document
      </button></a>
      <button onClick={(e)=>{e.currentTarget.blur()}} className='border-gray-600 border-2 rounded-xl flex flex-row-reverse p-6 min-lg:hover:bg-welcome2 duration-100  h-12  items-center justify-center min-lg:text-xl text-sm text-white font-primaryFont bg-transparent px-4 py-2 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300'>
       <a target='_blank' href='https://docs.google.com/forms/d/1Cq8VotilFvzkN79-wvPNdQX_pVS_tyZipVH_ZuQe-5I/viewform?edit_requested=true'>give us a feedback</a> 
<VscFeedback color='white' size={40} />
      </button>
  <div className='flex flex-row gap-8 mt-6 '>
  <a  href='https://github.com/benzinamohamed/ENSTA-Bank-' target='_blank'><FaGithub size={50} color='white' className='cursor-pointer' /></a>
  <a href='https://linktr.ee/ensta.bank'target='_blank' ><FaLinkedin size={50} color='white' className='cursor-pointer' /></a>
  <a href='https://linktr.ee/ensta.bank.telegram'target='_blank' ><FaTelegram size={50} color='white' className='cursor-pointer' /></a>
  <a href='https://linktr.ee/ensta.bank.Insta'target='_blank' ><FaInstagram size={50} color='white' className='cursor-pointer' /></a>

  </div>
      <p className='text-white  font-primaryFont mt-6 mb-6 min-lg:text-xl text-nowrap text-sm '>made by APP and CYBER SECURITY departments</p>
<img alt='gdg ex gdsc' src={gdg} className='w-[20%]'/>
      <div>

      </div>
    </div>

    <div className="hidden min-lg:flex min-lg:items-center min-lg:justify-center min-lg:w-1/3">
      <img alt ="logo" src={logo} className='w-[57%]'/>
    </div>
  </div>
</footer>
        </div>
    </div>
  )
}

export default Footer
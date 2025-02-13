import React, { useState } from 'react';
import logo from '../assets/LOGO_PNG3.png';
import { FaBars } from "react-icons/fa6";
import toast, { Toaster } from 'react-hot-toast';

function Navbar({ref1 , ref2 , handelPress}) {
    const [toggle , setToggle] =useState(false) 
  return (
    <nav className="w-[92%] mx-auto " >
              <Toaster position='bottom-right' toastOptions={{duration :700}} />
      <div className=" border border-gray-700 shadow-sm rounded-3xl my-8 min-lg:h-[72px] bg-white bg-opacity-5  min-lg:flex min-lg:items-center min-lg:justify-between px-2  ">
        <div className='flex flex-row justify-between items-center '>
        <div className="flex items-center  ">
          <img alt="logo" src={logo} className="w-10 mx-2 my-2 cursor-pointer " />
          <h1 className="text-white font-primaryFont text-xl opacity-90 ">ENSTA BANK</h1>
    </div>
    <FaBars className={`${toggle?"-rotate-90" :"rotate-0"} cursor-pointer hover: w-10 h-10 opacity-80 min-lg:hidden duration-300 mx-2 `} color='white' onClick={()=>{setToggle(prev=>!prev)}} />
        </div>
       < div className="hidden min-lg:block sm:w-[67%]">
          <ul className="flex flex-row justify-center items-center gap-16 px-6">
            <li>
              <a onClick={()=>handelPress(ref1)}   className="text-white font-primaryFont text-lg opacity-90 text-nowrap hover:text-gray-200 cursor-pointer">
                1ST YEAR
              </a>
            </li>
            <li>
              <a onClick={()=>handelPress(ref2)} className="text-white font-primaryFont text-lg opacity-90 text-nowrap hover:text-gray-200 cursor-pointer">
                2ND YEAR
              </a>
            </li>
            <li>
              <a href="#" className="text-white font-primaryFont text-lg opacity-90 text-nowrap hover:text-gray-200" onClick={() => { toast('Not currently available')} }>
                3RD YEAR
              </a>
            </li>
            <li>
              <a href="#" className="text-white font-primaryFont text-lg opacity-90 text-nowrap hover:text-gray-200" onClick={(e) => { toast('Not currently available')} }>
                4TH YEAR
              </a>
            </li>
            <li>
              <a href="#" className="text-white font-primaryFont text-lg opacity-90 text-nowrap hover:text-gray-200" onClick={(e) => {toast('Not currently available')} }>
                5TH YEAR
              </a>
            </li>
          </ul>
        </div>
      <a href='https://docs.google.com/forms/d/1skmLNMhCUQWc75HtKP1EgzbcMFe_I4jSQ6ZSwyhz-v8/viewform?edit_requested=true' target='_blank'> <button className="hidden min-lg:block min-lg:text-white min-lg:font-primaryFont min-lg:bg-contributeColor min-lg:px-4 py-2 min-lg:rounded-xl min-lg:h-[70%] min-lg:hover:bg-welcome2 min-lg:duration-100 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300" onClick={(e)=>{e.currentTarget.blur()}}>
          CONTRIBUTE
        </button></a> 
    <div  className={`${
            toggle ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          } min-lg:hidden overflow-hidden transition-all duration-500 ease-in-out`}>
          <ul className=" flex flex-col items-center gap-6 px-10">
            <li>
              <a href="https://drive.google.com/drive/u/0/folders/1Sfk9ToltAdHnGYr_h897kjl3iuRlyFbA" target='_blank' className="text-white font-primaryFont text-lg opacity-90 text-nowrap hover:text-gray-200">
                1ST YEAR
              </a>
            </li>
            <li>
              <a href="https://drive.google.com/drive/u/3/folders/1RrZ8fNBRuGgqrdzwOoNDCHKdV-un2Vrg" className="text-white font-primaryFont text-lg opacity-90 text-nowrap hover:text-gray-200" >
                2ND YEAR
              </a>
            </li>
            <li>
              <a href="#" className="text-white font-primaryFont text-lg opacity-90 text-nowrap hover:text-gray-200" onClick={() => { toast('Not currently available')} }>
                3RD YEAR
              </a>
            </li>
            <li>
              <a href="#" className="text-white font-primaryFont text-lg opacity-90 text-nowrap hover:text-gray-200" onClick={() => { toast('Not currently available')} }>
                4TH YEAR
              </a>
            </li>
            <li>
              <a href="#" className="text-white font-primaryFont text-lg opacity-90 text-nowrap hover:text-gray-200" onClick={() => {toast('Not currently available')} }>
                5TH YEAR
              </a>
            </li>
            <li>
       <a href='https://docs.google.com/forms/d/1skmLNMhCUQWc75HtKP1EgzbcMFe_I4jSQ6ZSwyhz-v8/viewform?edit_requested=true' target='_blank'><button className="min-lg:block text-white font-primaryFont bg-contributeColor px-4 py-2 rounded-xl h-[70%] active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 mb-4" onClick={(e)=>{e.currentTarget.blur()}}>
          CONTRIBUTE
        </button> </a> 
            </li>
          </ul>
       
</div>


      </div>
    </nav>
  );
}

export default Navbar;

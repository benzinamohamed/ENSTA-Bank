import React from 'react'
import Boy1 from "../assets/BOY1.png"
import { welcome } from '../constants/constants'
import { TypeAnimation } from 'react-type-animation';
import Subjects from './Subjects';
import Footer from './Footer';
export default function Hero() {
  return (
    <div>
    <section className='my-4 mx-2 min-lg:my-24 min-lg:p-6'>
    <div className=' min-lg:ml-0 min-lg:flex min-lg:flex-row min-lg:justify-between flex flex-col-reverse p-2 items-center'>
       <div className='min-lg:flex min-lg:flex-col  min-lg:h-full min-lg:mx-4'>
        <div className='min-lg:flex min-lg:items-end min-lg:mb-12 '>
        <h1 className=' min-lg:text-start min-lg:mt-12 flex justify-center min-lg:text-7xl  text-3xl text-wrap text-center font-bold font-primaryFont bg-gradient-to-t from-welcome2 from-20% to-welcome1 to-60% inline-block text-transparent bg-clip-text'>
          {welcome}           
        </h1>
        </div>
        <div className='text-center min-lg:text-start'>
        <p className='text-white font-primaryFont opacity-95 text-xl text-balance min-lg:text-4xl min-md:text-2xl'>
        A comprehensive library of study resources for <a className='text-y1'href='https://ensta.edu.dz/'target='1'>ENSTA</a>, entirely created and maintained by students. It offers access to 
        </p>
        <p><Typing></Typing></p>
        </div>
        </div> 
        <div className='my-4 flex justify-center min-lg:w-[70%]  overflow-visible '>
       <img alt ="students" src={Boy1} className='w-[80%] min-lg:w-full  min-lg:min-w-[500px]  '/>
       </div>
    </div>
    <section className=' mt-6 mb-6 min-xl:p-52 '>
<Subjects></Subjects>
    </section>
    </section>
    <Footer></Footer>
    </div>
    
  )
}




const Typing = () => {
  return (
    <TypeAnimation
      sequence={[
        'COURSES',
        1000, 
        'EXAMS',
        1000,
        'TDs',
        1000,
        "TPs",
        1000,
        'SUMMARIES',
        1000 ,
      ]}
      wrapper="span"
      speed={60}
      style={{ fontSize: '3em', display: 'inline-block' }}
      className='font-bold bg-gradient-to-t from-welcome2 from-20% to-welcome1 to-60% inline-block text-transparent bg-clip-text'
      repeat={Infinity}
      cursor
    />
  );
};

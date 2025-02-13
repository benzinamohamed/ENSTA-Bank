import React from 'react'
import { SEMESTER1_1CP , SEMESTER2_1CP , SEMESTER1_2CP , SEMESTER2_2CP} from '../constants/constants'

function Subjects({ref1 , ref2}) {
  return (
    <>
    <div className='flex flex-col gap-40'>
        <div className='flex  items-center flex-col'>
            <div ref={ref1} className='min-lg:w-[92%] w-[80%] h-16 bg-gradient-to-r from-y1 to-y2 rounded-t-xl text-white text-2xl font-primaryFont flex justify-center items-center'>1ST YEAR</div>
          <ListofModules  SEMESTER1 ={SEMESTER1_1CP } SEMESTER2={SEMESTER2_1CP}></ListofModules>
        </div>
        <div ref={ref2} className='flex justify-center items-center flex-col'>
            <div className='min-lg:w-[92%] w-[80%] h-16 bg-gradient-to-r from-welcome1 to-welcome2 rounded-t-xl text-white text-2xl font-primaryFont flex justify-center items-center'>2ND YEAR</div>
          <ListofModules SEMESTER1 ={SEMESTER1_2CP } SEMESTER2={SEMESTER2_2CP}></ListofModules>
        </div>
    </div>
    </>
  )
}

export default Subjects



const ListofModules =({SEMESTER1 , SEMESTER2})=>{


return (
  <div className=' min-lg:w-[92%] w-[80%] my-4 border border-gray-700 shadow-sm rounded-b-3xl flex flex-col min-lg:flex-row min-lg:p-6 min-lg:gap-12 items-center bg-white bg-opacity-[0.03]'>
  
    <div className=' min-lg:w-[70%] w-[80%] my-6 border border-gray-700 shadow-sm rounded-3xl flex  flex-col justify-start bg-navbarColor min-lg:min-w-[400px]'>
      <div >
       <ul className='text-white font-primaryFont opacity-90 min-lg:text-base text-base list-disc p-4 flex flex-col min-lg:gap-12 gap-6 ml-6 my-6 text-pretty' >
       {SEMESTER1.map((item)=>{return <li  className='min-lg:hover:text-gray-500 cursor-pointer  active:text-gray-500 ' key={item.id} ><a target='_blank' href={item.url}>{item.name}</a></li>})}
       </ul>
       <div className='w-[100%] h-[2px] bg-gray-700 text-center  block  ml-auto mr-auto'>
       </div>
        <h1 className='text-white text-center p-6 font-primaryFont min-lg:text-3xl text-2xl'>SEMESTER 1</h1>
       </div>
       
    </div>
    <div className='min-lg:w-[70%] w-[80%] my-6 border border-gray-700 shadow-sm rounded-3xl flex  flex-col justify-start bg-navbarColor min-lg:min-w-[400px] '>
      <div >
       <ul className=' text-white font-primaryFont opacity-90 min-lg:text-base text-base list-disc p-4 flex flex-col min-lg:gap-12 gap-6 ml-6 my-6  text-pretty' >
       {SEMESTER2.map((item)=>{return <li className='min-lg:hover:text-gray-500 cursor-pointer active:text-gray-500 ' key={item.id} ><a target='_blank' href={item.url}>{item.name}</a></li>})}
       </ul>
       <div className='w-[100%] h-[2px] bg-gray-700 text-center  block  ml-auto mr-auto'>
       </div>
        <h1 className='text-white text-center p-6 font-primaryFont min-lg:text-3xl text-2xl'>SEMESTER 2</h1>
       </div>
   
    </div>
    </div>
)

}






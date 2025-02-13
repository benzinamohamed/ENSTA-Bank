import { useRef } from 'react';
import Hero from './component/Hero';
import Navbar from './component/Navbar'
function App() {
  const firstYearRef = useRef(null);
  const secondYearRef = useRef(null);

   const handlePress = (targetRef)=>{
    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll
    }
   } 
  return (
    <div className='bg-primary w-screen h-screen overflow-auto custom-scrollbar'>
      <Navbar ref1={firstYearRef} ref2={secondYearRef} handelPress={handlePress}/>
      <Hero ref1={firstYearRef} ref2={secondYearRef} />
    </div>
  );
}

export default App;

import Hero from './component/Hero';
import Navbar from './component/Navbar'
function App() {
  return (
    <div className='bg-primary w-screen h-screen overflow-auto custom-scrollbar'>
      <Navbar/>
      <Hero/>
    </div>
  );
}

export default App;

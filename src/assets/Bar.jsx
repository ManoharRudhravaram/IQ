import React from 'react';
import { FaArrowLeftLong } from "react-icons/fa6";
function App() {
  return (
    <div className="flex">
     {/* {[...Array(10).map((_)=>{
        return <>
    <div className="flex-shrink-0 w-64 h-40 bg-gray-200 mr-4">Card 1</div>
      <div className="flex-shrink-0 w-64 h-40 bg-gray-200 mr-4">Card 2</div>
      <div className="flex-shrink-0 w-64 h-40 bg-gray-200 mr-4">Card 3</div>
        </>
     })]}
      Add more cards here */}
      <button className=' border flex items-center text-sm'><FaArrowLeftLong/> hello </button>
    </div>
  );
}

export default App;

import { useState } from "react";

function App() {
  const [color, setColor] = useState("black");

  return (
    <>
      <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
        <h1 className="font-bold text-5xl text-center pt-10 text-white">VIBGYOR COLORS</h1>
        <div className="w-2/3 h-28 bg-white fixed bottom-0 mx-60 mb-20 rounded-xl flex justify-around">
          <button onClick={()=> setColor("violet")} className="w-20 h-20 bg-violet-600 border-black border-2 text-white rounded-full my-4 ">Violet</button>
          <button onClick={()=> setColor("indigo")} className="w-20 h-20 bg-indigo-600 border-black border-2 text-white rounded-full my-4  ">Indigo</button>
          <button onClick={()=> setColor("blue")} className="w-20 h-20 bg-blue-600 border-black border-2 text-white rounded-full my-4  ">Blue</button>
          <button onClick={()=> setColor("green")} className="w-20 h-20 bg-green-600 border-black border-2 text-white rounded-full my-4  ">Green</button>
          <button onClick={()=> setColor("yellow")} className="w-20 h-20 bg-yellow-600 border-black border-2 text-white rounded-full my-4  ">Yellow</button>
          <button onClick={()=> setColor("orange")} className="w-20 h-20 bg-orange-600 border-black border-2 text-white rounded-full my-4  ">Orange</button>
          <button onClick={()=> setColor("red")} className="w-20 h-20 bg-red-600 border-black border-2 text-white rounded-full my-4  ">Red</button>
        </div>
      </div>
    </>
  );
}

export default App;

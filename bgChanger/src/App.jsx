import { useState } from "react";

function App(){

  let [color , setColor] = useState("Pink");

  return(
    <>
    <div className="justify-center gap-4 p-6 bg-gray-100 w-full min-h-screen " style={{backgroundColor:color}}>
  <button className="bg-red-500 text-white px-6 py-2 rounded-full hover:px-8 py-4" onClick={() => setColor("Red")}>Red</button>
  <button className="bg-blue-500 text-white px-6 py-2 rounded-full hover:px-8 py-4" onClick={() => setColor("Blue")}>Blue</button>
  <button className="bg-green-500 text-white px-6 py-2 rounded-full hover:px-8 py-4" onClick={() => setColor("Green")}>Green</button>
  <button className="bg-yellow-400 text-black px-6 py-2 rounded-full hover:px-8 py-4" onClick={() => setColor("Yellow")}>Yellow</button>
  <button className="bg-purple-500 text-white px-6 py-2 rounded-full hover:px-8 py-4" onClick={() => setColor("Purple")}>Purple</button>
  <button className="bg-pink-500 text-white px-6 py-2 rounded-full hover:px-8 py-4" onClick={() => setColor("Pink")}>Pink</button>
  <button className="bg-orange-500 text-white px-6 py-2 rounded-full hover:px-8 py-4" onClick={() => setColor("Orange")}>Orange</button>
  <button className="bg-black text-white px-6 py-2 rounded-full hover:px-8 py-4" onClick={() => setColor("Black")}>Black</button>
  <button className="bg-white text-black border border-gray-300 px-6 py-2 rounded-full hover:px-8 py-4" onClick={() => setColor("White")}>White</button>
  <button className="bg-gray-500 text-white px-6 py-2 rounded-full hover:px-8 py-4" onClick={() => setColor("Grey")}>Gray</button>
</div>
    </>
  )
}

export default App;
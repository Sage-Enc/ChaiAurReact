import { useCallback, useEffect, useRef, useState } from 'react'

function App() {

  const [length, setLength] = useState(8);
  const [numCheck, setNumCheck] = useState(false);
  const [charCheck, setCharCheck] = useState(false);
  const [password, setPassword] = useState("Password");

  let passwordRef = useRef(null)

  const passwordGenerator = useCallback(()=>{
    let pass = "";
    let str = "qwertyuioplkjhgfdsazxcvbnmMNBVCXZASDFGHJKLPOIUYTREWQ";
    if(numCheck) str += "0123456789"
    if(charCheck) str += "`!@#$%^&*()_+=-~[]}{;:<>,."

    for(let i=1; i<=length; i++){
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass)

  }, [length, numCheck, charCheck, setPassword])

  useEffect(()=>{
    passwordGenerator()
  },[length,numCheck, charCheck, passwordGenerator])

  const copyPassword = useCallback(() =>{
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0,3);
    window.navigator.clipboard.writeText(password)
  },[password]);

  return (
    <>
      <div className="w-full max-w-md mx-auto rounded-lg shadow-md px-4 py-3 my-8 bg-slate-700 text-white">
        <h1 className='text-4xl text-center'>Password Generator</h1>

        <br />

        <div className="text-box">
          <input type="text" value={password} className='rounded-tl-lg text-2xl rounded-bl-lg w-4/5 text-black' placeholder='Password' ref={passwordRef} readOnly/>
          <button className='copybtn bg-blue-500 w-1/5 rounded-tr-lg rounded-br-lg px-2 text-2xl' onClick={copyPassword}>Copy</button>
        </div>

        <br />

        <div className="dependencies flex justify-between">
          <div className="range">
          <input type="range" min={8} max={16} value={length} className='cursor-pointer' onChange={(e) => setLength(e.target.value)}/> 
          <label className="text-lg">Length: {length}</label>
          </div>

          <div className="numcheck">
          <input type="checkbox" defaultChecked={numCheck} id='numCheck' onChange={() => setNumCheck((prev) => !prev)}/>
          <label htmlFor="numCheck" className="text-lg">Numbers</label>
          </div>

          <div className="charcheck">
          <input type="checkbox" id="charCheck" defaultChecked={charCheck} onChange={() => setCharCheck((prev) => !prev)}/>
          <label htmlFor="charCheck" className="text-lg" >Characters</label>
        </div>
          </div>
      </div>
    </>
  )
}

export default App
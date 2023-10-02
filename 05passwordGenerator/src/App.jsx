import { useState, useCallback,useEffect,useRef} from "react"

function App() {
  const [length, setLength] = useState(8)
  const [numAllowed, setNum] = useState(false)
  const [charAllowed, setChar] = useState(false)
  const [password, setPassword] = useState("")
  //useRef hook
  const passRef =useRef(null)
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*="

    for (let i = 1; i <= length; i++) {
      let char = Math.ceil(Math.random() * str.length)
      pass += str.charAt(char)

    }

    setPassword(pass)

  },
    [length, numAllowed, charAllowed, setPassword])


useEffect(()=>{
  passwordGenerator()
},[length,numAllowed,charAllowed,passwordGenerator])

const copyclipboard=useCallback(()=>{
  passRef.current?.select()
window.navigator.clipboard.writeText(password )
},[password])
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700">
        <h1 className="text-white text-center my-3">Password Generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input type="text"
        value={password}
        className="outline-none w-full py-1 px-3"
        placeholder="Password"
        readOnly
        ref={passRef}
        />
        <button className="outline-none bg-blue-600 text-white px-3 py-0.5 shrink-0 focus:ring-4 shadow-lg transform active:scale-75 transition-transform"
        onClick={copyclipboard}
        >
          
          copy</button>
      </div>
      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input type="range"
          min={6}
          max={50}
          value={length}
          className="cursor-pointer"
          onChange={(e)=>{setLength(e.target.value)}}
          />
          <label htmlFor="length"> Length: {length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input type="checkbox" 
          defaultChecked={numAllowed}
          id="numberIput"
          onChange={()=>{
            setNum((prev)=>!prev)
          }}
          />
          <label htmlFor="number">Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input type="checkbox" 
          defaultChecked={charAllowed}
          id="charInput"
          onChange={()=>{
            setChar((prev)=>!prev)
          }}
          />
          <label htmlFor="number">Characters</label>
        </div>
      </div>
      </div>
    </>
  )
}

export default App

import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>DETTE KLARER DU THOMAS!</h1>
      <h3>(Ikke ment for utenforstående)</h3>
      <div id="memes">
        <img src="https://i.imgflip.com/a86lfm.jpg" title="made at imgflip.com"/>
        <img src="https://i.imgflip.com/a86lp9.jpg" title="made at imgflip.com"/>
        <img src="https://i.imgflip.com/a86m0j.jpg" title="made at imgflip.com"/>
        <img src="https://i.imgflip.com/a86ma5.jpg" title="made at imgflip.com"/>
        <img src="https://i.imgflip.com/a86mlf.jpg" title="made at imgflip.com"/>
      </div>

    </>
  )
}

export default App

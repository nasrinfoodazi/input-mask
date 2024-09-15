import { useState } from "react";
import Input from "./main";
import cities from './cities.json'

function App() {
   const [hint, setHint] = useState(null)
   const handleChange = (e) => {
      setHint(cities.find(i => i.toLowerCase().includes(e.target.value?.toLowerCase())))
   }
   return <div>
      <Input handleChange={handleChange} hint={hint} />
   </div>
}

export default App;

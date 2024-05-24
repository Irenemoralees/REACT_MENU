import { useEffect } from "react";

function App() {
  const [foods, setFoods] = useState ([]);
  const [name, setName] = useState ("");
  const [type, setType] = useState ([]);
  const [day, setDay] = useState ("");

  useEffect(() => {
    getDataApi().then((dataApi) => {
      setFoods(dataApi)
    })
  }, [])
  
  return (
    <div>App</div>
  )
}

export default App

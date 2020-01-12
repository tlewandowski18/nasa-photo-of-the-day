import React, {useState, useEffect} from "react";
import "./App.css";
import axios from "axios";
import Apod from "./Apod"

function App() {
  const [apod, setApod] = useState({})

  useEffect(() => {
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=cmqtafZAkiskcPgBlb6S3DvTab2YyDz8CRaHSpZp")
      .then(res => {
        setApod(res.data)
      })
      .catch(err => {
        console.log(`Error: unable to fetch picture of the day`, err)
      })
  }, [])

  console.log(apod)

  return (
    <div className="App">
      <Apod title={apod.title} copyright={apod.copyright} date={apod.date} url={apod.hdurl} explanation={apod.explanation} />
    </div>
  );
}

export default App;

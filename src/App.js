import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

const API_KEY = "3w5zpFtCojyBFbMaSODzR4UNf9wYhUI6OTWFFohI";
const URL = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`;
function App() {
  const [todayimg, setImgcover] = useState();
  const [date, setDate] = useState();
  useEffect(() => {
    axios.get(URL).then((res) => {
      console.log(res.data);
      setImgcover(res.data.url);
      setDate(res.data.date);
    });
  }, []);
  return (
    <>
      <h1 className="todayH1">Astronomy Picture of the Day</h1>
      <img alt="todayimg" src={todayimg} className="todayImg"/>
      <p className="today">{date}</p>
    </>
  );
}

export default App;

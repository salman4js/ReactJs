import React, {useState, useEffect} from "react";
import './App.css';
import Navbar from './components/Navbar';
import Body from './components/Body';
import Body1 from "./components/Body1";

function App() {
  const [content, setContent] = useState([]);
  useEffect(() => {
    fetch('https://newsapi.org/v2/top-headlines?' +
    'country=in&' +
    'apiKey=5a5bc7bbb22e43038a01792634d6160b').then((response) => response.json())
    .then((res) => res.articles)
    .then((res1) => setContent(res1))
    .catch((err) => {
      console.log(err);
    })
  }, []);
  return (
    <div className = "container1">
      <div className = "container">
        <Navbar />
        {
           content.map((item,key) => {
             return(
               <Body key = {key} title = {item.title} description = {item.description} content = {item.content} published = {item.publishedAt} image = {item.urlToImage} />
             )
           })
        }
        
    </div>
    </div>
    
    
  );
}

export default App;

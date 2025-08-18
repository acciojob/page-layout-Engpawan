import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";



ReactDOM.render(<App />, document.getElementById("root"));

const first() =>{
  return(
    <div>
    <h1>Welcome to my website</h1>
  <h2>This is the content of my website.</h2>
  <footer>©️ 2023 My Website. All rights reserved</footer>
    </div>
)
}
  root.render(first())

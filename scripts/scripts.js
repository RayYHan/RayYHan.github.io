//Import react and react-dom
import React from "react";
import ReactDOM from "react-dom";

//Import site data
import content from "./data.jsx";
import Content from "./content.jsx";

ReactDOM.render(<Content data={content} />, document.getElementById('content'));
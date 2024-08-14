
import React from "react";
import ReactDOM from "react-dom";
import Header from "./Components/Header";
import Content from "./Components/Content";
import Form from "./Components/Form";
import Footer from "./Components/Footer";
function Mywebsite()
{
  return(
    <div>
      <Header />
      <Content />
      <Form />
      <Footer/>
    </div>
    
  )
  
}
 ReactDOM.render(<Mywebsite />,document.getElementById("root"));

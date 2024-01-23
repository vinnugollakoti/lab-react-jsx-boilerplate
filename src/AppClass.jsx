import { Component } from "react";
import "./App.css"
import elephant from "./images/elephant.jpeg";

export default class AppClass extends Component{
  imageData = ()=>{
    let data = [
      {
        id:1,
        img:elephant
      },
      {
        id:2,
        img:elephant
      },
      {
        id:3,
        img:elephant
      },
      {
        id:4,
        img:elephant
      }
    ]
    return data;
  }
  // code here
  render(){
    let data =this.imageData()
    return(
      <>
    <h1 className="head">Kalvium gallery</h1>
    <div className="grid">
    {data.map((data)=>{
      return <img src={data.img} key={data.id}/>
    })}
    </div>
    </>
  )}

}
   
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
    this.data = this.imageData()
    console.log(this.data)
    return (
      <>
      <div className='heading'>Kalvium Gallary</div>
      <div className='container'>
        {this.data.map((e)=>(
          <img key={e.id} className='image' src={e.img} />
        ))}
      </div>
      </>
    )
  }
}

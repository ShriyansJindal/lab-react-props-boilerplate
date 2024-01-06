import { Component } from "react";
import "./App.css"
import elephant from "./images/elephant.jpeg";

export default class AppClass extends Component{
  // code here
  render(){
    this.data = this.props.props
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

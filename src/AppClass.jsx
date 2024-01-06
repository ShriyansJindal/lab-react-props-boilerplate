import { Component } from "react";
import "./App.css"

export default class AppClass extends Component{

  // constructor(props){
  //   super()
  //   this.data = props.props
  // }
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

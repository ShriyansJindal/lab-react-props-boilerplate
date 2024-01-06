import './App.css';
import elephant from "./images/elephant.jpeg";

const imageData = ()=>{
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

function App() {
  // code here
  var img = imageData()
  return (
    <>
    <div className='heading'>Kalvium Gallary</div>
    <div className='container'>
      {img.map((e)=>(
        <img key={e.id} className='image' src={e.img} />
      ))}
    </div>
    
    </>
  )
}

export default App;

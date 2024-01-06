import './App.css';

function App(props) {
  // code here
  var img = props.props
  console.log(props)
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

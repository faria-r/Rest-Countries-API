import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <LoadPost></LoadPost>
     <District name="Noakhali" speciality="Divison"></District>
     <District name="Feni" speciality="District"></District>
     <District name="Cumilla" speciality="District"></District>
    </div>
  );
}
const districtStyle = {
  backgroundColor:'coral',
  margin:'20px',
  padding:'15px',
  borderRadius:'25px'

}
function District(props){
  const [power,setPower]= useState(1);
  const boostPower = ()=>{
    const newPower= power *2;
    setPower(newPower);
  }
return(
  <div className="district" style={districtStyle}>
    <h2>Name:{props.name}</h2>
    <h4>Power:{power}</h4>
    <button onClick={boostPower}>Boost Power</button>
    <h3>Speciality:{props.speciality}</h3>
  </div>
)
}
function LoadPost(){
  const [posts, setPosts]= useState([]);
   useEffect(()=>{
fetch('https://jsonplaceholder.typicode.com/posts')
.then(res => res.json())
.then(data => setPosts(data))
  },[])
  return(
    <div>
      <h1>Post:{posts.length}</h1>{
        posts.map(post=> <Post title={post.title} body={post.body}></Post>)
      }
    </div>
  )
}
function Post(props){
  return(
    <div style={{backgroundColor:'lightcoral',margin:'20px',
    padding:'15px',
    borderRadius:'25px'}}>
<h2>{props.title}</h2>
<p>Body:{props.body}</p>
    </div>
  )
}

export default App;

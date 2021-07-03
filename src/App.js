import logo from './logo.svg';
import './App.css';
import image from "./logo512.png"
function App() {
  return (
    <div className="App">
      <header className="App-header">

<div style={{ border:"solid 1px black", maxWidth:"100vw"}}>

<h1 class="title red">Your name here</h1>

<br />

<img src={image} alt="image" />

<br />

<img src="/logo192.png" alt="logo192"  />

</div>

<video width="320" height="240" controls>

<source src="./neffex.mp4" type="video/mp4" />

</video>
      </header>
    </div>
  );
}

export default App;

import './App.css';

function App() {

  const os = ["Android", "Blackberry", "iPhone", "Windows Phone"];
  const manufacturers = ["Samsung", "HTC", "Micromax", "Apple"];


  return (
    <div className="App">
      <h1>Mobile Operating System</h1>
      <ul>
        {os.map((e) => {
          return <Mobile item={e}/>;
        })}
      </ul>
      <h1>Mobile Manufacturers</h1>
      <ul>
        {manufacturers.map((e) => {
          return <Mobile item={e}/>;
        })}
      </ul>
    </div>
  );
}

function Mobile(props){
  return <li className="text">{props.item}</li>
}

export default App;
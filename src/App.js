import './App.css';
import data from './data.json';
import Emojis from './emojis.js'

function App() {
  return (
    <div className="App" style={{ display: "flex", justifyContent: "center" }}>
      <Characters />
    </div>
  );
}

function Characters() {
  const backendData = data;
  console.log(backendData);

  const charsRootStyle = {
    border: "2px #0af solid",
    borderRadius: 9,
    margin: 20,
    backgroundColor: "#efefef",
    padding: 6
  };

  return (
    <div style={{ width: 400 }}>
      {backendData.map(ele => 
        <div key={ele.id} style={charsRootStyle}>
          <h3>{ele.characters}</h3>
          <p>{ele.traduction}</p>
          <Emojis searchWords={ele.traduction} />
          <small>{ele.pinyin}</small>
          
        </div>
      )}
    </div>
  )
}

export default App;
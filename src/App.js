import logo from "./logo.svg";
import "./App.css";
import ButtonComponent from "./components/ButtomComponent";
import ImageComponent from "./components/ImageComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
        <ImageComponent
          image="https://images.pexels.com/photos/2067396/pexels-photo-2067396.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="good_chocolate"
        />

        <ButtonComponent btnText="Clicca qui" />
        <ButtonComponent btnText="Per saperne di più" />
        <ButtonComponent btnText="Free chocolate" />
      </header>
    </div>
  );
}

export default App;

import Header from "./components/Header";
import Dropdown from "./components/Dropdown";
import './App.css';

function App() {

  // These items would be displayed in the dropdown menu
  const options = ["Yes", "No", "Probably Not"];

  return (
    <div className="App">
      <Header/>
      
      {/* Question  */}
      <h1>Q. Should you use a dropdown ?</h1>

      <Dropdown options={options} />
    </div>

  );
}

export default App;

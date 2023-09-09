import { useEffect } from "react";
import axios from "axios";
import "./App.css";

const getData = async () => {
  const data = await axios.get("http://localhost:8080/classes");
  console.log(data);
  return data;
};

function App() {
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <p>Check the School Classes bellow</p>
      </header>
    </div>
  );
}

export default App;

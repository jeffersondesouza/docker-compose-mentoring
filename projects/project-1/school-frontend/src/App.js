import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

const getData = async () => {
  try {
    const data = await axios.get("http://localhost:8080/classes");
    return data;
  } catch (error) {
    console.error(error)
    return [];
  }
};

function App() {
  const [data, setData] = useState([]);
  const fetchData = useCallback(async () => {
    const data = await getData();
    setData(data);
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);
  return (
    <div className="App">
      <header className="App-header">
        <div>Check the School Classes bellow</div>
      </header>
      <div className="App-data">
        {!data?.length ? (
          <div>No data</div>
        ) : (
          <ul>
            {data.map((item) => (
              <li>{item.name}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;

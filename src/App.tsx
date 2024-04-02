import { useEffect, useState } from "react";
import "./App.css";

function App() {
  interface IWeather {
    current: {
      condition: {
        icon: string;
      };
    };
  }

  const [apiData, setApiData] = useState({
    current: { condition: { icon: "" } },
  } as IWeather);

  useEffect(() => {
    fetch(
      "https://api.weatherapi.com/v1/current.json?key=ccc9891a19af4cde9b982922242603&q=Perm"
    )
      .then((response) => response.json())
      .then((response) => {
        setApiData(response);
        console.log(response);
      });
  }, []);
  return (
    <div className="App">
      <img src={apiData.current.condition.icon} alt="icon"></img>
    </div>
  );
}

export default App;

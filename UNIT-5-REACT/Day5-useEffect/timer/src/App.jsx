import "./App.css";
import { Timer } from "./components/Timer";

function App() {
  const initial = 30;
  const end = 60;

  return (
    <div className="App">
      <Timer initial={initial} end={end} />
    </div>
  );
}

export default App;

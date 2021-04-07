import "./App.css";
import data from "./components/data";
import Review from "./components/Review";
import react, { useState, useEffect } from "react";

function App() {
  // setting useSTate Hook
  const [index, setIndex] = useState(0);

  return (
    <div className="App">
      <section>
        <Review data={data[index]} />
      </section>
    </div>
  );
}

export default App;

import "./App.css";
import data from "./components/data";
import Review from "./components/Review";
import react, { useState, useEffect } from "react";

function App() {
  // setting useSTate Hook
  const [index, setIndex] = useState(0);

  // Next Person button function
  const nextPerson = () => {
    let newPerson = index + 1;
    setIndex(checkIndex(newPerson));
  };
  // previous button function
  const prevPerson = () => {
    let newPerson = index - 1;
    setIndex(checkIndex(newPerson));
  };

  // checking if index greater or lower then the length of array
  const checkIndex = (person) => {
    if (person > data.length - 1) {
      return (person = 0);
    }

    if (person < 0) {
      return (person = data.length - 1);
    }
    return person;
  };

  return (
    <div className="App">
      <section>
        <Review
          data={data[index]}
          nextPerson={nextPerson}
          prevPerson={prevPerson}
        />
      </section>
    </div>
  );
}

export default App;

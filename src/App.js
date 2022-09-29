import { useEffect, useState } from 'react';
import './App.css';

function MyComponent() {
  const [numbers, setNumbers] = useState([])

  const retreiveNumbers = () => {
    fetch('./numbers.json')
      .then((res) => res.json())
      .then((data) => setNumbers(data))
  }

  useEffect(() => { retreiveNumbers() }, [])

  return (
    <div>
      {console.log("render")}
      Numbers: {JSON.stringify(numbers)}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <MyComponent />
    </div>
  );
}

export default App;

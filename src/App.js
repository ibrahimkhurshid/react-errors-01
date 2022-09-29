import { useEffect, useState, useCallback, useMemo } from 'react';
import './App.css';

function MyComponent() {
  const [numbers, setNumbers] = useState([])

  const retreiveNumbers = () => {
    fetch('./numbers.json')
      .then((res) => res.json())
      .then((data) => setNumbers(data))
  }

  useEffect(() => { retreiveNumbers() }, [])

  const sum = useMemo(() => numbers.reduce((a, v) => a + v, 0), [numbers])

  const addNumbers = useCallback(() => {
    setNumbers((currentNumbers) => [...currentNumbers, currentNumbers.length + 1])
  }, [numbers])

  return (
    <div>
      {console.log("render")}
      Numbers: {JSON.stringify(numbers)}
      <div>Sum: {sum}</div>
      <button onClick={() => addNumbers()}>Add One</button>
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

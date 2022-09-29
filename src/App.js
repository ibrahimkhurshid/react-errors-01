import { useState } from 'react';
import './App.css';

function MyComponent() {
  const numbers = useState([])

  fetch('./numbers.json')
    .then((res) => res.json())
    .then((data) => (numbers[0] = data))

  return (
    <div>
      Numbers: {JSON.stringify(numbers[0])}
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

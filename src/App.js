import { useState } from "react";

function App() {
  return (
    <div>
      <Counter />
    </div>
  );
}

export default App;

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const date = new Date();

  date.setDate(date.getDate() + count * step);

  function handlePreviousStep() {
    setStep((ps) => (ps !== 1 ? ps - 1 : 1));
  }

  function handleNextStep() {
    setStep((ps) => ps + 1);
  }

  function handlePreviousCount() {
    setCount((sc) => sc - 1);
  }

  function handleNextCount() {
    setCount((sc) => sc + 1);
  }

  return (
    <>
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={(event) => setStep(Number(event.target.value))}
        />
        Step: {step}
      </div>
      <div>
        <button onClick={handlePreviousCount}>-</button>
        <input
          type="text"
          value={count}
          onChange={(event) => setCount(Number(event.target.value))}
        />
        <button onClick={handleNextCount}>+</button>
      </div>
      <div>
        {step} days from today is {date.toDateString()}
      </div>
    </>
  );
}

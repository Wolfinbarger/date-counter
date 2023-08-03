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
  const [count, setcount] = useState(0);

  function handlePreviousStep() {
    setStep((ps) => (ps != 1 ? ps - 1 : 1));
  }

  function handleNextStep() {
    setStep((ps) => ps + 1);
  }

  return (
    <>
      <div>
        <button onClick={handlePreviousStep}>-</button>
        Step: {step}
        <button onClick={handleNextStep}>+</button>
      </div>
      <div>
        <button>-</button>
        Count: {count}
        <button>+</button>
      </div>
      <div>{count} days from today is</div>
    </>
  );
}

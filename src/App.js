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

  return (
    <>
      <div>
        <button>-</button>
        Step: {step}
        <button>+</button>
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

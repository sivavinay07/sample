import { useState } from "react";

const A = () => {
  const [number, setNumber] = useState("");
  const [com, setCom] = useState(null);
  const [score, setScore] = useState(0);
  const [outcome, setOutcome] = useState(null);

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const handleSelect = (num) => {
    setNumber(num);
  };

  const handlePredict = () => {
    const parsed = parseInt(number, 10);
    if (isNaN(parsed) || parsed < 1 || parsed > 9) {
      alert("sds");
      return;
    }

    const randomNum = Math.floor(Math.random() * 9) + 1;
    setCom(randomNum);

    if (parsed == randomNum) {
      setOutcome("Correct");
      setScore((prev) => prev + 1);
    } else {
      setOutcome("wrong");
    }
  };

  const handleClear = () => {
    setNumber("");
    setCom(null);
    setOutcome(null);
  };

  return (
    <div>
      <div>
        <div>
          <h1>D:D</h1>
          <p>Score:{score}</p>
        </div>

        {/* left */}
        <div>
          <h1>Choose num:</h1>
          <div>
            {numbers.map((num) => (
              <button key={num} onClick={() => handleSelect(num)}>
                {num}
              </button>
            ))}
          </div>
          <p>or</p>
          <input
            min="1"
            max="9"
            type="number"
            value={number}
            onChange={(e) => handleSelect(e.target.value)}
            placeholder="-"
          />

          <div>
            <button onClick={handlePredict}>Predict number</button>
            <button onClick={handleClear}>Clear</button>
          </div>
        </div>

        {/* right */}

        <div>
          <div>
            <div>
              <h1>Your Pick</h1>
              <h3>{number || "-"}</h3>
            </div>
            <div>
              <h1>Random Pick</h1>
              <h3>{com ?? "-"}</h3>
            </div>
          </div>

          <div>
            {outcome == "Correct" && <span>Correct Guess</span>}
            {outcome == "wrong" && <span>Wrong Guess</span>}
            {outcome == null && <span>Await Prediction</span>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default A;

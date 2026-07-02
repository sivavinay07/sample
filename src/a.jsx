import { useState } from "react";

const A = () => {
  const [selected, setSelected] = useState("");
  const [com, setCom] = useState(null);
  const [score, setScore] = useState(0);
  const [outcome, setOutcome] = useState(null);

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const handleSelected = (num) => {
    setSelected(num);
  };

  const handlePredict = () => {
    const parsed = parseInt(selected, 10);
    if (isNaN(parsed) || parsed < 1 || parsed > 9) {
      alert("Asdf");
      return;
    }

    const randomNum = Math.floor(Math.random() * 9) + 1;
    setCom(randomNum);

    if (parsed == randomNum) {
      setOutcome("correct");
      setScore((prev) => prev + 1);
    } else {
      setOutcome("wrong");
      setScore((prev) => prev - 1);
    }
  };

  const handleClear = () => {
    setCom(null);
    setOutcome(null);
    setSelected("");
  };

  return (
    <div>
      <div>
        
        <div>
          <h1>D:D</h1>
          <p>Score: {score}</p>
        </div>

        <div>
          <h1>Choose a number</h1>

          <div>
            {numbers.map((num) => (
              <button key={num} onClick={(e) => handleSelected(num)}>
                {num}
              </button>
            ))}
          </div>

          <p>or</p>
          <input
            type="number"
            min="1"
            max="9"
            value={selected}
            onChange={(e) => handleSelected(e.target.value)}
          />

          <div>
            <button onClick={handlePredict}>Predict</button>
            <button onClick={handleClear}>Clear</button>
          </div>
        </div>

        <div>
          <div>
            <div>
              <h1>Your Pick</h1>
              <p>{selected || "-"}</p>
            </div>
            <div>
              <h1>Random Pick</h1>
              <p>{com ?? "-"}</p>
            </div>
          </div>

          <div>
            {outcome === "correct" && <span>Correct Guess</span>}
            {outcome === "wrong" && <span>wrong Guess</span>}
            {outcome === null && <span>Guess</span>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default A;

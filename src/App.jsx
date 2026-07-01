import React, { useState } from 'react';

const NumberShowdown = () => {
  // --- Game State ---
  const [selectedNumber, setSelectedNumber] = useState('');
  const [computerChoice, setComputerChoice] = useState(null);
  const [score, setScore] = useState(0);
  const [outcome, setOutcome] = useState(null); // 'correct' | 'wrong' | null

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  // --- Game Actions ---
  const handleSelect = (num) => {
    setSelectedNumber(num);
  };

  const handlePredict = () => {
    const parsed = parseInt(selectedNumber, 10);
    if (isNaN(parsed) || parsed < 1 || parsed > 9) {
      alert('Please select or enter a number between 1 and 9');
      return;
    }
    
    const randomNum = Math.floor(Math.random() * 9) + 1;
    setComputerChoice(randomNum);

    if (parsed === randomNum) {
      setOutcome('correct');
      setScore((prev) => prev + 1);
    } else {
      setOutcome('wrong');
    }
  };

  const handleClear = () => {
    setSelectedNumber('');
    setComputerChoice(null);
    setOutcome(null);
  };

  return (
    <div>
      <div>
        
        {/* Top Header Row */}
        <div>
          <h1>D : D</h1>
          <div>Score : {score}</div>
        </div>

        {/* Main Workspace split into two cards */}
        <div>
          
          {/* Left Panel: Inputs */}
          <div>
            <div>choose the number :</div>
            
            {/* 1 to 9 horizontal grid */}
            <div>
              {numbers.map((num) => (
                <button
                  key={num}
                  onClick={() => handleSelect(num)}
                >
                  {num}
                </button>
              ))}
            </div>

            <div>or</div>

            {/* Big center manual display input */}
            <input
              type="number"
              min="1"
              max="9"
              value={selectedNumber}
              onChange={(e) => handleSelect(e.target.value)}
              placeholder="-"
            />

            {/* Actions */}
            <div>
              <button onClick={handlePredict}>Predict number</button>
              <button onClick={handleClear}>Clear</button>
            </div>
          </div>

          {/* Right Panel: Results Showdown */}
          <div>
            <div>
              <div>
                <div>Your Pick</div>
                <div>{selectedNumber || '-'}</div>
              </div>
              <div>
                <div>Random Pick</div>
                <div>{computerChoice ?? '-'}</div>
              </div>
            </div>

            {/* Dynamic Win/Loss Status Footer matching the sketch text */}
            <div>
              {outcome === 'correct' && <span>correct Guess</span>}
              {outcome === 'wrong' && <span>wrong Guess</span>}
              {outcome === null && <span>Await Prediction</span>}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default NumberShowdown;
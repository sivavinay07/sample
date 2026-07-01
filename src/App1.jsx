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

  // --- Bulletproof Styles ---
  const styles = {
  pageWrapper: {
    minHeight: '100vh',
    background: '#f5f5f5',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '30px',
    fontFamily: 'Arial, sans-serif'
  },

  gameContainer: {
    width: '100%',
    maxWidth: '1200px',
    border: '3px solid #c0392b',
    padding: '30px',
    background: '#fff',
    position: 'relative'
  },

  headerRow: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    marginBottom: '40px'
  },

  title: {
    color: '#c0392b',
    fontSize: '40px',
    fontWeight: 'bold',
    margin: 0
  },

  scoreBoard: {
    position: 'absolute',
    right: 0,
    color: '#c0392b',
    fontSize: '28px',
    fontWeight: 'bold'
  },

  mainLayout: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '40px'
  },

  panel: {
    border: '3px solid #c0392b',
    minHeight: '450px',
    padding: '25px',
    background: '#fff'
  },

  label: {
    color: '#c0392b',
    fontSize: '24px',
    marginBottom: '20px'
  },

  buttonRow: {
    display: 'flex',
    gap: '8px',
    justifyContent: 'center',
    marginBottom: '20px'
  },

  numButton: {
    width: '45px',
    height: '45px',
    border: '2px solid #c0392b',
    background: '#fff',
    color: '#c0392b',
    fontSize: '18px',
    cursor: 'pointer'
  },

  numButtonSelected: {
    background: '#c0392b',
    color: '#fff'
  },

  orText: {
    textAlign: 'center',
    color: '#c0392b',
    fontSize: '20px',
    margin: '15px 0'
  },

  bigInput: {
    width: '100%',
    height: '90px',
    border: '3px solid #c0392b',
    fontSize: '48px',
    textAlign: 'center',
    color: '#c0392b',
    marginBottom: '25px',
    outline: 'none'
  },

  actionRow: {
    display: 'flex',
    gap: '20px'
  },

  predictBtn: {
    flex: 1,
    border: '3px solid #c0392b',
    background: '#fff',
    color: '#c0392b',
    fontSize: '24px',
    padding: '15px',
    cursor: 'pointer'
  },

  clearBtn: {
    width: '150px',
    border: '3px solid #c0392b',
    background: '#fff',
    color: '#c0392b',
    fontSize: '24px',
    cursor: 'pointer'
  },

  displayGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    textAlign: 'center',
    marginTop: '60px'
  },

  displayText: {
    color: '#c0392b',
    fontSize: '28px',
    marginBottom: '10px'
  },

  displayValue: {
    color: '#c0392b',
    fontSize: '50px',
    fontWeight: 'bold'
  },

  statusBox: {
    textAlign: 'center',
    marginTop: '120px',
    fontSize: '34px',
    color: '#c0392b',
    fontWeight: 'bold'
  }
};

  return (
    <div style={styles.pageWrapper}>
      <div style={styles.gameContainer}>
        
        {/* Top Header Row */}
        <div style={styles.headerRow}>
          <h1 style={styles.title}>D : D</h1>
          <div style={styles.scoreBoard}>Score : {score}</div>
        </div>

        {/* Main Workspace split into two cards */}
        <div style={styles.mainLayout}>
          
          {/* Left Panel: Inputs */}
          <div style={styles.panel}>
            <div style={styles.label}>choose the number :</div>
            
            {/* 1 to 9 horizontal grid */}
            <div style={styles.buttonRow}>
              {numbers.map((num) => (
                <button
                  key={num}
                  style={{
                    ...styles.numButton,
                    ...(Number(selectedNumber) === num ? styles.numButtonSelected : {})
                  }}
                  onClick={() => handleSelect(num)}
                >
                  {num}
                </button>
              ))}
            </div>

            <div style={styles.orText}>or</div>

            {/* Big center manual display input */}
            <input
              type="number"
              min="1"
              max="9"
              style={styles.bigInput}
              value={selectedNumber}
              onChange={(e) => handleSelect(e.target.value)}
              placeholder="-"
            />

            {/* Actions */}
            <div style={styles.actionRow}>
              <button onClick={handlePredict} style={styles.predictBtn}>Predict number</button>
              <button onClick={handleClear} style={styles.clearBtn}>Clear</button>
            </div>
          </div>

          {/* Right Panel: Results Showdown */}
          <div style={styles.panel}>
            <div style={styles.displayGrid}>
              <div>
                <div style={styles.displayText}>Your Pick</div>
                <div style={styles.displayValue} style={{...styles.displayValue, color: '#63b3ed'}}>{selectedNumber || '-'}</div>
              </div>
              <div>
                <div style={styles.displayText}>Random Pick</div>
                <div style={styles.displayValue} style={{...styles.displayValue, color: '#f6ad55'}}>{computerChoice ?? '-'}</div>
              </div>
            </div>

            {/* Dynamic Win/Loss Status Footer matching the sketch text */}
            <div style={styles.statusBox}>
              {outcome === 'correct' && <span style={{ color: '#48bb78' }}>correct Guess</span>}
              {outcome === 'wrong' && <span style={{ color: '#f56565' }}>wrong Guess</span>}
              {outcome === null && <span style={{ color: '#4a5568' }}>Await Prediction</span>}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default NumberShowdown;
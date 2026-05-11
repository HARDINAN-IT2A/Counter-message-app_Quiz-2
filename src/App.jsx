import React, { useState } from 'react';
import './App.css'; // 

/**
 * React Quiz: Counter 
 */
function App() {
  const [tally, setTally] = useState(0);
  const [userInput, setUserInput] = useState("");

  const handlePlus = () => setTally(tally + 1);
  const handleMinus = () => setTally(tally - 1);
  const handleClear = () => setTally(0);

  const isGoalReached = tally >= 5;

  return (
    <div className="app-container"> 
      <h1>Score Tracker</h1>
      <p className="tally-display">{tally}</p>
      
      <div className="button-group">
        <button className="btn btn-add" onClick={handlePlus}>Add (+)</button>
        <button className="btn btn-sub" onClick={handleMinus}>Subtract (-)</button>
        <button className="btn btn-reset" onClick={handleClear}>Reset Score</button>
      </div>

      {/*Conditional Rendering [1] */}
      {isGoalReached && (
        <h2 className="goal-message">
          Goal has been reached!
        </h2>
      )}

      <div className="input-section">
        <h3>Live Feedback</h3>
        <input 
          type="text" 
          className="input-field"
          placeholder="Type something..." 
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)} 
        />
        {/* Live display of typed message [1] */}
        <p><strong>Your Thoughts!:</strong> {userInput}</p>
      </div>
    </div>
  );
}

export default App;
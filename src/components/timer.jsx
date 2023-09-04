// inspiration https://dribbble.com/shots/2343572-Countdown-timer
import { useState } from "react";

// https://dribbble.com/shots/2325297-Day-14-Countdown-Timer
export default function Timer() {
  const [time, setTime] = useState(60);
  const [intervalId, setIntervalId] = useState(null);

  function handlePlay() {
    const id = setInterval(() => setTime((t) => t - 1), 1000);
    setIntervalId(id);
  }

  function handlePause() {
    clearInterval(intervalId);
  }

  return (
    <div>
      <div>{time}</div>
      <button onClick={handlePlay}>Play</button>
      <button onClick={handlePause}>Pause</button>
      {/* @todo add a reset button */}
    </div>
  );
}

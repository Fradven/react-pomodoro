import React, { useState, useEffect } from "react"
import Plus from "./Plus"
import Minus from "./Minus"
import Timer from "./Timer"

export default function Pomodoro() {
  const [minutes, setMinutes] = useState(25)
  const [seconds, setSeconds] = useState(0)
  const [timer, setTimer] = useState(25)
  const [breakTime, setBreakTime] = useState ("5")
  
  const [running, setRunning] = useState(false)

  function resetTimer() {
    setMinutes(timer)
  }

  useEffect(() => {
    setMinutes(timer)
  },[timer])

  return (
    <>
    <h1 className="pomodoro__title">Pomodoro</h1>
    <div className="pomodoro">

      <Timer minutes={minutes} setMinutes={setMinutes} seconds={seconds} setSeconds={setSeconds} />

      <div className="pomodoro__ctn">
        <div className="pomodoro__ctn-pmd">
          <Minus rmv={timer} setRmv={setTimer} />
          <div className="pomodoro__set">{timer}</div>
          <Plus add={timer} setAdd={setTimer} />
        </div>

        <div className="pomodoro__ctn-pmd">
          <Minus rmv={breakTime} setRmv={setBreakTime} />
          <div className="pomodoro__set">{breakTime}</div>
          <Plus add={breakTime} setAdd={setBreakTime} />
        </div>
      </div>

      <div className="pomodoro__active-btn">
        <button className="pomodoro__start">{!running ? "Start" : "Pause"}</button>
        <button className="pomodoro__resset" onClick={resetTimer}>Reset</button>
      </div>
    </div>
    </>
  )
}
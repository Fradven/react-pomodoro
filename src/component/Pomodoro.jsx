import React, { useState, useEffect } from "react"
import Plus from "./Plus"
import Minus from "./Minus"

export default function Pomodoro() {
  const [minutes, setMinutes] = useState(25)
  const [seconds, setSeconds] = useState(0)
  const [timer, setTimer] = useState(25)
  const [breakTime, setBreakTime] = useState ("5")
  const [displayMessage, setDisplayMessage] = useState(false)
  const [running, setRunning] = useState(false)

  useEffect(() =>{
    setMinutes(timer)
  },[timer])

  useEffect(() => {
    let interval = setInterval(() => {
      clearInterval(interval)
  
      if (seconds === 0) {
        if (minutes !== 0) {
          setSeconds(59)
          setMinutes(minutes - 1)
        } else {
          let minutes = breakTime - 1
          let seconds = 59
  
          setSeconds(seconds)
          setMinutes(minutes)
          setDisplayMessage(!displayMessage)
        }
      } else {
        setSeconds(seconds - 1)
      }
    }, 1000)
  }, [seconds])

  const timerMinutes = minutes < 10 ? `0${minutes}` : minutes
  const timerSeconds = seconds < 10 ? `0${seconds}` : seconds

  return (
    <>
    <h1 className="pomodoro__title">Pomodoro</h1>
    <div className="pomodoro">

      <div className="pomodoro__message">
        {!displayMessage ? <div>Work Time!</div> : <div>Break time!</div>}
      </div>

      <div className="pomodoro__timer">
        {timerMinutes}:{timerSeconds}
      </div>

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
        <button className="pomodoro__resset">Reset</button>
      </div>
    </div>
    </>
  )
}
import React, { useState, useEffect } from "react"
import Button from "./Button"
import ButtonRmv from "./ButtonRmv"

export default function Pomodoro() {
  const [minutes, setMinutes] = useState(25)
  const [seconds, setSeconds] = useState(0)
  const [timer, setTimer] = useState(25)
  const [breakTime, setBreakTime] = useState ("5")
  const [displayMessage, setDisplayMessage] = useState(false)

  function rmvTime() {
    setTimer(timer - 1)
  }
  
  function rmvBreak() {
    setBreakTime(breakTime - 1)
  }
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
    <div className="pomodoro">

      <div className="pomodoro__message">
        {displayMessage && <div>Break time!</div>}
      </div>

      <div className="pomodoro__timer">
        {timerMinutes}:{timerSeconds}
      </div>

      <div className="pomodoro__ctn">
        <div className="pomodoro__ctn-pmd">
          <ButtonRmv rmv={timer} setRmv={setTimer} />
          <div className="pomodoro__set">{timer}</div>
          <Button add={timer} setAdd={setTimer} />
        </div>

        <div className="pomodoro__ctn-pmd">
          <ButtonRmv rmv={breakTime} setRmv={setBreakTime} />
          <div className="pomodoro__set">{breakTime}</div>
          <Button add={breakTime} setAdd={setBreakTime} />
        </div>
      </div>

    </div>
  )
}
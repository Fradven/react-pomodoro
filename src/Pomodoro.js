import React, { useState, useEffect } from "react"

export default function Pomodoro() {
  const [minutes, setMinutes] = useState(5)
  const [seconds, setSeconds] = useState(2)
  const [timer, setTimer] = useState("")
  const [breakTime, setBreakTime] = useState ("")
  const [displayMessage, setDisplayMessage] = useState(false)

  function addTime() {
      
  }

  useEffect(() => {
    let interval = setInterval(() => {
      clearInterval(interval)
  
      if (seconds === 0) {
        if (minutes !== 0) {
          setSeconds(59)
          setMinutes(minutes - 1)
        } else {
          let minutes = 0
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

      <div className="pomodoro__ctn-pmd">
        <button className="pomodoro__btn pomodoro__btn--subTimer">-</button>
        <div className="pomodoro__set-timer">{minutes}</div>
        <button className="pomodoro__btn pomodoro__btn--addTimer">+</button>
      </div>

      <div className="pomodoro__ctn-pmd">
        <button className="pomodoro__btn pomodoro__btn--subBreak">-</button>
        <div className="pomodoro__set-break">5</div>
        <button className="pomodoro__btn pomodoro__btn--addBreak">+</button>
      </div>
    </div>
  )
}
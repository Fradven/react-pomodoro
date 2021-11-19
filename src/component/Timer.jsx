import React, { useState, useEffect } from 'react'

export default function Timer({minutes, setMinutes, seconds, setSeconds}) {
  const [displayMessage, setDisplayMessage] = useState(false)

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
      <div className="pomodoro__message">
        {!displayMessage ? <div>Work Time!</div> : <div>Break time!</div>}
      </div>

      <div className="pomodoro__timer">
        {timerMinutes}:{timerSeconds}
      </div>
      </>
    )
}

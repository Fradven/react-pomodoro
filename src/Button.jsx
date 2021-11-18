import React, { useState } from 'react'

export default function Button({add, setAdd}) {

    function addTime() {
        setAdd(add + 1)
      }

    return (
        <button className="pomodoro__btn" onClick={addTime}>+</button>
    )
}

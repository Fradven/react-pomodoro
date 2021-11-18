import React, { useState } from 'react'

export default function ButtonRmv({rmv, setRmv}) {
    
    function rmvTime() {
        setRmv(rmv - 1)
      }
    return (
        <div>
            <button className="pomodoro__btn" onClick={rmvTime}>-</button>
        </div>
    )
}

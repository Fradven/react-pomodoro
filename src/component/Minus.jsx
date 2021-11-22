import React, { useState } from 'react'

export default function Minus({rmv, setRmv}) {
    
    function rmvTime() {
        setRmv(rmv - 1)

        if(rmv <= 1) {
            setRmv(1)
        }
      }
    return (
        <div>
            <button className="pomodoro__btn" onClick={rmvTime}>-</button>
        </div>
    )
}

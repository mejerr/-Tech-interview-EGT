

import React from 'react'
import { useState, useEffect } from 'react';

const Timer = (props) => {
    const {} = props;
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] =  useState(3);

    const myFunc = () => {
        if (seconds > 0) {
            setSeconds(seconds - 1);
        }
        if (seconds === 0) {
            if (minutes === 0) {
                setMinutes(0);
                setSeconds(3);
            } else {
                setMinutes(minutes - 1);
                setSeconds(59);
            }
        }
    }

    useEffect(()=> {
        let myInterval = setInterval(myFunc, 1000);

        return () => {
            clearInterval(myInterval);
          };
    });

    return (
        <div className="timer-container">
        { minutes === 0 && seconds === 0
            ? <>Loader</>
            : <div className="time">{minutes}:{seconds < 10 ?  `0${seconds}` : seconds}</div>
        }
        </div>
    )
}

export default Timer;
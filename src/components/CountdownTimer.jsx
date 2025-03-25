import React, { useState, useEffect, useRef } from 'react';
import './CountdownTimer.css'; // Ensure you import the CSS file

const CountdownTimer = () => {
    const [time, setTime] = useState(60); // Countdown time in seconds
    const [isActive, setIsActive] = useState(false);
    const intervalRef = useRef(null);

    useEffect(() => {
        if (isActive && time > 0) {
            intervalRef.current = setInterval(() => {
                setTime(prevTime => prevTime - 1);
            }, 1000);
        } else if (time === 0) {
            clearInterval(intervalRef.current);
            setIsActive(false);
        }
        return () => clearInterval(intervalRef.current); // Cleanup on unmount
    }, [isActive, time]);

    const startTimer = () => {
        setIsActive(true);
    };

    const stopTimer = () => {
        setIsActive(false);
    };

    const resetTimer = () => {
        setIsActive(false);
        setTime(60); // Reset to initial time
    };

    return (
        <div className="countdown-timer">
        <div className="countdown-timer1">

             <h3 className='text'>"Countdown Timer"</h3>
            <h1 className='Countdown_Starts'>Time is Slipping! <span>"{time}"</span>  Seconds to Nothing</h1>
            <div className='btns'>
       {/* buttons start */}
       <button className="button-start" onClick={startTimer}>Start</button>
            <button className="button-stop" onClick={stopTimer}>Stop</button>
            <button className="button-reset" onClick={resetTimer}>Reset</button>
       {/* buttons end */}
            </div>
            
        </div>
        </div>
    );
};

export default CountdownTimer;
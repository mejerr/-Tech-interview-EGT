export const counter = ({ minutes, seconds, setMinutes, setSeconds, onFinish }) => {
    // This could be a custom reactHook instead of utils functions
    if (seconds > 0) {
        setSeconds(seconds - 1);
    }
    if (seconds === 0) {
        if (minutes === 0) {
            setMinutes(0);
            setSeconds(3);
            onFinish();
        } else {
            setMinutes(minutes - 1);
            setSeconds(59);
        }
    }
}

export const timerCounter = ({ minutes, seconds, setMinutes, setSeconds, onFinish }) => {
    return setInterval(() => counter({ minutes, seconds, setMinutes, setSeconds, onFinish }), 1000);
}
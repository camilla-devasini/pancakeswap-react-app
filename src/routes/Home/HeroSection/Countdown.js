import { useEffect, useRef, useState } from "react";

export function Countdown() {
  const [seconds, setSeconds] = useState(59);
  const [minutes, setMinutes] = useState(59);
  const [hour, setHour] = useState(24);


  const ref = useRef()

 let timer = ref;

  useEffect(() => {
    timer.current = setInterval(() => {
      
      
      setSeconds(seconds - 1);
        

      if (seconds === 0) {
        setMinutes(minutes - 1);
        setSeconds(59)
        
        
      }

      if (minutes === 0) {
        setHour(hour - 1)
        setMinutes(59)
        
      }
    }, 1000);

    return () => clearInterval(timer.current);
  },);

  return (
    <>
      <div>
        <h1>{hour}:{minutes}:{seconds}</h1>
      </div>
    </>
  );
}

import moment from "moment";
import { useEffect,  useState } from "react";

export function Countdown() {
  const [seconds, setSeconds] = useState(59);
  const [minutes, setMinutes] = useState(59);
  const [hour, setHour] = useState(24);



  

  useEffect(() => {
    window.setInterval(() => {
      const date = moment("19/12/2022 17:00:00", "DD/MM/YYYY HH:mm:ss");
      const _diff = date.diff(moment(), "seconds");
      const _hours = Math.floor(_diff / 60 / 60);
      const _minutes = Math.floor((_diff - _hours * 60 * 60) / 60);
      const _seconds = _diff - _hours * 60 * 60 - _minutes * 60;
      setSeconds(_seconds);
      setHour(_hours);
      setMinutes(_minutes);
    }, 1000);
  });

  return (
    <>
      <div>
        <h1 style={{ fontWeight: "600" }}>
          {hour.toString().padStart(2, "0")}
          <span>h </span>
          {minutes.toString().padStart(2, "0")}
          <span>m </span>
          {seconds.toString().padStart(2, "0")}
          <span>s </span>
        </h1>
      </div>
    </>
  );
}

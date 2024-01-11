import React, { useEffect, useRef } from 'react';

export default function Clock() {
  const hHand = useRef();
  const mHand = useRef();
  const sHand = useRef();

  const clockInit = () => {
    var date = new Date();
    var time = [date.getHours(), date.getMinutes(), date.getSeconds()];

    var hour = (time[1] / 2) + time[0] * 30;

    hHand.current.style.transform = "rotate(" + hour + "deg)";
    mHand.current.style.transform = "rotate(" + time[1] * 6 + "deg)";
    sHand.current.style.transform = "rotate(" + time[2] * 6 + "deg)";
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Update the state to trigger a re-render
      clockInit();
    }, 1000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);

  }, []);

  return (
    <>
      <div class="clock">
        <div ref={hHand} class="h-hand" id="hour"> </div>
        <div ref={mHand} class="m-hand" id="min"> </div>
        <div ref={sHand} class="s-hand" id="sec"> </div>
      </div>
    </>
  );
}

import React, { useEffect, useState } from 'react';
import { interval } from 'rxjs';
import { useObservable, useEventCallback } from 'rxjs-hooks';
import { map, take } from 'rxjs/operators';

function Hook() {
  const [count, setCount] = useState(0);
  const value = useObservable(() =>
    interval(500).pipe(
      map(val => val * 3),
      take(10),
    ),
  );

  const [clickCallback, x] = useEventCallback(
    event$ => event$.pipe(map((event: any) => event.clientX)),
    'nothing',
  );

  const handleClick = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    document.title = `You clicked ${count} times`;
    console.log(1111);
  }, []);

  return (
    <div>
      <h1>{value}</h1>
      <div>{x}</div>
      <p>You clicked {count} times</p>
      <button onClick={handleClick}>Click me</button>
      <button onClick={clickCallback}>ClickCallback</button>
    </div>
  );
}

export default Hook;

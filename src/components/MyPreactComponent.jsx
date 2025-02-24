import { useState } from 'preact/hooks';

export default function MyPreactComponent() {

  let time = new Date().toLocaleTimeString();
  const [ctime, setTime] = useState(time);

  const updateTime = () => {
    time = new Date().toLocaleTimeString();
    setTime(time);
  }

  setInterval(updateTime, 1000);

  return (
    <div>
      <h1 class="text-5xl">My Preact Component</h1>
      <h1 class="text-4xl">{ ctime }</h1>
    </div>
  );
}
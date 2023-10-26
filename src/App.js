import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const onClick = () => setValue((prev) => prev + 1)

  console.log("i run all the time");
  // TODO : useEffect는 두개의 argument를 가지는 function이다.
  /*
    첫번째 argument는 우리가 딱 한번만 실행하고 싶은 코드
    두번째 argument는..
  */

  useEffect(() => {
    console.log("CALL THE API...")
  }, []);

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

export default App;

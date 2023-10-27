import {useState, useEffect} from "react";
//TODO : 231027
/*
  cleanup function - 그냥 function인데 내 component가 destroy 될 때 뭔가 할 수 있게 도와준다!

  예를 들어 누군가는 component가 없어질 때 어떤 분석 결과를 보내고 싶어할 수도 있음.
  그러면 그 사람들은 분석 API를 보낼 수 있다!

  아니면 component가 사라지거나 없어질 때 event listener를 지우거나 혹은 console.log에 뭔가 보여줄 수 있다.
  중요한 건, 이걸로 component가 언제 create됐는지, 언제 destroy됐는지 알 수 있다는거!
*/

/*
  useEffect는 function을 받고, 이 function은 dependency가 변화할 때 호출된다.

  만약 component가 처음 생성될 때 deps가 비어있으면 function이 호출된 후에 다시는 호출되지 않음.
  이제, component가 파괴될 때도 function을 실행하고 싶으면, hiFn이 byFn을 return해야한다.
  react.js가 hiFn을 실행할거고, component가 파괴될 때는 react.js는 hiFn이 return한 function을 실행한다.
  즉, byFn이다.

  useEffect는 우리에게 선택권을 제공한다.
  언제 code를 실행해야할지!

  시작할 때, 무언가가 변화할 때, 파괴될 때 code실행!
*/
function Hello() {
  useEffect(() => {
    console.log("hi");
    return () => console.log("bye");
  }, [])
  return <h1>Hello</h1>
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => {
    setShowing((prev) => !prev)
  }
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  )
}

export default App;

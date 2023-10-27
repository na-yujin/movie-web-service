import {useState, useEffect} from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1)
  const onChange = (event) => setKeyword(event.target.value);
  // TODO - 231027
  /*
    react특징 : component를 새로운 데이터가 들어올때다가 UI를 refresh(새로고침)한다.
    useEffects는 두개의 argument를 가지는 function이다.
    첫번째 argument는 내가 실행시키고 싶은 코드
    두번째 dependency는 react가 지켜보고 그것이 변화할 때 react가 코드 실행시킴
   */
  useEffect(() => {
    console.log("i run only once");
  }, []);
  useEffect(() => {
    console.log("i run when 'keyword' changes");
  }, [keyword]);
  useEffect(() => {
    console.log("i run when 'counter' changes");
  }, [counter]);
  useEffect(() => {
    console.log("i run when keyword & counter change")
  }, [keyword, counter]);
  return (
    <div>
      <input value={keyword} onChange={onChange} type="text" placeholder="Search here..."/>
      <h1>{counter}</h1>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

export default App;

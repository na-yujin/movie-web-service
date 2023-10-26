import Button from "./Button";
import styled from "./App.module.css";
function App() {
  return (
    <div>
      <h1 className={styled.title}>버튼</h1>
      <Button text={"true"} />
    </div>
  );
}

export default App;

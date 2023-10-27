import {useState, useEffect} from "react";

//TODO : 231027
/*
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  예를 들어 setToDos((currentArray) => [toDo, ...currentArray]);
  이때 함수를 보낼 때 react.js는 함수의 첫번째 argument로 현재 State로 보낸다.(toDos에다가)
  그러면 현재 State를 계산하거나 새로운 State를 만드는데 사용할 수 있게 된다.
  여기서 하고 있는건 결국 현재 toDos를 받아와서 새로운 toDo의 array로 return하고 있는거다.
*/

/*
  map은 하나의 array에 있는 item을 내가 원하는 무엇이든지 바꿔주는 역할을 한다.
  ex) ['there', 'are', 'you', 'are'].map(() => "^_^")
  (4)["^_^", "^_^", "^_^", "^_^"]
  이런식으로!

  map은 함수의 첫번째 argument로 현재의 item을 가져올 수 있음!!
  map의 첫번째 argument에 item이나 원하는 변수명을 넣고 사용
  item자체를 return할 수 있음
  ex) ['there', 'are', 'you', 'are'].map((item) => item.toUpperCase())
  (4)["THERE", "ARE", "YOU", "ARE"]
  그럼  item이 모두 대문자가 되어 있는 새로운 arry를 return 한 것을 확인할 수 있음.

  내가 return하는 어떤 값이던지 그 값이 새로운 array가 될것이다.
  그리고 이 함수는 array의 각 item들을 한 번씩 동작해 거쳐간다.

  같은 component의 list를 render할 때 key라는 prop을 널어줘야한다.
  이건 그냥 react가 기본적으로 list에 있는 모든 item들을 인식하기 때문
  근데 key는 고유의 값(unique)여야 한다.
*/
function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDos((currentArray) => [toDo, ...currentArray]);
    setToDo("");
  };
  return (
    <div>
      <h1>My To Do ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input value={toDo} onChange={onChange} type="text" placeholder="Write your to do..."/>
        <button>Add To Do</button>
      </form>
      <hr/>
      <ul>
        {toDos.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
    </div>
  )
}

export default App;

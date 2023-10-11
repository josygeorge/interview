import EventPropogationApp from "./components/concepts/eventPropogation";
import Todo from "./components/useReducer.js/Todos";

function App() {
  return (
    <div className="App">
      <Todo />
      <EventPropogationApp />
    </div>
  );
}

export default App;

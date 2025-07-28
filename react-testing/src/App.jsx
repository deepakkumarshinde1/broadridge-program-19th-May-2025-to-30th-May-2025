import Counter from "./components/Counter";
import Todo from "./components/Todo";

function App() {
  return (
    <center>
      <h1 data-testid="h1-tag">Hello</h1>
      <h1 data-testid="h1-text">Hello</h1>
      <ul data-testid="menu">
        <li>Home</li>
        <li>Home</li>
        <li>Home</li>
        <li>Home</li>
      </ul>
      {/* <Counter text={false} /> */}
      <Todo />
    </center>
  );
}

export default App;

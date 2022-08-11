import "./App.css";

// importing components
import FirstComponent from "./components/FirstComponent";
import State from "./components/State";
import UserPresentation from "./components/UserPresentation";

function App() {
  // variables

  const name: string = "Eduardo";
  const age: number = 18;

  // function

  function useGreeting(name: string): string {
    return `Olá, ${name}`;
  }

  return (
    <div className="App">
      <h1>React com TypeScript</h1>
      <UserPresentation name={name} age={age} />
      <h2>{useGreeting(name)}</h2>
      <section>
        <FirstComponent />
        <State />
      </section>
    </div>
  );
}

export default App;

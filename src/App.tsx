import { useReducer } from "react";
import "./App.css";
import { JokeComponent } from "./Components/JokeComponent";
import jokesReducer from "./Components/Reducers/jokeReducer";

function App() {
  const InitialJokes = [
    {
      id: 1,
      joke: "Ever wondered why bees hum? It's because they don't know the words.",
      rate: 0,
    },
    {
      id: 2,
      joke: "Why are “Dad Jokes” so good? Because the punchline is apparent.",
      rate: 0,
    },
    {
      id: 3,
      joke: "Why was the JavaScript developer sad? He didn't know how to null his feelings.",
      rate: 5,
    },
  ];

  const [jokes, dispatch] = useReducer(jokesReducer, InitialJokes);

  const increaseRate = (id: number) => dispatch({ type: "INCREASE_JOKES_LIKES", id });
  const decreaseRate = (id: number) => dispatch({ type: "DECREASE_JOKES_LIKES", id });
  const editJoke = (id: number, newText: string) => dispatch({ type: "EDIT_JOKE", id, newText });
  const deleteJoke = (id: number) => dispatch({ type: "DELETE_JOKE", id });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const input = (e.target as HTMLFormElement).elements[0] as HTMLInputElement;
    const newJokeText = input.value.trim();
    if (newJokeText) {
      dispatch({
        type: "ADD_JOKE",
        newJoke: {
          id: Date.now(),
          joke: newJokeText,
          rate: 0,
        },
      });
      input.value = "";
    }
  };

  return (
    <div className="app">
      <h2> Joke App</h2>
      <form onSubmit={handleSubmit} className="joke-form">
        <input type="text" placeholder="Enter a new joke..." />
        <button type="submit">Add</button>
      </form>
      <div className="joke-list">
        {jokes
          .sort((a, b) => b.id - a.id)
          .map((joke) => (
            <JokeComponent
              key={joke.id}
              joke={joke}
              increaseRate={increaseRate}
              decreaseRate={decreaseRate}
              editJoke={editJoke}
              deleteJoke={deleteJoke}
            />
          ))}
      </div>
    </div>
  );
}

export default App;

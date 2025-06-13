import { useReducer} from 'react'

import './App.css'
import { JokeComponent } from './Components/JokeComponent'
import jokesReducer from './Components/Reducers/jokeReducer'


function App() {
  const InitialJokes = [
    {
      id: 1,
      joke: "Ever wondered why bees hum? It's because they don't know the words.",
      rate :0
    },
    {
      id:2,
      joke: "Why are “Dad Jokes” so good? Because the punchline is apparent.",
      rate : 0
    },
    {
      id :3,
      joke: "Why was the JavaScript developer sad? He didn't know how to null his feelings.",
      rate: 5
    },
    {
      id :4,
      joke: "Lady: How do I spread love in this cruel world? Random Dude: [...💘]",
      rate: 10
    },
    {
      id:5,
      joke : "Why did the scarecrow win an award? Because he was outstanding in his field.",
      rate: 6
    },
    {
      id: 6,
      joke: "Why did the tomato blush? Because it saw the salad dressing.",
      rate: 3
    },
    {
      id : 7,
      joke: "Why do birds fly south for the winter? Because it's too far to walk.",
      rate: 4
    },
  ]

  const [jokes, dispatch] = useReducer(jokesReducer, InitialJokes)
  const increaseRate =(id:number)=>{
    dispatch({type:'INCREASE_JOKES_LIKES',id})
  }
  const decreaseRate =(id:number) =>{
    dispatch({type:'DECREASE_JOKES_LIKES',id})
  }
  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) =>{
      e.preventDefault();
      const input = (e.target as HTMLFormElement).elements[0]  as HTMLInputElement;
      const newJokeText = input.value.trim();

      if(newJokeText){
        dispatch({type:'ADD_JOKE',newJoke:{
          id:Date.now(),
          joke:newJokeText,
          rate:0
        }})
      }
  }
  return (
    <>
    <h2>Jokes For you</h2>
    <div className="container">
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Enter The Joke' style={{padding:"12px", marginRight:'10px',borderRadius:12}} />
        <button type='submit'>Add Joke</button>
      </form>
    </div>
      <div style={{border:'1px solid', marginTop:20 ,borderRadius:12}}>
        {
          jokes.sort((a, b) => b.id - a.id).map(joke => (
            <JokeComponent key={joke.id} joke={joke} increaseRate={increaseRate} decreaseRate={decreaseRate} />
          ))
        }
      </div>
    </>
  )
}
  

export default App

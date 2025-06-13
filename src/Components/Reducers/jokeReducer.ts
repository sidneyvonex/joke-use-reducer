
import type { jokeType } from "../../types/types";

type JokeAction = |{type:'ADD_JOKE'; newJoke:jokeType} | {type:'INCREASE_JOKES_LIKES';id:number} | {type:'DECREASE_JOKES_LIKES';id:number}

const jokesReducer = (jokes:jokeType[],action:JokeAction):jokeType[] => {
    switch(action.type){
        case 'ADD_JOKE':
            return [...jokes,action.newJoke]
        case 'INCREASE_JOKES_LIKES':
            return jokes.map((joke)=>{
                if(joke.id == action.id){
                    return {...joke,rate:joke.rate +1}
                }else{
                    return joke;
                }
            })
        case 'DECREASE_JOKES_LIKES':
            return jokes.map((joke)=>{
                if(joke.id == action.id){
                    return {...joke,rate:joke.rate -1}
                }else{
                    return joke;
                }
            })
        default:
            return jokes
    }
}
export default jokesReducer;
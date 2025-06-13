import type { jokeType } from "../types/types";

interface JokeComponentProps{
    joke:jokeType;
    increaseRate:(id:number)=>void;
    decreaseRate:(id:number)=> void;
}



export const JokeComponent : React.FC<JokeComponentProps> = ({joke,increaseRate,decreaseRate}) =>{
    return(
        <div className="joke">
            <div className="jok-text">{joke.joke}</div>
            <div className="rate" style={{ border:'1px solid #fff'}}>{joke.rate}</div>
            <div className="joke-buttons"style={{borderBottom:'1px solid ',padding:20}}>
                <button className="btn btn-sm"onClick={()=>increaseRate(joke.id)} style={{marginRight:20, border:'1px solid green'}}>👍</button>
                <button className="btn btn-sm"onClick={()=> decreaseRate(joke.id)}style={{marginRight:20, border:'1px solid green'}}>👎</button>
            </div>
        </div>
    )
}
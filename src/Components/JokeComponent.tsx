import React, { useState } from "react";
import type { jokeType } from "../types/types";

interface JokeComponentProps {
  joke: jokeType;
  increaseRate: (id: number) => void;
  decreaseRate: (id: number) => void;
  editJoke: (id: number, newText: string) => void;
  deleteJoke: (id: number) => void;
}

export const JokeComponent: React.FC<JokeComponentProps> = ({
  joke,
  increaseRate,
  decreaseRate,
  editJoke,
  deleteJoke,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(joke.joke);

  const handleSave = () => {
    if (editedText.trim()) {
      editJoke(joke.id, editedText.trim());
      setIsEditing(false);
    }
  };

  return (
    <div className="joke-card">
      <div className="joke-text">
        {isEditing ? (
          <input
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
            className="joke-input"
          />
        ) : (
          joke.joke
        )}
      </div>
      <div className="joke-meta">
        <span className="joke-rate">Rating: {joke.rate}</span>
        <button onClick={() => increaseRate(joke.id)}>👍</button>
        <button onClick={() => decreaseRate(joke.id)}>👎</button>
        {isEditing ? (
          <button className="save-btn" onClick={handleSave}> Save</button>
        ) : (
          <button className="edit-btn" onClick={() => setIsEditing(true)}> Edit</button>
        )}
        <button className="delete-btn" onClick={() => deleteJoke(joke.id)}> Delete</button>
      </div>
    </div>
  );
};

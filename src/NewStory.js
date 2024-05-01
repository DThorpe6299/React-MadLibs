import React from "react";
import { STORIES } from "./constants";

const NewStory = ({ noun, noun2, adj, color, story }) => {
    console.log(noun)
    console.log(noun2)
    console.log(adj)
    console.log(color)
    console.log(story)
    if (story === STORIES.HAPPY) {
        return (
            <p>The weather is finally {adj} enough to wear this {color} {noun2} I got from {noun}!</p>
        );
    } else if (story === STORIES.SILLY) {
        return (
            <p>You can spot {noun} in a crowd with those {adj} {color} {noun2}</p>
        );
    } else if(story === STORIES.SURPRISE) {
        return (
            <p>Wow {noun}! That {color} {noun2} looks {adj}!</p>
        );
    }
}

export default NewStory; 

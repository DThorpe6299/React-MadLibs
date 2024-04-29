import React from "react";

const NewStory = ({ noun, noun2, adj, color, story }) => {
    console.log(noun)
    console.log(noun2)
    console.log(adj)
    console.log(color)
    console.log(story)
    if (story === 'happy') {
        return (
            <p>The weather is finally {adj} enough to wear this {color} {noun2} I got from {noun}!</p>
        );
    } else if (story === 'silly') {
        return (
            <p>You can spot {noun} in a crowd with those {adj} {color} {noun2}</p>
        );
    } else if(story === 'surprise') {
        return (
            <p>Wow {noun}! That {color} {noun2} looks {adj}!</p>
        );
    }
}

export default NewStory; 

import React, {useState} from "react";
import './NewStoryForm.css'

const NewStoryForm =({addStory, onRestart})=>{

    const stories = {
        happy: 'happy',
        silly: 'silly',
        surprise: 'surprise' 
    }

    const INITIAL_STATE = {
        noun: "",
        noun2: "",
        adj : "",
        color : "",
        story : ""
    }
    
    const [formData, setFormData] = useState(INITIAL_STATE)
    const [formHiding, setFormHiding] = useState(false)

    const handleSubmit = e =>{
        e.preventDefault();

        for (const value of Object.values(formData)) {
            console.log(Object.values(formData))
            if (value === "") {
                alert("Please fill out all fields before getting the story.");
                return;
            }
        }

        if (formData.story === "") {
            alert("Please select a story option before getting the story.");
            return;
        }
        
        addStory({...formData});
        setFormHiding(true)
    }
    

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(data => ({
            ...data,
            [name]: value
        }));
    };
    
    const restart = () => {
        onRestart();
        console.log("Restarting...");
        setFormData(INITIAL_STATE);
        console.log(formData)
        setFormHiding(false);
    }
    
    //nest select in label for screen readers according to React Docs
    return (
        <>
            <form onSubmit={handleSubmit} className={`storyForm ${formHiding ? 'hidden' : ''}`}>
                <label htmlFor='noun' placeholder='noun'>Noun</label>
                <input id= 'noun' type='text'
                name='noun'
                onChange={handleChange} 
                value={formData.noun}/>

                <label htmlFor='noun2' placeholder='noun2'>Noun 2</label>
                <input id= 'noun2' 
                type='text'
                name='noun2'
                onChange={handleChange} 
                value={formData.noun2}/>
            
                <label htmlFor='adj' placeholder='adjective'>Adjective</label>
                <input id= 'adj' 
                type='text'
                name='adj'
                onChange={handleChange} 
                value={formData.adj}/>

                <label htmlFor='color' placeholder='color'>Color</label>
                <input id= 'color' 
                type='text'
                name='color' 
                onChange={handleChange}
                value={formData.color}/>


                <label>Story Choices
                    <select name="story" onChange={handleChange} value={formData.story}>
                    <option value='' disabled>Select a story</option>
                    {Object.keys(stories).map(key => (
                        <option key={stories[key]} value={stories[key]}>{key}</option>
                    ))}
                    </select>
                </label>
                <button>Get Story</button>
            </form>
            <button className={`${formHiding ? 'restart-btn' : 'hidden'}`} onClick={restart}>Restart</button>
        </>
        
    )
}
export default NewStoryForm;
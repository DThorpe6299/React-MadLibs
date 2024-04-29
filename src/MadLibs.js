import React, {useState} from 'react';
import './MadLibs.css'
import NewStoryForm from './NewStoryForm';
import NewStory from './NewStory';

const MadLibs = () =>{
    const [madLibs, setMadLibs] = useState([])
    const [formSubmitted, setFormSubmitted] = useState(false)

    
    const addStory = (story)=>{setMadLibs(madLibs => [...madLibs, story]);
        setFormSubmitted(true);
    }



    return(
        <div>
            <h1>Madlibs!</h1>
            <div>
                <NewStoryForm addStory={addStory} onRestart={() => setMadLibs([])} /* used to clear the madLibs array ONLY upon restart*/ />
            </div>
            
            <div className='MadLibs'>
                {madLibs.map((madLib, index)=>(
                    <div className='MadLibs-stories' key={index}>
                        <NewStory 
                            noun={madLib.noun}
                            noun2={madLib.noun2}
                            adj={madLib.adj}
                            color={madLib.color}
                            story={madLib.story}
                        />
                    </div>
                ))}
            </div>

        </div>
    )
}
export default MadLibs;
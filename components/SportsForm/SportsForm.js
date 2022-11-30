import React, {useState,useEffect} from 'react';
import './sportsForm.css'
import sportsJSON from './sports.JSON';
import Select from 'react-select';


const SportsForm = ({step,setStep,team,setTeam,sports,setSports,about,setAbout}) =>{

    const [isActive,setIsActive] = useState(false);
 
    const changeCase = () =>{
        setStep(2)
    }

    useEffect(()=>{
        if(about !== '' && team !== '' && sports.length >= 1  ){
            setIsActive(true)
        }
    },[team,sports,about])
    

    const deleteSport = (e) => {

        let arr = [...sports]; 
        var index = arr.indexOf(e.target.value)
        
        arr.splice(index, 1);
        setSports(arr)

    }
    const addSport = (e) =>{

        if(sports.includes(e.value)) return;

        setSports([...sports, e.value]);
        console.log(sports)
    }


    return(

        
        <div className='sportsForm'>
            <div className='second-div'>
                <div className='title'>Tell us More About Yourself!</div>
                
                <div className='form-body'>
                    <div>
                        <label for="Team">Your Sports Team?</label>
                        <input onChange={(e)=>{setTeam(e.target.value)}} value={team} style={{"marginTop":".5rem"}}  className='input-style' id='Team' placeholder='Team' type="text"/>
                    </div>

                    <div className='text-group'>
                        <label for="About">About you? &#128214;</label>
                        <textarea style={{"marginTop":".5rem"}} onChange={(e)=>{setAbout(e.target.value)}} value={about}  id='About' placeholder='About' type="text"/>
                    </div>
                        
                    <div style={{"maxHeight":"25%"}} >

                        <label for="Sports">Your Sports? &#127944;</label>
                        <Select onChange={addSport} options={sportsJSON.sports} className='select-option'  placeholder='Sports'/>

                   

                    <div className='tag-group'>
                            {
                            sports?.map((element,i)=>{
                                return(
                                    <div className='icon-tag'>
                                      <span>{element}</span> <button onClick={deleteSport} value={element} className='delete'>X</button>
                                    </div>
                                )
                            })
                            }
                    </div>
                    </div>


                </div>
                
                <div className='buttons-group'>
                    <button className='back-button' onClick={(e)=>{setStep(step -1)}}>Back</button>
                    <button className={isActive ? 'active' : 'inactive'} onClick={changeCase}>Next</button>
                
                </div>
                
                

            </div>
        </div>
    )
}

export default SportsForm;
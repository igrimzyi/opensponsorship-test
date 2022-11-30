import React, {useState,useEffect} from 'react' ;
import axios from 'axios';
import './mainform.css'; 


const MainForm = ({name,setName,birth,setBirth,setLocation,location,step,setStep,gender,setGender, setLastName, lastName}) =>{
    
    const [isActive,setActive] = useState(false)

    useEffect(()=>{

        if(name !== '' && location !== '' && birth !== '' && gender !== ''){
            console.log(true)
            setActive(true)
        }
        
    },[name,location,birth,gender])

    const changeCase = () =>{
        if(isActive){
            setStep(1)
        }
    }


    return(
        <div className='mainForm'>


            {/* <form className='form' > */}
                <div className='first-div'>

                    <div className='date-birth'>
                        <div>
                            <label for="Name">First Name:</label><br/>
                            <input value={name} onChange={(e)=>{setName(e.target.value)}} className='name-input-style' id='Name' placeholder='Name' type="text"/>
                        </div>

                        <div>
                            <label for="Name">Last Name:</label><br/>
                            <input value={lastName} onChange={(e)=>{setLastName(e.target.value)}} className='last-name-input-style' id='Name' placeholder='Last Name' type="text"/>
                        </div>
                    </div>

                    <div style={{"width":"100%"}}>
                        <label for="Name">Where are you located? &#127968;</label><br/>
                        
                        <input value={location} onChange={(e)=>{setLocation(e.target.value)}} className='input-style' id='Name' placeholder='Location' type="text"/>

                    </div>

                    <div className='date-birth'>

                        <div style={{"width":"45%"}}>
                        
                            <label for="Name">Enter Your Date of Birth:</label><br/>
                            
                            <div className='fields-block'>
                                <input value={birth} onChange={(e)=>{setBirth(e.target.value)}} className='date-input' type="date"/>
                            </div>

                        </div>

                    

                   
                        <div style={{"width":"45%"}}>
                            <label for="Name">What is your Gender? </label><br/>
                            <select value={gender} onChange={(e)=>{setGender(e.target.value)}}>
                                <option value={"Male"}>Male</option>
                                <option value={"Female"}>Female</option>
                                <option value={"Disclosed"}>Prefer not to say</option>
                            </select> 
                        </div>

                    </div>

                    <button className={isActive ? 'active' : 'inactive'} onClick={changeCase}>Next</button>
                    

                </div>
            {/* </form> */}
            


        </div>

    )
}

export default MainForm; 
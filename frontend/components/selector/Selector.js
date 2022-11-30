import React, {useEffect,useSate} from 'react'; 
import Select from 'react-select'; 
import './selector.css'

const Selector = ({profiles,setChosenProfile,chosenProfile}) =>{ 

    const changeProfile = (e) =>{
        setChosenProfile(e.value)
    }


    return(
        <div className='selector'>
            <div style={{"width":"60%"}}>
            <Select onChange={changeProfile} options={profiles} className="select-option" placeholder="Profiles"/>
            </div>
           { chosenProfile != null && <button className='add-button' onClick={()=>{setChosenProfile(null)}}>Add Profile</button>}
        </div>
    )
}

export default Selector;
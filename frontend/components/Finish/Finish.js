import React, {useState,useEffect} from 'react'; 
import axios from 'axios';
import Select from 'react-select';
import picturesJSON from './pictures.JSON';
import guy from '../../images/guy.svg'
import girl from '../../images/girl.svg'
import './finish.css'


const Finish = ({setStep,step,picture,setPicture,interest,setInterest,submit}) =>{

    const [isActive,setIsActive] =useState();

    useEffect(()=>{
        if(picture != '' && interest !=''){
            setIsActive(true)
        }
    },[interest,picture])



    const changePicture = (e) =>{
        setPicture(e.value)
        console.log(e.value)
    }

   
    return(
        <div className='finishForm'>
            <div className='title'>Finish Your Profile!</div>
             
                
                <div className='second-div'>
                    <div style={{"display":"flex","alignItems":"center","flexDirection":"column"}}>
                        <div className='circle'>
                            {picture === "guy" && <img style={{"height":"100%"}} src={guy}/>}
                            {picture === "girl" && <img style={{"height":"100%"}} src={girl}/>}
                            {picture != "girl" || "guy" && <></>}
                        </div>
                        <Select  onChange={changePicture} options={picturesJSON?.pictures} className='select-option'  placeholder='Picture'/>
                    </div>


                    <div className='text-group'>
                        <label for="About">What Interest You?</label>
                        <textarea value={interest} style={{"marginTop":".5rem"}} onChange={(e)=>{setInterest(e.target.value)}}  id='About' placeholder='About' type="text"/>
                    </div>

                    <div className='buttons-group'>
                        <button className='back-button' onClick={(e)=>{setStep(step - 1)}}>Back</button>
                        {isActive && <button className='active' onClick={submit}>Submit</button>}
                    </div>

                   
                </div>

              

         
        </div>
    )
}

export default Finish; 
import React, {useState,useEffect} from 'react'; 
import MainForm from './components/MainForm/MainForm';
import './app.css'
import SportsForm from './components/SportsForm/SportsForm';
import Profile from './components/Profile/Profile';
import Finish from './components/Finish/Finish';
import axios from 'axios';



const App = () =>{

    const [step,setStep] = useState(2);

    const [name, setName] = useState('');
    const [birth, setBirth] = useState('');
    const [location, setLocation] = useState('');
    const [gender,setGender] = useState('');
    const [lastName,setLastName] = useState('')
    const [team,setTeam] = useState('');
    const [sports,setSports] = useState([]);
    const [about,setAbout] = useState('');
    const [picture,setPicture] = useState('');
    const [interest,setInterest] = useState('');
    

    const submit = (e) =>{
        e.preventDefault()

        const body = {
            name:name,
            lastName:lastName,
            birth:birth,
            gender:gender,
            location:location,
            sports:sports,
            profile:picture,
            interest:interest,
            team:team,
            about:about,
        }

        console.log(body)

        axios.post('http://localhost:4000/api/profile', body)
            .then((res)=>{
                
            })
            .catch((err)=>{

            })


    }


    const yieldStep = () =>{
        switch(step){
            case 0: 
                return(
                    <MainForm location={location} setLocation={setLocation} name={name} setName={setName} birth={birth} setBirth={setBirth} step={step} setStep={setStep}
                     setGender={setGender} gender={gender} setLastName={setLastName} lastName={lastName}
                     
                     />
                )
            case 1:
                return(
                    <SportsForm setTeam={setTeam} team={team} step={step} setStep={setStep} sports={sports} setSports={setSports} about={about} setAbout={setAbout}/>
                )
            case 2:
                return(
                   <Finish setInterest={setInterest} interest={interest}  setStep={setStep} step={step} picture={picture} setPicture={setPicture} submit={submit}/>
                )
        }
        
    }


    return(
        <div className='main'>
            {yieldStep()}
        </div>
    )
}

export default App; 


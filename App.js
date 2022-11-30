import React, {useState,useEffect} from 'react'; 
import MainForm from './components/MainForm/MainForm';
import './app.css'
import SportsForm from './components/SportsForm/SportsForm';
import Profile from './components/Profile/Profile';
import Finish from './components/Finish/Finish';
import axios from 'axios';
import Selector from './components/selector/Selector';



const App = () =>{

    const [step,setStep] = useState(0);

    const [name, setName] = useState('');
    const [lastName,setLastName] = useState('')

    const [birth, setBirth] = useState('');
    const [location, setLocation] = useState('');
    const [gender,setGender] = useState('');
    const [team,setTeam] = useState('');
    const [sports,setSports] = useState([]);
    const [about,setAbout] = useState('');
    const [picture,setPicture] = useState('');
    const [interest,setInterest] = useState('');

    const [chosenProfile,setChosenProfile] =useState(null); 
    const [profiles, setProfiles] = useState();    


    useEffect(()=>{
        axios.get('https://testcodebackend.herokuapp.com/api/profile')
            .then((res)=>{
                let profile = []
                console.log(res.data)
                res.data.map((e,i)=>{
                    let obj = {value:res.data[i]._id,label:res.data[i].name}
                    profile.push(obj)
                });

                setProfiles(profile)

            })
            .catch((err)=>{

            })
    },[])

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

        axios.post('https://testcodebackend.herokuapp.com/api/profile', body)
            .then((res)=>{

                console.log(res);
                let obj = {"value":res.data.saveProfile._id,"label":res.data.saveProfile.name};

                console.log(obj)

                setProfiles([...profiles, obj])
                


            })
            .catch((err)=>{

            })


    }


    const yieldStep = () =>{
        if(chosenProfile === null){
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
    }


    return(
        <div className='main'>
             {yieldStep()}
            <Selector chosenProfile={chosenProfile} setChosenProfile={setChosenProfile} profiles={profiles}/>

            {chosenProfile!= null && <Profile chosenProfile={chosenProfile}/>}
        </div>
    )
}

export default App; 


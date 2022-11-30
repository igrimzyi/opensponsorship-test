import React,{useState,useEffect} from 'react';
import axios from 'axios'; 
import './profile.css';
import guy from '../../images/guy.svg';
import girl from '../../images/girl.svg';


const Profile = ({id,chosenProfile}) =>{

    const [found,setFound] = useState(null); 
    const [loading,setLoading ] = useState(true);

    useEffect(()=>{
       
        axios.get(`http://localhost:4000/api/profile/${chosenProfile}`)
            .then((res)=>{
                console.log(res)
                setFound(res.data)
            })
            .catch((err)=>{

            })
    },[chosenProfile])


    return(
        <div className='profile-body'>
            <div className='card'>
                <div className='circle'>
                                {found?.profilePicture === "guy" && <img style={{"height":"100%"}} src={guy}/>}
                                {found?.profilePicture === "girl" && <img style={{"height":"100%"}} src={girl}/>}
                                {found?.profilePicture != "girl" || "guy" && <></>}
                </div>

                <div className='name-title'>{found?.name}</div>

                <div className='date-loc'>
                    <span>{found?.DOB}</span>
                    <span>{found?.location}</span>
                </div>

                <div className='team'><b>My Team:</b> {found?.Team}</div>

                <div className='grouped'>
                    <div className='team'>About Me</div>
                    <div className='text-box'>{found?.about}</div>
                </div>

                <div className='grouped'>
                    <div className='team'>My Interests</div>
                    <div className='text-box'>{found?.interest}</div>
                </div>

                <div className='tag-group'>
                            {
                            found?.sports?.map((element,i)=>{
                                return(
                                    <div className='icon-tag'>
                                      <span>{element}</span> 
                                    </div>
                                )
                            })
                            }
                 </div>
                
            </div>

        </div>
    )
}

export default Profile;
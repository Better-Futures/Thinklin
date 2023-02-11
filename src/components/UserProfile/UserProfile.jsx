import React, {useState, useEffect} from 'react';
import {useParams, useNavigate } from 'react-router-dom';
import {GoogleLogout } from 'react-google-login';
import {userCreatedPinsQuery, userQuery, userSavedPinsQuery } from '../../utils/data';
import {client} from '../../client';
import {MasonryLayout, Spinner} from '..';
import { NoPins, ActiveBtn, Banner, ButtonContainer, ImageContainer, LogoutContainer, NotActiveBtn, PinsWrapper, UserProfileContainer, UserProfileContainers, UserProfileImage, UserProfileName, UserProfileWrapper } from './UserProfile.elem';
import { gapi } from 'gapi-script';

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const [pins, setPins] = useState(null);
  const [text, setText] = useState('Created');
  const [activeBtn, setActiveBtn] = useState('created');
  const navigate = useNavigate();
  const {userId } = useParams();
  const randomImage = 'https://source.unsplash.com/1600x900/?nature,photography,technology,science'

  useEffect(() => {
   const query = userQuery(userId);
   client.fetch(query)
      .then((data) => {
          setUser(data[0])
      })

  }, [userId])

  useEffect(() => {
    const initClient= () =>{
        gapi.client.init({
          clientId: process.env.REACT_APP_GOOGLE_API_TOKEN,
          scope: ''
        
        });
    };
    gapi.load('client: auth2', initClient)
  });
  
  useEffect(() => {
    if(text === 'Created'){
        const createdPinsQuery = userCreatedPinsQuery(userId);
        client.fetch(createdPinsQuery)
        .then((data) =>{
          setPins(data);
        })
    }else{
      const savedPinsQuery = userSavedPinsQuery(userId);
      client.fetch(savedPinsQuery)
      .then((data) =>{
        setPins(data);
      })
    }
  }, [text, userId])
  

  const logout = () => {
    localStorage.clear();
    navigate('/login');
  }
  
  if(!user) return <Spinner message='Loading profile...' />


  return (
    <UserProfileContainer>
      <UserProfileWrapper>
        <UserProfileContainers>
        <ImageContainer>
          <Banner src={randomImage} alt= 'banner-picture' />
          <UserProfileImage src={user.image} alt='user-profile' />
          <UserProfileName>{user.username}</UserProfileName>
           <LogoutContainer>
            {userId === user._id && (
          <GoogleLogout 
            clientId={process.env.REACT_APP_GOOGLE_API_TOKEN}
            buttonText='Logout'
            onLogoutSuccess={logout}           
            cookiePolicy={'single_host_origin'}
            isLogout={true}
              />
            )}
           </LogoutContainer>
        </ImageContainer>
         <ButtonContainer>
         {activeBtn === 'created' ? (
          
          <ActiveBtn type='button' onClick={(e) => {
            setText(e.target.textContent);
            setActiveBtn('created');
            
          }}>
          Created
        </ActiveBtn> ):(
          
          <NotActiveBtn type='button' onClick={(e) => {
            setText(e.target.textContent);
            setActiveBtn('created'); }}
            >Created </NotActiveBtn> 
             )}
             {activeBtn === 'saved' ? (
          
          <ActiveBtn type='button' onClick={(e) => {
            setText(e.target.textContent);
            setActiveBtn('saved');
            
          }}>
          Saved
        </ActiveBtn> ):(
          
          <NotActiveBtn type='button' onClick={(e) => {
            setText(e.target.textContent);
            setActiveBtn('saved'); }}
            >Saved 
            </NotActiveBtn>           
             )}
         </ButtonContainer>
         {pins?.length > 0 ? (
         <PinsWrapper>
            <MasonryLayout pins={pins} />
         </PinsWrapper>):(
          <NoPins >
            No Pins Found!
          </NoPins>
         )}
        </UserProfileContainers>
      </UserProfileWrapper>  
    </UserProfileContainer>
  )
}

export default UserProfile;
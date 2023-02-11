import React, {useEffect} from 'react';
import { GoogleLogin }  from 'react-google-login';
import { useNavigate } from 'react-router';
import logo from '../../assets/logo.png';
import video from '../../assets/share.mp4'
import { ButtonContainer, LoginButtonContainer, LoginContainer, LoginWrapper, Logo, LogoWrapper, Video } from './Login.elem';
import {client } from '../../client';
import { gapi } from 'gapi-script';


const Login = () => {

    useEffect(() => {
      const initClient= () =>{
          gapi.client.init({
            clientId: process.env.REACT_APP_GOOGLE_API_TOKEN,
            scope: ''
          
          });
      };
      gapi.load('client: auth2', initClient)
    })
    

  const navigate = useNavigate();

  const responseGoogle = (res) =>{
    localStorage.setItem('user', JSON.stringify(res.profileObj))
    const {name, googleId, imageUrl} = res.profileObj;
   const doc = {
     _id: googleId,
     _type: 'user',
     username: name,
     image: imageUrl
   }
    client.createIfNotExists(doc)
       .then( () =>{
         navigate('/', { replace: true})
         
       })
   }

  return (
    <LoginContainer>
      <LoginWrapper>
        <Video src={video} type='video/mp4' controls={false} autoPlay muted loop />
        <ButtonContainer>
          <LogoWrapper>
            <Logo src={logo} alt='logo' />
          </LogoWrapper>
          <LoginButtonContainer>
            <GoogleLogin
            clientId={process.env.REACT_APP_GOOGLE_API_TOKEN}
            buttonText='Sign in with Google'
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
            isSignedIn={true}
            
            />
          </LoginButtonContainer>
        </ButtonContainer>
      </LoginWrapper>
    </LoginContainer>
  )
}

export default Login
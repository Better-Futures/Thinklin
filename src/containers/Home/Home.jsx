import React, {useState, useRef, useEffect} from 'react';
import { Link, Route, Routes} from 'react-router-dom';
import { Sidebar, UserProfile} from '../../components';
import logo from '../../assets/logo.png';
import { HomeContainer, OpenMenu, HomeWrapper, OpenMenuContainer, Logo, CloseMenuContainers, CloseMenuContainer, CloseMenu, ProfileImage, OpenMenuWrapper, TopbarShadow, RouterContainer} from './Home.elem';
import {Pins} from '..';
import {  userQuery } from '../../utils/data';
import { client } from '../../client';
import {fetchUser } from '../../utils/fetchuser';

const Home = () => {
  const scrollRef = useRef(null)
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const [user, setUser] = useState();
  const userInfo = fetchUser();
  
  useEffect(() => {
    const query = userQuery(userInfo?.googleId);

    client.fetch(query)
    .then((data) => {
      setUser(data[0])
    })
  });

  
  useEffect(() => {
    if (scrollRef.current){
      window.scrollTo(0, 0);
    }  
  })
  
  return (
    <>
      <HomeContainer>
        <HomeWrapper>
          <Sidebar user={user & user} />
          </HomeWrapper>
          <OpenMenuContainer>
           <OpenMenuWrapper>
           <TopbarShadow>
            <OpenMenu onClick={() => setToggleSidebar(true)} /> 
            <Link to="/">
            <Logo src={logo} alt="logo" />
          </Link>          
            <Link to={`user-profile/${user?._id}`}>
              <ProfileImage src={user?.image} alt='profile-image' />
            </Link>
            </TopbarShadow>
            </OpenMenuWrapper>
           { toggleSidebar &&  (<CloseMenuContainers>
                <CloseMenuContainer>
                  <CloseMenu onClick={() => setToggleSidebar((pre) => !pre)} />
                </CloseMenuContainer>
                <Sidebar user={user && user} closeToggle={setToggleSidebar} />
              </CloseMenuContainers>                       
              )
           }
           </OpenMenuContainer>    
           <RouterContainer ref={scrollRef}>
           <Routes>
           <Route path='/user-profile/:userId' element={<UserProfile />} />
            <Route path='/*' element={<Pins user={user && user} />} /> 
          </Routes>
           </RouterContainer>   
      </HomeContainer>


    </>
  )
}

export default Home;
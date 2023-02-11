import React from 'react';
import { RiHome2Fill } from 'react-icons/ri';
import { IoIosArrowForward } from 'react-icons/io';
import logo from '../../assets/logo.png';
import { SidebarContainer, SidebarMenu, SideLink, SideLogo, SidebarWrapper, SidebarLinks, CategoryHeading, ProfileLink, ProfileImage, SidebarImage } from './Sidebar.elem';
import {categories} from '../../utils/data';

const Sidebar = ({user, closeToggle}) => {
  const handleClick = () => {
    if(closeToggle) closeToggle(false)
  }
  
  return (
    <SidebarContainer>
    <SidebarWrapper>
      <SideLink to ='/' onClick={handleClick} >
        <SideLogo src={logo} alt='logo'/>
      </SideLink>
      <SidebarMenu>
        <SidebarLinks to='/' activeStyles onClick={handleClick}>
          <RiHome2Fill />
          Home
          </SidebarLinks>
          <CategoryHeading> Discover categories </CategoryHeading>
      {categories.slice(0, categories.length - 1).map((category) =>(
        
        <SidebarLinks 
        to={`/${category.name}`}
        onClick={handleClick}
        key={category.name}
        activeStyles
        >
        <SidebarImage src={category.image} alt='categories' />
        {category.name}
        </SidebarLinks> 
        
        
      ))}  
      </SidebarMenu>
    </SidebarWrapper>
    {user && (
      <ProfileLink to={`user-profile/${user._id}`} onClick={handleClick} >
        <ProfileImage src={user.image} alt='profile-image' />
        <p>{user.username}</p>
          <IoIosArrowForward />
      </ProfileLink>
    )}
    </SidebarContainer>
  )
}

export default Sidebar;
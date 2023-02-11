import React from 'react';
import {  useNavigate } from 'react-router-dom';
import { IoMdAdd, IoMdSearch } from 'react-icons/io';
import { CreatePin, Image, ImageContainer, ImageLink, Input, NavContainer, NavSearch } from './Navbar.elem';

const Navbar = ({searchTerm, setSearchTerm, user}) => {
    const navigate = useNavigate();

    if(!user) return null;

  return (
    <NavContainer>  
      <NavSearch>
        <IoMdSearch fontSize={20} style={{marginLeft: '1px', background: '#fff', borderStartStartRadius: '5px'}} />
        <Input  
          type= 'text'
          onChange= {(e) => setSearchTerm(e.target.value)}
          placeholder= 'Search'
          value={searchTerm}
          onFocus={() => navigate('/search')}
        />
      </NavSearch>
      <ImageContainer>
        <ImageLink to={`user-profile/${user?._id}`} >
          <Image src={user.image} alt='user' />
          <CreatePin to='/create-pin'>
            <IoMdAdd />
          </CreatePin>         
        </ImageLink>  
      </ImageContainer>
    </NavContainer>
  )
}

export default Navbar
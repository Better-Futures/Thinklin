import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const SidebarContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: #fff;
    height: 100%;
    overflow-y: scroll;
    min-width: 210px;
    &::-webkit-scrollbar{
       background: #f5f5f5;
       border-radius: 5px;
       width: 6px;
   }
   &::-webkit-scrollbar-thumb{
       background: #888;
       
   }
   &::-webkit-scrollbar-track{
       background: #f1f1f1;
       
   }
  @media screen and (max-width: 768px){
    &::-webkit-scrollbar-track{
        background: #fff;
        
    }
  }  
    
`;

    

export const SidebarWrapper = styled.div`
   display: flex;
   flex-direction: column;
`;
export const SideLink = styled(Link)`
    display: flex;
    padding: 0 5px;
    margin: 6px 0;
    padding-top: 1px;
    width: 190px;
    text-decoration: none;
    align-items: center;
`;
export const SideLogo = styled.img`
    width: 100%;
    height: 50px;
    margin-bottom: 15px;
    
`;
export const SidebarMenu = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;
export const SidebarLinks = styled(NavLink)`
    display: flex;
    text-decoration: none;
    align-items: center;
    padding: 0 5px;
    margin: 0 0 25px 0;
    color: #000;
    background: rgba(255, 255, 255, 0.6);
    &:hover{
        color: #000;
        transition: all 0.7s ease-in-out;
        text-transform: capitalize;
    }
    &.active{
        font-weight: bold;
        border-right: 2px;
        border: #000;
        transition: all 0.7s ease-in-out;
        text-transform: capitalize;
    }
`;
export const CategoryHeading = styled.h1`
    margin-bottom: 25px;
    padding: 0 5px;
    font-size: large;
    font-weight: 500;
`;
export const ProfileLink = styled(Link)`
    text-decoration: none;
    margin: 5px 2px;
    margin-bottom: 3px;
    display: flex;
    align-items: center;
    background: #fff;
    color: #000;
    -webkit-box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
    box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);

`;
export const ProfileImage = styled.img`
    width: 32px;
    height: 32px;
    border-radius: 50%;
    margin-right: 3px;
    object-fit: cover;
`;
export const SidebarImage = styled.img`
    width: 32px;
    height: 32px;
    border-radius: 50px;
    margin-right: 10px;
    object-fit: cover;
    box-shadow: rgba(0, 0, 0, 0.9);
`;


// https://lh3.googleusercontent.com/a/ALm5wu0VnZSeEKbQAp4EZqdRh8U79HNfIzDR4hdQ5cy_9Q=s96-c"
//     sub
//     : 
//     "100233616124511762975"
//     [[Prototype]]
//     : 
//     Object
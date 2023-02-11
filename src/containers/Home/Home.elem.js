import styled from 'styled-components';
import { HiMenu } from 'react-icons/hi';
import { AiFillCloseCircle } from "react-icons/ai";

export const HomeContainer = styled.div`
    display: flex;
    background: rgba(255, 255, 255, 0.6);
    height: 100vh;
    transition: all 0.75s ease-out;
    @media screen and (max-width: 768px){
        flex-direction: column;
    }
`;
export const OpenMenuContainer = styled.div`
    display: none;
    height: 100vh;
    justify-content: flex-start;
    @media screen and (max-width: 768px){
        display: flex;
        
    }
`;

export const HomeWrapper = styled.div`
    display: flex;
    flex-direction: row;
    @media screen and (max-width: 768px){
        display: none;
    }
`;
export const OpenMenuWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    padding: 2px;
   
`;
export const OpenMenu = styled(HiMenu)`
    font-size: 40px;
    cursor: pointer;
`;
export const ProfileImage = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 2px;
`;
export const Logo = styled.img`
    width: 180px;
    height: 40px;
    border-radius: 5px;
`;
export const CloseMenuContainers = styled.div`
    position: fixed;
    width: 80%;
    background: #fff;
    height: 100vh;
    overflow-y: auto;
    -webkit-box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
    box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
    z-index: 10;
    transition: all 20s ease-in;
`;
export const CloseMenuContainer = styled.div`
    position: absolute;
    display: flex;
    width: 100%;
    justify-content: flex-end;
    align-items: center;
    padding: 2px;
    
`;
export const CloseMenu = styled(AiFillCloseCircle)`
    font-size: 30px;
    cursor: pointer;
`;
export const RouterContainer = styled.div`
    padding-bottom: 2px;
    flex: 1;
    height: 100vh;
    overflow-y: scroll;
    
`
export const TopbarShadow = styled.div`
    -webkit-box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
    box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    padding: 2px;
    height: 22%;
`;
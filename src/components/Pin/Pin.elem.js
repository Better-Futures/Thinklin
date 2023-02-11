import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const PinContainer = styled.div`
  margin: 12px;
`;

export const PinWrapper = styled.div`
  position: relative;
  cursor: zoom-in;
  width: auto;
  border-radius: 5px;
  overflow: hidden;
  transition: all 5s ease-in-out;
  &:hover{
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }
`;

export const Image = styled.img`
  border-radius: 5px;
  width: 100%;

`;

export const PinLinkContainers = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 11px;
  padding-right: 12px;
  padding-top: 2px;
  padding-bottom: 2px;
  z-index: 50;
`;

export const PinLinkContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

`;

export const PinLinkWrapper = styled.div`
  display: flex;
  margin-right: 0px;

`;

export const PinLink = styled.a`
  background: #fff;
  width: 19px;
  height: 19px;
  border-radius: 50%;
  align-items: center;
  display: flex;
  justify-content: center;
  color: #000;
  font-size: x-large;
  opacity: 0.75;
  outline: none;
  &:hover{
    opacity: 1;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }
`;

export const Button = styled.button`
  background: red;
  opacity: 0.7;
  color: #fff;
  font-size: bold;
  padding: 1px 5px;
  font-style: normal;
  border-radius: 10px;
  border: none;
  outline: none;
  &:hover{
    opacity: 1;
    box-shadow:  0 0 6px rgba(0, 0, 0, 0.9);
  }
`;

export const PinDeleteContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
export const PinDeleteLink = styled.a`
  background: #fff;
  display: flex;
  align-items: center;
  margin-bottom: 3px;
  padding: 2px 4px 4px 4px;
  border-radius: 5px;
  color: #000;
  font-style: normal;
  text-decoration: none;
  align-text: center;
  font-family: bold;
  opacity: 0.7;
  &:hover{
    opacity: 1;
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.9);
  }
`;

export const PinDeleteButton = styled.button`
background: #fff;
opacity: 0.7;
color: #000;
font-size: bold;
padding: 2px;
font-style: normal;
border-radius: 10px;
border: none;
outline: none;
&:hover{
  opacity: 1;
  box-shadow:  0 0 6px rgba(0, 0, 0, 0.9);
}
`;
  
export const UserProfileLink = styled(Link)`
  display: flex;
  text-decoration: none;
  color: #000;
  margin-left: 2px;
  margin-top: 2px;
  align-items: center;
`;

export const ProfileImage = styled.img` 
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
`;
export const Paragraph = styled.p`
  font-weight: bold;
  text-transform: capitalize;
  margin-left: 4px;
`;
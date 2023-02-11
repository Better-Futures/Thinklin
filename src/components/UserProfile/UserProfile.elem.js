import styled from "styled-components";

export const UserProfileContainer = styled.div`
  position: relative;
  padding-bottom: 2px;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const UserProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 5px;

`;  

export const UserProfileContainers = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 7px;

`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Banner = styled.img`
  width: 100%;
  height: 370px;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.9);
  object-fit: cover;
`;

export const UserProfileImage = styled.img`
  border-radius: 50%;
  width: 60px;
  height: 60px;
  margin-top: -15px;
  box-shadow: 0 0 6px rgba(255, 255, 255, 0.9);
  object-fit: cover;
`;

export const UserProfileName = styled.h1`
  font-weight: bold;
  font-size: x-large;
  text-align: center;
  margin-top: 3px;
`;

export const LogoutContainer = styled.div`
  position: absolute;
  top: 0;
  z-index: 1;
  right: 0px;
  padding: 2px;
`;

export const ButtonContainer = styled.div`
  text-align: center;
  margin-bottom: 7px;
`;

export const NotActiveBtn = styled.button`
  background: rgba(255, 255, 255, 0.6);
  margin: 0 40px;
  color: #000;
  font-weight: bold;
  padding: 4px;
  border-radius: 5px;
  width: 20px;
  outline: none;
  border: none;
  cursor: pointer;
`;

export const ActiveBtn = styled.button`
  background: #ff0000;
  color: #fff;
  font-weight: bold;
  padding: 4px;
  margin: 0 10px;
  border-radius: 5px;
  width: fit-content;
  outline: none;
  border: none;
  cursor: pointer;
`;

export const PinsWrapper = styled.div`
  padding: 0 2px;

`;

export const NoPins = styled.div`
    display: flex;
    justify-content: center;
    font-weight: bold;
    align-items: center;
    width: 100%;
    font-size: x-large;
    margin-top: 2px;
`;
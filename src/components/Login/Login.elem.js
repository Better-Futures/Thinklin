import styled from 'styled-components';

export const LoginContainer = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    flex-direction: column;
    height: 100vh;
   
`;
export const LoginWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    &::after{
        content: "";
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        position: absolute;
        background-color: #000;
        opacity: 0.8;
    }
   
`;
export const Video = styled.video`
    width: 100%;
    height: 100%;
    object-fit: cover;    
  
`;
export const ButtonContainer = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 10;
    `;
export const LogoWrapper = styled.div`
    margin-bottom: 10px;
`;
export const Logo = styled.img`
    width: 130px;
    cursor: pointer;
    border-radius: 5px;
`;
export const LoginButtonContainer = styled.div`
    box-shadow: 0 0 16px -8px rgba(0, 0, 0, 0.68);
    -webkit-box-shadow: 0 0 -8px 16px rgba(0, 0, 0, 0.68);
    border-radius: 10px;
    outline: none;
    border: none;
    cursor: pointer;
    
`;

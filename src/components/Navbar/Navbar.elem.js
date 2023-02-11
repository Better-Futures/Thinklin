import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const NavContainer = styled.nav`
  display: flex;
  margin-right: 2px;
  width: 100%;
  margin-top: 5px;
  padding-bottom: 7px;
  @media screen and (max-width: 768px){
    margin-right: 5px;
  }
`;
export const NavSearch = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  padding: 0 2px;
  background: #f5f5f5;
  border-radius: 5px;
  border: none;
  outline: none;
  -webkit-box-shadow: inset 0 0 6px #fff;
  &:focus{
    -webkit-box-shadow: inset 0 0 6px #fff;
  }
`;
export const Input = styled.input`
  padding: 2px;
  width: 100%;
  border: none;
  background: #fff;
  border-top-right-radius: 5px;
  &:focus{
  outline: none;
  }
`;
export const ImageContainer = styled.div`
  display: flex;
  margin-left: 3px;
`;  
export const ImageLink = styled(Link)`
  display: block;
  @media screen and (max-width: 768px){
    display: none;
  }
`;
export const Image = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
`;
export const CreatePin = styled(Link)`
  background: #000;
  color: #fff;
  border-radius: 5px;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 3px;
`;
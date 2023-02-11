import styled from 'styled-components';

export const CreatePinContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 5px;
  height: 100%;
`;
export const ErroMessage = styled.p`
  color: #ff0000;
  margin-bottom: 5px;
  text-align: center;
  font-size: x-large;
  transition: all 15s ease-in;
`;

export const BoxContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #fff;
  padding: 5px;
  width: 80%;
  @media screen and (max-width: 768px){
    flex-direction: row;
    padding: 3px;
    width: 100%;
  }
`;  
export const BoxWrapper = styled.div`
  background: #ddd;
  padding: 3px;
  display: flex;
  flex: 0.7;
  width: 100%;
  opacity: 0.8;
  &:hover{
    opacity: 1;
  }
`;

export const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 2px dotted gray;
  padding: 3px;
  width: 100%;
  height: 340px;
`;

export const UploadContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const UploadWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`;  

export const UploadParagraph = styled.p`
  font-weight: bold;
  font-size: xx-large;
  cursor: pointer;
`;  

export const Upload = styled.p`
  font-size: x-large;
`;

export const Recomendation = styled.p`
  margin-top: 32px;
  color: gray;
`;

export const ImageInput = styled.input`
  width: 0;
  height: 0;

`;

export const ImageUploadContainer = styled.div`
  position: relative;
  height: 100%;
`;

export const Image = styled.img`
  height: 100%;
  width: 100%;
`;

export const ImageDeleteButton = styled.button`
  position: absolute;
  bottom: 3px;
  right: 3px;
  padding: 4px;
  border-radius: 50%;
  background: #fff;
  font-size: x-large;
  cursor: pointer;
  outline: none;
  border: none;
  transition: all 5s ease-in-out;
  &:hover{
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.9);
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin-left: 6px;
  padding-left: 5px;
  margin-top: 5px;
  width: 100%;
`;

export const TextInput = styled.input`
  outline: none;
  font-size: medium;
  font-weight: bold;
  margin-bottom: 10px;
  border-color: gray;
  padding: 2px;
  border-radius: 5px;
  @media screen and (max-width: 678px){
    font-size: larger;
  }
  &::placeholder{
    font-weight: lighter;
    font-size: medium;
    color: gray;
  }
`;

export const UserProfileContainer = styled.div`
  display: flex;
  margin-left: 2px;
  margin: 2px 0;
  align-items: center;
  background: #fff;
  border-radius: 5px;
`;

export const UserProfile = styled.img`
  width: 32px;
  height:32px;
  border-radius: 50%;
  object-fit: cover;
`;
export const UserName = styled.p`
  font-weight: bolder;
`;

export const CategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CategoryParagraph = styled.div`
  margin-bottom: 2px;
  font-weight: bold;
  font-size: large;
  @media screen and (max-width: 768px) {
    font-size: x-large;
  }
`;

export const Select = styled.select`
  outline: none;
  width: 80%;
  font-style: normal;
  border-bottom: 2px;
  border-style: gray;
  padding: 2px;
  border-radius: 5px;
  cursor: pointer;
`;

export const Option1 = styled.option`
  background: #fff;
`;

export const Options = styled.option`
  font-style: normal;
  border: 0;
  outline: none;
  text-transform: capitalize;
  background: #fff;
  color: #000;
`;

export const SavePinContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  margin-top: 5px;
`;

export const SavePin = styled.button`
  background: #ff0000;
  color: #fff;
  font-weight: bold;
  padding: 2px;
  border-radius: 5px;
  display: flex;
  outline: none;
  width: 64px;
  text-align: center;
  border: none;
`;




import React, {useState} from 'react';
import { AiOutlineCloudUpload } from 'react-icons/ai';
import { MdDelete } from 'react-icons/md';
import { useNavigate } from 'react-router';
import { client } from '../../client';
import {Spinner} from '../../components';
import {categories } from '../../utils/data';
import { Box, BoxContainer, BoxWrapper, Recomendation, CreatePinContainer, ErroMessage, UploadWrapper, UploadContainer, UploadParagraph, Upload, ImageInput, Image, ImageUploadContainer, ImageDeleteButton, InputContainer, TextInput, UserProfileContainer, UserProfile, UserName, CategoryContainer, Select, Option1, Options, SavePinContainer, SavePin } from './CreatePin.elem';

const CreatePin = ({user}) => {
    const uploadImage = (e) =>{
      const {type, name} = e.target.files[0];
      if(type === 'image/png' || type === 'image/jpg' || type === 'image/jpeg' || type === 'image/gif' || type === 'image/svg' || type === 'image/tiff'){
        setWrongImageType(false);
        setLoading(true);

        client.assets
        .upload('image', e.target.files[0], { contentType: type, filename: name})
        .then((data) => {
            setImageAsset(data);
            setLoading(false);
        })
        .catch((erro) => {
          console.log('Image upload erro:', erro)
        })
      }
      else{
        setWrongImageType(true);
      }
    }
    const savePin = () =>{
      if(title && about && destination && category && imageAsset?._id){
          const doc ={
            _type: 'pin',
            title,
            about,
            destination,
            image: {
              _type: 'image',
              asset: {
                _type: 'reference',
                _ref: imageAsset?._id
              }
            },
            UserId: user._id,
            postedBy: {
              _type: 'postedBy',
              _ref: user._id
            },
            category,
          }
          client.create(doc)
          .then(() => {
              navigate('/')
          })
      }else {
        setFields(true)
        setTimeout(() => setFields(false), 2000)
      }
    }
    const [title, setTitle] = useState('');
    const [about, setAbout] = useState('');
    const [destination, setDestination] = useState('');
    const [loading, setLoading] = useState(false);
    const [fields, setFields] = useState(null);
    const [category, setCategory] = useState(null);
    const [imageAsset, setImageAsset] = useState(null);
    const [wrongImageType, setWrongImageType] = useState(false);
    const navigate = useNavigate();

  return (
    <CreatePinContainer>
      {fields && (
        <ErroMessage>please enter all fields</ErroMessage>
      )}
      <BoxContainer>
        <BoxWrapper>
          <Box>
            {loading && <Spinner />}
            {wrongImageType && <p>Wrong image type </p>}
            {!imageAsset  ? (
              <label>
              <UploadContainer>
                <UploadWrapper>
                  <UploadParagraph>
                    <AiOutlineCloudUpload />
                  </UploadParagraph>
                  <Upload > Click to upload</Upload>
                </UploadWrapper>
                <Recomendation>use high quality JPG, SVG, PNG, GIF less than 20MB</Recomendation>
              </UploadContainer>
              <ImageInput type="file" name="upload-image" onChange= {uploadImage} />
              </label>
            ):(
          <ImageUploadContainer> 
            <Image src={imageAsset?.url} alt='image-upload' />
            <ImageDeleteButton 
            type="button"
            onClick={() => setImageAsset(null)}
            >
              <MdDelete />
            </ImageDeleteButton>
             </ImageUploadContainer>)}
          </Box>
        </BoxWrapper>
        <InputContainer >
          <TextInput type="text" value= {title} placeholder= "Add your title here" onChange={(e) => setTitle(e.target.value)}/>
          {user && (
            <UserProfileContainer>
              <UserProfile src={user.image} alt='user-profile' />
              <UserName>{user.username}</UserName>
            </UserProfileContainer>
          )}
          <TextInput type="text" value= {about} placeholder= "What is your pin about" onChange={(e) => setAbout(e.target.value)}/>
        
        <TextInput type="text" value= {destination} placeholder= "Add your destination link" onChange={(e) =>setDestination(e.target.value)}/>
        <CategoryContainer>
          <div>
          <Select onChange={(e) => setCategory(e.target.value)} >
            <Option1 value='other'>Select category</Option1>
            {categories.map((category) => (
              <Options value={category.name} key={category.name}>
                  {category.name}
              </Options>
            ))}
          </Select>
          </div>
          <SavePinContainer>
            <SavePin type ='button' onClick={savePin} >Save Pin</SavePin>      
               </SavePinContainer>
        </CategoryContainer>
        </InputContainer>
      </BoxContainer>
    </CreatePinContainer>

  )
}

export default CreatePin;
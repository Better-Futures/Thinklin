import React, {useState} from 'react'
import { urlFor, client } from '../../client';
import { useNavigate } from 'react-router';
import {v4 as uuidv4} from 'uuid';
import {fetchUser } from '../../utils/fetchuser';
import { Image, PinContainer, PinLink, PinLinkContainer, PinDeleteContainer, Button, PinLinkContainers, PinLinkWrapper, PinWrapper, PinDeleteLink, PinDeleteButton, UserProfileLink, ProfileImage, Paragraph } from './Pin.elem';
import { MdDownloadForOffline } from 'react-icons/md';
import { AiTwotoneDelete } from 'react-icons/ai';
import { BsFillArrowUpRightCircleFill } from 'react-icons/bs';

const Pin = ({ pin: {postedBy, image, _id, destination, save}}) => {
  const [postHovered, setPostHovered] = useState(false);
  const user = fetchUser();
  const navigate= useNavigate();
  const alreadySaved = !!(save?.filter((item) => item?.postedBy?._id === user?.googleId))?.length;
  const savePin = (id) =>{
    if(!alreadySaved){
  
        client
        .patch(id)
        .setIfMissing({save: []})
        .insert('after', 'save[-1]',[{
          _key: uuidv4(),
          userId: user?.googleId,
          postedBy: {
            _type: 'postedBy',
            _ref: user?.googleId
          }
        }])
          .commit()
          .then(() => {
            window.location.reload()
        
          })
    }
  }

  const deletePin = (id) =>{
    client
    .delete(id)
    .then(() =>{
      window.location.reload();
    })
  }

  return (
    <PinContainer>
      <PinWrapper
      onMouseEnter= {() => setPostHovered(true)}
      onMouseLeave= {() => setPostHovered(false)}
      onClick={() => navigate(`/pin-details/${_id}`)}
      >
       <Image src ={urlFor(image).width(250).url()} alt='user-post' />
       {postHovered && (
        <PinLinkContainers>
          <PinLinkContainer>
            <PinLinkWrapper>
              <PinLink
              href={`${image?.asset?.url}?dl=`}
              download
              onClick={(e) => e.stopPropagation()}
              >
                <MdDownloadForOffline />
              </PinLink>
            </PinLinkWrapper>
            {alreadySaved ? (
      <Button>{save?.length} Saved</Button>
    ):( 
      <Button type='button' onClick={(e) => { e.stopPropagation(); savePin(_id) }}> Save</Button>
    )}
          </PinLinkContainer>
     { destination &&( 
      <PinDeleteContainer>
        <PinDeleteLink 
        href={destination} >
          <BsFillArrowUpRightCircleFill fontSize={20} style={{marginRight: '2px'}}/>
          {destination?.slice(0, 20)}
        </PinDeleteLink>
        {postedBy?._id === user?.googleId &&(
          <PinDeleteButton
          type="button"
          onClick={(e) => {
        e.stopPropagation()
        deletePin(_id);
      }} >
           <AiTwotoneDelete />
          </PinDeleteButton>
        )}
      </PinDeleteContainer>
      )}
        </PinLinkContainers>
       )}
      </PinWrapper>
      <UserProfileLink to={`user-profile/${postedBy?._id}`}>
        <ProfileImage src={postedBy?.image} alt='user-profile' />
        <Paragraph>{postedBy?.username}</Paragraph>
      </UserProfileLink>
    </PinContainer>
  )
}

export default Pin;
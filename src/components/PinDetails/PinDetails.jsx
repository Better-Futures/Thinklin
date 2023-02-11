import React, {useEffect, useState} from 'react';
import {MdDownloadForOffline} from 'react-icons/md';
import { Link, useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import {client, urlFor } from '../../client';
import {MasonryLayout, Spinner} from '..';
import { pinDetailMorePinQuery, pinDetailQuery } from '../../utils/data';
import { CommentButton, CommentContainer, CommentHeading, CommentImage, CommentInput, Comments, CreateCommentContainer, DownloadContainer, DownloadContainers, DownloadWrapper, Heading, MoreHeading, PinDetailsContainer, PinDetailsImage, PinDetailsLink, PinDetailsWrapper, PostedByContainer, PostedByParagraph, TextContainer, UserProfileLink } from './PinsDetails.elem';
import { Paragraph, PinLink, ProfileImage } from '../Pin/Pin.elem';

const PinDetails = ({user}) => {
    const [pins, setPins] = useState(null);
    const [pinDetails, setPinDetails] = useState(null);
    const [comment, setComment] = useState('');
    const [addingComment, setAddingComment] = useState(false);
    const { pinId } = useParams();
    
    const addComment = () => {
      if(comment){
        setAddingComment(true)
      client
      .patch(pinId)
      .setIfMissing({comments: []})
      .insert('after', 'comments[-1]', [{
         comment, 
        _key: uuidv4(),
        postedBy: {
          _type: 'postedBy',
          _ref: user._id

        }   
      }]) 
      .commit()
      .then(() => {
        fetchPinDetails();
        setComment('');
        setAddingComment(false);
      })
    }}
    
      const fetchPinDetails = () => {
        let query = pinDetailQuery(pinId);
        if(query){
          client.fetch(query)
            .then((data) => {
                setPinDetails(data[0])
              if(data[0]) {
                query =pinDetailMorePinQuery(data[0])
                .then((res) => {
                  setPins(res)
                })
              }
            })
        }
      }
    useEffect(() => {
      fetchPinDetails();

    }, [pinId]);
    
  if(!pinDetails) return <Spinner message='Loading pin...' />

  

  return (
    <>
    <PinDetailsContainer>
      <PinDetailsWrapper>
        <PinDetailsImage alt='user-post' src={pinDetails?.image && urlFor(pinDetails?.image).url()} />
      </PinDetailsWrapper>
      <DownloadContainers >
        <DownloadContainer>
          <DownloadWrapper>
          <PinLink
              href={`${pinDetails?.image?.asset?.url}?dl=`}
              download
              onClick={(e) => e.stopPropagation()}
              >
                <MdDownloadForOffline style={{fontSize: '100px'}} />
              </PinLink>
          </DownloadWrapper>
          <PinDetailsLink href={pinDetails.destination}>
              {pinDetails.destination}
          </PinDetailsLink>
          <TextContainer >
            <Heading>{pinDetails.title}</Heading>
            <Paragraph>{pinDetails.about}</Paragraph>
          </TextContainer>
          <UserProfileLink to={`user-profile/${pinDetails?.postedBy?._id}`}>
        <ProfileImage src={pinDetails?.postedBy?.image} alt='user-profile' />
        <Paragraph>{pinDetails?.postedBy?.username}</Paragraph>
      </UserProfileLink>
      <CommentHeading>Comments</CommentHeading>
      <CommentContainer>
        {pinDetails?.comments?.map((comment, i) => (
              <Comments key={i} >
                <CommentImage src={comment.postedBy.image} alt='user-profile' />
                <PostedByContainer>
                  <PostedByParagraph>{comment.postedBy.username}</PostedByParagraph>
                  <p>{comment.comment}</p>
                </PostedByContainer>
              </Comments>
        ))}
      </CommentContainer>
        </DownloadContainer>
        <CreateCommentContainer>
        <Link to={`user-profile/${pinDetails.postedBy?._id}`}>
        <ProfileImage src={pinDetails.postedBy?.image} alt='user-profile' />
      </Link>
      <CommentInput type='text' placeholder='Add a comment' value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <CommentButton type='button' onClick={addComment}> 
          {addingComment ? 'Posting the comment...': 'Post'}
      </CommentButton>
        </CreateCommentContainer>
      </DownloadContainers>
    </PinDetailsContainer>
    {pins?.length > 0 ? (
      <>
      <MoreHeading>
        More like this
      </MoreHeading>
      <MasonryLayout pins={pins} />
      </>
    ):(
    <Spinner message='Loading more pins...' />)}

    </>
  )
}

export default PinDetails
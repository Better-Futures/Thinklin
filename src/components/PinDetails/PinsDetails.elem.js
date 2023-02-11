import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const PinDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  background: #fff;
  max-width: 1500px;
  border-radius: 32px;
`;

export const PinDetailsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  @media screen and (max-width: 678px){
    align-items: initial;
  }
`;

export const PinDetailsImage = styled.img`
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  height: 70%;
`;

export const TextContainer = styled.div`

`;

export const DownloadContainers = styled.div`
  width: 100%;
  padding: 5px;
  flex: 1;
  min-width: 620px;
`;

export const DownloadContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

`;  

export const DownloadWrapper = styled.div`
  display: flex;
  margin-left: 2px;
  align-items: center;
  
`;  

export const PinDetailsLink = styled.a`
  color: #000;
  background: #aaa;
  width: fit-content;
  padding: 3px;
  border-radius: 3px;
  text-decoration: none;
  margin-top: 4px;
`;
export const Heading = styled.h1`
  font-size: x-large;
  font-weight: bold;
  word-break: keep-all;
  margin: 10px 0;

`;

export const Paragaph = styled.p`
  margin-top: 3px;
`;

export const UserProfileLink = styled(Link)`
  display: flex;
  margin-left: 2px;
  margin-top: 5px;
  align-items: center;
  background: #fff;
  color: #000;
  text-decoration: none;
  border-radius: 5px;
`;

export const CommentHeading = styled.h2`
  margin: 5px 0;
  font-size: x-large;
`;

export const CommentContainer = styled.div`
  max-height: 370px;
  overflow: auto;
`;

export const Comments = styled.div`
  display: flex;
  margin-bottom: 2px;
  margin-top: 5px;
  align-items: center;
  background: #fff;
  border-radius: 5px;
`;

export const CommentImage = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin-right: 6px;
  cursor: pointer;
  object-fit: cover;
`;

export const PostedByContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PostedByParagraph = styled.p`
  font-weight: bold;
  
`;

export const CreateCommentContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  margin-top: 10px;
  margin-bottom: 3px;
`;

export const CommentInput = styled.input`
  flex: 1;
  border: 2px solid gray;
  outline: none;
  width: 100px;
  margin: 0 10px;
  padding: 2px;
  border-radius: 10px;
  &:focus{
    border: 3px solid gray;
  }
`;

export const CommentButton = styled.button`
  background: #ff0000;
  color: #fff;
  border-radius: 5px;
  padding: 0 10px;
  font-weight: lighter;
  font-style: normal;
  outline: none;
  border: none;
`;

export const MoreHeading = styled.h3`
  text-align: center;
  font-weight: bold;
  font-size: xx-large;
  margin: 8px 0 4px 0;
`;
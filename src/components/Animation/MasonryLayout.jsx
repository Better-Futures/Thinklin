import React from 'react';
import Masonry from 'react-masonry-css';
import {Pin }from '..';
import styled from 'styled-components';

const Masonrys = styled(Masonry)`
  display: flex;
  transition: all ease-out;
`;

const MasonryLayout = ({pins}) => {
  const breakpointObj= {
    default: 4,
    3000: 6,
    2000: 5,
    1200: 3,
    1000: 2,
    500: 1
  }

  return (
    <Masonrys breakpointCols={breakpointObj}>
      {pins?.map((pin) => <Pin key={pin._id} pin={pin} style={{width: '100%'}}/> )}
    </Masonrys>
  )
}

export default MasonryLayout
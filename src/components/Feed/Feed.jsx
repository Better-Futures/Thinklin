import React, {useState, useEffect} from 'react';
import {  useParams } from 'react-router-dom';
import { client } from '../../client';
import { Spinner, MasonryLayout } from '..';
import { feedQuery, searchQuery } from '../../utils/data';

const Feed = () => {
  const [loading, setLoading] = useState(false);
  const [pins, setPins] = useState('');
  const { categoryId } = useParams();

 useEffect(() => {
  
    if(categoryId){
      setLoading(true);
      const query= searchQuery(categoryId) ;
      client.fetch(query)
        .then((data) => {
          setPins(data)
          setLoading(false)
        })
    }else{
        client.fetch(feedQuery)
        .then((data) =>{
          setPins(data)
          setLoading(false)
        })
    }    
  }, [categoryId]);

  if(loading) return <Spinner message ='We are adding new ideas to your feed'/>

    if(!pins?.length) return <h1>No pins avialable</h1>

  return (
    <>
    {pins && <MasonryLayout pins={pins} />}
    </>
  )
}

export default Feed
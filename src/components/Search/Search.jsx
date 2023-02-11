import React, {useState, useEffect} from 'react';
import {MasonryLayout, Spinner} from '..';
import {client} from '../../client';
import {feedQuery, searchQuery} from '../../utils/data';
import { SearchContainer } from './Search.elem';

const Search = ({searchTerm, setSearchTerm}) => {
  const [pins, setPins] = useState(null);
  const [loading, setLoading] = useState(false);

    useEffect(() => {
     if(searchTerm){
        setLoading(true);
        const query = searchQuery(searchTerm.toLowerCase());
        client.fetch(query)
        .then((data) => {
            setPins(data);
            setLoading(false)
        })
     }else{
        client.fetch(feedQuery)
        .then((data) => {
            setPins(data);
            setLoading(false)
        })
     }
    }, [searchTerm])
    

  return (
    <>
    {loading && <Spinner message='Searching for pins...' />}
    {pins?.length !== 0 && <MasonryLayout pins={pins} />}
    {pins?.length === 0 && searchTerm !== '' && !loading && <SearchContainer>
      No Pins
    </SearchContainer> }
    </>
  )
}

export default Search
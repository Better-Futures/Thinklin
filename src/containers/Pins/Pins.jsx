import React ,{useState} from 'react';
import { Route, Routes } from 'react-router';
import { Navbar, Feed,  Search, CreatePin, PinDetails } from '../../components';
import { PinsContainer, PinsWrapper, Routers } from './Pins.elem';

const Pins = ({user}) => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <PinsContainer>
      <PinsWrapper>
        <Navbar searchTerm={searchTerm} setSearchTerm= {setSearchTerm} user={user && user} />
     <Routers>
     <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/category/:categoryId" element={<Feed />} />
          <Route path="/pin-details/:pinId" element={<PinDetails user={user && user} />} />
          <Route path="/create-pin" element={<CreatePin user={user && user} />} />
          <Route path="/search" element={<Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />} />
        </Routes>
        </Routers>
      </PinsWrapper>
    </PinsContainer>
  )
}

export default Pins
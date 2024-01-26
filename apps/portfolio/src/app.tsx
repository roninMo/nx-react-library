import styled from '@emotion/styled';
import '../global.scss';
import { Navbar } from './components/navbar/navbar';
import { Home } from './components/home/home';
import { Projects } from './components/projects/projects';
import { Contact } from './components/contact/contact';
import { Routes, Route } from 'react-router-dom';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <StyledApp>
      <Navbar />
      
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="projects" element={<Projects />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </StyledApp>
  );
}

export default App;

/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { useEffect, useState, useContext, createContext } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import '../global.scss';
import styled from '@emotion/styled';
import { Home } from './main/home/home';
import { Navbar } from './main/navbar/navbar';
import { Login } from './authorization/login/login';
import { Signup } from './authorization/signup/signup';
import { User } from './user/User';
import { ProtectedRoute } from './authorization/protectedRoute/ProtectedRoute';
import { jwtDecode } from 'jwt-decode';
import axios from 'axios';

const StyledApp = styled.div`
  margin: 0;
  padding: 0;
`;

export interface User {
  id: number;
  username: string;
  name: string;
  email: string;
  website: string;
  phone: string;
  password: string;
  address?: {
    id: string;
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    country: string;
    lat: string;
    lng: string;
  };
}

export interface UserTokenInformation {
  name: string;
  username: string;
  email: string;
  id: number;

  iat: number;
  exp: number;
}

export interface LoginContextProps {
  accessToken?: string;
  userTokenInformation?: UserTokenInformation | null;
  setUserTokenInformation?: (value: UserTokenInformation | null) => void;
}
export const LoginContext = createContext<LoginContextProps>({});

export function App() {
  const navigation = useLocation();
  
  const [userTokenInformation, setUserTokenInformation] = useState<UserTokenInformation | null>(null);
  const [accessToken, setAccessToken] = useState<string>();

  useEffect(() => {
    console.log('\ninformation: ', { userTokenInformation, accessToken });
    if (!accessToken || !userTokenInformation) {
      getAccessToken();
    }
  }, [accessToken, userTokenInformation]);

  const getAccessToken = async () => {
      let token = localStorage.getItem('accessToken') || '';
      let tokenInformation: UserTokenInformation | null;

      if (token) {
        setAccessToken(token);
        tokenInformation = jwtDecode<UserTokenInformation>(token);
        setUserTokenInformation(tokenInformation);
        if (tokenInformation.email) {
          await axios.post(`http://localhost:3333/stillLoggedIn`, { accessToken: token })
            .then(res => {
              console.log('user still logged in response: ', res);
              if (res.status !== 200) {
                localStorage.setItem('accessToken', '');
                tokenInformation = null;
                token = '';
              }
              
              setUserTokenInformation(tokenInformation);
              setAccessToken(token);
              return;
            }).catch(err => console.log('something happened while trying to access the server!', err));
        }
      }
  };

  return (
    <StyledApp>
      <LoginContext.Provider value={{accessToken, userTokenInformation, setUserTokenInformation}}>
        <Navbar />

        <Routes>
          <Route path="Login" element={<Login accessToken={accessToken} setAccessToken={setAccessToken} setUser={setUserTokenInformation} />} />
          <Route path="Signup" element={<Signup accessToken={accessToken} setAccessToken={setAccessToken} setUser={setUserTokenInformation} />} />
          <Route path="User" element={
            <ProtectedRoute accessToken={accessToken} path='/'>
              <User />
            </ProtectedRoute>
          } />
          <Route path="*" element={<Home />} />
        </Routes>
      </LoginContext.Provider>
      <div className="h-64"></div>
    </StyledApp>
  );
}

export default App;

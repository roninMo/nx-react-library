/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Link, useNavigate } from "react-router-dom";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Button, Input } from "@nx-react-library/Components";
import axios from "axios";
import { User, UserTokenInformation } from '../../app';
import { jwtDecode } from "jwt-decode";

export interface LoginProps {
  accessToken: string | undefined;
  setAccessToken: Dispatch<SetStateAction<string | undefined>>;
  setUser: Dispatch<SetStateAction<UserTokenInformation | null>>;
}

export const Login = ({accessToken, setAccessToken, setUser}: LoginProps) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loginDisabled, setLoginDisabled] = useState<boolean>(false);

  const login = async () => {
    if (!email || !password) {
      return;
    }

    const loginInformation = { email, password };
    await axios.post<{ token: string, userId: number }>(`http://localhost:3333/login`, loginInformation)
      .then(async res => {
        console.log('login user response', { res, loginInformation });
        
        if (res.status === 200) {
          const userId = res.data.userId;
          const accessToken = res.data.token;
          if (accessToken) {
            setAccessToken(accessToken);
            localStorage.setItem('accessToken', accessToken);
            
            const tokenInformation = jwtDecode<UserTokenInformation>(accessToken);
            setUser(tokenInformation);
            navigate('/user');
            console.log('access token: ', {accessToken, tokenInformation});
          }
  
          setEmail('');
          setPassword('');
          setLoginDisabled(false);
        } else {
          console.log('the password was incorrect');
        }
      }).catch(err => {
        console.log('something happened while trying to access the server', err);
      });
  };

  return(

    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 pt-40">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img className="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company" />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">Sign in to your account</h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <div className="py-4">
          <Input
            label="Email address"
            name="email"
            value={email}
            onValueChanged={setEmail}
            id="userEmail"
            autocomplete="email"
            type="email"
            required
          />
        </div>

        <div className="py-4">
          <Input
            label="Password"
            name="password"
            value={password}
            onValueChanged={setPassword}
            id="userPassword"
            autocomplete="password"
            type="password"
            required
          />
        </div>

        <div className="py-4">
          <Button 
            disabled={loginDisabled}
            label="Sign in"
            onClicked={login}
          />
        </div>

        <p className="mt-4 text-center text-sm text-gray-400">
          Not a member? &nbsp;
          <Link to="/" className="font-semibold leading-6 text-indigo-400 hover:text-indigo-300">
            Start a 14 day free trial 
          </Link>
        </p>
      </div>
    </div>



  );
}

/* eslint-disable @typescript-eslint/no-unused-vars */
import { Input } from "@nx-react-library/Components";
import { Dispatch, SetStateAction, useState } from "react";
import { UserTokenInformation } from "../../app";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

interface Inputs {
  username: string;
  about?: string;
  emailAddress: string;
  firstName: string;
  lastName: string;
  country?: string;
  streetAddress: string;
  city: string;
  region: string;
  zipcode: string;
}

const validations = yup.object().shape({
  username: yup.string().required(),
  about: yup.string(),
  emailAddress: yup.string().email().required(),
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  country: yup.string(),
  streetAddress: yup.string().required(),
  city: yup.string().required(),
  region: yup.string().required(),
  zipcode: yup.string().required()
});


export interface SignupProps {
  accessToken: string | undefined;
  setAccessToken: Dispatch<SetStateAction<string | undefined>>;
  setUser: Dispatch<SetStateAction<UserTokenInformation | null>>;
}

export const Signup = ({setAccessToken, setUser}: SignupProps) => {
  const { register, handleSubmit, control, formState, setError, clearErrors, setValue } = useForm<Inputs>({
    resolver: yupResolver(validations),
  });



  const [username, setUsername] = useState<string>('');
  const [about, setAbout] = useState<string>('');
  
  const [emailAddress, setEmailAddress] = useState<string>('');
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  
  const [country, setCountry] = useState<string>('');
  const [streetAddress, setStreetAddress] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [region, setRegion] = useState<string>('');
  const [zipcode, setZipcode] = useState<string>('');

  const SignUp = () => {


  };

  

  return(
    <div className="mx-auto max-w-6xl mt-24 px-4 sm:px-12 lg:px-14">
      <div className="space-y-12">
        <div className="border-b border-white/10 pb-12">
          <h2 className="text-2xl py-2 font-semibold leading-7 text-white">Sign up</h2>
          <p className="mt-1 text-sm leading-6 text-gray-400">Create an account to store your user information</p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <Input
                label="Username"
                id="signUp_Username"
                name="username"
                placeholder="username"
                autocomplete="name"
                value={username}
                onValueChanged={setUsername}
              />
            </div>

            <div className="col-span-full">
              <label htmlFor="about" className="block text-sm font-medium leading-6 text-white">About</label>
              <div className="mt-2">
                <textarea
                  id="about"
                  name="about"
                  rows={3}
                  className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6">
                </textarea>
              </div>
              <p className="mt-3 text-sm leading-6 text-gray-400">Write a few sentences about yourself.</p>
            </div>

            <div className="col-span-full">
              <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-white">Cover photo</label>
              <div className="mt-2 flex justify-center rounded-lg border border-dashed border-white/25 px-6 py-10">
                <div className="text-center">
                  <svg className="mx-auto h-12 w-12 text-gray-500" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z" clipRule="evenodd" />
                  </svg>
                  <div className="mt-4 flex text-sm leading-6 text-gray-400">
                    <label htmlFor="file-upload" className="relative cursor-pointer rounded-md bg-gray-900 font-semibold text-white focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 focus-within:ring-offset-gray-900 hover:text-indigo-500">
                      <span>Upload a file</span>
                      <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs leading-5 text-gray-400">PNG, JPG, GIF up to 10MB</p>
                </div>
              </div>
            </div>
          </div>
        </div>




        <div className="border-b border-white/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-white">Personal Information</h2>
          <p className="mt-1 text-sm leading-6 text-gray-400">Use a permanent address where you can receive mail.</p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <Input
                label="First name"
                id="signUp_FirstName"
                name="firstName"
                placeholder=""
                autocomplete="given-name"
                value={firstName}
                onValueChanged={setFirstName}
              />
            </div>

            <div className="sm:col-span-3">
              <Input
                label="Last name"
                id="signUp_LastName"
                name="lastName"
                placeholder=""
                autocomplete="family-name"
                value={lastName}
                onValueChanged={setLastName}
              />
            </div>

            <div className="sm:col-span-4">
              <Input
                label="Email"
                id="signUp_Email"
                name="email"
                placeholder=""
                autocomplete="email"
                value={emailAddress}
                onValueChanged={setEmailAddress}
              />
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="country" className="block text-sm font-medium leading-6 text-white">Country</label>
              <div className="mt-2">
                <select id="country" name="country" autoComplete="country-name" className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6 [&_*]:text-black">
                  <option>United States</option>
                  <option>Canada</option>
                  <option>Mexico</option>
                </select>
              </div>
            </div>

            <div className="col-span-full">


              <Input
                label="Street address"
                id="signUp_StreetAddress"
                name="streetAddress"
                placeholder=""
                autocomplete="street-address"
                value={streetAddress}
                onValueChanged={setStreetAddress}
              />
            </div>

            <div className="sm:col-span-2 sm:col-start-1">
              <Input
                label="City"
                id="signUp_City"
                name="city"
                placeholder=""
                autocomplete="address-level2"
                value={city}
                onValueChanged={setCity}
              />
            </div>

            <div className="sm:col-span-2">
              <Input
                label="State / Province"
                id="signUp_State"
                name="state"
                placeholder=""
                autocomplete="address-level1"
                value={region}
                onValueChanged={setRegion}
              />
            </div>

            <div className="sm:col-span-2">
              <Input
                label="ZIP / Postal code"
                id="signUp_Zipcode"
                name="zipcode"
                placeholder=""
                autocomplete="postal-code"
                value={zipcode}
                onValueChanged={setZipcode}
              />
            </div>
          </div>
        </div>
      </div>

    
      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button type="button" className="text-sm font-semibold leading-6 text-white">Cancel</button>
        <button type="submit" className="rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Save</button>
      </div>
    </div>
  );
}

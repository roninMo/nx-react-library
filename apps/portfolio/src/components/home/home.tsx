import { useEffect, useState } from "react";
import "./home.scss";
import { Link } from "react-router-dom";



export const Home = () => {
  const [styles, setStyles] = useState('home-hidden');
  useEffect(() => {
    setStyles('home');
  }, []);

  return(
    <div className={"mx-auto max-w-7xl mt-36 mb-20 px-4 sm:px-6 lg:px-8 " + styles}>
      <div className="flex flex-col justify-between items-center">
        {/* header */}
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-slate-300 sm:text-4xl">Kieran Schwegman</p>
          <p className="mt-4 text-lg leading-8 text-slate-500">I'm a creative developer that enjoys building complex things for fun</p>
        </div>

        {/* introduction */}
        <div className="mt-4 mb-12 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-12 pt-20">
          <div className="col-span-12 md:col-span-6 py-4 px-2 flex flex-col sm:flex-row hover:bg-slate-800 rounded-md transition-all duration-200 ease-in-out">
            <div className="flex align justify-center items-center h-10 w-10 mx-4 mb-4 rounded-lg bg-blue-500">
              <div className="flex justify-center items-center h-10 w-10">
                <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
                </svg>
              </div>
            </div>
            <div className="flex flex-col justify-start">
              <div className="font-semibold text-slate-300">Fullstack Development</div>
              <div className="mt-2 text-slate-500">Any framework or tech stack that's required for the project we're building. I mainly have experience in Typescript on the client side, and numerous different backends</div>
            </div>
          </div>
          
          <div className="col-span-12 md:col-span-6 py-4 px-2 flex flex-col sm:flex-row hover:bg-slate-800 rounded-md transition-all duration-200 ease-in-out">
            <div className="flex align justify-center items-center h-10 w-10 mx-4 mb-4 rounded-lg bg-blue-500">
              <div className="flex justify-center items-center h-10 w-10">
                <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                </svg>
              </div>
            </div>
            <div className="flex flex-col justify-start">
              <div className="font-semibold text-slate-300">Restful Apis and Database Management</div>
              <div className="mt-2 text-slate-500">Sql/No Sql database management deployed to the cloud securely and safely</div>
            </div>
          </div>
          
          <div className="col-span-12 md:col-span-6 py-4 px-2 flex flex-col sm:flex-row hover:bg-slate-800 rounded-md transition-all duration-200 ease-in-out">
            <div className="flex align justify-center items-center h-10 w-10 mx-4 mb-4 rounded-lg bg-blue-500">
              <div className="flex justify-center items-center h-10 w-10">
                <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                </svg>
              </div>
            </div>
            <div className="flex flex-col justify-start">
              <div className="font-semibold text-slate-300">Devops and Pipeline Deployments</div>
              <div className="mt-2 text-slate-500">I have experience building cloud architecture and automated deployments across multiple platforms from database creation, restful apis and authentication, and automating the process </div>
            </div>
          </div>
          
          <div className="col-span-12 md:col-span-6 py-4 px-2 flex flex-col sm:flex-row hover:bg-slate-800 rounded-md transition-all duration-200 ease-in-out">
            <div className="flex align justify-center items-center h-10 w-10 mx-4 mb-4 rounded-lg bg-blue-500">
              <div className="flex justify-center items-center h-10 w-10">
                <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7.864 4.243A7.5 7.5 0 0119.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 004.5 10.5a7.464 7.464 0 01-1.15 3.993m1.989 3.559A11.209 11.209 0 008.25 10.5a3.75 3.75 0 117.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 01-3.6 9.75m6.633-4.596a18.666 18.666 0 01-2.485 5.33" />
                </svg>
              </div>
            </div>
            <div className="flex flex-col justify-start">
              <div className="font-semibold text-slate-300">Best Practices and Design Patterns</div>
              <div className="mt-2 text-slate-500">Learned some best practices and design patterns for different problems that need to be handled, and I've taken part in many innovative teams with different ways of handling similar things</div>
            </div>
          </div>
        </div>


        {/* links */}
        <div className="flex justify-center gap-10 py-4">
          <Link to="/projects" className="text-sm text-slate-400 hover:bg-gray-700 hover:text-blue-500 rounded-md px-3 py-2 transition duration-200 ease-in-out">Link to my past projects</Link>
          <Link to="/contact" className="text-sm text-slate-400 hover:bg-gray-700 hover:text-blue-500 rounded-md px-3 py-2 transition duration-200 ease-in-out">Contact information</Link>
        </div>
      </div>
    </div>
  );
}
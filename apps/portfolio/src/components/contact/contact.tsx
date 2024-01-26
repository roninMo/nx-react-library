import { useState, useEffect } from "react";
import './contact.scss';

export const Contact = () => {
  const [styles, setStyles] = useState('contact-hidden');
  useEffect(() => {
    setStyles('contact');
  }, []);

  return (
    <div className={"mx-auto max-w-7xl mt-36 mb-20 px-4 sm:px-6 lg:px-8 " + styles}>
      <div className="flex flex-col justify-between items-center">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="mt-2 pb-12 text-3xl font-bold tracking-tight text-slate-300 sm:text-4xl">Kieran Schwegman</p>
          
          <div className="flex justify-between gap-10 text-lg">
            <p className="mt-4 text-lg text-slate-500 hover:bg-gray-700 hover:text-blue-500 rounded-md px-3 py-2 transition duration-200 ease-in-out">
              <a href="https://www.linkedin.com/in/kieran-schwegman/">LinkedIn</a>
            </p>

            <p className="mt-4 text-lg text-slate-500 hover:bg-gray-700 hover:text-blue-500 rounded-md px-3 py-2 transition duration-200 ease-in-out">
              <span className="text-slate-400">Phone:</span> &nbsp;
              <a href="tel:317-908-2517">317-908-2517</a>
            </p>

            <p className="mt-4 text-lg text-slate-500 hover:bg-gray-700 hover:text-blue-500 rounded-md px-3 py-2 transition duration-200 ease-in-out">
              <span className="text-slate-400">Email:</span> &nbsp; 
              <a href="mailto:schwegmank@gmail.com">schwegmank@gmail.com</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

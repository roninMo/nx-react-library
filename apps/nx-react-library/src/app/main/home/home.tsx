import { Link } from "react-router-dom";


export const Home = () => {


  return (
    <div className="relative isolate overflow-hidden mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-10">
      <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">
        <h1 className="mt-10 text-2xl font-bold tracking-tight text-slate-200 sm:text-4xl">User information</h1>
        <p className="mt-6 text-lg leading-8 text-slate-400">
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
        </p>
        
        <div className="mt-10 flex items-center gap-x-6">
          <Link 
            to="/Login" 
            className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 
            focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
          >
            Login
          </Link>
          
          
          <Link 
            to="/Signup" 
            className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 
            focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
          >
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};

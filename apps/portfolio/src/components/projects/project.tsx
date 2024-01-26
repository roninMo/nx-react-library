import { useState, useEffect } from "react";
import { ProjectInformation } from "./projects";

export interface ProjectProps { 
  linkUrl?: string, 
  link?: string, 
  deployedUrl?: string,
  deployed?: string,
  classStyles?: string, 
  loading?: boolean, 
  index?: number 
};

export const Project = ({
  duration,
  title,
  description,
  responsibilities,
  classStyles = '',
  imageUrl,
  imageAlt,
  deployed,
  deployedUrl,
  linkUrl,
  link,
  loading,
  index = 0,
}: ProjectInformation & ProjectProps) => {
  const [styles, setStyles] = useState(`${classStyles}-hidden`);
  
  useEffect(() => {
    setTimeout(() => {
      setStyles(classStyles);
    }, index * 400);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  if (loading) {
    return <ProjectTemplate />;
  }
  
  const openLinkInNewTab = () => {
    window.open(linkUrl);
  }

  const openDeployedLinkInNewTab = () => {
    window.open(deployedUrl);
  }

  return(
    <div className={'col-span-12 md:col-span-6 flex gap-10 mb-12 ' + styles}>
      <div className="flex justify-center pt-1 mt-10 project-image">
        <div>
          <img src={imageUrl || "../../../public/project.png"} alt={imageAlt || 'Project'}></img>
        </div>
      </div>
      
      <div className="flex flex-col justify-center project-description">
        <h4 className="mt-2 p-2 pb-0 text-sm text-slate-500">
          { duration }
        </h4>
        <h2 className="pt-0 p-2 text-2xl text-slate-200">
          { title }
        </h2>
        <div className="mt-2 p-2 text-md">
          { description }
        </div>

        {responsibilities && (
          <div className="mt-2 p-2 text-md">
            <span className="text-slate-300">Responsibilities: </span>
            <ul className="project-responsibilities">
              {responsibilities.map((responsibility, responsibilityIndex) => 
                <li key={`responsibility-${index}-${responsibilityIndex}`}>{ responsibility }</li>
              )}
            </ul>
          </div>
        )}

        {link && (
          <div className="text-md">
            <button onClick={openLinkInNewTab} className="text-sm text-blue-500 hover:bg-gray-700 hover:text-blue-500 rounded-md px-3 py-2 transition duration-200 ease-in-out">
              { link }
            </button>
          </div>
        )}
        
        {deployed && (
          <div className="text-md">
            <button onClick={openDeployedLinkInNewTab} className="text-sm text-blue-500 hover:bg-gray-700 hover:text-blue-500 rounded-md px-3 py-2 transition duration-200 ease-in-out">
              { deployed }
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export const ProjectTemplate = () => {
  return(
    <div className='col-span-12 md:col-span-6 flex gap-10 mb-12'>
      <div className="flex justify-center items-center py-2 mt-4 mb-12 rounded-md border border-dashed border-slate-700 project-image">
        <div>
          <svg className="mx-auto h-12 w-12 text-gray-500" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z" clipRule="evenodd" />
          </svg>
        </div>
      </div>
      
      <div className="flex flex-col justify-center project-description">
        <h4 className="p-2 pl-0 mt-2">
          <div className="w-1/3 rounded-xl loading">&nbsp;</div>
        </h4>
        <h2 className="p-2 pl-0">
          <div className="rounded-xl loading">&nbsp;</div>
        </h2>
        <div className="mt-6 text-md">
          <div className="h-32 rounded-xl loading">&nbsp;</div>
        </div>

        <div className="mt-4 p-1 text-md">
          <div className="w-1/4 rounded-xl loading">&nbsp;</div>
          <ul className="project-responsibilities">
            <div className="mt-2 ml-6 rounded-xl loading">&nbsp;</div>
            <div className="mt-2 ml-6 rounded-xl loading">&nbsp;</div>
            <div className="mt-2 ml-6 rounded-xl loading">&nbsp;</div>
          </ul>
        </div>
        
      </div>
    </div>
  );
}
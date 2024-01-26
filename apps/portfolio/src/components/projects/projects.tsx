/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import './projects.scss';
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { Project, ProjectProps } from './project';
import { Contact } from '../contact/contact';

export interface ProjectInformation {
  duration: string;
  title: string;
  description: string;
  responsibilities?: string[];
  imageUrl?: string;
  imageAlt?: string;
}

export const Projects = () => {
  const [projects, setProjects] = useState<ProjectInformation[]>(workExperience);
  const [sideProjects, setSideProjects] = useState<ProjectInformation[]>([]);
  const [sideProjectsState, setSideProjectsState] = useState<"error" | "loading" | null>(null);
  
  const loadProjects = () => {
    setSideProjects(otherProjects);
    setSideProjectsState("loading");
    setTimeout(() => {
      setSideProjectsState(null);
    }, 1000);
  };

  return (
    <div className="mx-auto max-w-7xl mt-36 mb-20 px-4 sm:px-6 lg:px-8">

      <div className="flex flex-col justify-between">
        <h1 className="mb-4 pt-3 text-3xl text-slate-200">Work Experience</h1>

        {projects.map((project, index) =>
          <Project 
            duration={project.duration}
            classStyles='project'
            title={project.title}
            description={project.description}
            responsibilities={project.responsibilities}
            imageUrl={project.imageUrl}
            index={index}
            key={`workExperience-${index}`}
          />
        )}
      </div>




      <div className="flex justify-center pb-4 pt-64">
        <button onClick={loadProjects} className="px-4 py-2 bg-gray-800 hover:bg-gray-700 hover:text-indigo-400 rounded-md text-md font-semibold text-slate-500 transition duration-200 ease-in-out">
          Link to my past projects
        </button>
      </div>

      <div className="flex flex-col justify-between">
        <h1 className="mb-4 text-3xl text-slate-200">Other Projects</h1>
        
        {sideProjects.map((project: any, index) => 
          <Project 
            duration={project.duration}
            title={project.title}
            description={project.description}
            responsibilities={project.responsibilities}
            imageUrl={project.imageUrl}
            deployed={project.deployed}
            deployedUrl={project.deployedUrl}
            link={project.link}
            linkUrl={project.linkUrl}
            index={index}
            key={`workExperience-${index}`}
            loading={sideProjectsState === 'loading' ? true : false}
          />
        )}
      </div>




      <div className="flex justify-center pb-4 pt-64">
        <div className="flex">
          <h1 className="mb-4 pt-3 text-3xl text-slate-200">Other Works</h1>
        </div>
      </div>

      <div className="flex flex-col justify-between">
        
        <Project 
            duration=""
            title="Game Development"
            description="I like to develop and build projects on the side, and have experience in Unity, Unreal, Godot, and other scripting languages for modding games. The last couple years I've been learning and building in Unreal for multiplayer games. Learning how to handle player movement, inventory and interaction, both fps and souls like combat, to anything that really needs to get done. This ended up taking a lot more effort than I thought it would, and I've branched out into Level Design, Character development, modular building, and anything that helps with my projects. It's been a fun while, and I really enjoy it"
            responsibilities={[
              'Multiplayer Development / Movement Mechanics / FPS and Melee Combat / Inventory / Interaction',
              'Substance Designer / Substance Painter / Blender / Maya / SpeedTree / Houdini / Cascadeur'
            ]}
            imageUrl=""
            link="Source Code"
            linkUrl="https://github.com/roninMo"
          />
      </div>



      <div className="flex justify-center pb-4 pt-64">
        <div className="flex">
          <h1 className="mb-4 pt-3 text-3xl text-slate-200">Contact Information</h1>
        </div>
      </div>

      <div className="mx-auto max-w-2xl lg:text-center">
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























      {/* <div className={'col-span-12 md:col-span-6 flex gap-10 ' + styles}>
        <div className="flex justify-center items-end pt-5 project-image">
          <div>
            <img src="../../../public/project.png" alt="Project"></img>
          </div>
        </div>
        
        <div className="flex flex-col justify-center project-description">
          <h4 className="mt-2 p-2 text-sm text-slate-400">
            Jul 2022 - Aug 2023 (1 year 2 months)
          </h4>
          <h2 className="p-2 text-2xl text-slate-300">
            Liberty Mutual Insurance
          </h2>
          <div className="mt-2 p-2 text-md">
            Full Stack Software Engineer - Helping build the IA quoting platform for agents. I built the front infrastructure for creating home quotes and helped with the business logic on the backend. This was built in Angular with our own custom forms for validating quote information on the backend while the user created a quote. The server side was built in C# with the Orleans framework in place, and we automated and deployed everything separately. We only had a couple guys on our team, so the majority of the work was divided between everyone. The team made it fun, and I got to learn some of the best design patterns for angular and .net while deciphering old business logic that was already in place.
          </div>
          <div className="mt-2 p-2 text-md">
            Responsibilities:
            <ul className="project-responsibilities">
              <li>Backend: .Net / Orleans / Bamboo / Test Automation / Routing / Migration / Clustering </li>
              <li>Frontend: Angular / Redux / Cypress / Rxjs / Nx / Playwright / Azure Devops Deployment </li>
              <li>Handling building the quoting platform for agents for home and helping auto documenting and designing best practices </li>
            </ul>
          </div>
        </div>
      </div> */}


      {/* <div className={'col-span-12 md:col-span-6 flex flex-col ' + styles}>
        <div className="mt-2 p-2 text-lg text-slate-400">
        Demo full stack project
        </div>
        <h1 className="p-2 text-xl text-slate-300">
          OLTP Database to Node & Express Back end with Angular on the Front
        </h1>
        <div className="mt-2 p-2 text-md">
        I built a full stack app for an insurance company through freelancing at Upwork to manage all their client information safely in the cloud. The database and server will be hosted through AWS services. The specific database type I'm creating is OLTP with a MySQL database. I'm creating a server with Nodejs and Express, and have all the respective controllers and routing are specific to the queries needed to handle the different client data. The framework is Angular with constant user stories to create, tweak and edit all the components for their platform. I'm gonna host a local version via firebase and give that to them.
        </div>
        <div className='mt-2'>
          <Link to="/" className="text-sm text-blue-500 hover:bg-gray-700 hover:text-blue-300 p-2 rounded-md transition duration-200 ease-in-out">
            Source code
          </Link>
        </div>
      </div> */}
    </div>
  );
}


const workExperience: ProjectInformation[] = [
  {
    duration: 'Jul 2022 - Aug 2023 (1 year 2 months)',
    title: 'Liberty Mutual Insurance',
    description: 'Full Stack Software Engineer - Helping build the IA quoting platform for agents. I built the front infrastructure for creating home quotes and helped with the business logic on the backend. This was built in Angular with our own custom forms for validating quote information on the backend while the user created a quote. The server side was built in C# with the Orleans framework in place, and we automated and deployed everything separately. We only had a couple guys on our team, so the majority of the work was divided between everyone. The team made it fun, and I got to learn some of the best design patterns for angular and .net while deciphering old business logic that was already in place.',
    responsibilities: [
      'Backend: .Net / Orleans / Bamboo / Test Automation / Routing / Migration / Clustering',
      'Frontend: Angular / Redux / Cypress / Rxjs / Nx / Playwright / Azure Devops Deployment',
      'Handling building the quoting platform for agents for home and helping auto documenting and designing best practices'
    ],
    imageUrl: '/public/liberty_mutual_insurance.jpg'
  },
  {
    duration: 'Nov 2020 - Jun 2022 (1 year 8 months)',
    title: 'State Auto Insurance',
    description: 'I started as an intern helping PC Agg with the Bookroll team that handled routing business rules to different companies across State Auto. I gained experience React and AWS infrastructure and deployments while I helped with the codebase. Almost a year into working I then joined the DCX Team, and was one of the Software Engineers for building the quoting platform for Agents at State Auto. It was built in react, with our backend hosted and deployed in AWS using Sam. From routing agent information to the backend to building best practices in react, and other common practices in place to create complex applications for our clients',
    responsibilities: [
      'Backend: AWS / Cloud Development Kit / Sam / Api Gateways / MongoDb',
      'Frontend: React / Redux / Cypress / Logging / Automated Deployments',
      'Everything from building and automating deployments to handling complex tasks for user experience'
    ],
    imageUrl: '/public/state_auto_insurance.jpg'
  },
  {
    duration: 'Jul 2019 - Apr 2019 (8 months)',
    title: 'DemandJump',
    description: 'DemandJump is one of the fastest growing startup companies in the Midwest with an award-winning, AI-powered marketing platform that consumes all consumer behavior, competitive, and marketing data for a company and recommends action to improve sales.',
    responsibilities: [
      "Worked on different front end components in Angular, then in Ruby; Main contributor in all aspects of DemandJump's full stack Research & Development engineering efforts. Wrote multiple custom visualizations in D3, JavaScript and LookML. Developed numerous backend API integrations and data storage applications.",
      'Backend Api integrations for data analytics from APIs such as Google and Bing. Data went to AWS or ETL then to Snowflake databases.',
      'Created and managed all our visuals for our platform through Looker. Including the graphs/ visualizations for some of our products'
    ],
    imageUrl: '/public/demandJump.jpg'
  }
];

const otherProjects: any[] = [
  {
    title: 'Angular shared store',
    description: "A fullstack project built with redux and custom forms for handling client and server side validations, and to learn different design patterns for passing information to and from the backend",
    responsibilities: [
      'Backend: Express, SQL, objection',
      'Frontend: Angular / Redux / Cypress / Rxjs / Nx / Playwright / Azure Devops Deployment',
    ],
    link: 'Source Code',
    linkUrl: 'https://github.com/roninMo/shared-store'
  },
  {
    title: 'React Authentication and user information database',
    description: "A fullstack project built with react that let's you access user information once you've authenticated. This was just for learning different ways to handle jwt authentication for express and how to handle data securely",
    responsibilities: [
      'Backend: Express, jwt, objection, SQL',
      'Frontend: React / React Hook Forms',
    ],
    link: 'Source Code',
    linkUrl: 'https://github.com/roninMo/nx-react-library'
  },

  {
    title: 'Angular with OLTP Database to Node & Express Back end',
    description: "Full stack app for insurance companies to manage all their client information safely in the cloud. I'm creating an OLTP with a MySQL database with Express, while playtesting different queries for routing information to the client side. The framework is Angular to handle building the frontend dynamically",
    link: 'Source Code',
    linkUrl: 'https://github.com/roninMo/Client-Demo-Server',
    imageUrl: '/public/InsureChoices.png'
  },
  
  {
    title: 'Angular with a Studio Ghibli backend',
    description: "This project was something I built when I was first learning angular and it's one of my favorites. It accesses the information on the backend and has different components for handling rendering the information on the frontend safely with routing, guards, and safety precautions in place for the devs",
    link: 'Source Code',
    linkUrl: 'https://github.com/roninMo/Studio-Ghibli-Site-Client',
    deployed: 'Hosted and deployed site',
    deployedUrl: 'https://studioghibliapi-66d2a.web.app/home/films',
    imageUrl: '/public/StudioGhibliAngularSite.png'
  },

  {
    title: 'Vue, Axios, Node, Vuetify',
    description: "A project that's built in Vue to learn how to build in that framework and how they structure everything compared to React. It's connected to a backend for routing information to the front",
    link: 'Source Code',
    linkUrl: 'https://github.com/roninMo/vueRestfulApi',
    deployed: 'Hosted and deployed site',
    deployedUrl: 'https://vue-api-sprint-kieran-schweggyman.netlify.app/#/'
  },
  
  {
    title: 'Postgres, Express, Sequelize ORM, React, and Node',
    description: "A project I built in React to get a better understanding of handling routing the backend information with SQL and Object Relational Model mappings",
    link: 'Source Code',
    linkUrl: 'https://github.com/roninMo/rick-and-morty-review-server',
  },
  
  {
    title: 'Postgres, Express, MySQL Queries, React, and Node',
    description: "A project I built a while ago while learning how to build and route backend information to the client side safely",
    link: 'Source Code',
    linkUrl: 'https://github.com/roninMo/Pern-Stack-Server',
  },
];


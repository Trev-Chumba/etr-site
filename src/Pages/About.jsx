//import { useState } from 'react';
import { Link } from 'react-router-dom';
import Projects from './../assets/Projects.json';
import { Helmet } from 'react-helmet-async';
import { Contact } from '../home/Contact';
import { motion } from 'framer-motion';

export function About() {
  //   const [fade, setFade] = useState(false);
  return (
    <div className="flex w-full  flex-col pl-5 pr-5">
      <Helmet>
        <title>About Me</title>
        <meta
          name="description"
          content="Trevor Chumba is a front-end developer passionate about creating user-friendly, modern interfaces."
        />
        <meta
          name="keywords"
          content="Trevor Chumba, Frontend Developer, UI/UX, React, JavaScript, Portfolio"
        />
        <meta name="author" content="Trevor Chumba" />
        <link rel="icon" href="/my-logo.svg" />
      </Helmet>
      <div className="mt-10 flex lg:w-2/3 lg:flex-row lg:justify-bettween md:justify-between  flex-col pl-5 pr-5 mx-auto">
        <div>
          <img
            src="/profile-avatar.svg"
            alt="profile image"
            className="lg:w-96 w-64 lg:h-auto h-96 md:w-72 
             rounded-md shadow-lg shadow-stone-300 dark:shadow-stone-950"
          />
        </div>
        <div className="md:ml-2 w-2/3">
          <FadeInDown>
            <h1 className="font-bold text-4xl mb-3 ">
              Hello, My name is Trevor a developer based in Kenya🇰🇪!
            </h1>
          </FadeInDown>
          <FadeInUp>
            <p className="text-lg mb-3">
              I love making user friendly interfaces that are simple, clear and
              still modern. This site is an example with an e-commerce site made
              side by side.
            </p>

            <p className="text-lg mb-3">
              I studied at the University of Nairobi and later worked at Kenya
              Revenue of Authority of 2 years as a software developer working on
              various mobile and web based applications.
            </p>
            <p className="text-lg mb-3">
              In those projects I have been able to work on small and large
              scale applications that require very levels of supervision whie
              working with various leveles of users. This has shaped me to be
              flexible, timely and collaborative.
            </p>
          </FadeInUp>
        </div>
      </div>
      <div className="flex flex-col lg:w-2/3 lg:mx-auto justify-evenly ml-2 mt-24">
        <div>
          <h1 className="text-2xl font-bold">Projects</h1>
          <h2 className="text-lg font-normal">Side projects in the work</h2>
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8 mt-4">
          {Projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
        <div className="mt-4">
          <h1 className="text-2xl font-bold">Email Me</h1>
          <Contact />
        </div>
      </div>
    </div>
  );
}

const ProjectCard = ({ title, description, link, local }) => {
  return (
    <div
      className="w-full max-w-3xl rounded-2xl p-4 flex flex-col sm:flex-row 
                    items-center justify-between bg-gray-100 dark:bg-[var(--overlay-color)] shadow-md"
    >
      <div className="text-center sm:text-left">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          {title}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          {description}
        </p>
      </div>
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 sm:mt-0 px-4 py-2 bg-blue-600 text-white 
                     rounded-lg text-sm hover:bg-blue-700 transition"
        >
          View Challenge
        </a>
      )}
      {local && (
        <Link
          to={local}
          className="mt-3 sm:mt-0 px-4 py-2 bg-blue-600 text-white 
                     rounded-lg text-sm hover:bg-blue-700 transition"
        >
          Here
        </Link>
      )}
    </div>
  );
};

const FadeInDown = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.95 }}
    >
      {children}
    </motion.div>
  );
};
const FadeInUp = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.95 }}
    >
      {children}
    </motion.div>
  );
};

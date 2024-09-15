"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { SiGithub } from "react-icons/si";
import { RiLiveLine } from "react-icons/ri";

const Projects = () => {
  const projects = [
    {
      img: "/image/EcommerceStore.png",
      title: "E-commerce Store",
      description: "A full stack E-commerce store",
      stack: "MERN Stack",
      github: "https://github.com/chinmayGhadigaonkar/E-Commerce-Store",
      live: "",
    },
    {
      img: "/image/ChatApp.png",
      title: "Chat App",
      description: "A full stack Chat App  ",
      stack: "MERN Stack, Socket Io",
      github: "https://github.com/chinmayGhadigaonkar/Chat-App-Frontend",
      live: "https://chat-app-frontend-eight-orpin.vercel.app/login",
    },
    {
      img: "/image/LernUp.png",
      title: "LearnUp",
      description: "A full stack project  ",
      stack: "MERN Stack",
      github: "https://github.com/chinmayGhadigaonkar/LearnUp",
      live: "",
    },
    
    
    {
      img: "/image/INoteBook.png",
      title: "INotebook",
      description: "A full stack note taking app",
      stack: "MERN Stack",
      github: "https://github.com/chinmayGhadigaonkar/INotebook",
      live: "https://inotebook-fww0.onrender.com/",
    },
    {
      img: "/image/BarberShop.png",
      title: "Barber Shop",
      description: "A static website for a barber shop",
      stack: "HTML, CSS, JS",
      github: "https://github.com/chinmayGhadigaonkar/Barber-Shop-Landing-Page",
      live: "https://barber-shop-landing-page.onrender.com/",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-12 xl:py-0">
      <h1 className="text-4xl font-bold text-accent-Default text-center mb-8">
        My Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mx-auto max-w-5xl justify-center">
        {projects.map((item, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center h-[320px] space-y-4 mx-auto">
              <div className="w-[300px] h-[150px]">
                <Image
                  src={item.img}
                  alt={item.title}
                  width={300}
                  height={150}
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="w-[300px] h-[130px] p-4 bg-gray-800 rounded-lg flex flex-col justify-between">
                <div>
                  <h2 className="text-2xl text-white">{item.title}</h2>
                  <p className="text-white/60">{item.description}</p>
                  <p className="text-accent-Default">{item.stack}</p>
                </div>
                <div className="flex space-x-4 mt-4">
                  <a
                    href={item.github}
                    target="_blank"
                    rel="noopener noreferrer">
                    <SiGithub className="text-accent-Default cursor-pointer text-2xl" />
                  </a>
                  <a href={item.live} target="_blank" rel="noopener noreferrer">
                    <RiLiveLine className="text-accent-Default cursor-pointer text-2xl" />
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </motion.section>
  );
};

export default Projects;

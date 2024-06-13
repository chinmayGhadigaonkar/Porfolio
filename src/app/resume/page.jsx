"use client"
import React from "react";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area"
import experience from "@/data/Experience.json"
import education from "@/data/Education.json"
import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiMongodb, SiMongoose, SiExpress, SiGit } from "react-icons/si";
import { TooltipProvider, TooltipTrigger, Tooltip, TooltipContent } from "@/components/ui/tooltip";

const Resume = () => {
    const about = {
        title: "About Me",
        description: "Lorem dasa adsa as dasdas asdasdsadglasdgadf dfshjgdsalfds  ",
        info: [
            { fieldName: "Name", fieldValue: "Chinmay Ghadigaonkar" },
            { fieldName: "Phone No", fieldValue: "(+91) 8591244736" },
            { fieldName: "Experience", fieldValue: "Fresher" },
            { fieldName: "Nationality", fieldValue: "Indian" },
            { fieldName: "Email", fieldValue: "ghadigaonkarchinmay@gmail.com" },
            { fieldName: "Language", fieldValue: "English, Marathi, Hindi   " },
        ]
    }

    const skillsComp = {
        title: "My Skills",
        description: "Lorem asdas asddsadsaojasdl aksdlasdas ",
        skillList: [
            { skillIcon: <FaHtml5 />, skillName: "Html5" },
            { skillIcon: <FaCss3 />, skillName: "CSS3" },
            { skillIcon: <FaJs />, skillName: "JavaScript" },
            { skillIcon: <FaReact />, skillName: "React" },
            { skillIcon: <FaNodeJs />, skillName: "NodeJs" },
            { skillIcon: <SiTailwindcss />, skillName: "TailwindCSS" },
            { skillIcon: <SiMongodb />, skillName: "MongoDB" },
            { skillIcon: <SiMongoose />, skillName: "Mongoose" },
            { skillIcon: <SiExpress />, skillName: "ExpressJS" },
            { skillIcon: <SiNextdotjs />, skillName: "NextJs" },
            { skillIcon: <SiGit />, skillName: "Git" },
        ]
    }

    return (
        <div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{
                    opacity: 1,
                    transition: { delay: 2.4, duration: .4, ease: "easeIn" }
                }}
                className="min-h-[80vh] flex items-center justify-items-center py-12 xl:py-0"
            >
                <div className="container mx-auto">
                    <Tabs defaultValue="education" className="flex flex-col xl:flex-row gap-[60px]">
                        <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                            <TabsTrigger value="education">Education</TabsTrigger>
                            <TabsTrigger value="experience">Experience</TabsTrigger>
                            <TabsTrigger value="skills">Skills</TabsTrigger>
                            <TabsTrigger value="about me">About me</TabsTrigger>
                        </TabsList>
                        <div className="min-h-[70vh] w-full">
                            <TabsContent value="experience" className="w-full">
                                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                    <h3 className="text-4xl font-bold">My Experience</h3>
                                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                        lorem adssadkasdas asdfaksajf
                                        adsasdjkfaksfajfdfaksdf ajsdijdasjd afkjajdadjflsj alakdas
                                    </p>
                                    <ScrollArea className="h-[400px]">
                                        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                            {experience.map((item, index) => (
                                                <li key={index} className="bg-[#232329] lg:pl-3 h-[184px] py-4 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                                                    <span className="text-accent-Default">{item.duration}</span>
                                                    <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                                                    <div className="flex items-center gap-3">
                                                        <span className="w-[6px] h-[6px] rounded-full bg-accent-Default"></span>
                                                        <p className="text-white/60">{item.company}</p>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    </ScrollArea>
                                </div>
                            </TabsContent>
                            <TabsContent value="education" className="w-full">
                                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                    <h3 className="text-4xl font-bold">My Education</h3>
                                    <ScrollArea className="h-[400px]">
                                        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                            {education.map((item, index) => (
                                                <li key={index} className="bg-[#232329] lg:pl-3 h-[184px] py-4 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                                                    <span className="text-accent-Default">{item.duration}</span>
                                                    <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.field}</h3>
                                                    <div className="flex items-center gap-3">
                                                        <span className="w-[6px] h-[6px] rounded-full bg-accent-Default"></span>
                                                        <p className="text-white/60">Percentage: {item.percentage}</p>
                                                    </div>
                                                    <div className="flex items-center gap-3">
                                                        <span className="w-[6px] h-[6px] rounded-full bg-accent-Default"></span>
                                                        <p className="text-white/60">{item.CollegeName}</p>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    </ScrollArea>
                                </div>
                            </TabsContent>
                            <TabsContent value="skills" className="w-full h-full">
                                <div className="flex flex-col gap-[30px]">
                                    <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                        <h3 className="text-4xl font-bold">{skillsComp.title}</h3>
                                        <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                            {skillsComp.description}
                                        </p>
                                    </div>
                                    <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4">
                                        {skillsComp.skillList.map((skill, index) => (
                                            <li key={index}>
                                                <TooltipProvider  delayDuration={100}>
                                                    <Tooltip>
                                                        <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                                            <div className="text-6xl group-hover:text-accent-Default transition-all duration-300">{skill.skillIcon}</div>
                                                        </TooltipTrigger>
                                                        <TooltipContent>{skill.skillName}</TooltipContent>
                                                    </Tooltip>
                                                </TooltipProvider>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </TabsContent>
                            <TabsContent value="about me" className="w-full text-center xl:text-left ">
                                <div className="flex flex-col gap-[30px]">
                                    <h3  className="text-4xl font-bold"> {about.title}</h3>
                                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0"> {about.description}</p>
                                    <ul className="grid grid-cols-1  xl:grid-cols-2 gap-y-4    mx-auto xl:mx-0 ">
                                        {
                                            about.info.map((item, index)=>{
                                                return(
                                                    <li key={index} className="flex   items-center justify-center    xl:justify-start gap-4">
                                                        <span className="text-white/40 ">{item.fieldName}</span>
                                                        <span className="text-md ">{item.fieldValue}</span>
                                                    </li>
                                                )


                                            })
                                        }
                                    </ul>
                                </div>
                            </TabsContent>
                        </div>
                    </Tabs>
                </div>
            </motion.div>
        </div>
    );
};

export default Resume;

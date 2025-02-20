import React from "react";
import MyProjects from "./components/projects";
import { FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';
import { FlipWordsDemo } from "./components/words";
import { DockDemo } from "./components/dock";
import TechStack from "./components/TechStack";
import ContactMe from "./components/contact";

// const projects = [
//     { title: ' Cards against Humanity', description: 'A game built with React.', icon: <FaReact className='text-blue-500' /> },
//     { title: 'MagicDocs OpenSource', description: 'A Next.js documentation project', icon: <FaDatabase className='text-purple-500' /> },
//     { title: 'MagicDocs OpenSource', description: 'A backend project using Next.js.', icon: <FaNodeJs className='text-green-500' /> },  
//   ];

const page = () => {
    return (
        <section className="lg:max-w-[50%] mt-20 md:mt-36 md:max-w-[90%] relative md:m-auto p-4 flex flex-col min-h-screen">
          
            <div className=" flex gap-3 flex-col justify-center items-left min-h-[60vh] lg:min-h-screen">
                <span className=" text-sm lg:text-md flex items-center gap-2 opacity-70 font-medium tracking-widest uppercase">
                    Hi I am
                </span>
                <div className="flex items-center gap-3">
                    <h1 className="text-4xl flex gap-12 items-center flex-row md:text-7xl lg:text-8xl font-bold ">RAKSHIT</h1>
                    
                </div>
               
                <FlipWordsDemo />
                
                {/* <p className=" opacity-80 text-sm lg:text-xl lg:mb-2 font-medium">
                    Contributor @< span className="  text-blue-500  font-bold"> GSSoC'24 , TSoC'24</span> & <span className="  text-blue-500 font-bold ">SSoC'24 </span> 
                </p> */}
                <div className="flex flex-col md:flex-row items-right mt-3 gap-1 md:gap-3">
               
            
    <DockDemo />
</div>
<TechStack/>
<div>
{/* <MyProjects projects={projects} /> */}
</div>
<div>
  <ContactMe />
</div>



</div>



             

            


              
            
        </section>
    );
};

export default page;
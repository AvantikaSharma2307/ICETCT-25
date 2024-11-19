// import Organisingcommittie from "../pages/Organisingcommittie";
// import { Tabs } from "./ui/tabs";

// export function Tabcomponent() {
//   const tabs = [
//     {
//       title: "Organisingcommittie",
//       value: "Organisingcommittie",
//       content: (
//         <div
//           className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold bg-gradient-to-br from-purple-700 to-violet-900">
//           <p>Organisingcommittie Tab</p>
//           <Organisingcommittie />
//         </div>
//       ),
//     },
//     {
//         title: "Organisingcommittie1",
//         value: "Organisingcommittie1",
//         content: (
//           <div
//             className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold bg-gradient-to-br from-purple-700 to-violet-900">
//             <p>Organisingcommittie Tab</p>
//             <Organisingcommittie />
//           </div>
//         ),
//       },
//       {
//         title: "Organisingcommittie2",
//         value: "Organisingcommittie2",
//         content: (
//           <div
//             className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
//             <p>Organisingcommittie Tab</p>
//             <Organisingcommittie />
//           </div>
//         ),
//       },
//       {
//         title: "Organisingcommittie3",
//         value: "Organisingcommittie3",
//         content: (
//           <div
//             className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
//             <p>Organisingcommittie Tab</p>
//             <Organisingcommittie />
//           </div>
//         ),
//       },
//       {
//         title: "Organisingcommittie4",
//         value: "Organisingcommittie4",
//         content: (
//           <div
//             className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
//             <p>Organisingcommittie Tab</p>
//             <Organisingcommittie />
//           </div>
//         ),
//       },
//   ];

//   return (
//     (<div
//       className="h-full md:h-[40rem] [perspective:1000px] b flex flex-col max-w-8xl mx-auto w-full  items-start justify-start my-40">
//       <Tabs tabs={tabs} />
//     </div>)
//   );
// }



// import { clsx } from "clsx";
// import { twMerge } from "tailwind-merge";
import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../lib/utils";
import Organisingcommittie from "../pages/Organisingcommittie";

export const Tabs = ({
  tabs: propTabs,
  containerClassName,
  activeTabClassName,
  tabClassName,
  contentClassName,
}) => {
  const [active, setActive] = useState(propTabs[0]);
  const [tabs, setTabs] = useState(propTabs);

  const moveSelectedTabToTop = (idx) => {
    const newTabs = [...propTabs];
    const selectedTab = newTabs.splice(idx, 1);
    newTabs.unshift(selectedTab[0]);
    setTabs(newTabs);
    setActive(newTabs[0]);
  };

  const [hovering, setHovering] = useState(false);

  return (
    <>
      <div
        className={cn(
          "flex flex-row items-center justify-center mx-4 overflow-x-auto lg:text-xl sm:overflow-x-visible max-w-full w-full ",
          containerClassName
        )}
      >
        {propTabs.map((tab, idx) => (
          <button
            key={tab.title}
            onClick={() => {
              moveSelectedTabToTop(idx);
            }}
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            className={cn(
              "relative px-6 py-4 sm:mx-4 rounded-full text-black  dark:text-white font-semibold",
              tabClassName
            )}
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            {active.value === tab.value && (
              <motion.div
                layoutId="clickedbutton"
                transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                className={cn(
                  "absolute inset-0 bg-gray-200 dark:bg-zinc-800 rounded-full ",
                  activeTabClassName
                )}
              />
            )}

            <span className="relative block">{tab.title}</span>
          </button>
        ))}
      </div>
      
      <FadeInDiv
        tabs={tabs}
        active={active} 
        key={active.value}
        hovering={hovering}
        className={cn("mt-16", contentClassName)}
      />
    </>
  );
};



export const FadeInDiv = ({ className, tabs, active, hovering }) => {
  return (
    <div className="relative w-11/12 h-auto m-auto">
      {tabs.map((tab) => {
        const isActive = tab.value === active.value;

        return (
          <motion.div
            key={tab.value}
            layoutId={tab.value} 
            
            initial={{ opacity: 0, y: 20 }}

            animate={{
              opacity: isActive ? 1 : 0, 
              y: isActive ? [0, 20, 0] : 0, 
            }}
            transition={{
              duration: 0.6,
              type: "spring", stiffness: 100,
              
              ease: "easeInOut", 
            }}
            className={cn("w-full h-auto mb-2", className)} 
            style={{
              display: isActive ? "block" : "none", 
            }}

          >
            {tab.content}
          </motion.div>
        );
      })}
    </div>
  );
};




export function Tabcomponent() {
  const tabs = [
    {
      title: "Organising Committie",
      value: "Organisingcommittie",
      content: (
        <div className="w-full overflow-hidden relative h-auto rounded-2xl text-xl md:text-4xl bg-gradient-to-br from-purple-400 to-indigo-500">
          <Organisingcommittie />
        </div>
      ),
    },
    {
      title: "Organising Committie",
      value: "Organisingcommittie3",
      content: (
        <div className="w-full overflow-hidden relative h-auto rounded-2xl p-10 text-xl md:text-4xl bg-gradient-to-br from-purple-400 to-indigo-500">
          <Organisingcommittie />
        </div>
      ),
    },
    {
      title: "Organising Committie",
      value: "Organisingcommittie4",
      content: (
        <div className="w-full overflow-hidden relative h-auto rounded-2xl p-10 text-xl md:text-4xl bg-gradient-to-br from-purple-400 to-indigo-500">
          <Organisingcommittie />
        </div>
      ),
    },
   
  ];

  return (
    <div className="relative flex flex-col max-w-full mx-auto w-full items-start justify-start mt-32 overflow-hidden ">
      <Tabs tabs={tabs} />
    </div>
  );
}







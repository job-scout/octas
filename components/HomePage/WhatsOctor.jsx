import React from "react";

import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";

const WhatsOctor = () => {
  const router = useRouter();


  const data = [
 {
		title: "Intelligent Automation",
		desc:
			"Automate workflows using adaptive AI systems that reduce manual effort and increase operational efficiency.",
		icon: "/intelligent-automation.png",
	},
	{
		title: "Actionable Data Intelligence",
		desc:
			"Turn raw data into meaningful insights with predictive analytics that support smarter, faster decision-making.",
		icon: "/data-intelligence.png",
    },
  {
		title: "AI-Driven Risk & Compliance",
		desc:
			"Protect your business with proactive risk assessment, smart compliance frameworks, and real-time threat monitoring.",
		icon: "/risk.png",
	},
	{
		title: "Seamless AI Integration",
		desc:
			"We guide you in embedding AI capabilities into your existing systems — with minimal disruption and maximum impact.",
		icon: "/ai.png",
	},
	{
		title: "Scalable Cloud Architecture",
		desc:
			"Future-proof your infrastructure with our cloud-native strategies designed for growth, resilience, and agility.",
		icon: "/cloud.png",
	},
	{
		title: "Intelligent Knowledge Systems",
		desc:
			"Enhance employee efficiency and customer experience with advanced search, discovery, and recommendation systems.",
		icon: "/system.png",
	},
	




]
  return (
    <AnimatePresence mode="wait">
      <div className="container mx-auto mt-16 mb-32 lg:px-3 md:px-0">
        
        <h2 className="text text-center text-3xl md:text-4xl font-semibold tracking-wider text-primary">
          Our Intelligent Solutions
        </h2>
        <p className="text-sm lg:text-lg mx-auto mt-5 text-center lg:max-w-6xl px-2">
          Unlock growth with our AI-powered technologies tailored for modern businesses.
        </p>
       
        <div className=" mt-10 grid gap-10 md:grid-cols-2 lg:grid-cols-3 px-4">
					 {data?.map((d, index) => (
            <motion.div
              initial={{ opacity: 0, x: -60, rotateX: 180 }}
              whileInView={{ opacity: 1, x: 0, rotateX: 0 }}
              exit={{ opacity: 0, x: 60, rotateX: 360 }}
              transition={{
                duration: 0.5,
                delay: 0.1 * (index + 1),
                scale: {
                  type: "spring",
                  damping: 14,
                  stiffness: 200,
                  restDelta: 0.001,
                },
              }}
              key={index}
              className="flex flex-col items-start  gap-4  bg-gradient-to-t from-yellow-50 to-white px-8 py-8 text-center shadow-xl  rounded-2xl "
             >
                <div
          
        >
          <img src={d.icon} alt={d.title} className="object-contain h-16 w-16 " />
        </div>
             
              <h3 className="text-left mt-3 text-xl font-semibold text-backgroundDark">{d?.title}</h3>
              <p className="text-sm text-left">{d?.desc}</p>
            </motion.div>
          ))}
        </div>
        
        </div>
     
    </AnimatePresence>
  );
};

export default WhatsOctor;

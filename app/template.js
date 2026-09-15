"use client";
import { motion } from "framer-motion";
export default function Template({children}){
 return <motion.div initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} exit={{opacity:0}} transition={{duration:.5,ease:[.22,1,.36,1]}}>{children}</motion.div>;
}
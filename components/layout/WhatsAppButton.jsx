"use client";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { CONTACT } from "@/lib/constants";
export default function WhatsAppButton(){
 return <motion.a href={CONTACT.whatsapp} target="_blank" initial={{scale:0}} animate={{scale:1}} transition={{delay:1.5}} className="fixed bottom-6 right-6 z-50 group flex items-center gap-3">
  <span className="hidden group-hover:block bg-ink-900 border border-white/15 text-xs px-3 py-2 rounded-full">Chat on WhatsApp</span>
  <span className="relative w-14 h-14 rounded-full bg-[#25D366] grid place-items-center shadow-card"><span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30"/><MessageCircle className="text-white relative" fill="currentColor"/></span>
 </motion.a>;
}
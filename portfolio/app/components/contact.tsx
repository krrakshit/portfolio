"use client"
'use client'
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin  } from 'lucide-react';
import { TwitterLogoIcon } from '@radix-ui/react-icons';

const ContactMe: React.FC = () => {
  

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <motion.h1
        className=" mb-4 text-black dark:text-white "
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        | Let&apos;s Connect |
      </motion.h1>

      <motion.div
        className="flex flex-wrap justify-center gap-6 mt-8 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <motion.a
          href="mailto:rkrkr365@gmail.com"
          className="flex flex-col items-center p-4 bg-transparent dark:bg-transparent dark:text-white rounded-lg border border-black dark:border-white shadow-sm hover:bg-gray-200 dark:hover:bg-gray-600 transition transform hover:scale-105 hover:rotate-3"

          whileHover={{ scale: 1.1, rotate: 5 }}
        >
          <Mail className="h-8 w-8 mb-2 text-red-800" />
          <span>Email</span>
        </motion.a>

        <motion.a
          href="https://x.com/_kr_rakshit"
          className="flex flex-col items-center p-4 bg-transparent dark:bg-transparent dark:text-white rounded-lg border border-black dark:border-white shadow-sm hover:bg-gray-200 dark:hover:bg-gray-600 transition transform hover:scale-105 hover:rotate-3"

          whileHover={{ scale: 1.1, rotate: -5 }}
        >
          <TwitterLogoIcon className="h-8 w-8 mb-2 text-blue-400" />
          <span>Twitter</span>
        </motion.a>

        <motion.a
          href="https://github.com/krrakshit"
          className="flex flex-col items-center p-4 bg-transparent dark:bg-transparent dark:text-white dar rounded-lg border border-black dark:border-white shadow-sm hover:bg-gray-200 dark:hover:bg-gray-600 transition transform hover:scale-105 hover:rotate-3"

          whileHover={{ scale: 1.1, rotate: 5 }}
        >
          <Github className="h-8 w-8 mb-2 text-gray-700" />
          <span>GitHub</span>
        </motion.a>

        <motion.a
          href="https://www.linkedin.com/in/rex7t"
          className="flex flex-col items-center p-4 bg-transparent dark:bg-transparent dark:text-white rounded-lg border border-black dark:border-white shadow-sm hover:bg-gray-200 dark:hover:bg-gray-600 transition transform hover:scale-105 hover:rotate-3"

          whileHover={{ scale: 1.1, rotate: -5 }}
        >
          <Linkedin className="h-8 w-8 mb-2 text-blue-700" />
          <span>LinkedIn</span>
        </motion.a>
      </motion.div>
  
      
    </div>
  );
};

export default ContactMe;

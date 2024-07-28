'use client';
import React, { useState }from 'react';
import Link from 'next/link'
import './Dash.css';
import { Toolbar } from 'primereact/toolbar';
import { Inter } from 'next/font/google'
import { motion } from "framer-motion";

const inter = Inter({ subsets: ['latin'] });

const Hoverline = ({ text }) => {
    const [isHovered, setIsHovered] = useState(false);
  
    return (
      <motion.div
        style={{
          position: 'relative',
          display: 'inline-block',
          margin: '10px',
        }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        <motion.span
          style={{
            display: 'inline-block',
            position: 'relative',
            zIndex: 1,
          }}
        >
          {text}
        </motion.span>
        <motion.div className = "line"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    );
  };

export default function Task() {

    const startContent = (
        <React.Fragment>
            <div>
            <Link href = "/" className = 'white'><Hoverline text="home" /></Link>
            </div>
        </React.Fragment>
    );

    const endContent = (
        <React.Fragment>
            <div className = "taskitem">
                <Link href = "\dashboard" className = 'white'><Hoverline text="projects" /></Link>
                <Link href = "\dashboard" className = 'white'><Hoverline text="about" /></Link>
            </div>
        </React.Fragment>
    );

    return (
        <div className={inter.className}>
            <div className="tasky"><Toolbar start={startContent} end={endContent} /></div>
        </div>
    );
}

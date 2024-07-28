'use client';
import { motion } from "framer-motion";
import './Dash.css';
import React from 'react';
import Task from './task';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

const project1 = {
  name: "Talk Tutor",
  imageUrl: './gallery.jpg',
  description: "PyDub and Librosa-based software to help users learn and improve on their pronunciation of language \n Uses audio model frequency comparison to detect and display correct or incorrect pronunciation from user audio input",
  link: "https://github.com/dogwter/tt"
}

const project2 = {
  name: "Fatal Friendships",
  imageUrl: './gallery.jpg',
  description: "Educational RPG and dodging game on toxic friendships made in the Java GUI",
}

const project3 = {
  name: "Pigeonhole Sort Tutorial",
  imageUrl: './gallery.jpg',
  description: "Sorting algorithm explanation and tutorial animated in manim, a Python library",
}

const p1tags = ["python", "html", "flask", "js", "css"];

function Tags() {    
  return(
      <div className = "tags">
           {p1tags.map((p1tags, index) => (<div className = "tag" key={index}>{p1tags}</div>))}
      </div>
  );
}

function ProjectsF ({project}){ //fix
  return(
      <div>
          <img src= {project.imageUrl} height="200px" width="225px"/>
          <h2 className = "tasktitle">{project.name}</h2>
          <Tags />
          <p className = "taskbody">{project.description}</p>
          <a className = "tasklink" href = {project.link}>Link</a>
      </div>
  );
}

function Projects (){ //fix
  return(
      <div>
          <img src= {project1.imageUrl} height="200px" width="225px"/>
          <h2 className = "tasktitle">{project1.name}</h2>
          <Tags />
          <p className = "taskbody">{project1.description}</p>
          <a className = "tasklink" href = {project1.link}>Link</a>
      </div>
  );
}

export default function Page() {
  return (
    <div className={inter.className}>
      <Task/>
      <div className = "tags">
    <motion.div
      className="task1"
      whileHover={{ scale: 1.01 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >{<Projects />}</motion.div> 
    <motion.div
      className="task1"
      whileHover={{ scale: 1.01 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >{<Projects/>}</motion.div>
    <motion.div
      className="task1"
      whileHover={{ scale: 1.01 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >{<Projects/>}</motion.div>
    </div>
    </div>
  );
  }


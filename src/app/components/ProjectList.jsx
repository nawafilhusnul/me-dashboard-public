'use client'

import { useEffect, useState } from 'react';
import axios from 'axios';
import ProjectCard from './ProjectCard';

export default function ProjectList() {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:3001/v1/projects').
      then((response) => {
        if (response.status === 200) {
          const projectList = response.data.data;
          setProjects(projectList);
        }
      })
  }, [])
  
  return (
    <div className=''>
      <ul className=''>
      {
        projects.map((project) => {
          return (
            <li key={project.id}>
              <ProjectCard project={ project } />
            </li>  
          )
        })
      }
      </ul>
      
    </div>
  )
}
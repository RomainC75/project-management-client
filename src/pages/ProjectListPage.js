// src/pages/ProjectListPage.js

import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// src/pages/ProjectListPage.js
// ... previous imports stay unchanged

import AddProject from "./../components/AddProject"; //  <== IMPORT
import ProjectCard from "../components/ProjectCard";

const API_URL = "http://localhost:5005";


function ProjectListPage() {
  const [projects, setProjects] = useState([]);

  const getAllProjects = () => {
    axios
      .get(`${API_URL}/api/projects`)
      .then((response) => setProjects(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllProjects();
  }, [] );

  
  return (
    <div className="ProjectListPage">
      
      {/*    ADD     */}
      <AddProject refreshProjects={getAllProjects} />
      
        {projects.map((project) => {
          return (
            <ProjectCard key={project._id} {...project}/>
          );
        })} 
       
    </div>
  );
}

export default ProjectListPage;

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { asyncCreateFrontend } from '../../Store/Actions/FrontendActions';
import { asyncCreateBackend } from '../../Store/Actions/BackendActions';
import { asyncCreateMern } from '../../Store/Actions/MernActions';
import { asyncCreateUiux } from '../../Store/Actions/UiuxActions';

const Create = ({ projecttype }) => {
  const [projectTitle, setProjectTitle] = useState('');
  const [aboutProject, setAboutProject] = useState('');
  const [projectType, setProjectType] = useState('');
  const [projectName, setProjectName] = useState('');
  const [githubLink, setGithubLink] = useState('');
  const [linkedinLink, setLinkedinLink] = useState('');
  const [deploymentLink, setDeploymentLink] = useState('');
  const [projectPoster, setProjectPoster] = useState(null);
  const [projectVideo, setProjectVideo] = useState(null);
  const [images, setImages] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { isAuthenticated } = useSelector((state)=>state.Admin)  
  const dispatch = useDispatch()

  const handleFileChange = (event, type) => {
    const files = event.target.files;
    switch (type) {
      case 'projectPoster':
        setProjectPoster(files[0]);
        break;
      case 'projectVideo':
        setProjectVideo(files[0]);
        break;
      case 'images':
        setImages([...images, ...files]);
        break;
      default:
        break;
    }
  };

  const handleCut = (type) => {
    switch (type) {
      case 'projectPoster':
        setProjectPoster(null);
        break;
      case 'projectVideo':
        setProjectVideo(null);
        break;
      case 'images':
        setImages([]);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);

    const formData = new FormData();
    formData.append('projectTitle', projectTitle);
    formData.append('aboutProject', aboutProject);
    formData.append('projectType', projectType);
    formData.append('projectName', projectName);
    formData.append('githubLink', githubLink);
    formData.append('linkedinLink', linkedinLink);
    formData.append('deploymentLink', deploymentLink);
    formData.append('projectPoster', projectPoster);
    formData.append('projectVideo', projectVideo);
    for (const file of images) {
        formData.append('images', file);
    }    

    if(isAuthenticated &&  projecttype === "frontend"){
        await  dispatch(asyncCreateFrontend(formData))
    }    
    else if(isAuthenticated &&  projecttype === "backend"){
        await  dispatch(asyncCreateBackend(formData))
    }    
    else if(isAuthenticated &&  projecttype === "mern"){
        await  dispatch(asyncCreateMern(formData))
    }    
    else if(isAuthenticated &&  projecttype === "uiux"){
        await  dispatch(asyncCreateUiux(formData))
    }

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form fields
    setProjectTitle('');
    setAboutProject('');
    setProjectType('');
    setProjectName('');
    setGithubLink('');
    setLinkedinLink('');
    setDeploymentLink('');
    setProjectPoster(null);
    setProjectVideo(null);
    setImages([]);
  };

  return (
    <div className={`container mx-auto ${isSubmitted ? 'hidden' : ''}`}>
      <div className="mt-8">
        <label htmlFor="projectTitle" className="block mb-2">Project Title:</label>
        <input type="text" id="projectTitle" className="border p-2 mb-4 w-full" value={projectTitle} onChange={(e) => setProjectTitle(e.target.value)} />
        
        <label htmlFor="aboutProject" className="block mb-2">About Project:</label>
        <textarea id="aboutProject" rows="4" className="border p-2 mb-4 w-full" value={aboutProject} onChange={(e) => setAboutProject(e.target.value)}></textarea>
        
        <label htmlFor="projectType" className="block mb-2">Project Type:</label>
        <input type="text" id="projectType" className="border p-2 mb-4 w-full" value={projectType} onChange={(e) => setProjectType(e.target.value)} />
        
        <label htmlFor="projectName" className="block mb-2">Project Name:</label>
        <input type="text" id="projectName" className="border p-2 mb-4 w-full" value={projectName} onChange={(e) => setProjectName(e.target.value)} />
        
        <label htmlFor="githubLink" className="block mb-2">GitHub Link:</label>
        <input type="text" id="githubLink" className="border p-2 mb-4 w-full" value={githubLink} onChange={(e) => setGithubLink(e.target.value)} />
        
        <label htmlFor="linkedinLink" className="block mb-2">LinkedIn Link:</label>
        <input type="text" id="linkedinLink" className="border p-2 mb-4 w-full" value={linkedinLink} onChange={(e) => setLinkedinLink(e.target.value)} />
        
        <label htmlFor="deploymentLink" className="block mb-2">Deployment Link:</label>
        <input type="text" id="deploymentLink" className="border p-2 mb-4 w-full" value={deploymentLink} onChange={(e) => setDeploymentLink(e.target.value)} />
        
        <label htmlFor="projectPoster" className="block mb-2">Project Poster:</label>
        <input type="file" id="projectPoster" accept="image/*" className="mb-4" onChange={(e) => handleFileChange(e, 'projectPoster')} />
        
        <label htmlFor="projectVideo" className="block mb-2">Project Video:</label>
        <input type="file" id="projectVideo" accept="video/*" className="mb-4" onChange={(e) => handleFileChange(e, 'projectVideo')} />
        
        <label htmlFor="images" className="block mb-2">Additional Images:</label>
        <input type="file" id="images" accept="image/*" className="mb-4" multiple onChange={(e) => handleFileChange(e, 'images')} />
        
        <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600" onClick={handleSubmit} disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </div>
    </div>
  );
};

export default Create;

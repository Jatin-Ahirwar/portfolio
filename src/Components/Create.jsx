// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { asyncCreateFrontend } from '../../Store/Actions/FrontendActions';

// const Create = ({projecttype}) => {
//   const [projectTitle, setProjectTitle] = useState('');
//   const [aboutProject, setAboutProject] = useState('');
//   const [projectType, setProjectType] = useState('');
//   const [projectName, setProjectName] = useState('');
//   const [githubLink, setGithubLink] = useState('');
//   const [linkedinLink, setLinkedinLink] = useState('');
//   const [deploymentLink, setDeploymentLink] = useState('');
//   const [projectPoster, setProjectPoster] = useState(null);
//   const [projectVideo, setProjectVideo] = useState(null);
//   const [images, setImages] = useState([]);
//   const { isAuthenticated } = useSelector((state)=>state.Admin)  
//   const dispatch = useDispatch()

//   const handleFileChange = (event, type) => {
//     const files = event.target.files;
//     switch (type) {
//       case 'projectPoster':
//         setProjectPoster(files[0]);
//         break;
//       case 'projectVideo':
//         setProjectVideo(files[0]);
//         break;
//       case 'images':
//         setImages([...images, ...files]);
//         break;
//       default:
//         break;
//     }
//   };

//   const handleCut = (type) => {
//     switch (type) {
//       case 'projectPoster':
//         setProjectPoster(null);
//         break;
//       case 'projectVideo':
//         setProjectVideo(null);
//         break;
//       case 'images':
//         setImages([]);
//         break;
//       default:
//         break;
//     }
//   };

//   const handleSubmit = () => {
//     const content = {
//         projectTitle,
//         aboutProject,
//         projectType,
//         projectName,
//         githubLink,
//         linkedinLink,
//         deploymentLink,
//         projectPoster,
//         projectVideo,
//         images  
//     }
//     if(isAuthenticated &&  projecttype === "frontend"){
//         dispatch(asyncCreateFrontend(content))
//     }
//   };

//   return (
//     <div className="container mx-auto">
//       <div className="mt-8">
//         <label htmlFor="projectTitle" className="block mb-2">Project Title:</label>
//         <input type="text" id="projectTitle" className="border p-2 mb-4 w-full" value={projectTitle} onChange={(e) => setProjectTitle(e.target.value)} />
        
//         <label htmlFor="aboutProject" className="block mb-2">About Project:</label>
//         <textarea id="aboutProject" rows="4" className="border p-2 mb-4 w-full" value={aboutProject} onChange={(e) => setAboutProject(e.target.value)}></textarea>
        
//         <label htmlFor="projectType" className="block mb-2">Project Type:</label>
//         <input type="text" id="projectType" className="border p-2 mb-4 w-full" value={projectType} onChange={(e) => setProjectType(e.target.value)} />
        
//         <label htmlFor="projectName" className="block mb-2">Project Name:</label>
//         <input type="text" id="projectName" className="border p-2 mb-4 w-full" value={projectName} onChange={(e) => setProjectName(e.target.value)} />
        
//         <label htmlFor="githubLink" className="block mb-2">GitHub Link:</label>
//         <input type="text" id="githubLink" className="border p-2 mb-4 w-full" value={githubLink} onChange={(e) => setGithubLink(e.target.value)} />
        
//         <label htmlFor="linkedinLink" className="block mb-2">LinkedIn Link:</label>
//         <input type="text" id="linkedinLink" className="border p-2 mb-4 w-full" value={linkedinLink} onChange={(e) => setLinkedinLink(e.target.value)} />
        
//         <label htmlFor="deploymentLink" className="block mb-2">Deployment Link:</label>
//         <input type="text" id="deploymentLink" className="border p-2 mb-4 w-full" value={deploymentLink} onChange={(e) => setDeploymentLink(e.target.value)} />
        
//         <label htmlFor="projectPoster" className="block mb-2">Project Poster:</label>
//         {projectPoster && (
//           <div className="flex items-center mb-4">
//             <img src={URL.createObjectURL(projectPoster)} alt="Project Poster" className="w-20 h-20 object-cover mr-2" />
//             <button className="text-red-600 hover:text-red-800" onClick={() => handleCut('projectPoster')}>
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
//                 <path fillRule="evenodd" d="M4.293 4.293a1 1 0 0 1 1.414 0L10 8.586l4.293-4.293a1 1 0 1 1 1.414 1.414L11.414 10l4.293 4.293a1 1 0 1 1-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 1 1-1.414-1.414L8.586 10 4.293 5.707a1 1 0 0 1 0-1.414z" clipRule="evenodd" />
//               </svg>
//             </button>
//           </div>
//         )}
//         {!projectPoster && (
//           <input type="file" id="projectPoster" accept="image/*" className="mb-4" onChange={(e) => handleFileChange(e, 'projectPoster')} />
//         )}

//         <label htmlFor="projectVideo" className="block mb-2">Project Video:</label>
//         {projectVideo && (
//           <div className="flex items-center mb-4">
//             <video src={URL.createObjectURL(projectVideo)} controls className="w-20 h-20 object-cover mr-2"></video>
//             <button className="text-red-600 hover:text-red-800" onClick={() => handleCut('projectVideo')}>
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
//                 <path fillRule="evenodd" d="M4.293 4.293a1 1 0 0 1 1.414 0L10 8.586l4.293-4.293a1 1 0 1 1 1.414 1.414L11.414 10l4.293 4.293a1 1 0 1 1-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 1 1-1.414-1.414L8.586 10 4.293 5.707a1 1 0 0 1 0-1.414z" clipRule="evenodd" />
//               </svg>
//             </button>
//           </div>
//         )}
//         {!projectVideo && (
//           <input type="file" id="projectVideo" accept="video/*" className="mb-4" onChange={(e) => handleFileChange(e, 'projectVideo')} />
//         )}

//         <label htmlFor="images" className="block mb-2">Additional Images:</label>
//         <div className="flex flex-wrap mb-4">
//           {images.map((image, index) => (
//             <div key={index} className="flex items-center mb-2 mr-2">
//               <img src={URL.createObjectURL(image)} alt={`Additional Image ${index}`} className="w-20 h-20 object-cover mr-2" />
//               <button className="text-red-600 hover:text-red-800" onClick={() => handleCut('images')}>
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
//                   <path fillRule="evenodd" d="M4.293 4.293a1 1 0 0 1 1.414 0L10 8.586l4.293-4.293a1 1 0 1 1 1.414 1.414L11.414 10l4.293 4.293a1 1 0 1 1-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 1 1-1.414-1.414L8.586 10 4.293 5.707a1 1 0 0 1 0-1.414z" clipRule="evenodd" />
//                 </svg>
//               </button>
//             </div>
//           ))}
//         </div>
//         <input type="file" id="images" accept="image/*" className="mb-4" multiple onChange={(e) => handleFileChange(e, 'images')} />
        
//         <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600" onClick={handleSubmit}>Submit</button>
//       </div>
//     </div>
//   );
// };

// export default Create;

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
    // images.forEach((image, index) => {
    //   formData.append("images[]", image);
    // });
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
  };

  return (
    <div className="container mx-auto">
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
        
        <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600" onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default Create;

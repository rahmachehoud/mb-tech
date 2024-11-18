// components/Projects/ProjectsDetails.tsx
"use client"
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import ProjectDetails from '@/components/Projects/ProjectsDetails';
import { useParams } from 'next/navigation';
import { projects } from '../data/project';  


  
  export default function ProjectDetail() {
	const { id } = useParams();
	const project = projects.find((proj) => proj.id === id);
  
	if (!project) {
	  return <p>Project not found.</p>;
	}
  
	return (
	  <>
		<Header />
		<div className="flex justify-center py-10">
		  <ProjectDetails project={project} />
		  
		</div>
		<Footer />
	  </>
	);
  }
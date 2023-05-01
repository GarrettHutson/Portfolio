
import {getProjects} from '@/sanity/sanity-utils'
import Header from './components/Header';
import Post from './components/Post';



export default async function Home() {

  const projects = await getProjects();
  
  if(projects.length === 0) return <h1>No projects</h1> 
  
  return (
 <div className='bg-cover h-screen ' style={{backgroundImage: "url('/images/goat.jpeg')",
  backgroundPosition: "center",
  backgroundSize:"cover"

 }} >
 <Header />
 <Post projects={projects}/>

 </div>



  )
}
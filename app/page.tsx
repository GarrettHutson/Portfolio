import Image from 'next/image'
import {getProjects} from '@/sanity/sanity-utils'

export default async function Home() {
  console.log('getting projects');
  const projects = await getProjects();
  console.log('projects', projects);
  if(projects.length === 0) return (<>
    <h1>No projects</h1>
  </>)
  return (<>
    {projects.map((proj) =>(
      <div key={proj._id}>
        <h1>{proj.name}</h1>
        {proj.image && (
            <Image
              src={proj.image}
              alt={proj.name}
              width={750}
              height={300}
              className="object-cover rounded-lg border border-gray-500"
            />
          )}</div>
    ))}

  </>)

    }



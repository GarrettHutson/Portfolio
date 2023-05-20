
import { getProjects } from '@/sanity/sanity-utils'
import Projects from '../components/Projects';

export default async function Code() {
  const projects = await getProjects();

  if (projects.length === 0) return <h1>Loading...</h1>
  return (
    <Projects projects={projects} />
  )
}
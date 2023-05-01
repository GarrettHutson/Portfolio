import { getProject } from "@/sanity/sanity-utils";

type Props = {
    params: { project: string }
}


async function Project({params}: Props) {
console.log(params)
    const slug = params.project;
    const project = await getProject(slug);
  return (
    <div>{project.name}</div>
  )
}

export default Project;
import { getProject } from "@/sanity/sanity-utils";
import Proj from "../../../components/Proj";
import { Project } from "@/types/Project";

type Props = {
  params: { project: string }
}

async function OneProj({ params }: Props) {
  const slug = params.project;
  const proj = await getProject(slug);
  return (
    <div className="flex flex-col justify-center items-center h-screen">
    <Proj project={proj}/>
    </div>

  );
}

export default OneProj;

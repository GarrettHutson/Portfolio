import { getAreaClimbs } from "@/sanity/sanity-utils";
import Climbs from "@/app/components/Climbs";



async function Chosenclimb({params}) {

    const area = params.climb;

    const climbs = await getAreaClimbs(area);

  return (
    <>
    <div className="pt-24">
    <Climbs climbs={climbs}/>
    </div>


    </>

  )
}

export default Chosenclimb;
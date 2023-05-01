import Background from "@/app/components/Background";
import { getClimb } from "@/sanity/sanity-utils";
import { PortableText } from '@portabletext/react'
import Image from 'next/image'
import Climb from "@/app/components/Climb";



async function Chosenclimb({params}) {

    const slug = params.climb;
    const climb = await getClimb(slug);
  return (
    <>
    {/* <Background /> */}
    <div className="pt-24">
    <Climb climb={climb}/>
    </div>


    </>

  )
}

export default Chosenclimb;
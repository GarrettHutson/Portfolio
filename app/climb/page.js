


import React from 'react'
import Climbcards from '../components/Climbcards'
import Background from '../components/Background'
import {getClimbs} from '@/sanity/sanity-utils'


async function Climb() {
    const climbPosts = await getClimbs()
  
  if(climbPosts.length === 0) return <h1>No projects</h1> 
  return (
<div className=''>

<Background />
<div className='pt-24'>


    <Climbcards climbPosts={climbPosts}/>

</div>
</div>
)}

export default Climb
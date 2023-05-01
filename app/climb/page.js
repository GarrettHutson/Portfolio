


import React from 'react'
import Climbcards from '../components/Climbcards'

import {getClimbs} from '@/sanity/sanity-utils'


async function Climb() {
    const climbPosts = await getClimbs()
    console.log(climbPosts)
  if(climbPosts.length === 0) return <h1>No projects</h1> 
  return (

<div className=''>
    <Climbcards climbPosts={climbPosts}/>
</div>
)}

export default Climb
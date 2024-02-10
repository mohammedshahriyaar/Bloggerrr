// import React, { useEffect, useState } from 'react'
// import service from '../appwrite/config'
// import { Container,PostCard } from '../components'


// function AllPosts() {
//     const [posts, setPosts] = useState([])
//     useEffect( ()=>{})
//     service.getPosts([]).then((posts)=>{
//         if(posts){
//             setPosts(posts.documents);
//         }
//     })
//   return (
//     <div className='w-full py-4'>
//         <Container>
//             {/* {posts.map( (post)=> {
//                 <PostCard key={post.$id} post ={post} />
//             })} */}

//             <div className='flex flex-wrap'>
//                 {posts.map( (post)=> (
//                     <div key={post.$id} className='p-2 w-1/4'>
//                         <PostCard  {...post}/>
                        
//                     </div>
//                 ))}
//             </div>
//         </Container>
//     </div>
//   )
// }

// export default AllPosts


import React, {useState, useEffect} from 'react'
import { Container, PostCard } from '../components'
import appwriteService from "../appwrite/config";

function AllPosts() {
    const [posts, setPosts] = useState([])
    useEffect(() => {}, [])
    appwriteService.getPosts([]).then((posts) => {
        if (posts) {
            setPosts(posts.documents)
        }
    })
  return (
    <div className='w-full py-8'>
        <Container>
            <div className='flex flex-wrap'>
                {posts.map((post) => (
                    <div key={post.$id} className='p-2 w-1/4'>
                        <PostCard {...post} />
                    </div>
                ))}
            </div>
            </Container>
    </div>
  )
}

export default AllPosts
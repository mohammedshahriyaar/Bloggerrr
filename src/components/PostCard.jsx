// import React from 'react'
// import appwriteService from '../appwrite/config'
// import service from '../appwrite/config'
// import {Link} from "react-router-dom"
// function PostCard({$id,title,featuredImage}) {
//   return (

//     <Link to={`/post/${$id}`}>
//         <div className='w-full bg-gray-50 rounded-xl p-4'>
//             <div className='w-full justify-center mb-4'>
//                 <img src={service.getFilePreview(featuredImage)} alt={title}
//                 className='rounded-xl'/>
//             </div>

//             <h2 className='text-xl font-bold'>{title}</h2>
//         </div>
//     </Link>
//   )
// }

// export default PostCard


import appwriteService from '../appwrite/config'
import { Link } from 'react-router-dom'
import {FaHeart} from 'react-icons/fa'

function PostCard({$id,title,featuredImage,status}) {
    // const date = new Date(post.$createdAt?).toLocaleDateString('en-US')
    // const date = post.$createdAt ? new Date(post.$createdAt).toLocaleDateString('en-US') : '';
    return (
        <Link to={`/post/${$id}`}>
            <div className="max-w-md shadow-xl rounded-xl overflow-hidden h-full">
                <img 
                    className="w-full h-auto" 
                    src={appwriteService.getFilePreview(featuredImage)} 
                    alt={title} 
                />

                <div className="sm:px-6 px-2 py-4 flex flex-wrap justify-between items-center">
                    <div className="font-bold text-xl mb-2">{title}</div>
                    
                </div>

                <div className="px-6 py-4 flex justify-between items-center">
                    <div className="text-sm">{status}</div>
                    <FaHeart className="w-5 h-5 text-red-500 mr-2" />
                </div>
            </div>
        </Link>
    )
}

export default PostCard
// import React from 'react'
// import {Editor} from "@tinymce/tinymce-react"
// import { Controller} from 'react-hook-form'

// //here we are using controller instead of forwardref

// //control will come from react hook form and is responsible to take its state into form
// //control will be passed when i use RTe

// export default function RTE({name,control,label,defaultValue=""}) {

//   return (
//     <div className='w-full'>
//         {label && <label className='inline-block mb-1 pl-1'>{label}</label>}

//         <Controller
//     name={name || "content"}
//     control={control}
//     render={({field: {onChange}}) => (
//         <Editor
//         apiKey='b40w3zwtk1wfye023yu85s1cdd4y5cajamx6q2nrxc8sumpt'
//         initialValue={defaultValue}
//         init={{
//             initialValue: defaultValue,
//             height: 500,
//             menubar: true,
//             plugins: [
//                 "image",
//                 "advlist",
//                 "autolink",
//                 "lists",
//                 "link",
//                 "image",
//                 "charmap",
//                 "preview",
//                 "anchor",
//                 "searchreplace",
//                 "visualblocks",
//                 "code",
//                 "fullscreen",
//                 "insertdatetime",
//                 "media",
//                 "table",
//                 "code",
//                 "help",
//                 "wordcount",
//                 "anchor",
//             ],
//             toolbar:
//             "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
//             content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"
//         }}
//         onEditorChange={onChange}
//         />
//     )}
//     />

//     </div>
//   )
// }

// apiKey='b40w3zwtk1wfye023yu85s1cdd4y5cajamx6q2nrxc8sumpt'


import React from 'react'
import {Editor } from '@tinymce/tinymce-react';
import {Controller } from 'react-hook-form';


export default function RTE({name, control, label, defaultValue =""}) {
  return (
    <div className='w-full'> 
    {label && <label className='inline-block mb-1 pl-1'>{label}</label>}

    <Controller
    name={name || "content"}
    control={control}
    render={({field: {onChange}}) => (
        <Editor
        apiKey='b40w3zwtk1wfye023yu85s1cdd4y5cajamx6q2nrxc8sumpt'
        initialValue={defaultValue}
        init={{
            initialValue: defaultValue,
            height: 500,
            menubar: true,
            plugins: [
                "image",
                "advlist",
                "autolink",
                "lists",
                "link",
                "image",
                "charmap",
                "preview",
                "anchor",
                "searchreplace",
                "visualblocks",
                "code",
                "fullscreen",
                "insertdatetime",
                "media",
                "table",
                "code",
                "help",
                "wordcount",
                "anchor",
            ],
            toolbar:
            "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
            content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"
        }}
        onEditorChange={onChange}
        />
    )}
    />

     </div>
  )
}
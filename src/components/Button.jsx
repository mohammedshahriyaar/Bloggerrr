// import React from 'react'

// function Button({
//     children,
//     type ="button",
//     bgColor="bg-blue-700",
//     textColor ="text-white",
//     className="",
//     ...props
// }) {
//   return (
//     <button className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className}`} {...props}>
//         {children}
//     </button>
//   )
// }


// // this is a common button component

// export default Button



import React from "react";

export default function Button({
    children,
    type = "button",
    bgColor = "bg-blue-600",
    textColor = "text-white",
    className = "",
    ...props
}) {
    return (
        <button className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className}`} {...props}>
            {children}
        </button>
    );
}
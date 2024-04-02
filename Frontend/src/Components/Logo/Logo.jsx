import React from "react";

function Logo({name}) {
    return (
        <h1 className="font-bold text-4xl font-serif italic "> <span className="text-red-600 text-5xl hover:text-white ">D</span><span className="text-black">ream</span>  <span className="text-red-600 text-5xl hover:text-white">J</span><span className="text-black">ob</span>{name}</h1>
    )
}

export default Logo;
import React, { useEffect, useState } from 'react'
import {ChevronLeft,ChevronRight} from 'react-feather'

const Slider = ({children: slide, autoSlide = false, autoSlideInterval = 2000}) => {
  // const test = document.getElementById("slide");
  // test.addEventListener("mouseenter",()=>{
  //   alert("helloo..");
  // })
  // const hover = ()=>{
  // }
  const [current,setCurrent] = useState(0)

  const prev = () => setCurrent((current)=>(current === 0 ? slide.length - 1 : current - 1))

  const next = () => setCurrent((current) => (current === slide.length - 1 ? 0 :current +1))

  useEffect(()=>{
    if(!autoSlide) return
    const slideInterval = setInterval(next, autoSlideInterval)
    return ()=> clearInterval(slideInterval)
  },[])

  return (
    <div className='opacity-95 overflow-hidden relative rounded-2xl  border-b-8 border-r-8 border-purple-600 shadow-xl shadow-zinc-800'>
      <div id='slide'  className='flex transition-transform ease-out duration-700' style={{transform:`translateX(-${current * 100}%)`}}>
        {slide}
      </div>

      <div className='absolute inset-0 flex items-center justify-between p-4'>
        <button onClick={prev} className='p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white hover:scale-125'>
          <ChevronLeft />
        </button>
        <button onClick={next} className='p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white hover:scale-125  '> 
          <ChevronRight  />
        </button>
      </div>
      <div className='absolute bottom-4 right-4 left-0'>
        <div className='flex items-center justify-center gap-2'>
          {slide.map((s,i)=>(
            <div 
              onClick={()=>{
                setCurrent(i);
              }}  
              key={i} className={`transition-all w-2.5 h-2.5 bg-zinc-800 rounded-full ${current === i ? "px-2.5" : "bg-opacity-50"}`}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Slider

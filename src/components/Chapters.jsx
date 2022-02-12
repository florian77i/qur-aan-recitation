import React from 'react';
import {useState} from 'react'
const Chapters = ({chapters ,chapterHandler}) => {
  const [activeId,setActiveId] = useState('')
  return(
    <div className=' '>
       <div className='  border-b border-black '> 
 
      <h1 className='mx-12 p-2 font-bold font-Brr   p-2 ' > Chapters</h1> 
     
      </div>
 <ul className='list-item   border-b border-black p-2'>
   {chapters && chapters.length > 0 ?
     chapters.map((chapter) => (
      <div key={chapter.id}>
      <li  onClick={(e)=> {
        chapterHandler(chapter)
        setActiveId(chapter.id)
      }}
       className={`flex items-center   border-b border-black active:text-secondary  hover:bg-cyan-900  rounded-md ${activeId===chapter.id && 'active:text-secondary  hover:bg-cyan-900  rounded-md'}`}>
        <span>{chapter.id_arabic}</span> <hr/>
        <span className='p-2 m-2 font-nunito  font-bold  cursor-text  '>{chapter.name_arabic}
        </span>{''} 
      </li>
 </div>
     )):(<div className=' flex items-center'>
       <span></span>
     </div>
     )
  }

    
 </ul>  
     

  </div>);
};

export default Chapters;

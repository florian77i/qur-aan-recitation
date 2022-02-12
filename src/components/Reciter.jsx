
import {FaUserCircle} from 'react-icons/fa'
import {useState} from 'react'
const Reciter = ({reciters,reciterHandler}) => {
  const [activeID ,setActiveid] = useState('')
  return (

<div className=' '>
  
       <div className=' flex justify-items-end items-center border-b border-black '> 
      <h1 className='mx-12 p-2 font-bold font-nunito  tracking-wider ' > Reciters</h1> 
     </div>
     <ul className='  list-item   border-b border-black p-2'>
      
      {reciters && reciters.length >0 ?(
        reciters.map((reciter) =>( 
         
     <div key={reciter.id}> 
        <li onClick={(e)=> 
        {reciterHandler(reciter) 
          setActiveid(reciter.id)
        }} className={`flex   items-center  border-b border-black ${reciter.id === activeID&& 'active:text-secondary'}`}>
         
         <FaUserCircle className='' />  
        <span className=' p-2 m-2 font-nunito  font-bold  cursor-text  hover:active:text-secondary'> {reciter.name}</span> <hr/>
        </li>
        
        </div>
              

      ))
     
    
      ):
       (<>
       </>) }
      
       </ul> 
      
    
 
 
     </div>



);

};

export default Reciter;








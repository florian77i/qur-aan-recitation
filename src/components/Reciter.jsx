
import {FaUserCircle} from 'react-icons/fa'

const Reciter = ({reciters}) => {
 
  return (

<div className=' '>
  
       <div className='  border-b border-black '> 
      <h1 className='mx-12 p-2 font-bold font-Brr   p-2 ' > reciters</h1> 
     </div>
     <ul className='  list-item   border-b border-black p-2'>
      
      {reciters && reciters.length >0 ?(
        reciters.map((reciter) =>( 
         
     <div>
        <li className='flex justify-between  items-center'>
         
         <FaUserCircle />
        <span> abdiladiif alxawdiayn</span>
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








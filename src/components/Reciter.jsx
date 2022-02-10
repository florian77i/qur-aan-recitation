import React from 'react';
import {FaUserCircle} from 'react-icons/fa'

const Reciter = ({reciters}) => {
  return (
    <>
     <div className='  border-b border-black '> 
 
 <h1 className='mx-12 p-2 font-bold font-Brr   p-2 ' > Reciters</h1> 
 <ul className='  list-item   border-b border-black p-2'></ul>
   
    <div>
    <li className='flex justify-between  items-center '>
      <FaUserCircle className='  text-sm ' /> <hr/>
      <span  className=' font-Brr   font-bold cursor-pointer active:text-yellow-600 '> 
       Abdelbari Al-Toubayti</span>
    </li>
   </div>
  
 
</div>

 
</ul>


    

</>
);
};

export default Reciter;

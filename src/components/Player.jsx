import React from 'react';
import ReactPlayer from 'react-player';

const Player = () => {
  return (
    
      <div className='text-white  p-2'>
       <div className='  mx-32 '>
   
   <h1 className='mx-12 px-2 text-white font-bold font-Brr   p-2 ' >Player</h1> 
  
   </div><hr/>
  <ul className='  list-item  '>
   <div>
        <li className='flex justify-between  items-center  my-2 p-2 '>
          <span>Reciter:</span> <hr/>
          <span  className=' font-Brr   font-bold cursor-pointer active:text-yellow-600 '>  Abdelbari Al-Toubayti</span>
        </li><hr/>
        <li className='flex justify-between  items-center   my-2 p-2 '>
          <span>chapters in arabic</span> <hr/>
          <span  className=' font-Brr   font-bold cursor-pointer active:text-yellow-600 '> سورة المائدة</span>
        </li><hr/>
        <li className='flex justify-between  items-center  my-2 p-2'>
          <span>chapters in english</span> <hr/>
          <span  className=' font-Brr   font-bold cursor-pointer active:text-yellow-600 '>  Al-Ma'idah</span>
        </li><hr/>
        <li className='flex justify-between  items-center  my-2 p-2'>
          <span>revalation place </span> <hr/>
          <span  className=' font-Brr   font-bold cursor-pointer active:text-yellow-600 '> madina</span>
        </li><hr/>

   </div>
  </ul>  
  
  
  <div>
    <ReactPlayer url={"ss"} controls={true} playing={true} width='100%' height='30%' /> 
  </div>
  
      
  
  </div>
);
};

export default Player;

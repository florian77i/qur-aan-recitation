import React from 'react';
import ReactPlayer from 'react-player';

const Player = ({reciterDetail, chapterDetail}) => {

  const audioLink=(reciter,number) =>{
    return reciter + '/' + ('00' + number).slice(-3)+ '.mp3';
  }
  return (
    
      <div className='text-white  p-2'>
       <div className='  mx-32 '>
   
   <h1 className='mx-12 px-2 text-white font-bold font-Brr   p-2 ' >Player</h1> 
  
   </div><hr/>
   
   {reciterDetail !== null && chapterDetail!== null ? (
     <ul>
    <div>
    <li className='flex justify-between  items-center  my-2 p-2 '>
      <span>Reciter:</span> <hr/>
      <span  className=' font-Brr   font-bold cursor-pointer active:text-yellow-600 '>  {reciterDetail.name}</span>
    </li><hr/>
    <li className='flex justify-between  items-center   my-2 p-2 '>
      <span>chapters in arabic</span> <hr/>
      <span  className=' font-Brr   font-bold cursor-pointer active:text-yellow-600 '> {chapterDetail.name_arabic}</span>
    </li><hr/>
    <li className='flex justify-between  items-center  my-2 p-2'>
      <span>chapters in english</span> <hr/>
      <span  className=' font-Brr   font-bold cursor-pointer active:text-yellow-600 '> {chapterDetail.name_complex}</span>
    </li><hr/>
    <li className='flex justify-between  items-center  my-2 p-2'>
      <span>revalation place </span> <hr/>
      <span  className=' font-Brr   font-bold cursor-pointer active:text-yellow-600 '> {chapterDetail.revelation_place}</span>
    </li><hr/>
    <li className='flex justify-between  items-center  my-2 p-2'>
      <span>translated Name </span> <hr/>
      <span  className=' font-Brr   font-bold cursor-pointer active:text-yellow-600 '> {chapterDetail.translated_name.name}</span>
    </li><hr/>
</div>

<div>
    <ReactPlayer
     url={
       audioLink(reciterDetail.server ,chapterDetail.id)
     }
      controls={true} playing={true} width='100%' height='10%' /> 
  </div>
  </ul>

   ): (
     <div>
       <span></span>
   </div>
   ) }
  
  
 
   

  
 </div>
);
};

export default Player;

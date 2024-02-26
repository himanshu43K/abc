// src\Components\Genderbanner.js
import React from 'react';
import img1 from '../images/Gender_banner/img1.webp';
import './Genderbanner.css';  // Import the CSS file for styles

function Genderbanner() {
  return (
    <>
      <div className='h-[30px] bg-gradient-to-r from-[rgb(245,245,245)]'></div>
      <div className='m-[20px] bg-red-500 h-[300px]'>
        <img src={img1} alt='Confident pose' className='responsive-image' />
      </div>
      <div className='bottom-container '>
        <div className="text-[40px] text-[#142E8E] mt-[50px]">OMG! DEALS</div>
        <p className='text-[#142E8E]'>MEDAL-WORTHY BRANDS TO SHIRTS</p>
      </div>
    </>
  );
}

export default Genderbanner;

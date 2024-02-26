import React from 'react'
import img2 from '../images/Categories/img2.webp'
import img3 from '../images/Categories/img3.webp'
import img4 from '../images/Categories/img4.webp'
import img5 from '../images/Categories/img5.webp'
import img6 from '../images/Categories/img6.webp'
import img7 from '../images/Categories/img7.webp'

function Categories (){
  return (
    <div>
    <div className='flex flex-row'>
    <div>
        <img src ={img2}></img>
    </div>
    <div>
    <img src ={img3}></img>
    </div>
    <div>
    <img src ={img4}></img>
    </div>
    <div>
    <img src ={img5}></img>
    </div>
    <div>
    <img src ={img6}></img>
    </div>
    <div>
    <img src ={img7}></img>
    </div>
    </div>
    <div className='flex flex-col items-center mb-[20px] mt-[20px]'>
        <div className="text-[40px] text-[#142E8E]">FOR THE LOVE OF SIBLINGS</div>
        <p className='text-[#142E8E]'>RAKSHABANDHAM GIFTS THIS WAY</p>
      </div>
    </div>
  )
}

export default Categories

import React from 'react'
import img1 from '../images/Categories2/img1.webp'
import img2 from '../images/Categories2/img2.webp'
import img3 from '../images/Categories2/img3.webp'
import img4 from '../images/Categories2/img4.webp'
import img5 from '../images/Categories2/img5.webp'
import img6 from '../images/Categories2/img6.webp'

function Categories2 (){
  return (
    <div>
    <div  className='flex flex-row'>
        <div>
            <img src ={img1}></img>
        </div>
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
    </div>
    <div className='flex flex-col items-center mb-[20px] mt-[20px]'>
        <div className="text-[40px] text-[#142E8E]">SHOP BY CATEGORIES</div>
        
      </div>
    </div>
  )
}

export default Categories2

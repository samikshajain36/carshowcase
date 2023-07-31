'use client';
import { CustomButtonProps } from '@/types'
import Image from 'next/image'

const CustomButton = ({title,btnType, customStyle,handleClick}:CustomButtonProps) => {
  return (
    <div>
        <button 
        disabled={false}
        type={btnType||'button'}
        className={`custom-btn ${customStyle}`}
        onClick={handleClick}
        >{title}</button>
    </div>
  )
}

export default CustomButton

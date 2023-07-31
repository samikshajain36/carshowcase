import { footerLinks } from '@/Contants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-col text-black-100 mt-5 border-t border-gray-100'>
      <div className='flex flex-col md:flex-col  mt-5 justify-between flex-wrap gap-5 sm:px-16 px-6 py-12'>
        <div className='flex flex-col justify-start item-start gap-6'>
        <Image src="/logo.svg" alt="logo" width={118} height={18}/>
        <p className='light-gray-400 text-base flex justify-space-between'>Carhub 2023 <br/> All Right Reserve &copy;</p>
        </div>
        <div className='footer__links'>
          {footerLinks.map((link,index)=>(
            <div key={index} className='footer__link font-bold'>
              <h3>{link.title}</h3>
              {link.links.map((item)=>(
                <>
                <h3><Link href={item.url}>{item.title}</Link></h3> 
                </>
              ))}
            </div>
          ))}
          </div> 
      </div>

          <div className='flex justify-between gap-5 item-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 py-10'>
            <p>@2023 Carhub. All Rights Reserved</p>
            <div className='footer__copyrights-link'>
              <Link href='/'>Privacy Policy</Link>
            </div>
              <Link href='/'>Term and conditions</Link>
            

          </div>
    </div>
  )
}

export default Footer
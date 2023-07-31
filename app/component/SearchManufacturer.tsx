"use client"

import { ManufacturerProps } from '@/types'
import {Combobox, Transition} from '@headlessui/react'
import Image from 'next/image'
import { manufacturers } from '@/Contants'

import React, { useState } from 'react'

const SearchManufacturer = ({manufacturer, setManufacturer}:ManufacturerProps) => {
  const [query, setQuery] = useState("")
  const filtered = query === "" ? manufacturers : manufacturers.filter((item)=>(item.toLowerCase().replace(/\s+/g,"").includes(query.toLowerCase().replace(/\s+/g,""))))
  return (
    <div className='search-manufacturer'>
      <Combobox>
      <div className='relative'>
        <Combobox.Button className='absolute top-[14px]'>
        <Image src='/car-logo.svg'
        width={20} 
        height={20}
        alt='logo' />
        </Combobox.Button>
        <Combobox.Input className='search-manufacturer__input' placeholder='Volksswagen' displayValue={(manufacturer:string)=>manufacturer}
        onChange={(e)=> setQuery(e.target.value)}/>
        <Combobox.Options>
           {filtered.length==0 && query!=="" ? (
        <Combobox.Options
        value={query}
        className="search-manufacturer__option"
        >
crete "{query}"
        </Combobox.Options>
       ):(
        filtered.map((item)=>(
        <Combobox.Options
        key={item}
        className={({active}:any)=>` 
        relaive search-manufacturer__option
${active ? "bg-primary-blue text-white" : "text-gray-900"}
        `}
        value={item}
        >
{item}
        </Combobox.Options>
        ))
       )}

        </Combobox.Options>
        </div>
        </Combobox>
    </div>
  )
}

export default SearchManufacturer
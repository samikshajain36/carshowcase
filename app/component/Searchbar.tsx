"use client"
import {useState} from 'react';
import {SearchManufacturer} from './'

const Searchbar = () => {
  const [manufacturer, setManufacturer] = useState("");
  const handleOnSubmit=()=>{

  }
  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <div className='searchbar__item'>
          <SearchManufacturer 
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
          />
        </div>
      </form>
    </div>
  )
}

export default Searchbar
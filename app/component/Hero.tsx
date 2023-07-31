'use client';
import Image from 'next/image'
import CustomButton from './CustomButton'
import Searchbar from './Searchbar';
import CustomFilter from './CustomFilter';

const Hero = () => {
    const handleSroll=()=>{

    }
  return (
    <main className='overflow-hidden'>
    <div className='hero'>
        <div className='flex-1 pt-36 padding-x'>
        <h1 className='hero__title'>
            find, book, or rent the car -- quickly and easily!
        </h1>
        <p className="hero__subtitle">
          Streamline your car rental experience with our effortless booking
          process.
        </p>
        <CustomButton
        title='Explore cars'
        customStyle='bg-primary-blue text-white rounded-full mt-10'
        handleClick={handleSroll}
        />
         </div>
        <div className='hero__image-container'>
            <div  className='hero__image'>
                <Image src="/hero.png" alt='hero' fill className='object-contain'/>
                <div  className='hero__image-overlay mt-4 ' ></div>
            </div>
        </div>
        <div className='padding-x padding-y mt-12 'id='discover'>
          <div className='home__text-container'>
          <h3 className='text-4xl font-extrabold'>Car container</h3>
          <p>Explore the cars you might like</p>
          </div>
        </div>
        <div className='home__filters'>
        <Searchbar/>
        </div>
        <div className='home__filter-container'>
          <CustomFilter title="fuel"/>
          <CustomFilter title="year"/>

        </div>
    </div>
    </main>
  )
}

export default Hero
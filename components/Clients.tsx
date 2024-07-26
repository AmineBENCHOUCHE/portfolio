import React from 'react'
import { InfiniteMovingCards } from './ui/InfiniteMovingCards'
import { technologies, testimonials } from '@/data'

const Clients = () => {
    return (
        <div className='py-20'>
            <h1 className='heading'>Kind words from  {''}
                <span className='text-purple'>satisfied clients</span>
            </h1>
            <div id="testimonials" className='flex flex-col items-center max-lg:mt-10 '>
                <InfiniteMovingCards items={testimonials} direction='right' speed='slow' />

                {/* //TODO  Change companies by technologies */}
                <div className='flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg mt-10 '>
                    {technologies.map(({ id, img, name, nameImg }) => (
                        <div key={id} className='flex items-center  justify-center md:max-w-60 maw-w-32 gap-4'>
                               <img src={img} alt={name} className='md:w-10 w-5' />
                               <img src={nameImg} alt={name} className='md:w-24 w-20'/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Clients

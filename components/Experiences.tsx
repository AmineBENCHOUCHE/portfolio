import { workExperience } from '@/data'
import React from 'react'
import { Button } from './ui/Button'

const Experiences = () => {
    return (
        <div className='py-20'>
            <h1 className='heading'>My {''}
                <span className='text-purple'>Work Experience</span>
            </h1>
            <div id="experiences" className='w-full  mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10'>
                {workExperience.map(({ id, title, thumbnail, desc }) => (
                    <Button key={id} borderRadius='1.75rem'
                        duration={Math.floor(Math.random() * 10000) + 5000}
                        className='flex-1 border-neutral-200 dark:border-slate-800 text-white p-2'>
                        <div className='flex lg:flex-row flex-col lg:item-center p-3 py6 md:p-5 lg:p-10 gap-2  '>
                            <img src={thumbnail} alt={thumbnail} className='lg:w-32 md:w-20 w-16' />

                        </div>
                        <div className='lg:ms-5'>

                            <h2 className='text-start text-xl md:text-2xl font bold '>{title}</h2>
                            <p className='text-start text-md mt-3 text-white-100 font-semibold'>{desc}</p>
                        </div>
                    </Button>
                ))}
            </div>
        </div>
    )
}

export default Experiences

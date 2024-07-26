import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa6'
import { socialMedia } from '@/data'

const Footer = () => {
  return (
    <footer className="w-full pb-10 mb-[100px] md:mb-5" id="contact">
        {/* <div className='w-full absolute left-0 -bottom-72 min-h-96'>
            <img src="/footer-grid.svg" alt="grid" className='w-full h-full opacity-35' />
        </div> */}
        <div className='flex flex-col items-center'>
            <h1 className='text-center'>Ready to take 
                <span className="text-purple"> your </span>
                digital presence to the next level?
            </h1>
            <p className='text-white-200  text-center md:mt-10 my-5'>Reach to me today and let&apos;s discuss further around a coffee how can I help you achieve your goals</p>
            <a href="mailto:amine.benchouche@gmail.com">
                <MagicButton title='Let&apos;s get in touch' icon={<FaLocationArrow/>} position='right'/>
            </a>

        </div>
        <div className='flex mt-16 md:flex-row justify-between items-center'>
            <p className="md:text-base md:font-normal text-sm text-light mr-2">Copyright ©2024 Amine</p>
            <div className='flex items-center justify-center md:gap-3 gap-4'>
                {socialMedia.map(({id, img}) => (
                    <div key={id} className='w-10 h-10 cursor-pointer flex items-center justify-center backdrop-filter backdrop-blur-lg saturate-180 rounded-lg border border-white/[0.2] bg-black-200 bg-opacity-70'>
                        <img src={img} alt={img} />
                    </div>
                ))
                }
            </div>
        </div>
      
    </footer>
  )
}

export default Footer

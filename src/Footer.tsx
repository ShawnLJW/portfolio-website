import { EnvelopeIcon } from '@heroicons/react/20/solid'

function Footer() {
    return (
        <div className='px-4 py-6 dark:bg-zinc-800 dark:text-white lg:px-32'>
            <div className='md:flex gap-10'>
                <div className='mb-6 max-w-lg lg:mr-8'>
                    <h5 className='font-semibold'>
                        Get in touch
                    </h5>
                    <p className='mt-3 mb-2'>
                        I'm  passionate about machine learning and currently looking for internships.
                        Feel free to contact me!
                    </p>
                    <a href='mailto:thisisshawnlee@gmail.com' className='hover:text-zinc-600 dark:hover:text-zinc-400'>
                        <EnvelopeIcon className='h-6 w-6 mr-1 inline-block'/>
                        thisisshawnlee@gmail.com
                    </a>
                </div>
                <div className='mb-6 grow'>
                    <h5 className='font-semibold'>
                        Find me on
                    </h5>
                    <ul className='mt-3'>
                        <li>
                            <a href='https://www.linkedin.com/in/shawnljw/' className='hover:text-zinc-600 dark:hover:text-zinc-400'>
                                LinkedIn
                            </a>
                        </li>
                        <li>
                            <a href='https://github.com/ShawnLJW' className='hover:text-zinc-600 dark:hover:text-zinc-400'>
                                GitHub
                            </a>
                        </li>
                    </ul>
                </div>
                <div className='mb-6 grow'>
                    <h5 className='font-semibold'>
                        Browse
                    </h5>
                    <ul className='mt-3'>
                        <li>
                            <a href='/' className='hover:text-zinc-600 dark:hover:text-zinc-400'>
                                Home
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            
            <p className='text-zinc-600 mt-8 dark:text-zinc-400'>© Lee Jia Wei, Shawn</p>
        </div>
        
    )
}

export default Footer
import React from 'react'

const Aboutus = () => {
  return (
    <section className="py-6 bg-gray-50 sm:py-16 lg:py-24">
    <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="grid items-center grid-cols-1 gap-y-6 md:grid-cols-2 md:gap-x-20">
            <div className="">
                <h1 className='text-3xl italic text-orange-400 text-center'>WELCOME TO OUR CATERING COMPANY</h1>
                <h2 className="text-4xl font-bold leading-tight text-black sm:text-4xl lg:text-4xl">Our Story of Success.</h2>
                <p className="mt-4 text-base leading-relaxed text-gray-600 font-semibold">
                <span className='text-3xl font-serif'>2006 -</span> Silver service is oriented for a right-handed waiter. Thus to serve the food, the waiter stands behind the guest and to the guest’s left, holds or supports the platter with their left hand, and serves the food with their right hand. It is common for the waiter to hold the serving-fork above the serving-spoon both in the right hand, and use the fingers to manipulate the two as a pincer for picking up and transferring the food.
                </p>
            </div>

            <div className=" pl-20 pr-6 sm:pl-6 md:px-0">
                <div className="relative w-full max-w-xs mt-4 mb-10 ml-auto">
                 <img className="relative -top-4 -left-4" src="/images/service-3.jpg" alt="" />
                

                    
                    <div className="absolute -bottom-10 -left-16 m-2">
                        
                         
                          
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default Aboutus
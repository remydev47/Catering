import React from 'react'

const Menu = () => {

  return (
    <section className='py-10 bg-white sm:py-16 lg:py-24'>

      <div  className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl font-serif font-semibold leading-tight text-gray-400">
            WELCOME TO THE <br/> BEST CATERING SERVICES
          </h1>
        </div>
        <div className="relative mt-12 lg:mt-20">

          <div className="relative grid grid-cols-1 text-center gap-y-12 md:grid-cols-3 gap-x-12">
            <div>
              <div className="flex items-center justify-center w-60 h-60 mx-auto bg-blue-100 border-2 border-gray-200 rounded-full">
                <span className="text-xl font-semibold text-gray-700">
                    <img src='/images/menu1.jpg' className='h-full w-full ' />
                </span>
             </div>
             <h3 className="mt-6 text-2xl italic leading-tight text-gray-500 md:mt-10">Canapes</h3>
            </div>
          
          
            <div>
              <div className="flex items-center justify-center w-60 h-60 mx-auto bg-blue-100 border-2 border-gray-200 shadow">
                <span className="text-xl font-semibold text-gray-700">
                    <img src='/images/menu2.jpg' className='h-full w-full ' />
                </span>
             </div>
             <h3 className="mt-6 text-2xl italic leading-tight text-gray-500 md:mt-10">CockTails</h3>
            </div>
          
            <div>
              <div className="flex items-center justify-center w-60 h-60 mx-auto bg-blue-100 border-2 border-gray-200 shadow">
                <span className="text-xl font-semibold text-gray-700">
                    <img src='/images/menu3.jpg' className='h-full w-full ' />
                </span>
             </div>
             <h3 className="mt-6 text-2xl italic leading-tight text-gray-500 md:mt-10">Sweets & CapCakes</h3>
            </div>
         
            <div>
              <div className="flex items-center justify-center w-60 h-60 mx-auto bg-blue-100 border-2 border-gray-200 shadow">
                <span className="text-xl font-semibold text-gray-700">
                    <img src='/images/menu4.jpg' className='h-full w-full ' />
                </span>
             </div>
             <h3 className="mt-6 text-2xl italic leading-tight text-gray-500 md:mt-10">Drinks</h3>
            </div>
          </div>

        </div>

      </div>

    </section>
  )
}

export default Menu
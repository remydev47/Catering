import React from 'react'

const Team = () => {
  return (
    <section className="py-10 bg-white sm:py-16 lg:py-24">
    <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl lg:leading-tight">People who made it successful</h2>
            <p className="max-w-2xl mx-auto mt-4 text-xl text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis.</p>
        </div>

        <div className="grid grid-cols-1 gap-6 mt-8 sm:grid-cols-3 md:mt-16 lg:gap-x-12">
            <div>
                <img className="w-full rounded-full" src="/images/team1.jpg" alt="" />
                <h1 className='text-center font-bold text-3xl text-gray-400'>Amanda</h1>
                <p className='text-center text-base font-normal text-blue-400'>FOUNDER, CO-CHEF</p>
            </div>

            <div>
                <img className="w-full rounded-full" src="/images/team2.jpg" alt="" />
                <h1 className='text-center font-bold text-3xl text-gray-400'>Russel</h1>
                <p className='text-center text-base font-normal text-blue-400'>CHEF</p>
            </div>

            <div>
                <img className="w-full rounded-full" src="/images/team3.jpg" alt="" />
                <h1 className='text-center font-bold text-3xl text-gray-400'> Taylor</h1>
                <p className='text-center text-base font-normal text-blue-400'>CATERER</p>
            </div>

            <div>
                <img className="w-full rounded-full" src="/images/team4.jpg" alt="" />
                <h1 className='text-center font-bold text-3xl text-blue-900'>Jener</h1>
                <p className='text-center text-base font-normal text-blue-400'>CATERER</p>
            </div>
        </div>

        <div className="mt-8 text-center md:mt-16">
            <a href="#" title="" className="inline-flex items-center justify-center py-4 font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md px-14 hover:bg-blue-700 focus:bg-blue-700" role="button">VIEW WHOLE TEAM</a>
        </div>
    </div>
</section>
  )
}

export default Team
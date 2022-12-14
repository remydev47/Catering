'use client';
import React from 'react'

const Pricing = () => {
  return (
    <section className="bg-[#fff] sm:py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className='max-w-2xl mx-auto text-center'>
            <p className="max-w-xl mx-auto mt-4 text-4xl font-semibold leading-relaxed text-orange-400">
              No Extra Hidden Charges!
            </p>
            <h2 className="text-xl font-bold leading-tight text-gray-400">...our Pricing...</h2>
          </div>

          <div className="grid max-w-md grid-cols-1 gap-6 mx-auto mt-8 text-center lg:max-w-full lg:mt-16 lg:grid-cols-3">

          <div className="overflow-hidden bg-gray-300 border-2 border-gray-100 rounded-md">
                <div className="p-8 xl:px-12">
                    <h3 className="text-3xl font-semibold text-gray-700">Standard</h3>
                   
                    <p className="text-5xl font-bold text-black mt-7">ksh 4,890</p>
                    <p className="mt-3 text-base text-gray-600">One-time payment</p>

                    <ul className="inline-flex flex-col items-start space-y-5 text-left mt-9">
                     We will be more than happy to work for <br/> you during a family or a business picnic
                    </ul>

                    <a href="#" title="" className="inline-flex items-center justify-center px-10 py-4 mt-10 text-base font-semibold text-white transition-all duration-200 bg-orange-500 rounded-md" role="button"> Get full access </a>
                    <p className="mt-4 text-sm text-gray-500">Satisfaction Guarantee</p>
                </div>
            </div>

            <div className="overflow-hidden bg-gray-300 border-2 border-gray-100 rounded-md">
                <div className="p-8 xl:px-12">
                    <h3 className="text-3xl font-semibold text-gray-700">Premium</h3>
                   
                    <p className="text-5xl font-bold text-black mt-7">ksh 6,700</p>
                    <p className="mt-3 text-base text-gray-600">One-time payment</p>

                    <ul className="inline-flex flex-col items-start space-y-5 text-left mt-9">
                    Social events are highly <br/> important to our clients, and   we guarantee perfect service–
                    </ul>

                    <a href="#" title="" className="inline-flex items-center justify-center px-10 py-4 mt-10 text-base font-semibold text-white transition-all duration-200 bg-orange-500 rounded-md" role="button"> Get full access </a>
                    <p className="mt-4 text-sm text-gray-500">Satisfaction Guarantee</p>
                </div>
            </div>

            <div className="overflow-hidden bg-gray-300 border-2 border-gray-100 rounded-md">
                <div className="p-8 xl:px-12">
                    <h3 className="text-3xl font-semibold text-gray-700">Enterprice</h3>
                   
                    <p className="text-5xl font-bold text-black mt-7">ksh 8,500</p>
                    <p className="mt-3 text-base text-gray-600">One-time payment</p>

                    <ul className="inline-flex flex-col items-start space-y-5 text-left mt-9">
                    A private dining room, <br/> or a penthouse catering is one of our many great services
                    </ul>

                    <a href="#" title="" className="inline-flex items-center justify-center px-10 py-4 mt-10 text-base font-semibold text-white transition-all duration-200 bg-orange-500 rounded-md" role="button"> Get full access </a>
                    <p className="mt-4 text-sm text-gray-500">Satisfaction Guarantee</p>
                </div>
            </div>

          </div>

        </div>

    </section>
  )
}

export default Pricing
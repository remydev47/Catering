import React from 'react'


const menu =[
  {
    title:"Canapes",
    image:"/images/menu1.jpg"
  },
  {
    title:"Cocktails",
    image:"/images/menu2.jpg"
  },
  {
    title:"Sweets & Capcakes",
    image:"/images/menu3.jpg"
  },
  {
    title:"Drinks",
    image:"/images/menu4.jpg"
  },
]

const Menu = () => {

  return (
    <section className='py-10 bg-white sm:py-16 lg:py-24'>

      <div  className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl font-serif font-semibold leading-tight text-gray-400">
            WELCOME TO THE <br/> BEST CATERING SERVICES
          </h1>
        </div>

      </div>

    </section>
  )
}

export default Menu
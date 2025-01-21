import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import Header from './Header'
import Footer from './Footer'

const HomePage = () => {
  return (
    <div className='min-h-screen flex flex-col'>
      <Header />
      <main className='flex-grow'>
        <div className="bg-[#F5F5F5] py-2 text-sm font-sans">
          <p className="text-center font-bold">
            Hello Nike App
          </p>
          <p className="text-center">
            Download the app to access everything Nike.{" "}
            <Link href="#" className="underline font-bold">
              Get Your Great
            </Link>
          </p>
        </div>

        {/* Hero Section */}
        <section className='px-4 sm:px-6 lg:px-12'>
          <div className='relative aspect-w-16 aspect-h-9 mb-8'>
            <Image
              src="/image/Image (3).png" 
              alt="Sneaker"
              width={1540}
              height={1540}
              // layout="fill"
              objectFit="cover"
            />
          </div>
        
          <div className="text-center py-8">
            <p className="text-sm text-[#111111] uppercase font-bold tracking-widest mb-2">
              First Look
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl text-[#111111] font-bold mb-4">
              NIKE AIR MAX PULSE
            </h1>

            <p className="text-[#111111] text-base lg:text-lg max-w-2xl mx-auto mb-6">
              Extreme comfort. Hyper durable. Max volume. Introducing the Air Max
              Pulse—designed to push you past your limits and help you go to the
              max.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="px-6 py-3 bg-black text-[#FFFFFF] font-medium rounded-full hover:bg-gray-800 transition">
                Notify Me
              </button>
              <button className="px-6 py-3 bg-black text-[#FFFFFF] font-medium rounded-full hover:bg-gray-800 transition">
                Shop Air Max
              </button>
            </div>
          </div>
        </section>

        {/* Best of Air Max section */}
        <section className='px-4 sm:px-6 lg:px-12 my-8'>
          <div className='flex justify-between items-center mb-4'>
            <h2 className='text-2xl sm:text-3xl font-bold'>Best of Air Max</h2>
            <div className='flex items-center gap-2'>
              <Link href='#' className='font-bold rounded'>Shop</Link>
              <Link href="#">
                <Image
                  src="/image/Frame (13).png" 
                  alt="Skip"
                  width={40}
                  height={40}
                />
              </Link>
              <Link href="#">
                <Image
                  src="/image/Frame (12).png" 
                  alt="Skip"
                  width={40}
                  height={40}
                />
              </Link>
            </div>
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            {[
              { src: "/image/Image (9).png", title: "Nike Air Max Pulse", category: "Women's Shoes" },
              { src: "/image/Image (10).png", title: "Nike Air Max Pulse", category: "Men's Shoes" },
              { src: "/image/Image (11).png", title: "Nike Air Max 97 SE", category: "Women's Shoes" },
            ].map((product, index) => (
              <div key={index} className="border border-[#FFFFFF] rounded-md p-4">
                <div className="relative aspect-w-1 aspect-h-1 mb-4">
                  <Image
                    src={product.src || "/placeholder.svg"}
                    alt={product.title}
                    width={600}
                    height={600}
                    // layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium text-lg text-[#111111]">
                      {product.title}
                    </h3>
                    <p className="text-[#757575] text-sm">{product.category}</p>
                  </div>
                  <p className="font-bold text-[#111111]">₹ 13,995</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Section */}
        <section className='px-4 sm:px-6 lg:px-12 my-12'>
          <h2 className='text-2xl sm:text-3xl font-bold mb-4'>Featured</h2>
          <div className='relative aspect-w-16 aspect-h-9 mb-8'>
            <Image
              src="/image/Image (12).png"
              alt="Running Man"
              width={1540}
              height={1540}
              // layout="fill"
              objectFit="cover"
            />
          </div>
          <div className='text-center'>
            <h1 className="mt-8 text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111111]">
              STEP INTO WHAT FEELS GOOD
            </h1>
            <p className="mt-4 text-base lg:text-lg text-[#111111]">
              Cause everyone should know the feeling of running in that perfect
              pair!
            </p>
            <button className="mt-6 px-6 py-3 bg-[#111111] text-[#FFFFFF] font-medium rounded-full hover:bg-gray-800 transition">
              Find Your Shoe
            </button>
          </div>
        </section>

        {/* Gear Up section */}
        <section className='px-4 sm:px-6 lg:px-12 my-12'>
          <h2 className='text-2xl sm:text-3xl font-bold mb-4'>Gear Up</h2>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
            {['Mens', 'Womens'].map((category, index) => (
              <div key={index}>
                <div className='flex justify-between items-center mb-4'>
                  <Link href="#" className='font-bold'>Shop {category}</Link>
                  <div className='flex gap-2'>
                    <Link href="#">
                      <Image src='/image/Frame (11).png' alt='skip' width={40} height={40} />
                    </Link>
                    <Link href="#">
                      <Image src='/image/Frame (12).png' alt='skip' width={40} height={40} />
                    </Link>
                  </div>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                  {[13, 14, 15, 16].slice(index * 2, (index * 2) + 2).map((num) => (
                    <div key={num} className='mb-6'>
                      <div className='relative aspect-w-1 aspect-h-1 mb-4'>
                        <Image
                          src={`/image/Image (${num}).png`}
                          alt='Product'
                          width={300}
                          height={300}
                          // layout="fill"
                          objectFit="cover"
                        />
                      </div>
                      <div className='flex justify-between items-start'>
                        <div>
                          <p className="text-[#111111] font-medium">Nike Dri-FIT ADV TechKnit Ultra</p>
                          <p className="text-sm text-[#757575]">Men's Short-Sleeve Running Top</p>
                        </div>
                        <p className="text-[#111111] text-sm font-medium">₹ 2,495</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Don't Miss section */}
        <section className='px-4 sm:px-6 lg:px-12 my-12'>
          <h2 className='text-2xl sm:text-3xl font-bold mb-4'>Don't Miss</h2>
          <div className='relative aspect-w-16 aspect-h-9 mb-8'>
            <Image
              src="/image/Image (17).png" 
              alt="Don't Miss"
              width={1540}
              height={1540}
              // layout="fill"
              objectFit="cover"
            />
          </div>
          <div className='text-center'>
            <h1 className="mt-8 text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111111]">
              FLIGHT ESSENTIALS
            </h1>
            <p className="mt-4 text-base lg:text-lg text-[#111111]">
              Your built-to-last, all-week wears—but with style only Jordan Brand can deliver.
            </p>
            <button className="mt-6 px-6 py-3 bg-[#111111] text-[#FFFFFF] font-medium rounded-full hover:bg-gray-800 transition">
              Shop
            </button>
          </div>
        </section>

        {/* The Essentials section */}
        <section className='px-4 sm:px-6 lg:px-12 my-12'>
          <h2 className='text-2xl sm:text-3xl font-bold mb-4'>The Essentials</h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            {[19, 20, 18].map((num) => (
              <div key={num} className='relative aspect-w-1 aspect-h-1'>
                <Image
                  src={`/image/Image (${num}).png`}
                  alt='Essential'
                  width={1540}
                  height={1540}
                  // layout="fill"
                  // objectFit="cover"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Homepage Bottom Links */}
        <section className='grid grid-cols-2 sm:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-12 py-12'>
          {['Icons', 'Shoes', 'Clothing', 'Kids'].map((category, index) => (
            <div key={index} className='flex flex-col gap-4'>
              <p className='font-bold'>{category}</p>
              {['Air Force 1', 'Huarache', 'Air Max 90', 'Air Max 95'].map((item, i) => (
                <Link key={i} href="#" className='text-[#757575] text-sm'>{item}</Link>
              ))}
            </div>
          ))}
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default HomePage

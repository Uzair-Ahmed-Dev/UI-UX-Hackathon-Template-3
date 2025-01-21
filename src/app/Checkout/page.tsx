import React from "react"
import Image from "next/image"
import Link from "next/link"

const CheckoutPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header>
        <nav className="flex justify-between items-center px-4 sm:px-6 lg:px-12 py-4">
          <Link href="/">
            <Image src="/image/Frame (2).png" alt="Nike Logo" width={35} height={35} />
          </Link>

          <div className="flex items-center gap-6">
            <p className="font-bold hidden sm:block">000 800 100 9538</p>
            <Link href="">
              <Image src="/image/Frame (28).png" alt="Support" width="24" height="24" />
            </Link>
            <Link href="/CartPage">
              <Image src="/image/Auto Layout Horizontal (2).png" alt="Cart" width="50" height="50" />
            </Link>
          </div>
        </nav>
      </header>

      {/* main content */}
      <main className="flex-grow flex flex-col lg:flex-row justify-center gap-8 my-12 px-4 sm:px-6 lg:px-12">
        <section className="w-full lg:w-2/3 max-w-2xl">
          <h2 className="text-xl font-bold mb-4">How would you like to get your order?</h2>
          <p className="text-sm text-[#757575] mb-4">
            Customs regulation for India require a copy of the recipient's KYC. The address on the KYC needs to match
            the shipping address. Our courier will contact you via SMS/email to obtain a copy of your KYC. The KYC will
            be stored securely and used solely for the purpose of clearing customs (including sharing it with customs
            officials) for all orders and returns. If your KYC does not match your shipping address, please click the
            link for more information.
            <Link href="#" className="underline text-black ml-1">
              Learn More
            </Link>
          </p>

          <Link href="" className="flex items-center gap-4 px-4 py-3 border border-black font-medium rounded-xl mb-6">
            <Image src="/image/Frame (29).png" alt="Deliver" width={24} height={24} />
            Deliver It
          </Link>

          <h2 className="text-xl font-bold mb-4">Enter your name and address:</h2>

          <form className="space-y-4">
            {["First Name", "Last Name", "Address Line 1", "Address Line 2", "Address Line 3"].map((label) => (
              <input key={label} type="text" placeholder={label} className="w-full px-3 py-2 border-2 rounded-md" />
            ))}

            <div className="flex gap-4">
              <input type="text" placeholder="Postal Code" className="w-1/2 px-3 py-2 border-2 rounded-md" />
              <input type="text" placeholder="Locality" className="w-1/2 px-3 py-2 border-2 rounded-md" />
            </div>

            <div className="flex gap-4">
              <select className="w-1/2 px-3 py-2 border-2 rounded-md bg-transparent">
                <option>State/Territory</option>
              </select>
              <input type="text" value="Pakistan" className="w-1/2 px-3 py-2 border-2 rounded-md" readOnly />
            </div>

            <div className="space-y-2">
              <div className="flex items-center">
                <input type="checkbox" className="w-5 h-5 mr-2" />
                <p className="text-sm">Save this address to my profile</p>
              </div>
              <div className="flex items-center">
                <input type="checkbox" className="w-5 h-5 mr-2" />
                <p className="text-sm">Make this my preferred address</p>
              </div>
            </div>

            <h2 className="text-xl font-bold">What's your contact information?</h2>

            <div>
              <input type="email" placeholder="Email" className="w-full px-3 py-2 border-2 rounded-md" />
              <p className="text-sm text-[#757575] mt-1">A confirmation email will be sent after checkout.</p>
            </div>

            <div>
              <input type="tel" placeholder="Phone Number" className="w-full px-3 py-2 border-2 rounded-md" />
              <p className="text-sm text-[#757575] mt-1">A carrier might contact you to confirm delivery.</p>
            </div>

            <h2 className="text-xl font-bold">What's your PAN?</h2>

            <div>
              <input type="text" placeholder="PAN" className="w-full px-3 py-2 border-2 rounded-md" />
              <p className="text-sm text-[#757575] mt-1">
                Enter your PAN to enable payment with UPI, Net Banking or local card methods
              </p>
            </div>

            <div className="flex items-center">
              <input type="checkbox" className="w-5 h-5 mr-2" />
              <p className="text-sm text-[#757575]">Save PAN details to Nike Profile</p>
            </div>

            <div className="flex items-start">
              <input type="checkbox" className="w-5 h-5 mr-2 mt-1" />
              <p className="text-sm text-[#757575]">
                I have read and consent to eShopWorld processing my information in accordance with the
                <Link href="#" className="underline ml-1">
                  Privacy Statement and Cookie Policy
                </Link>
                . eShopWorld is a trusted Nike partner.
              </p>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-black text-white font-medium rounded-full hover:bg-gray-800 transition"
            >
              Continue
            </button>
          </form>

          <div className="space-y-4 mt-8">
            {["Delivery", "Shipping", "Billing", "Payment"].map((step) => (
              <p key={step} className="border-t-2 py-2">
                {step}
              </p>
            ))}
          </div>
        </section>

        {/* Order Summary */}
        <section className="w-full lg:w-1/3 max-w-md">
          <h2 className="text-xl font-bold mb-4">Order Summary</h2>
          <div className="space-y-2 mb-4">
            <div className="flex justify-between">
              <p className="text-sm text-[#8D8D8D]">Subtotal</p>
              <p className="text-sm text-[#8D8D8D]">₹ 20 890.00</p>
            </div>
            <div className="flex justify-between">
              <p className="text-sm text-[#8D8D8D]">Delivery/Shipping</p>
              <p className="text-sm text-[#8D8D8D]">Free</p>
            </div>
          </div>

          <div className="flex justify-between border-y-2 py-3 mb-2">
            <p className="font-bold">Total</p>
            <p className="font-bold">₹ 20 890.00</p>
          </div>

          <p className="text-xs mb-4">(The total reflects the price of your order, including all duties and taxes)</p>

          <div className="space-y-4">
            <p className="font-bold">Arrives Mon, 27 Mar - Wed, 12 Apr</p>
            {[
              { src: "/image/Image (13).png", title: "Nike Dri-FIT ADV TechKnit Ultra Mens Short-Sleeve Running Top" },
              { src: "/image/Image (15).png", title: "Nike Dri-FIT ADV TechKnit Ultra Mens Short-Sleeve Running Top" },
            ].map((product, index) => (
              <div key={index} className="flex gap-4">
                <div className="w-1/3 aspect-w-1 aspect-h-1">
                  <Image src={product.src || "/placeholder.svg"} alt={product.title} width={100} height={100} objectFit="cover" />
                </div>
                <div className="w-2/3">
                  <p className="font-bold text-sm">{product.title}</p>
                  <p className="text-xs text-[#8D8D8D]">Qty 1</p>
                  <p className="text-xs text-[#8D8D8D]">Size L</p>
                  <p className="text-xs text-[#8D8D8D]">₹ 3 895.00</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* checkout page footer section */}
      <footer className="flex justify-between items-center bg-[#111111] px-4 sm:px-6 lg:px-12 py-4">
        <div className="flex flex-col sm:flex-row justify-between items-center text-xs">
          <div className="mb-4 sm:mb-0">
            <Link href="#" className="text-white mr-2">
              Pakistan
            </Link>
            <span className="text-[#8D8D8D]">© 2025 Nike, Inc. All rights reserved.</span>
          </div>
          <div className="flex flex-wrap justify-center pl-4 gap-4 text-[#8D8D8D]">
            {/* <Link href="#">Guides</Link> */}
            <Link href="#">Terms of Sale</Link>
            <Link href="#">Terms of Use</Link>
            <Link href="#">Nike Privacy Policy</Link>
          </div>
        </div>
        <div className="flex flex-wrap justify-center sm:justify-end gap-2 mt-4">
          {[26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36].map((num) => (
            <Link key={num} href="">
              <Image src={`/image/Image (${num}).png`} alt="Payment method" width={45} height={27} />
            </Link>
          ))}
        </div>
      </footer>
    </div>
  )
}

export default CheckoutPage



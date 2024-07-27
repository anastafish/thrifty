"use client"

import Link from "next/link";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Hero = ({ session }) => {

    const notify = () => toast.warn("Signup first to be able to list items");

    return (
        <main className="container mx-auto px-4 py-8 flex flex-col gap-5">
            <ToastContainer />
  <section id="hero" className="text-center py-12 bg-green-100 rounded-lg mb-8">
    <h2 className="text-4xl font-bold text-green-800 mb-4">Your Closet's Second Life</h2>
    <p className="text-xl text-green-600 mb-6">Buy and sell pre-loved fashion with ease.</p>
    <div className="space-x-4 flex items-center justify-center gap-4">
      <Link href={'/shop'}>
        <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
          Start Shopping
        </button>      
      </Link>
      {session ? <Link href={'/list'}>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          List Your Items
        </button>      
      </Link> : <button 
      className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
      onClick={notify}
      >
        List Your Items
        </button>
        }
    </div>
  </section>

  <section id="features" className="mb-8">
    <h2 className="text-3xl font-semibold text-center mb-6">How To Use Thrifty?</h2>
    <div className="grid md:grid-cols-3 gap-6">
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-xl font-semibold mb-2 text-center">Create an Account</h3>
        <p className="text-center">Visit the Thrifty website and sign up using your Google account.</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-xl font-semibold mb-2 text-center">List Your Clothes</h3>
        <p className="text-center">Upload photos, add details (brand, size, price), and publish your listing.</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-xl font-semibold mb-2 text-center">Wait for Buyers</h3>
        <p className="text-center">Monitor notifications for offers, respond quickly, and follow the site’s instructions to finalize the sale.</p>
      </div>
    </div>
  </section>
  </main>
    )
}

export default Hero;
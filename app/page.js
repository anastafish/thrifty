import { auth, signIn } from "@/auth";
import Link from 'next/link';


export default async function Home() {

  const session = await auth()

  return (
    <main className="container mx-auto px-4 py-8 flex flex-col gap-5">
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
      </Link> :
      <form
      action={async () => {
        "use server"
        await signIn("google")
      }}
    >
    <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
      List Your Items
    </button>      
    </form>
      }
    </div>
  </section>

  <section id="features" className="mb-8">
    <h2 className="text-3xl font-semibold text-center mb-6">Why Choose Thrifty?</h2>
    <div className="grid md:grid-cols-3 gap-6">
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-xl font-semibold mb-2">Easy Listing</h3>
        <p>List your items in minutes with our simple interface.</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-xl font-semibold mb-2">Secure Payments</h3>
        <p>Shop with confidence using our secure payment system.</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-xl font-semibold mb-2">Wide Selection</h3>
        <p>Find unique pieces from thousands of closets.</p>
      </div>
    </div>
  </section>
  </main>
     );
}

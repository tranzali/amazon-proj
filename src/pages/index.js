import Head from 'next/head'
import Banner from '../components/Banner'
// import Banner2 from '../components/Banner2'
import Header from '../components/Header'
import ProductFeed from '../components/ProductFeed'
// import Header2 from '../components/Header2'

export default function Home({ products }) {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Amazon Build</title>
      </Head>

      <Header />
      {/* <Header2 /> */}
      
      <main className="max-w-screen-2xl mx-auto">
        <Banner />
        {/* <Banner2 /> */}
      
        <ProductFeed products={products} />
      </main>
      
    </div>
  )
}

export async function getServerSideProps(context) {
  const products = await fetch("https://fakestoreapi.com/products").then(
    (res)=>res.json()
  )

  return {
    props: {
      products,
    },
  }
}

// get data from fakestoreapi
// export async function getServerSideProps(context) {
//   const products = await fetch('https://fakestoreapi.com/products').then(
//     (res)=>res.json()
//   )

//   return { 
//     props: {
//       products,
//     },
//    }
// }

// pass products as props to Home function above, products now available to our components in the Home function

// GET https://fakestoreapi.com/products
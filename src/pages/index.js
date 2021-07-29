import Head from 'next/head'
import Banner from '../components/Banner'
import Header from '../components/Header'
// import Header2 from '../components/Header2'

export default function Home() {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Amazon Build</title>
      </Head>

      <Header />
      {/* <Header2 /> */}
      
      <main className="max-w-screen-2xl mx-auto">
        <Banner />
      
      {/* Product Feed */}
      </main>
      
    </div>
  )
}

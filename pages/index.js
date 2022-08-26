import Head from 'next/head'
import Image from 'next/image'
import Main from '../components/main'


export default function Home() {
  return (
    <div className = "min-h-screen p-10 flex flex-col bg-white">
      <Head>
       <title>Evan Lin</title>
       <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main/>
    </div>
  )
}

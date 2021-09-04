import Head from 'next/head'
import Image from 'next/image'
import Main from '../components/main'


export default function Home() {
  return (
    <div className = "flex flex-col ml-10 mr-10 mt-5 mb-5 ">
      <Head>
       <title>Evan Lin</title>
       <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main/>
    </div>
  )
}

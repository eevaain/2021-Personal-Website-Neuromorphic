import Head from 'next/head'
import Image from 'next/image'
import Main from '../components/main'


export default function Home() {
  return (
    <div className = " p-10 flex flex-col dark:bg-gray-900">
      <Head>
       <title>Evan Lin</title>
       <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main/>
    </div>
  )
}

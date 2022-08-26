import Head from 'next/head'
import Image from 'next/image'
import Main from '../components/main'


export default function Home() {
  return (
    <div className = "min-h-screen p-10 flex flex-col dark:bg-gray-900">
      <Head>
       <title>Evan Lin | Personal Website</title>
       <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main/>
    </div>
  )
}

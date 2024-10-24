import { Roboto } from 'next/font/google'

import Head from 'next/head';

import Center from './ui/center'
import Header from './ui/header'
import Footer from './ui/footer'

const roboto = Roboto({
  weight: '400',
  style: 'normal',
  subsets: ['latin']
})

export default function Page() {
  return (
    <main className={roboto.className}>
      <link rel="icon" href="/portfolio/favicon.ico" sizes="any" />
      <div>
        <Header
          GithubURL='https://github.com/luiz-otavio'
          LinkedinURL='https://www.linkedin.com/in/luizfarrea21/'
        />
        <Center />
        <Footer />
      </div>
    </main>
  )
}
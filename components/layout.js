import React from 'react'
import Head from "next/head";
import { Header } from './header';
import { Footer } from './footer';

export const Layout = ( {children, title = "Next", descritption = "GuitarLA"} ) => {
  return (
    <>
        <Head>
          <title>{ `GuitarLA - ${title}` }</title>
          <meta name="description" content={ descritption }/>
        </Head>

        <Header />
        {children}
        <Footer />
    </>
  )
}

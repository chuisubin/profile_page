import type { Metadata } from 'next'
import { languages } from '@/i18n/settings'
// import Layout from '../../layout'
import { dir } from 'i18next'
import { NextResponse } from 'next/server';
// import { ToastContainer } from 'react-toastify';


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};


export default function RootLayout({
  children,
  modal,
  params,
  
  
}: {
  children: React.ReactNode,
  modal:React.ReactNode,
  params?: { lng:string },
}) {
  const {lng}=params??{};
  return (
    <>
     {/* <Layout lng={lng??"en"} > */}
      {/* {modal} */}
      {children}
      {/* <ToastContainer /> */}
     {/* </Layout> */}

</>
  )
}
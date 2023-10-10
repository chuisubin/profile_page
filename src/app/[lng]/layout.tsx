import type { Metadata } from 'next'
import { languages } from '@/i18n/settings'
import { dir } from 'i18next'
import { NextResponse } from 'next/server';
import { Layout } from '@/components/layout';
// import { ToastContainer } from 'react-toastify';




export default function RootLayout({
  children,
  // modal,
}: {
  children: React.ReactNode,
  // modal:React.ReactNode,
}) {
  return (
    <>
     <Layout  >
      {/* {modal} */}
      {children}
      {/* <ToastContainer /> */}
     </Layout>

</>
  )
}
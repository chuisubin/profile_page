

import Image from 'next/image'
import Link from 'next/link'
import { Trans } from 'react-i18next/TransWithoutContext'
import { languages, fallbackLng } from '@/i18n/settings'
import { useTranslation } from '@/i18n'
import { Metadata, ResolvingMetadata } from 'next'
import data from '@data'
import { Landing } from '@/components/pageView/landing'


export const dynamic = 'force-static'
export const dynamicParams = false;



export async function generateMetadata(
  { params }: any,
): Promise<Metadata> {  
  const metaData = data.getData(params.lng).metadata; 
  return metaData.root;
}


const  Page=  async() =>{
  return (
    <main className=" min-h-screen  container mx-auto">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
     <Landing />

      </div>
    </main>
  )
}

export default Page
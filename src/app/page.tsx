

import Image from 'next/image'
import Link from 'next/link'
import { Trans } from 'react-i18next/TransWithoutContext'
import { languages, fallbackLng } from '@/i18n/settings'
import { useTranslation } from '@/i18n'
import { headers } from 'next/headers' 
import { match } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'
import { redirect } from 'next/navigation'
import { LocaleRedirect } from '@/components/LocaleRedirect'
import data from '@data'
import { Metadata } from 'next'
export const dynamic = 'force-static'
export const dynamicParams = false;


export async function generateMetadata(
  { params }: any,
): Promise<Metadata> {  
  const metaData = data.getData(params.lng).metadata; 
  return metaData.root;

}

const  Page=  async() =>{
  return <LocaleRedirect />
}


export default Page
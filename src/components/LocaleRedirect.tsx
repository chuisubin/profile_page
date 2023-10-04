"use client";

import { useEffect } from "react";
import { redirect } from 'next/navigation'
import Negotiator from "negotiator";
import { match } from '@formatjs/intl-localematcher'
import { fallbackLng, languages } from "@/i18n/settings";
// import { DarkModeProvider } from "@/hook/useDarkModeHook";

export const LocaleRedirect = () => {
  useEffect(()=>{
    const clientLanguages = navigator && (navigator?.language || (navigator as any)?.userLanguage);
    const matchedLanguage = clientLanguages?.[0]==="*"?fallbackLng :match(clientLanguages, languages, fallbackLng) 
  
    if(matchedLanguage){
      redirect(`/${matchedLanguage}`);
    }
  },[])
  return (
//   <DarkModeProvider>
    <div className="flex items-center justify-center w-[100dvw] h-[100dvh]">
      <span className="banner-highlight" title="Loading...">Loading...</span>
    </div>
//   </DarkModeProvider>
  )
}
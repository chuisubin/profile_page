"use client";

import { useEffect } from "react";
import { redirect } from "next/navigation";
import { match } from "@formatjs/intl-localematcher";
import { fallbackLng, languages } from "@/i18n/settings";
import { DarkModeProvider } from "@/hook/useDarkModeHook";

export const LocaleRedirect = () => {
  useEffect(() => {
    const clientLanguages =
      navigator && (navigator?.language || (navigator as any)?.userLanguage);
    const matchedLanguage =
      clientLanguages?.[0] === "*"
        ? fallbackLng
        : match(clientLanguages, languages, fallbackLng);

    if (matchedLanguage) {
      // redirect(`/${matchedLanguage}`);
      redirect(`/${fallbackLng}`);
    }
  }, []);
  return (
    <DarkModeProvider>
      <div className="flex items-center justify-center w-[100dvw] h-[100dvh]">
        <span
          className="text-white font-bold text-xl lg:text-3xl"
          title="Loading..."
        >
          Loading...
        </span>
      </div>
    </DarkModeProvider>
  );
};

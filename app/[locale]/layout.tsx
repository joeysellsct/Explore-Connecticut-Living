import type { ReactNode } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
export default async function LocaleLayout({children,params}:{children:ReactNode;params:Promise<{locale:string}>}){const {locale}=await params;if(!['en','es'].includes(locale))notFound();return <><nav><Link href='/en'>English</Link><Link href='/es'>Español</Link><Link href={`/${locale}/towns`}>Towns / Localidades</Link></nav>{children}</>}

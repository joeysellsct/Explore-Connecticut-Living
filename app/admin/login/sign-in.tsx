'use client';
import { createBrowserClient } from '@supabase/ssr';
import { useState } from 'react';
export function LoginButton(){
  const [error,setError]=useState('');
  async function signIn(){
    const url=process.env.NEXT_PUBLIC_SUPABASE_URL;
    const key=process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
    if(!url||!key){setError('Authentication has not been configured.');return;}
    const client=createBrowserClient(url,key);
    const result=await client.auth.signInWithOAuth({provider:'google',options:{redirectTo:window.location.origin+'/auth/callback'}});
    if(result.error)setError('Could not start Google sign-in.');
  }
  return <><button onClick={signIn}>Sign in with Google</button>{error&&<p role="alert">{error}</p>}</>;
}

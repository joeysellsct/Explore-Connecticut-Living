import { NextRequest, NextResponse } from 'next/server';
import { createServerClient } from '@supabase/ssr';

export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const code = url.searchParams.get('code');
  // Do not accept arbitrary redirect URLs from the request.
  const response = NextResponse.redirect(new URL('/admin', url.origin));
  if (!code) return NextResponse.redirect(new URL('/admin/login?error=missing_code', url.origin));
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;
  if (!supabaseUrl || !supabaseKey) return NextResponse.redirect(new URL('/admin/login?error=configuration', url.origin));
  const client = createServerClient(supabaseUrl, supabaseKey, {
    cookies: {
      getAll() { return request.cookies.getAll(); },
      setAll(values: { name: string; value: string; options?: Parameters<typeof response.cookies.set>[2] }[]) { values.forEach(({ name, value, options }) => { request.cookies.set(name, value); response.cookies.set(name, value, options); }); }
    }
  });
  const { error } = await client.auth.exchangeCodeForSession(code);
  if (error) return NextResponse.redirect(new URL('/admin/login?error=auth', url.origin));
  return response;
}

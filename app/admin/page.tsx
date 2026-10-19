import { redirect } from 'next/navigation';
import { createSupabaseServerClient } from '@/lib/supabase/server';
export const dynamic='force-dynamic';
export default async function AdminDashboard(){
  const client=await createSupabaseServerClient();
  const {data:{user},error}=await client.auth.getUser();
  if(error||!user)redirect('/admin/login');
  const {data:profile}=await client.from('admin_profiles').select('role,active').eq('user_id',user.id).maybeSingle();
  if(!profile?.active||!['owner','admin','editor','analyst'].includes(profile.role)){
    return <main><h1>Access denied</h1><p>This Google account is not an approved administrator.</p></main>;
  }
  return <main><h1>Explore Connecticut Living Admin</h1><p>Signed in as {user.email}</p><p>Role: {profile.role}</p><p>Dashboard modules will be added in the next milestone.</p></main>;
}

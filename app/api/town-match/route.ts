import {NextRequest,NextResponse} from 'next/server';
export async function POST(req:NextRequest){
 try {
 const d=await req.json();
 if(d.consent!==true||typeof d.name!=='string'||d.name.trim().length<2||typeof d.email!=='string'||!/^\S+@\S+\.\S+$/.test(d.email)||typeof d.phone!=='string'||d.phone.replace(/\D/g,'').length<10||!d.answers||!Array.isArray(d.matches))return NextResponse.json({error:'Invalid details'},{status:400});
 const key=process.env.FOLLOW_UP_BOSS_API_KEY;
 const systemKey=process.env.FOLLOW_UP_BOSS_SYSTEM_KEY;
 if(!key||!systemKey)return NextResponse.json({error:'Integration not configured'},{status:503});
 const parts=d.name.trim().split(/\s+/);
 const payload={source:'explore-connecticut-living-staging.joeysellsct.workers.dev',system:'Explore Connecticut Living',type:'General Inquiry',message:JSON.stringify({answers:d.answers,matches:d.matches,message:String(d.message||'').slice(0,2000)}),person:{firstName:parts.shift(),lastName:parts.join(' '),emails:[{value:d.email}],phones:[{value:d.phone}]}};
 const r=await fetch('https://api.followupboss.com/v1/events',{method:'POST',headers:{'Authorization':'Basic '+btoa(key+':'),'Content-Type':'application/json','X-System':'ExploreConnecticutLiving','X-System-Key':systemKey},body:JSON.stringify(payload)});
 if(r.status!==200&&r.status!==201)return NextResponse.json({error:'CRM submission failed'},{status:502});
 return NextResponse.json({ok:true});
 }catch{return NextResponse.json({error:'Submission failed'},{status:500});}
}

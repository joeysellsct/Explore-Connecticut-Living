import {NextRequest,NextResponse} from 'next/server';
export async function POST(req:NextRequest){
 try {
 const d=await req.json();
 if(d.consent!==true||typeof d.name!=='string'||d.name.trim().length<2||typeof d.email!=='string'||!/^\S+@\S+\.\S+$/.test(d.email)||typeof d.phone!=='string'||d.phone.replace(/\D/g,'').length<10||!d.answers||!Array.isArray(d.matches))return NextResponse.json({error:'Invalid details'},{status:400});
 const key=process.env.FOLLOW_UP_BOSS_API_KEY;
 const systemKey=process.env.FOLLOW_UP_BOSS_SYSTEM_KEY;
 if(!key||!systemKey)return NextResponse.json({error:'Integration not configured'},{status:503});
 const parts=d.name.trim().split(/\s+/);
 const labels:Record<string,Record<string,string>>={
 budget:{under300:'Under $300,000','300-450':'$300,000–$450,000','450-650':'$450,000–$650,000',over650:'$650,000+',unsure:'Not sure yet'},
 setting:{shore:'Coastal / shoreline',suburb:'Suburban',city:'City',country:'Rural / quieter area'},
 commute:{'new-haven':'Near New Haven',train:'Metro-North / rail access',flexible:'Flexible / remote work'},
 priority:{water:'Waterfront and beaches',walk:'Restaurants and downtown',quiet:'Space and quiet'},
 home:{single:'Single-family',condo:'Condo / townhome',multi:'Multi-family',unsure:'Open to options'}
 };
 const fields:[string,string][]=[['budget','Budget'],['setting','Preferred setting'],['commute','Commute'],['priority','Lifestyle priorities'],['home','Home types']];
 const readable=fields.map(([key,title])=>title+': '+(Array.isArray(d.answers[key])?d.answers[key].map((v:string)=>labels[key][v]||v).join(', '):'Not specified')).join('\n');
 const inquiry=['CONNECTICUT TOWN MATCH','',readable,'','RECOMMENDED TOWNS',...(d.matches as string[]).slice(0,4).map((town:string)=>'• '+town),'','VISITOR MESSAGE',String(d.message||'').trim().slice(0,2000)||'No additional message'].join('\n');
 const payload={source:'explore-connecticut-living-staging.joeysellsct.workers.dev',system:'ExploreConnecticutLiving',type:'General Inquiry',message:inquiry,person:{firstName:parts.shift(),lastName:parts.join(' '),emails:[{value:d.email}],phones:[{value:d.phone}]}};
 const r=await fetch('https://api.followupboss.com/v1/events',{method:'POST',headers:{'Authorization':'Basic '+btoa(key+':'),'Content-Type':'application/json','X-System':'ExploreConnecticutLiving','X-System-Key':systemKey},body:JSON.stringify(payload)});
 if(r.status!==200&&r.status!==201)return NextResponse.json({error:'CRM submission failed'},{status:502});
 return NextResponse.json({ok:true});
 }catch{return NextResponse.json({error:'Submission failed'},{status:500});}
}

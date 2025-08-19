client';
import { useState } from 'react';


export default function Dashboard(){
const [loading,setLoading]=useState(false);
return (
<main className="container" style={{padding:'40px 0'}}>
<h1>NudgeDesk Dashboard</h1>
<p className="muted">Start your 30-day trial (Gmail connect coming next).</p>
<div style={{display:'flex',gap:12,marginTop:16,flexWrap:'wrap'}}>
<a href="#" onClick={(e)=>e.preventDefault()} className="btn btn-ghost">Connect Gmail (coming)</a>
<button
onClick={async()=>{setLoading(true);const r=await fetch('/api/stripe/create-checkout-session',{method:'POST'});const j=await r.json();window.location.href=j.url;}}
disabled={loading}
className="btn btn-primary"
>{loading?'Redirecting…':'Start 30-day free trial'}</button>
</div>
</main>
);
}

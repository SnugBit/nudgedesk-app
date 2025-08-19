export default function Home(){
return (
<main className="container" style={{padding:'40px 0'}}>
<h1 style={{margin:0}}>NudgeDesk</h1>
<p className="muted">Open your dashboard to start a free trial.</p>
<div style={{marginTop:12, display:'flex', gap:12, flexWrap:'wrap'}}>
<a className="btn btn-primary" href="/dashboard">Open dashboard</a>
</div>
</main>
);
}

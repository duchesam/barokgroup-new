import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";
export default function Options(){
  return (
    <>
      <Header />
      <main className="section">
        <div className="container" style={{maxWidth:"980px"}}>
          <div className="card" style={{overflow:"hidden"}}>
            <div style={{display:"grid",gap:18,gridTemplateColumns:"1.2fr 1fr",alignItems:"center"}}>
              <div>
                <h1 style={{marginTop:0}}>Your Options if You’re Facing Foreclosure</h1>
                <p className="small">Acting early protects equity and credit. We’ll help you choose the right path.</p>
              </div>
              <img alt="Options" style={{width:"100%",borderRadius:12}} src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop"/>
            </div>
          </div>
          <div className="grid" style={{marginTop:18, gap:18}}>
            <div className="card"><h3 style={{marginTop:0}}>1) Reinstate the Loan</h3><p className="small">Bring the loan current to stop foreclosure fast.</p></div>
            <div className="card"><h3 style={{marginTop:0}}>2) Loan Modification</h3><p className="small">Adjust rate/term to make payments affordable.</p></div>
            <div className="card"><h3 style={{marginTop:0}}>3) Bankruptcy (Chapter 13)</h3><p className="small">Can pause foreclosure and structure a catch-up plan.</p></div>
            <div className="card"><h3 style={{marginTop:0}}>4) Sell Before Auction</h3><p className="small"><strong>Cash:</strong> close in 7–14 days. <strong>Concierge:</strong> market broadly to push toward market value.</p></div>
            <div className="card"><h3 style={{marginTop:0}}>5) “Subject-To”</h3><p className="small">We take over responsibility for the existing mortgage and prevent foreclosure.</p></div>
          </div>
          <div className="card" style={{marginTop:18}}>
            <h3 style={{marginTop:0}}>Talk Through Your Situation</h3>
            <p className="small">Call <a href="tel:+15712753720">(571) 275-3720</a> or email <a href="mailto:hello@barokgroup.org">hello@barokgroup.org</a>. We respond quickly.</p>
            <p className="small">Prefer to review terms first? Read our <Link href="/terms">Terms &amp; Conditions</Link>.</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

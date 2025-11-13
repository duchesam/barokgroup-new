import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Home(){
  return (
    <>
      <Header />
      <main className="section">
        <div className="container hero">
          <h1>Nationwide Foreclosure Help</h1>
          <p>
            Real options when you need them most. We help homeowners across the U.S.
            avoid foreclosure, stop auctions, and move forward — clearly and quickly.
          </p>
          <div style={{display:"flex",gap:12,flexWrap:"wrap",marginTop:14}}>
            <Link className="btn" href="/get-offer">Get a Cash Offer</Link>
            <Link className="btn secondary" href="/options">Explore Options</Link>
          </div>

          <div className="badges" style={{marginTop:18}}>
            <div className="badge">Fast decisions</div>
            <div className="badge">No commissions</div>
            <div className="badge">Nationwide network</div>
            <div className="badge">Transparent process</div>
          </div>
        </div>

        <div className="container" style={{marginTop:28}}>
          <div className="grid grid-3">
            <div className="card">
              <h3>Stop an Auction</h3>
              <p className="small">Coordinate reinstatement, postponement, or sale before the auction date.</p>
            </div>
            <div className="card">
              <h3>Sell for Cash (7–14 days)</h3>
              <p className="small">We can acquire quickly, or bring our network to get you stronger pricing.</p>
            </div>
            <div className="card">
              <h3>Creative Solutions</h3>
              <p className="small">“Subject-to” / buyback paths when keeping the existing rate makes sense.</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Options(){
  return (
    <>
      <Header />
      <main className="section">
        <div className="container">
          <h1 style={{marginTop:0}}>Your Options if You’re Facing Foreclosure</h1>
          <p className="small">
            You still have choices—and acting early usually protects equity, credit, and peace of mind.
            Below are real paths homeowners use. We’ll help you evaluate which one fits your timeline and goals.
          </p>

          <div className="grid grid-3" style={{marginTop:18}}>
            <div className="card">
              <h3>1) Reinstate the Loan</h3>
              <p className="small">Pay the full past-due amount (fees included) to bring the loan current and stop foreclosure.</p>
            </div>
            <div className="card">
              <h3>2) Loan Modification</h3>
              <p className="small">Adjust the rate/term to make payments affordable. Typical timelines ~45 days.</p>
            </div>
            <div className="card">
              <h3>3) Bankruptcy (Ch. 13)</h3>
              <p className="small">Can pause foreclosure and structure a catch-up plan. Consult a licensed attorney.</p>
            </div>
            <div className="card">
              <h3>4) Sell Before Auction</h3>
              <p className="small"><strong>Cash:</strong> close in 7–14 days. <strong>Concierge:</strong> we help postpone and market broadly.</p>
            </div>
            <div className="card">
              <h3>5) “Subject-To”</h3>
              <p className="small">We take over responsibility for the existing mortgage and prevent foreclosure.</p>
            </div>
          </div>

          <div className="card" style={{marginTop:18}}>
            <h3 style={{marginTop:0}}>Talk Through Your Situation</h3>
            <p className="small">
              No pressure—just clear answers. Call <a href="tel:+15712753720">(571) 275-3720</a> or email{" "}
              <a href="mailto:hello@barokgroup.org">hello@barokgroup.org</a>. We respond quickly and keep your info private.
            </p>
            <p className="small">Prefer to review terms first? Read our <Link href="/terms">Terms &amp; Conditions</Link>.</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

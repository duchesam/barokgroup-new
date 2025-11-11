import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";

export default function Options(){
  return (
    <>
      <Header />
      <main className="section">
        <div className="container" style={{maxWidth:"980px"}}>
          <div className="card"><h1>Your Options if You’re Facing Foreclosure</h1></div>
          <div className="card">
            <h3>Talk Through Your Situation</h3>
            <p className="small">
              No pressure—just clear answers. Call <a href="tel:+15712753720">(571) 275-3720</a> or email{" "}
              <a href="mailto:hello@barokgroup.org">hello@barokgroup.org</a>.
            </p>
            <p className="small">Prefer to review terms first? Read our <Link href="/terms">Terms &amp; Conditions</Link>.</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

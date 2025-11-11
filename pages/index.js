import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";
export default function Home(){
  return (
    <>
      <Header />
      <main className="section">
        <div className="container">
          <div className="card" style={{overflow:"hidden"}}>
            <div style={{display:"grid",gap:18,gridTemplateColumns:"1.1fr 1fr",alignItems:"center"}}>
              <div>
                <h1 style={{marginTop:0}}>Stop a Foreclosure or Auction — Fast, Clear Options</h1>
                <p className="small">We help you evaluate real choices, protect equity, and act quickly.</p>
                <p>
                  <Link className="btn" href="/options">See Your Options</Link>{" "}
                  <Link style={{marginLeft:10}} href="/contact">Contact Us</Link>
                </p>
              </div>
              <img alt="Hero" style={{width:"100%",borderRadius:12}} src="https://images.unsplash.com/photo-1604014237800-1c9102c4d1de?q=80&w=1200&auto=format&fit=crop"/>
            </div>
          </div>
          <div className="grid" style={{marginTop:18}}>
            <div className="card">
              <h3 style={{marginTop:0}}>What We Do</h3>
              <p className="small">From auction rescue to concierge sale and buyback paths, we keep timelines and paperwork simple.</p>
              <p><Link href="/services">Explore services →</Link></p>
            </div>
            <div className="card">
              <h3 style={{marginTop:0}}>Talk to a Real Person</h3>
              <p className="small">Call <a href="tel:+15712753720">(571) 275-3720</a> or email{" "}
                <a href="mailto:hello@barokgroup.org">hello@barokgroup.org</a>.</p>
              <p><Link href="/contact">Get in touch →</Link></p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

import Header from "../components/Header";
import Footer from "../components/Footer";
export default function Services(){
  return (
    <>
      <Header />
      <main className="section">
        <div className="container">
          <h1>What We Do</h1>
          <div className="grid grid-3">
            <div className="card"><h3>Situation Review</h3><p className="small">We review payoff, reinstatement, and title details to map real options quickly.</p></div>
            <div className="card"><h3>Timeline Management</h3><p className="small">We coordinate key dates to keep you protected.</p></div>
            <div className="card"><h3>Transaction Support</h3><p className="small">From offer through close, we keep communication simple with minimal paperwork.</p></div>
            <div className="card"><h3>Auction Rescue</h3><p className="small">When timelines are tight, we work urgently to stop or resolve auction risks.</p></div>
            <div className="card"><h3>2-Year Buyback Path</h3><p className="small">If you choose a buyback option, we support you with clear milestones and updates.</p></div>
            <div className="card"><h3>Nationwide Network</h3><p className="small">Licensed partners and local expertise across the U.S.</p></div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

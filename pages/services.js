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
            <div className="card"><h3>Situation Review</h3></div>
            <div className="card"><h3>Timeline Management</h3></div>
            <div className="card"><h3>Transaction Support</h3></div>
            <div className="card"><h3>Auction Rescue</h3></div>
            <div className="card"><h3>2-Year Buyback Path</h3></div>
            <div className="card"><h3>Nationwide Network</h3></div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

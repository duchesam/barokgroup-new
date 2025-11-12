import Header from "../components/Header";
import Footer from "../components/Footer";

export default function GetOffer(){
  return (
    <>
      <Header />
      <main className="section">
        <div className="container card" style={{maxWidth:"840px"}}>
          <h1 style={{marginTop:0}}>Get an Offer</h1>
          <p className="small">Email your address and a brief timeline to <a href="mailto:hello@barokgroup.org">hello@barokgroup.org</a> or call <a href="tel:+15712753720">(571) 275-3720</a>. We’ll respond quickly.</p>
        </div>
      </main>
      <Footer />
    </>
  );
}

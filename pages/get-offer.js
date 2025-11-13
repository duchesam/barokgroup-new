import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function GetOffer(){
  return (
    <>
      <Header />
      <main className="section">
        <div className="container card" style={{maxWidth:"900px"}}>
          <h1>Get a Cash Offer</h1>
          <p className="small">Email <a href="mailto:hello@barokgroup.org">hello@barokgroup.org</a> or call <a href="tel:+15712753720">(571) 275-3720</a> and we’ll confirm your timeline and next steps.</p>
        </div>
      </main>
      <Footer />
    </>
  );
}

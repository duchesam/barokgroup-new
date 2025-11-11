import Header from "../components/Header";
import Footer from "../components/Footer";
export default function Terms(){
  return (
    <>
      <Header />
      <main className="section">
        <div className="container card" style={{maxWidth:"900px"}}>
          <h1>Terms & Conditions</h1>
          <p className="small">This website provides educational information. Nothing here is legal, tax, or financial advice.</p>
          <p className="small">By contacting us at <a href="mailto:hello@barokgroup.org">hello@barokgroup.org</a> or <a href="tel:+15712753720">(571) 275-3720</a>, you consent to be contacted about your inquiry.</p>
        </div>
      </main>
      <Footer />
    </>
  );
}

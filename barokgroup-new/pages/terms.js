import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Terms(){
  return (
    <>
      <Header />
      <main className="section">
        <div className="container card">
          <h1 style={{marginTop:0}}>Terms & Conditions</h1>
          <p className="small">Information on this site is for educational purposes only and is not legal, tax, or financial advice. You should consult licensed professionals in your state.</p>
        </div>
      </main>
      <Footer />
    </>
  );
}

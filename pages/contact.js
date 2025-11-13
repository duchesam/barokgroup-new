import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Contact(){
  return (
    <>
      <Header />
      <main className="section">
        <div className="container card" style={{maxWidth:"900px"}}>
          <h1>Contact</h1>
          <p>We move fast and keep things simple.</p>
          <p><strong>Phone:</strong> <a href="tel:+15712753720">(571) 275-3720</a></p>
          <p><strong>Email:</strong> <a href="mailto:hello@barokgroup.org">hello@barokgroup.org</a></p>
          <p className="small">Barok Group — Nationwide foreclosure & auction solutions.</p>
        </div>
      </main>
      <Footer />
    </>
  );
}

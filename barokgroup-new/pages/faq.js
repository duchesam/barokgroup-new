import Header from "../components/Header";
import Footer from "../components/Footer";

export default function FAQ(){
  return (
    <>
      <Header />
      <main className="section">
        <div className="container">
          <h1>FAQ</h1>
          <div className="card"><h3 style={{marginTop:0}}>How fast can we move?</h3><p className="small">Cash closings in ~7–14 days; concierge listings usually ~30–45 days depending on market and title.</p></div>
          <div className="card"><h3 style={{marginTop:0}}>Do you charge fees?</h3><p className="small">No junk fees. We’ll show your net numbers clearly up front.</p></div>
          <div className="card"><h3 style={{marginTop:0}}>Is my info private?</h3><p className="small">Yes. We keep communication simple and discreet.</p></div>
        </div>
      </main>
      <Footer />
    </>
  );
}

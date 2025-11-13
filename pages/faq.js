import Header from "@/components/Header";
import Footer from "@/components/Footer";

const QA = [
  ["Can you stop an auction that’s within a week?", "Often, yes. Options depend on lender, state rules, and the reinstatement amount. Call us for a quick read."],
  ["Do I pay commissions or junk fees?", "No real-estate commissions. We’re transparent on closing costs and net to you before you sign anything."],
  ["Can I sell and stay (buyback path)?", "In some cases, yes. We use recorded documents and licensed title/escrow to keep it compliant and clear."],
  ["What info do you need to start?", "Address, loan servicer, reinstatement or payoff if available, auction date, and your preferred outcome."]
];

export default function FAQ(){
  return (
    <>
      <Header />
      <main className="section">
        <div className="container">
          <h1>FAQ</h1>
          <div className="list">
            {QA.map(([q,a],i)=>(
              <div className="card" key={i}>
                <h3 style={{marginTop:0}}>{q}</h3>
                <p className="small">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

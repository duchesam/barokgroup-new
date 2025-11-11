import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home(){
  return (
    <>
      <Header />
      <main className="section">
        <div className="container card">
          <h1>Barok Group</h1>
          <p>Nationwide foreclosure & auction solutions.</p>
          <p>
            Call <a href="tel:+15712753720">(571) 275-3720</a> ·
            Email <a href="mailto:hello@barokgroup.org">hello@barokgroup.org</a>
          </p>
          <p><Link href="/contact">Contact</Link> · <Link href="/options">Options</Link> · <Link href="/services">Services</Link></p>
        </div>
      </main>
      <Footer />
    </>
  );
}

import Link from "next/link";

export default function Header(){
  return (
    <header className="container">
      <nav className="nav">
        <div className="brand">Barok Group</div>
        <div className="links">
          <Link href="/">Home</Link>
          <Link href="/options">Options</Link>
          <Link href="/services">Services</Link>
          <Link href="/faq">FAQ</Link>
          <Link href="/contact">Contact</Link>
          <a className="btn cta" href="tel:+15712753720">Call (571) 275-3720</a>
        </div>
      </nav>
    </header>
  );
}

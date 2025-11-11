import Link from "next/link";
export default function Header(){
  return (
    <header className="nav">
      <nav className="container">
        <Link href="/">Barok Group</Link>
        <div className="spacer"/>
        <Link href="/services">Services</Link>
        <Link href="/options">Options</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
}

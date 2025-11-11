export default function Footer(){
  return (
    <footer className="footer">
      <div className="container small">
        © {new Date().getFullYear()} Barok Group. All rights reserved. ·
        <a href="mailto:hello@barokgroup.org" style={{marginLeft:8}}>hello@barokgroup.org</a>
      </div>
    </footer>
  );
}

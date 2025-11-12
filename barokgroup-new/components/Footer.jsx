export default function Footer(){
  return (
    <footer className="footer">
      <div className="container small">
        <div>© {new Date().getFullYear()} Barok Group. All rights reserved.</div>
        <div>
          <a href="mailto:hello@barokgroup.org" style={{marginLeft:8}}>hello@barokgroup.org</a>
        </div>
      </div>
    </footer>
  );
}

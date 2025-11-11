export default function Footer(){
  return (
    <footer>
      <div className="container">
        <div className="small">
          © {new Date().getFullYear()} Barok Group. All rights reserved. ·{" "}
          <a href="mailto:hello@barokgroup.org">hello@barokgroup.org</a> ·{" "}
          <a href="tel:+15712753720">(571) 275-3720</a>
        </div>
      </div>
    </footer>
  );
}

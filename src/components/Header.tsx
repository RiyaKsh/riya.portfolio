import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ME } from "../site/siteEngine";

const LINKS: [string, string][] = [["/", "Home"], ["/about", "About"], ["/work", "Work"], ["/contact", "Contact"]];
const isCurrent = (to: string, p: string) =>
  to === "/work" ? /^\/(work|design|engineering|content|marketing)/.test(p) : to === p;
const clockText = () =>
  new Date().toLocaleString([], { weekday: "short", hour: "numeric", minute: "2-digit" });

export default function Header() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const [clock, setClock] = useState(clockText());

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    const id = setInterval(() => setClock(clockText()), 30000);
    return () => clearInterval(id);
  }, []);

  return (
    <header className={"mb" + (open ? " open" : "")}>
      <button className="mnu" aria-label="Menu" aria-expanded={open} onClick={() => setOpen((o) => !o)}>☰</button>
      <Link className="wm" to="/"><b>{ME.name}</b><i className="dot" /><small>open to collabs</small></Link>
      <nav id="links" aria-label="Main">
        {LINKS.map(([to, label]) => (
          <Link key={to} to={to} className={isCurrent(to, pathname) ? "cur" : ""}>{label}</Link>
        ))}
      </nav>
      <div className="rt">
        <span id="soc">
          {ME.socials.map((s: string[]) => (
            <a key={s[0]} href={s[1] && s[1] !== "#" ? s[1] : "#/contact"} aria-label={s[0]}>{s[0].slice(0, 2).toLowerCase()}</a>
          ))}
        </span>
        <span id="clk" className="mono">{clock}</span>
      </div>
    </header>
  );
}

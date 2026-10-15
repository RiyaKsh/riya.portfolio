import { useLayoutEffect, useMemo } from "react";
import { P, dragInit } from "../site/siteEngine";

const w = window as any;

const bodyClass = (k: string) =>
  k.indexOf("/design") === 0 ? "p-design"
  : k.indexOf("/engineering") === 0 ? "p-eng"
  : k.indexOf("/marketing") === 0 ? "p-mk"
  : k === "/content" ? "p-con" : "";

/** Renders one page template from siteEngine and wires up page-level behaviour. */
export default function PageView({ path }: { path: string }) {
  const k = P[path] ? path : "/";
  // remember the design canvas scroll position before the next page replaces it
  if (w._pk === "/design" && k !== "/design") w._ds = window.scrollY;
  const html = useMemo(() => P[k](), [k]);

  useLayoutEffect(() => {
    document.body.className = bodyClass(k);
    document.title = k === "/" ? "Riya — one girl, too many tabs open" : "Riya — " + k.slice(1).replace("/", " · ");
    const back = k === "/design" && (w._pk || "").indexOf("/design/") === 0;
    window.scrollTo(0, back ? w._ds || 0 : 0);
    w._pk = k;
    if (k === "/") dragInit();
    const io = new IntersectionObserver(
      (e) => e.forEach((x) => x.isIntersecting && x.target.classList.add("in")),
      { threshold: 0.1 }
    );
    document.querySelectorAll("#app .rv").forEach((x) => io.observe(x));
    return () => io.disconnect();
  }, [k]);

  return <main id="app" dangerouslySetInnerHTML={{ __html: html }} />;
}

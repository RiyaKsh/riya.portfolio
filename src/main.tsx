import { createRoot } from "react-dom/client";
import App from "./App";
import { validateContent } from "./content/validate";
import "./styles/styles.css";

// In development, print content mistakes (missing alt text, bad URLs, duplicate ids...) to the console.
if (import.meta.env.DEV) validateContent();

createRoot(document.getElementById("root")!).render(<App />);

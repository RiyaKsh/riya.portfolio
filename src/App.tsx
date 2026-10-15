import { HashRouter, Routes, Route, useParams } from "react-router-dom";
import Header from "./components/Header";
import PageView from "./components/PageView";

const Page = ({ path }: { path: string }) => <PageView path={path} />;
const Case = ({ base }: { base: string }) => {
  const { id } = useParams();
  return <PageView path={`${base}/${id}`} />;
};

export default function App() {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Page path="/" />} />
        <Route path="/about" element={<Page path="/about" />} />
        <Route path="/work" element={<Page path="/work" />} />
        <Route path="/contact" element={<Page path="/contact" />} />
        <Route path="/design" element={<Page path="/design" />} />
        <Route path="/design/:id" element={<Case base="/design" />} />
        <Route path="/engineering" element={<Page path="/engineering" />} />
        <Route path="/engineering/:id" element={<Case base="/engineering" />} />
        <Route path="/content" element={<Page path="/content" />} />
        <Route path="/marketing" element={<Page path="/marketing" />} />
        <Route path="/marketing/:id" element={<Case base="/marketing" />} />
        <Route path="*" element={<Page path="/" />} />
      </Routes>
    </HashRouter>
  );
}

import  { lazy } from 'react';
import { createRoot } from "react-dom/client";

const App = lazy(() => import('./components/App'));
const container = document.getElementById("root");
const root = createRoot(container!);
root.render(<App />);

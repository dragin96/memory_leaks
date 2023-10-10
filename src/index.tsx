import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import Analitic from "./page/Analitic";
import {Menu} from "./page/Blank";
import RickAndMorty from "./page/rickAndMorty";
import ManyRequest from "./page/manyRequest/manyRequest";
import ManyRequest2 from "./page/manyRequest/manyRequest2";
import EventResize from "./page/evenResize";
import {Fib} from "./page/fib";
// ... (other imports)

const App = () => (
    <Router initialEntries={['/memory_leaks']} initialIndex={0}>
        <Routes>
            <Route path="/" element={<Menu />} />
            <Route path="/analytics" element={<Analitic />} />
            <Route path="/listener" element={<RickAndMorty />} />
            <Route path="/manyRequest" element={<ManyRequest />} />
            <Route path="/manyRequest2" element={<ManyRequest2 />} />
            <Route path="/eventResize" element={<EventResize />} />
            <Route path="/fib" element={<Fib />} />
        </Routes>
    </Router>
);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(<App />);

import {DisplayTodoList} from "./components/DisplayTodoList.tsx";
import {Routes,Route} from "react-router-dom";
import {Detail} from "./components/Detail.tsx";

function App() {
    return (
        <Routes>
                <Route path="/" index element={<DisplayTodoList />} />
                <Route path="/todo/:id" element={<Detail />} />
                {/*<Route path="dashboard" element={<Dashboard />} />*/}

                {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
                {/*<Route path="*" element={<NoMatch />} />*/}

        </Routes>
    )
}

export default App

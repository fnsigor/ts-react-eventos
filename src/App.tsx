import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import './styles/globals.css'

function App() {
    return (
        <div id="App">
            <Header />
            <main>
                <Outlet />
            </main>
        </div>
    );
}

export default App;

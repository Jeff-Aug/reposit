import {BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Repositorio from "./pages/Repositorio";

export default function Routas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Main/>} />
                <Route exact path="/repos" element={<Repositorio/>} />
            </Routes>
        </BrowserRouter>
    )
}
import React from "react";
import Home from "./Home.js";
import News from "./News.js";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard.js";
import MyPatients from "./MyPatients.js";
export default class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Routes>
                        <Route path="/" element={<MyPatients />} />
                        <Route path="/news" element={<News />} />
                    </Routes>
                </div>
            </BrowserRouter>
        );
    }
}

const rootElement = ReactDOM.createRoot(document.getElementById("root"));;
rootElement.render(<App />);
// Import necessary libraries
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Homepage from "./pages/Homepage";
import Layout from "./components/Layout/Layout";
import Cart from "./pages/Cart";
import Likes from "./pages/Likes";
import {ViewModeProvider} from "./components/Context/ViewModeContext";

function App() {
    return (
        <Router>
            <ViewModeProvider>
                <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route index path="/" element={<Homepage/>}/>
                        <Route path="cart" element={<Cart/>}/>
                        <Route path="likes" element={<Likes/>}/>
                    </Route>
                </Routes>
            </ViewModeProvider>
        </Router>

    );
}

export default App;

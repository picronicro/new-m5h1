import React from 'react';
import {Route, Routes} from "react-router-dom";
import Layout from "./components/Layout";
import "./App.css"
import PostsPage from "./pages/PostsPage";
import FormPage from "./pages/FormPage";

function App(props) {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<PostsPage />}/>
                    <Route path="form" element={<FormPage />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
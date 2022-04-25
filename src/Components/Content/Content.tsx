import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Profile} from "./Profile/Profile";
import {Messages} from "./Messages/Messages";
import {News} from "./News/News";
import {Music} from "./Music/Music";
import {Settings} from "./Settings/Settings";

export const Content = () => {
    return (
            <Routes>
                <Route path='/Profile' element={<Profile/>}/>
                <Route path='/Messages' element={<Messages/>}/>
                <Route path='/News' element={<News/>}/>
                <Route path='/Music' element={<Music/>}/>
                <Route path='/Settings' element={<Settings/>}/>
            </Routes>
    );
};

